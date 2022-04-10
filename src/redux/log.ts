const log: (message: any, ...args: any) => void = (message, ...args) => {
    if (process.env.NODE_ENV === "development") {
        console.log("[Redux]", message, ...args);
    }
};

export default log;
