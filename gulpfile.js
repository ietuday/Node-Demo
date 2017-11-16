var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");

//task

gulp.task('minify-html', function () {
gulp.src('./views/*.html') // path to html files
.pipe(minifyHtml())
.pipe(gulp.dest('./dist/views'));
});

// The differences between Grunt and Gulp are given below:

// Grunt
// Configuration over code
// File based
// 5600+ Packages
// Widely used
//
//                           Gulp
//                           Code over Configuration
//                           Stream based
//                           2300+ Package
//                           Rising rapidly

// How Grunt and Gulp deal with Task Automation?

// The Grunt and Gulp deal with task automation differently. Grunt uses temp files while Gulp uses Node
// streams to perform task automation. The disk writes are slow as compared to in-memory operations; it means
// that Gulp is faster than Grunt.

// Grunt Task Automation Workflow
// Grunt perform the task automation by creating temporary files which are disk I/O operations. In Grunt, to run two
// tasks on a group of files you need to configure an input and output for each task which result into two separate
// write to the disk

// Gulp Task Automation Workflow
// Gulp uses Node streams to group tasks together and process them sequentially in memory. In Gulp, to run two
// tasks on a group of files, Gulp requires only one write to the disk
