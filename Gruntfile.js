module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    connect: {
      server: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: {
                   target: 'http://localhost:9000/'
                },
                base: ['/']
            }
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        },

      grunt: {
        files: ['Gruntfile.js']
      },

      compass: {
        files: 'scss/**/*.scss',
        tasks: ['compass']
      },

      livereload: {
        options: { livereload: true },
        files: ['**/*'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['connect', 'watch']);

  // Run grunt server to get going
  grunt.registerTask('server', ['connect', 'watch']);
};
