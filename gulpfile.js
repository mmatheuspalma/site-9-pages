const gulp = require('gulp'),
      watch = require('gulp-watch'),
      filter = require('gulp-filter'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      browserSync = require('browser-sync'),
      clean  = require('gulp-clean'),
      // HTML
      pug  = require('gulp-pug'),
      htmlbeautify = require('gulp-html-beautify'),
      // CSS
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      // JS
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel');

// Function to force remove PUG and HTML files (BUG)
const event = file => {
    const distFile = file.path.replace('pug', 'html').replace('src', 'public');

    return (file.event === 'unlink') ? gulp.src(distFile).pipe(clean()) : '';
}

// Compiling Components to HTML
gulp.task('components', () => {
    return gulp.src('src/components/**/*.pug')
        .pipe(pug())
        .pipe(htmlbeautify({
        	"indent_size": 4,
            "preserve_newlines": true,
            "end_with_newline": false,
            "unescape_strings": false,
            "space_before_conditional": true,
            "eval_code": false,
            "preserve_newlines": true
    	}))
        .pipe(gulp.dest('public/components/'))
});

// Compiling Scenes to HTML
gulp.task('scenes', () => {
    return gulp.src('src/scenes/**/*.pug')
        .pipe(pug())
        .pipe(htmlbeautify({
        	"indent_size": 4,
            "preserve_newlines": true,
            "end_with_newline": false,
            "unescape_strings": false,
            "space_before_conditional": true,
            "eval_code": false,
            "preserve_newlines": true
    	}))
        .pipe(gulp.dest('public/scenes/'))
});

// Compiling SCSS to CSS
gulp.task('styles', () => {
    return gulp.src('src/assets/scss/style.scss')
    	.pipe(concat('styles.min.css'))
    	.pipe(sass({
	        outputStyle: 'compressed'
	    }).on('error', sass.logError))
	 	.pipe(autoprefixer({
	 		browsers: ['> 1%', 'last 5 versions', 'firefox >= 4', 'safari >= 7', 'ie >= 9'], 
	 		add: true,
	 		remove: true
	 	}))
    	.pipe(sourcemaps.init({ loadMaps: true }))
	 	.pipe(cleanCSS())
    	.pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/css/'))
});

// Concat javascript
gulp.task('scripts', () => {
    return gulp.src('src/assets/js/**/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js/'))
});

// Move assets to public folder
gulp.task('move-assets', () => {
    gulp.src('src/assets/images/**/**')
    .pipe(gulp.dest('public/assets/images/'))

    return gulp.src('src/assets/fonts/**/**')
    .pipe(gulp.dest('public/assets/fonts/'))
});

gulp.task('browser-sync', () => {
    return browserSync.init({
        server: {
            baseDir: "./",
        },
        reloadDelay: 500,
        port: 358,
        injectChanges: true,
        startPath: '/public/scenes/Home',
        notify: false,
        logFileChanges: true,
        online: false
    });
});

gulp.task('watch', () => {
    return watch(['src'], (event) => {
        gulp.start('components', 'scenes', 'styles', 'scripts', 'move-assets', browserSync.reload);
    })
    .pipe(filter(event))
});

gulp.task('default', gulp.series(
	'components',
	'scenes', 
	'styles', 
	'scripts',
    'move-assets',
	'browser-sync', 
	'watch'
));

gulp.task('build', gulp.series(
	'components',
	'scenes', 
	'styles', 
	'scripts',
    'move-assets',
));
