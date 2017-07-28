var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('say',function() {
    console.log("hello world!");
});

//copy�����������֣������function��ִ������ĺ���
gulp.task("copy",function() {
    //��gulp.src��ȡһ���ļ�
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
        .pipe(gulp.reload({stream:true}));  // ���������ݽ�ȥdist�ļ�����
});


gulp.task("style",function() {
    gulp.src("src/styles/*.less")
        //��less�ļ����б���
        .pipe(less())
        //��less�ļ����б����css�ļ���ִ��lessnano��һ��ѹ��css
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

//����
//gulp.watch(�����ļ�,ִ�ж�Ӧ����)������������ӵ��ļ������仯��ִ�����Ӧ�Ĳ���������Ѿ��������ľͻḲ��ԭ�еľ��ļ�
gulp.watch("src/index.html",["copy"]);
gulp.watch("src/styles/*.less",["style"]);