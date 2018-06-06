import gulp from 'gulp'
import del from 'del'
import args from './utls/args'

gulp.task('clean', () => {
  return del(['server/public', 'server/views'])
})
