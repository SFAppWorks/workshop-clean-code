async function create(booking, user, options) {
    try {
        if (parseInt(process.env.GUESTY_UPDATE_WRITE_DATA_ON_SYNC || '0') === 1) {
            const listingDetails = await this.guestyService.getListingDetails(
                booking.reservationDetails.listingId,
                booking.reservationDetails.checkin,
                booking.reservationDetails.checkout
            );

            const calendars = await this.guestyService.getCalendarsForListings(
                [booking.reservationDetails.listingId],
                booking.reservationDetails.checkin,
                booking.reservationDetails.checkout
            );

            const calendarsForNights = calendars.filter(
                calendar => calendar.date !== booking.reservationDetails.checkout
            );

            let couponTotalUsages = { count: 0 };
            let couponUsagesForUser = { count: 0 };

            if (booking.reservationDetails.coupon) {
                couponTotalUsages = await this.count({
                    'reservationDetails.coupon': booking.reservationDetails.coupon,
                });

                couponUsagesForUser = await this.count({
                    'reservationDetails.coupon': booking.reservationDetails.coupon,
                    'userId': user.id,
                });
            }

            const details = await this.pricingDetailsService.getPricingDetails(
                listingDetails,
                calendarsForNights,
                booking.reservationDetails.checkin,
                booking.reservationDetails.checkout,
                booking.reservationDetails.guests,
                booking.reservationDetails.coupon,
                couponTotalUsages.count,
                couponUsagesForUser.count
            );

            const paymentSchedule = this.paymentService.getPaymentSchedule(
                booking.reservationDetails.checkin,
                booking.reservationDetails.checkout,
                details,
                listingDetails
            );

            const currency = Object.keys(this.pricingDetailsService.currencyMapping).find(
                key => this.pricingDetailsService.currencyMapping[key] === details.currency
            );

            const existingPaymentMethod = await this.getPaymentMethodForUser(
                user,
                booking.stripePaymentMethod,
                listingDetails ? listingDetails.paymentProviderId : null
            );

            booking.userId = user.id;

            let accommodationFare = 0;
            Object.keys(details.pricePerNight).forEach(value => {
                const intValue = parseInt(value, 10);
                accommodationFare += intValue * details.pricePerNight[value].length;
            });

            booking.reservationDetails.coupon = details.couponDiscountValue
                ? booking.reservationDetails.coupon
                : '';

            booking.guestyReservation = await this.createGuestyReservationForBooking(
                booking,
                user,
                accommodationFare,
                details,
                booking.reservationDetails.coupon,
                currency
            );

            if (user.vouchedVerification && booking.guestyReservation.id) {
                await this.guestyService.updateReservation(
                    booking.guestyReservation.id.toString(),
                    {
                        customFields: {
                            fieldId: process.env.GUESTY_CUSTOM_FIELD_ID_RECEIVED,
                            value: true,
                        },
                    }
                );
            }

            booking.exposedBookingDetails = this.getExposedBookingDetails(
                listingDetails,
                details,
                booking
            );
            booking.paymentSchedule = paymentSchedule;

            const newlyCreatedBooking = await super.create(booking, options);
            this.mailchimpService.sendBookingConfirmationEmail(user, newlyCreatedBooking);

            return newlyCreatedBooking;
        } else {
            return {};
        }
    } catch (error) {
        throw new Error(error);
    }
}