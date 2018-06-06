import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './utls/args'

gulp.task('serve', (cb) => {
  if (!args.watch) return cb()

  var server = liveserver.new(['--harmony', 'server/bin/www'])
  server.start()
  // 监听文件变化，重新加载文件
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
    server.notify.apply(server, [file])
  })
  // 监听文件变化，重启服务器
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function () {
    server.start.bind(server)()
  })
})
