modules.exports = function (data) {
    return {
        subject: `${data.name} has just cancelled their application`,
        text: `${data.name} has just responded with No on the terms and agreement page 
                    and has chosen to cancel their application.
                    You can contact ${data.name} at ${data.email}.`,
        template: 'cancelled',
        cc: 'sales@poorman.com',
        recipient: data.recipient
    }
}