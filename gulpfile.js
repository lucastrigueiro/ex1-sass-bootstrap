'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
//Realiza a conversão de sass para css
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//Realiza a conversão de sass para css comprimido
gulp.task('sass-comp', function () {
 return gulp.src('./sass/**/*.sass')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

//Observa a atualização de arquivos sass e então realiza as conversões
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass-comp']);
});

//Realiza as conversões incialmente e observa atualizações
gulp.task('default', ['sass-comp', 'sass:watch']);