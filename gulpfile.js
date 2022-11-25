const { series, parallel, src, dest, watch } = require('gulp');

const typograf = require('gulp-typograf');
const nunjucks = require('gulp-nunjucks');
const webpack = require('webpack-stream');

const sass = require('gulp-sass')(require('node-sass'));
const postcss = require('gulp-postcss');
const postcssImport = require("postcss-import");
const pxtorem = require('postcss-pxtorem');
const combineMQ = require('postcss-combine-media-query');
const sortMQ = require('postcss-sort-media-queries');
const browserSync = require('browser-sync').create();

const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');

const mode = (process.env.NODE_ENV == 'production') ? 'production' : 'development';

/**
 * ==================================
 *      B U I L D   H T M L
 * ==================================
 */

const njkOptions = { 
	autoescape: false,
	filters: {
		"toTel": value => value.replace(/[ _)(-]/g,''),
	}
}
const njkData = {};

function html() {
	return src([
		'./src/pages/*.{html, njk}', 
		'!./src/pages/_vars.html',
		'!./src/pages/_macros.html',
	])
	.pipe(nunjucks.compile(njkData, njkOptions))
	.pipe(typograf({ 
		locale: ['ru', 'en-US'],
		disableRule: ['ru/other/phone-number'],
		enableRule: ['common/number/digitGrouping'],
		safeTags: [
			['<\\?php', '\\?>'],
			['<no-typography>', '</no-typography>']
		],
	}))
	.pipe(dest('./build/'))
	.pipe(browserSync.reload({ stream: true }));
}
async function watchHtml() {
	return watch('./src/pages/**/*.html', html);
}

/**
 * ==================================
 *      B U I L D   S T Y L E S
 * ==================================
 */
function buildStyles() {
	const plugins = [
		postcssImport(),
		combineMQ(),
		sortMQ({ sort: 'desktop-first' }),
		pxtorem({
			replace: false,
			rootValue: 16,
			propList: ['*'],
		}),
	];
	
	return src('./src/styles/main.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(dest('build/css/'))
		.pipe(browserSync.stream());
}

async function watchStyles() {
	return watch('./src/styles/**/*.scss', buildStyles);
}



/**
 * ==================================
 *      B U I L D   S C R I P T S
 * ==================================
 */
async function scripts() {
	let watch = (mode == 'production') ? false : true;

	const config = {
		watch: true,
		mode: mode,
		entry: {
			'main': './src/js/main.js',
			//'app': './src/js/app.js',
		},
		output: {
			path: __dirname,
			filename: '[name].js'
		},
		module: {
			rules: [
			]
		},
		plugins: [
		]
	};

	return src('./src/js/*.js')
		.pipe(webpack(config))
		.pipe(dest('build/js/'))
		.pipe(browserSync.stream());
}


/**
 * ==================================
 *          I M A G E S
 * ==================================
 */

function images() {
	return src('src/img/**/*.*')
	.pipe(newer('build/img/'))
	.pipe(imagemin())
	.pipe(dest('build/img/'))
	.pipe(browserSync.reload({ stream: true }));
}
async function watchImages(cb) {
	return watch('src/img/**/*.*', images);
}

/**
 * ==================================
 *          VENDORS & PUBLIC
 * ==================================
 */

function vendors() {
	let scripts = [
		'node_modules/custom-event-polyfill/polyfill.js',
	];
	return src(scripts)
		.pipe(dest('build/js/vendors/'));
}


function publicAssets() {
	return src('public/**/*.*')
		.pipe(dest('build/'));
}


/**
 * ==================================
 *     B R O W S E R   S Y N C 
 * ==================================
 */

async function serve() {
	return browserSync.init({
		// proxy: "mysite.com",
		port: 1234,
		tunnel: false,
		online: true,
	//	browser: "google chrome",//
		server: {
			baseDir: "./build/",
		},
	});
}



exports.dev = series(
	vendors,
	images,
	parallel(html, buildStyles),
	parallel(watchImages, watchStyles, scripts, watchHtml, serve),
);

exports.build = series(
	publicAssets,
	parallel(images, buildStyles, vendors, scripts, html),
);