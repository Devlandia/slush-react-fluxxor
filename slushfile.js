/*
 * slush-react-fluxxor
 * https://github.com/pedromartos/slush-react-fluxxor
 *
 * Copyright (c) 2015, Pedro Martos
 * Licensed under the MIT license.
 */

'use strict';

var gulp      = require('gulp'),
    conflict  = require('gulp-conflict'),
    install   = require('gulp-install'),
    rename    = require('gulp-rename'),
    template  = require('gulp-template'),
    inquirer  = require('inquirer'),
    mkdirp    = require('mkdirp'),
    _         = require('underscore.string');

gulp.task('default', function (done) {
  inquirer.prompt([
    { type: 'input', name: 'name', message: 'Application name?', default: gulp.args.join(' ')},
    { type: 'confirm', name: 'moveon', message: 'Continue?'}
  ],
  function (answers) {
    if (!answers.moveon) {
      return done();
    }
    answers.appNameSlug = _.slugify(answers.appName);
    gulp.src(__dirname + '/templates/**')
    .pipe(template(answers))
    .pipe(rename(function (file) {
      if (file.basename[0] === '_') {
        file.basename = '.' + file.basename.slice(1);
      }
    }))
    .pipe(conflict('./'))
    .pipe(gulp.dest('./'))
    .pipe(install())
    .on('end', function () {
      done();
    });
  });
});