const noFn = function(...args) {
  return args;
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
const NODE_ENV = process.env.NODE_ENV || 'development';
// const NODE_ENV = 'production';
if (NODE_ENV === 'production') {
  console = _console;
  // global.console = _console;
}
export default console;
