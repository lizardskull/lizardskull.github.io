/**
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// Include Gulp & Tools We'll Use
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;

// Lint JavaScript
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var globART = require('globART');


var paths = {
 scripts: ['app/**/*'],
 dist: ['gator/']
};

gulp.task('moveToMaster', function(){
 gulp.src( paths.scripts )
 .pipe(gulp.dest(paths.dist));
});
 
gulp.task('ify', function() {
    return browserify('./app/globs/src.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('globulus.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./app/globs/'));
});


gulp.task('jshint', function () {
  //return gulp.src('app/scripts/**/*.js')
  //  .pipe(reload({stream: true, once: true}))
  //  .pipe($.jshint())
  //  .pipe($.jshint.reporter('jshint-stylish'))
  // .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}));
});

// Automatically Prefix CSS
gulp.task('styles:css', function () {
  return gulp.src('app/styles/**/*.css')
    .pipe($.changed('app/styles'))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('app/styles'))
    .pipe($.size({title: 'styles:css'}));
});

// Compile Sass For Style Guide Components (app/styles/components)
gulp.task('styles:components', function () {
  return gulp.src('app/styles/components/components.scss')
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['app/styles/components']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('app/styles/components'))
    .pipe($.size({title: 'styles:components'}));
});

// Compile Any Other Sass Files You Added (app/styles)
gulp.task('styles:scss', function () {
  return gulp.src(['app/styles/**/*.scss', '!app/styles/components/components.scss'])
    .pipe($.rubySass({
      style: 'expanded',
      precision: 10,
      loadPath: ['app/styles']
    }))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size({title: 'styles:scss'}));
});

// Output Final CSS Styles
gulp.task('styles', ['styles:components', 'styles:scss', 'styles:css']);

// Scan Your HTML For Assets & Optimize Them
gulp.task('html', function () {
  return gulp.src('app/**/*.html')
    .pipe($.useref.assets({searchPath: '{.tmp,app}'}))
    // Concatenate And Minify JavaScript
    .pipe($.if('*.js', $.uglify({preserveComments: 'some'})))
    // Concatenate And Minify Styles
    .pipe($.if('*.css', $.csso()))
    // Remove Any Unused CSS
    // Note: If not using the Style Guide, you can delete it from
    // the next line to only include styles your project uses.
    .pipe($.if('*.css', $.uncss({ html: ['app/index.html','app/styleguide/index.html'] })))
    .pipe($.useref.restore())
    .pipe($.useref())
    // Update Production Style Guide Paths
    .pipe($.replace('components/components.css', 'components/main.min.css'))
    // Minify Any HTML
    .pipe($.minifyHtml())
    // Output Files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Clean Output Directory
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

var clean = require('gulp-clean');

gulp.task('cleanMaster', function() {
  return gulp.src(['../master/*'], {read: false}).pipe(clean( {force: true} ));
});

// Watch Files For Changes & Reload
gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: ['.tmp', 'app']
    }
  });


 createGame();


  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.scss'], ['styles:components', 'styles:scss']);
  gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', reload]);
  gulp.watch(['app/scripts/**/*.js'], restartGame );
  gulp.watch(['app/globs/**/*.js'], restartGame );
  gulp.watch(['app/images/**/*'], reload);
});

gulp.task('art', function() {
   console.log( " ART!!!");
   globART();

});


gulp.task('artify',['art'], function(){
   console.log( " ARTify!!!");
});


var updateAssets = function(){

}


var restartGame = function(){
  console.log("JavaScript has changed:: Restart the Game");
  createGame();
 
};

var createGame = function(){
  console.log("JavaScript has changed:: Creating the Game");
  browserify('./app/globs/src.js').bundle( null, createGameComplete ).pipe(source('globulus.js')).pipe(gulp.dest('./app/globs/')); 
};

var createGameComplete = function(){
  console.log("Create Game Complete ");
  reload();
}

// Build Production Files, the Default Task
gulp.task('default', ['clean'], function (cb) {
  runSequence('styles', ['jshint', 'html', 'images', 'cleanMaster', 'moveToMaster'], cb);
});

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://example.com',
  strategy: 'mobile'
}));

// Load custom tasks from the `tasks` directory
try { require('require-dir')('tasks'); } catch (err) {}
