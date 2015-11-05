
module.exports = function (grunt) {
grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 3000,
        base: 'public',
        hostname: 'localhost'
      }
    }
  },
  watch: {
			options: {
				livereload: {port: 9000}
			},
			css:{
				files: 'public/css/**/*.css'
			},
			html:{
				files: 'publicw/**/*.html'
			}
		},

});


 // startup task libraries
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-watch');

// task array
  grunt.registerTask('default', ['connect','watch']);

};