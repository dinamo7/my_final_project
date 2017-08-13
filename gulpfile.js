var gulp = require("gulp");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var sync = require("browser-sync");
var htmlExtend = require("gulp-html-extend");
var concat = require("gulp-concat");

gulp.task("css:main", function () {
   return gulp.src("src/style/main.less")
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(cssnano())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("dist/css"))
       .pipe(sync.stream());
});

gulp.task("css:bootstrap" ,["css:main"], function () {
   return  gulp.src([
       "node_modules/bootstrap/dist/css/bootstrap.min.css",
       "dist/css/main.css"
   ])
       .pipe(concat("main.css"))
       .pipe(gulp.dest("dist/css"))
});

gulp.task("html", function () {
    return gulp.src("src/pages/*.html")
        .pipe(htmlExtend())
        .pipe(gulp.dest("dist"))
});

gulp.task("all",["html", "css:bootstrap"]);// ??? ["html", "css:bootstrap", "css:main"]

gulp.task("default", ["all"]);