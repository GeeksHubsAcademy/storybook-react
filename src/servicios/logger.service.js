class Logger {
  constructor() {
    this.logsDone = 0;
    if (process.env.NODE_ENV === 'production') {
      this.console = { log: () => {} };
    } else {
      this.console = console;
    }
  }

  log(...args) {
    this.logsDone++;
    this.console.log(...args);
    return args;
  }

  howManyLogs() {
    return this.logsDone;
  }
}

export default new Logger();

// export default {
//   logsDone: 0,
//   console: process.env.NODE_ENV === 'PRODUCTION' ? { log: () => {} } : console,
//   log(...args) {
//     this.logsDone++;
//     this.console.log(...args);
//     return args;
//   },

//   howManyLogs() {
//     return this.logsDone;
//   },
// };
