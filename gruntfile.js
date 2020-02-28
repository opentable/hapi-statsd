

module.exports = function init(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: [ './*.js', './src' ]
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
  require('time-grunt')(grunt);

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['eslint']);
};
