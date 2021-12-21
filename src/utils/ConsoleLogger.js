class ConsoleLogger {
    error(...args) {
        console.error('[ERROR]', ...args);
    }

    warn(...args) {
        console.warn('[WARN]', ...args);
    }

    debug(...args) {
        if (process.env.DEBUG) {
            console.debug('[DEBUG]', ...args);
        }
    }
}

export default new ConsoleLogger();
