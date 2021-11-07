const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("default", () =>
  gulp
    .src("./src/sass/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .on("error", sass.logError)
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(gulp.dest("./assets/css"))
);

gulp.task("watch", () =>
  gulp.watch("./src/sass/**/*.scss", gulp.series(["default"]))
);
