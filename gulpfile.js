var devBuild = (process.env.NODE_ENV !== 'production'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  babel = require('gulp-babel'),
  concatCss = require('gulp-concat-css'),
  uglifycss = require('gulp-uglifycss'),

  jshint = require('gulp-jshint');


var folder = {
    src: 'app/src/',
    build: 'app/assets/'
  };


// JavaScript processing
gulp.task('js', ['depjs'], function() {
/*
  var jsbuild = gulp.src([
    folder.src + 'js/*',
    '!' + folder.src + 'js/router.js'
  ])
    .pipe(ngmin())
    .pipe(deporder())
    .pipe(concat('main.js'));

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify({ mangle: false }));
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
  */
});

gulp.task('depjs', function(){
  var depjsbuild = gulp.src([
    "node_modules/angular/angular.js",
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
      "app/angular-3d-carousel.js",
      "node_modules/angularjs-slider/dist/rzslider.js",
      "node_modules/restangular/dist/restangular.js",
      "node_modules/angular-ui-mask/dist/mask.js",
      "app/router.js",
      "app/New_Game_Wizard/new_game.js",
      "app/New_Game_Wizard/Start/Start-teamSelect.js",
      "app/formly_templates/formly_templates.js",
      "app/New_Game_Wizard/Start/Start-career.js",
      "app/New_Game_Wizard/Start/Start-career2.js",
      "app/New_Game_Wizard/Start/Start-career3.js"
  ])
    //.pipe(deporder())
    .pipe(ngAnnotate())
    .pipe(concat('node_modules_dependencies.js'));

  if (!devBuild) {
    depjsbuild = depjsbuild
      //.pipe(stripdebug())
      //.pipe(uglify({ mangle: false }));
  }

  return depjsbuild.pipe(gulp.dest(folder.build + 'js/'));
})

// CSS processing
gulp.task('css', function () {
  return gulp.src(folder.src + 'css/**/*')
    .pipe(concatCss("bundle.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(folder.build + 'css/'));
});

// dep CSS
gulp.task('depcss', function () {
  return gulp.src([
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/nya-bootstrap-select/dist/css/nya-bs-select.css',
    'node_modules/normalize.css/normalize.css',
    'node_modules/angularjs-slider/dist/rzslider.css'
  ])
    .pipe(concatCss("node_modules_bundle.css"))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest(folder.build + 'css/'));
});


/* watch for changes */
gulp.task('watch', function() {

  /* javascript changes*/
  gulp.watch(folder.src + 'js/**/*', ['js']);

  /* css changes*/
  gulp.watch(folder.src + 'css/**/*', ['css']);

});

/* default task*/
gulp.task('default', ['run', 'watch']);

gulp.task('run', ['css', 'js', 'depjs', 'depcss']);
