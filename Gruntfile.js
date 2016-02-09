var modRewrite = require('connect-modrewrite');
var serveStatic = require('serve-static');

var mountFolder = function (connect, dir) {
    return serveStatic(require('path').resolve(dir));
};

module.exports = function (grunt) {
grunt.initConfig({
  connect: {
    options: {
            port: 3000,
            base: 'public',
            hostname: 'localhost'
            },
    server: {
      options: {
        middleware: function (connect) {
                        return [
                            modRewrite (['!\\.html|\\.js|\\.svg|\\.css|\\.png|\\.jpg|\\.ttf|\\.woff|\\.woff2|\\.svg|\\.eot$ /index.html [L]']),
                            mountFolder(connect, 'public')
                        ];
                    }
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
    sass: {
			dist: {
				files: {
					'public/css/wormstyles.css' : 'public/css/sass/wormstyles.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}

});


 // startup task libraries
 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-connect');

// task array
  grunt.registerTask('default', ['connect:server','watch']);
  grunt.registerTask('dev',['sass']);


};
