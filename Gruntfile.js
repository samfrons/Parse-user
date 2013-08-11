module.exports = function (grunt) {
  // load all grunt tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
      less: {
        options: {
          paths: ["css"],
          yuicompress: true
        },
        files: {
          src: "less/app.less",
          dest: "css/app.css"
        }
      },
      watch: {
        options: {
          //livereload: 801,
        },
        css: {
          files: ['less/*.less'],
          tasks: ['less'],
        },
      },
  });

  grunt.registerTask('default', ['watch']);
};
