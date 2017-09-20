var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin')
  ,clean = require('gulp-clean')
  ,concat = require('gulp-concat')
  ,htmlReplace = require('gulp-html-replace')
  ,uglify = require('gulp-uglify')
  ,usemin = require('gulp-usemin')
  ,cssmin = require('gulp-cssmin')
  ,browserSync = require('browser-sync').create()
  ,jshint = require('gulp-jshint')
  ,jshintStylish = require('jshint-stylish')
  ,csslint = require('gulp-csslint')
  ,autoprefixer = require('gulp-autoprefixer')
  ,sass = require('gulp-sass');


gulp.task('deploy', [ 'copy' ], function() {
	gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
	return gulp.src('src/**/*')
    .pipe(cssmin())
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('build-img', function() {

  return gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [autoprefixer]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {  
  /* gulp.src('src/sass/**/ /*.scss')
  .pipe(sass({includePaths: ['scss']}).on('error', function(erro) {
  console.log('SAAS, erro compilação: ' + erro.filename);
  console.log(erro.message);
  }))
  .pipe(gulp.dest('src/css'));
  */
  var stream = gulp.src('src/sass/**/*.scss')
  .pipe(sass().on('error', function(erro) {
    console.log('SAAS, erro compilação: ' + erro.filename);
    console.log(erro.message);
  }))
  .pipe(gulp.dest('src/css'));
});

gulp.task('server', ['sass'],  function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });
    

    gulp.watch('src/sass/**/*.scss').on('change', function(event) {
      var stream = gulp.src(event.path)
      .pipe(sass().on('error', function(erro) {
        console.log('SAAS, erro compilação: ' + erro.filename);
        console.log(erro.message);
      }))

      .pipe(gulp.dest('src/css'));
    });     


});
