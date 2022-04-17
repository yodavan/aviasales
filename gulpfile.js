const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const htmlmin = require("gulp-htmlmin");
const csso = require("postcss-csso");
const terser = require("gulp-terser");
const del = require("del");


const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

const clean = () => {
  return del("build");
};

const reload = (done) => {
  sync.reload();
  done();
}

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html, reload));
  // gulp.watch("source/js/script.js", gulp.series(script));
}

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const copy = (done) => {
  gulp.src([
    "source/fonts/*.ttf",
    "source/image/**/*.svg",
    "source/image/logo-avia/*.jpg",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}

const build = gulp.series(
  clean,
  copy,
  gulp.parallel(
    styles,
    html,
  ),gulp.series(
    server,
    watcher
  )
);

exports.build = build;
