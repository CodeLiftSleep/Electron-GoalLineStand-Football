var devBuild = (process.env.NODE_ENV !== 'production'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  htmlmin = require('gulp-htmlmin'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  concatCss = require('gulp-concat-css'),
  uglifycss = require('gulp-uglifycss'),
  jshint = require('gulp-jshint');


var folder = {
    src: 'app/src/',
    build: 'app/assets/'
  };

gulp.task('html', function(){
  gulp.src([
    'app/src/html/**/*'
  ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(folder.build + 'html/'))
});

gulp.task('js', function(){
  var depjsbuild = gulp.src([
    "node_modules/api-check/dist/api-check.js",
    "node_modules/angular/angular.js",
    "node_modules/d3/build/d3.min.js",
    "node_modules/angular-animate/angular-animate.js",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
    "node_modules/angular-formly/dist/formly.js",
    "node_modules/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js",
    "node_modules/angular-ui-router/release/angular-ui-router.js",
    "node_modules/angular-messages/angular-messages.js",
    "node_modules/bootstrap/dist/js/bootstrap.js",
    "node_modules/nya-bootstrap-select/dist/js/nya-bs-select.js",
    "node_modules/ngstorage/ngStorage.js",
    "node_modules/angular-ui-grid/ui-grid.js",
    "node_modules/lodash/lodash.js",
    "app/src/js/angular-3d-carousel.js",
    "node_modules/angularjs-slider/dist/rzslider.js",
    "node_modules/restangular/dist/restangular.js",
    "node_modules/angular-ui-mask/dist/mask.js",
    "app/src/js/router.js",
    "app/src/js/new_game_wizard/new_game.js",
    "app/src/js/new_game_wizard/Start-teamSelect.js",
    "app/src/js/formly_templates/formly_templates.js",
    "app/src/js/new_game_wizard/Start-career.js",
    "app/src/js/new_game_wizard/Start-career2.js",
    "app/src/js/new_game_wizard/Start-career3.js",
    "app/src/js/libs/*.js",
    "app/src/js/main.js"
  ])
    .pipe(deporder())
    .pipe(ngAnnotate())
    .pipe(concat('bundle.js'));

  if (!devBuild) {
    depjsbuild = depjsbuild
      .pipe(stripdebug())
      .pipe(uglify());
  }

  return depjsbuild.pipe(gulp.dest(folder.build + 'js/'));
});

gulp.task('jquery', function () {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(folder.build + 'js/libs/'))

})

// CSS processing
gulp.task('css', function () {
  return gulp.src([
    'app/src/css/**/*',
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/nya-bootstrap-select/dist/css/nya-bs-select.css',
    'node_modules/normalize.css/normalize.css',
    'node_modules/angularjs-slider/dist/rzslider.css',
    'node_modules/css-toggle-switch/dist/toggle-switch.css',
    'node_modules/angular-ui-grid/ui-grid.min.css'
  ])
    .pipe(concatCss("bundle.css"))
    .pipe(uglifycss())
    .pipe(gulp.dest(folder.build + 'css/'));
});

//fonts
gulp.task('fonts', function(){
  return gulp.src([
    folder.src + 'fonts/*'
  ])
    .pipe(gulp.dest(folder.build + 'fonts/'))
})

//data
gulp.task('data', function(){
  return gulp.src([
    folder.src + 'data/*'
  ])
    .pipe(gulp.dest(folder.build + 'data/'))
})

//img
gulp.task('img', function(){
  return gulp.src([
    folder.src + 'img/**/*'
  ])
    .pipe(gulp.dest(folder.build + 'img/'))
})

/* watch for changes */
gulp.task('watch', function() {

  gulp.watch(folder.src + 'html/**/*', ['html']);
  gulp.watch(folder.src + 'js/**/*', ['js']);
  gulp.watch(folder.src + 'css/**/*', ['css']);
  gulp.watch(folder.src + 'fonts/**/*', ['fonts']);
  gulp.watch(folder.src + 'img/**/*', ['img']);
  gulp.watch(folder.src + 'data/**/*', ['data']);

});

/* default task*/
gulp.task('default', ['run', 'watch']);

gulp.task('run', ['html','css', 'js', 'fonts', 'img', 'data', 'jquery']);
