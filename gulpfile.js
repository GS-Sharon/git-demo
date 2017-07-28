var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('say',function() {
    console.log("hello world!");
});

//copy代表任务名字，后面的function是执行任务的函数
gulp.task("copy",function() {
    //在gulp.src中取一个文件
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
        .pipe(gulp.reload({stream:true}));  // 将操作传递进去dist文件夹中
});


gulp.task("style",function() {
    gulp.src("src/styles/*.less")
        //将less文件进行编译
        .pipe(less())
        //将less文件进行编译成css文件后执行lessnano进一步压缩css
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css/"))
        .pipe(gulp.reload({stream:true}));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
        .pipe(gulp.reload({stream:true}));
});

//监视
//gulp.watch(监视文件,执行对应任务)，就是如果监视的文件发生变化就执行相对应的操作，如果已经操作过的就会覆盖原有的就文件
gulp.watch("src/index.html",["copy"]);
gulp.watch("src/styles/*.less",["style"]);