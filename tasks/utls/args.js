import yargs from 'yargs';
const args = yargs
  .option('production', {
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })

  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })

  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log 是否输出命令行执行日志'
  })

  .option('sourcemaps', {
    desctipe: 'force the creation of sourcemaps'
  })

  .option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv

  export default args
