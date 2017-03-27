var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("Gulp task running");
})

gulp.task('html', function(){
  console.log("something happening to the index.html file")
})

gulp.task('styles', function(){
  console.log("Imagine SASS or PostCSS tasks running.")
})

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  })

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  })

})
