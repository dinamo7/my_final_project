var gulp = require("gulp");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var sourcemaps = require("gulp-sourcemaps");
var sync = require("browser-sync").create();
var htmlExtend = require("gulp-html-extend");
var concat = require("gulp-concat");
var imgmin = require("gulp-imagemin");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var fontmin = require("gulp-fontmin");
var json = require("gulp-json");

gulp.task("css:main", function () {
   return gulp.src("src/style/main.less")
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(cssnano())
       .pipe(rename("main.min.css"))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("dist/css"))
       .pipe(sync.stream());
});

gulp.task("css:bootstrap" ,["css:main"], function () {
   return  gulp.src([
       "node_modules/bootstrap/dist/css/bootstrap.min.css",
       "dist/css/main.min.css"
   ])
       .pipe(concat("main.min.css"))
       .pipe(gulp.dest("dist/css"));
});

gulp.task("html", function () {
    return gulp.src("src/pages/*.html")
        .pipe(htmlExtend())
        .pipe(gulp.dest("dist"));
});


gulp.task("img:min", function () {
    return gulp.src("src/photo/*")
        .pipe(sourcemaps.init())
        .pipe(imgmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/photo"))
});

gulp.task("compress:js", function () {
    return gulp.src("src/scripts/*.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat("bundle.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/scripts"))
});

gulp.task("js:bootstrap" ,["compress:js"], function () {
    return  gulp.src([
        "node_modules/jquery-validation/dist/jquery.validation.min.js",
        "node_modules/jquery/dist/jquery.js",
        "node_modules/bootstrap/dist/js/bootstrap.js",
        "dist/scripts/bundle.min.js"
    ])
        .pipe(concat("bundle.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/scripts"));
});


gulp.task("font:compress", function () {
    return gulp.src("src/font/*.ttf")
        .pipe(fontmin())
        .pipe(gulp.dest("dist/font"))
});

gulp.task("json", function () {
    return gulp.src("src/json/data.json")
        .pipe(gulp.dest("dist"))
});

gulp.task("primary", ["html", "css:bootstrap", "json"  ,"font:compress", "img:min", "js:bootstrap"]);

gulp.task("watch", ["primary"], function () {
    sync.init({
        server: "dist"
    });

    gulp.watch("src/styles/**/*.less", ["css:main"]);

    gulp.watch( "src/**/*.html", ["html"]);

    gulp.watch("dist/*.html").on("change", sync.reload);

});

gulp.task("default", ["watch"]);
