


const consoleLog = (...log) => {
    
    if (
        process.env.NODE_ENV !== "production" &&
        process.env.NODE_ENV !== "test"
    ) {
        console.log(...log)
    }
}

export {
    consoleLog
}