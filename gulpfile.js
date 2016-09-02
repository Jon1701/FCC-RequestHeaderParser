'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-stream');

// Paths.
var srcPath = './src/';
var destPath = './dist/';
var modulesPath = './node_modules/';

// Move datasets.
gulp.task('moveData', function() {
  gulp.src(srcPath + 'data/**/*.json')
      .pipe(gulp.dest(destPath + 'data/'));
});

// Move HTML files.
gulp.task('moveHtml', function() {
  gulp.src(srcPath + '*.html')
      .pipe(gulp.dest(destPath));
});

// Compile SASS and move CSS.
gulp.task('moveStyles', function() {
  gulp.src(srcPath + 'css/**/*.scss')
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest(destPath + 'css/'));
});

// Process JSX.
gulp.task('processJsx', function() {
  gulp.src(srcPath + 'js/index.jsx')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest(destPath + 'js/'));
});

// Watch Task.
gulp.task("watch", function() {
  gulp.watch(srcPath + 'javascript/**/*.jsx', ['processJsx']); // JSX files.
  gulp.watch(srcPath + "css/**/*.scss", ["moveStyles"]); // SASS Main.
  gulp.watch(srcPath + "css/**/_*.scss", ["moveStyles"]); // SASS Partials.
  gulp.watch(srcPath + "*.html", ["moveHtml"]); // HTML files.
});

// Run server.
gulp.task('server', function() {
  nodemon({
    script: './server.js'
  });
});

gulp.task('default', ['server', 'watch', 'moveData', 'moveHtml', 'moveStyles', 'processJsx']);
