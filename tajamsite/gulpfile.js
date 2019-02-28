const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


const cssFiles = [
	'./node_modules/normalize.css/normalize.css',
	'./src/css/header.css',
	'./src/css/vars.css',
	'./src/css/main.css',
	'./src/css/video.css',
	'./src/css/expertise.css',
	'./src/css/team.css',
	'./src/css/works.css',
	'./src/css/comment.css',
	'./src/css/forms.css',
	'./src/css/footer.css'
];

const jsFiles = [
	'./src/js/header-slider.js',
	'./src/js/video.js',
	'./src/js/work.js',
	'./src/js/comment.js'
];

function styles() {
	return gulp.src(cssFiles)
				.pipe(concat('style.css'))
				.pipe(autoprefixer({
		            browsers: ['> 0.01%'],
		            cascade: false
		        }))
		        
				.pipe(gulp.dest('./build/css'))
				  .pipe(browserSync.stream());
}

function scripts() {
	return gulp.src(jsFiles)
				.pipe(concat('all.js'))
				
				.pipe(gulp.dest('./build/js'))
				  .pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch('./src/css/**/*.css', styles);
	gulp.watch('./src/js/**/*.js', scripts);
	gulp.watch('./*.html', browserSync.reload);
}

function clean() {
	return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('sass', function(){
	gulp.src('./src/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./build/scss'));
});

gulp.task('build', gulp.series(clean, 
				gulp.parallel(styles, scripts)
				));