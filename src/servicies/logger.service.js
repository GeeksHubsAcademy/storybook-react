
  const noFn =function(...args){
    // alert('no log')
    return args

  };
  const _console = {
    assert: noFn,
    clear: noFn,
    context: noFn,
    count: noFn,
    countReset: noFn,
    debug: noFn,
    dir: noFn,
    dirxml: noFn,
    error: noFn,
    group: noFn,
    groupCollapsed: noFn,
    groupEnd: noFn,
    info: noFn,
    log: noFn,
    profile: noFn,
    profileEnd: noFn,
    table: noFn,
    time: noFn,
    timeEnd: noFn,
    timeLog: noFn,
    timeStamp: noFn,
    trace: noFn,
    warn: noFn,
  };
  // console.log(window.console);
  // window.console = _console;
  // console  = _console;

  // class Logger {
  //   constructor() {
  //     if (process.env.NODE_ENV === 'production') {
  //       this = {
  //         ...this,
  //         ..._console
  //       };
  //     } else {
  //        this = {
  //         ...this,
  //         ...console
  //       };
  //     }
  //   }
  // }
  const NODE_ENV = process.env.NODE_ENV || 'development';
  // const NODE_ENV = 'production';

  export default NODE_ENV === 'production'
    ? _console
    : console;
