module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        path: 'assets/js',
        concat: {
            js: {
                src: [
                    '<%= path %>/*.js',
                    '<%= path %>/app/app.js', 
                    '<%= path %>/app/routes.js', 
                    '<%= path %>/services/*.js',
                    '<%= path %>/filters/*.js',
                    '<%= path %>/app/controllers/*.js',
                ],
                dest: '<%= path %>/hotswingers.js',
                options: {
                    separator: ';\n'
                }
            }
        },
        uglify: {
            options: {
                banner: [
                    '/*! \n     ',
                    '@product <%= pkg.name %> v<%= pkg.version %>, \n     ',
                    '@vendor hotswingers.com \n     ',
                    '@time <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>',
                    ' \n*/\n'
                ].join("")
            },
            js: {
                src: '<%= path %>/hotswingers.js',
                dest: '<%= path %>/hotswingers.min.js'
            }
        },
        watch: {
            js: {
                files: [
                    '<%= path %>/app/*.js',
                    '<%= path %>/app/**/*.js'
                ],
                tasks: ['default:dev'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('default:dev', ['concat']);

};