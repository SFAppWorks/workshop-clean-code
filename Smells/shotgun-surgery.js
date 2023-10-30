console.log(`${new Date().getTime()} - here`)
console.log(`${new Date().getTime()} - there`)
console.log(`${new Date().getTime()} - everywhere`)
// hundreds and hundreds of console.logs in my code
// ... now go and change the format of the log, instead of a timestamp, i want HH:mm:ss...


// Create a centralized Logger class that all other classes use for logging
class Logger {
    log(message) {
        console.log(`${new Date().getTime()} - ${message}`)
    }
}