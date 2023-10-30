// Booking example from before
// or ...
function doEverything(data, user) {
    // Validate data
    if (!data) return;

    // Filter data based on user role
    const filteredData = data.filter(item => item.role === user.role);

    // Process data
    const processedData = process(filteredData);

    // Save data to database
    saveToDatabase(processedData);

    // Log transaction
    logTransaction(user, processedData);
    // ... and so on
}