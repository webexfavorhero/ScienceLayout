/* ------------------------------------------------------------------------- *
 * GLOBALS MODULE, REQUIRE
/* ------------------------------------------------------------------------- */

module.exports = function(grunt) {

	"use strict";

  
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


    /* UGLIFY CONFIGURATION
    /* ------------------------------------ */
	uglify: {
		global: {
			files: {
				"build/js/script.min.js": ["build/js/scripts.js"]
			}
		}
	},

	/* AUTOPREFIXER CONFIGURATION
	/* ------------------------------------ */
	autoprefixer:{
		global: {
			src: "build/css/app-unprefixed.css",
			dest: "build/css/app.css"
		}
	}, 

	/* SASS CONFIGURATION
	/* ------------------------------------ */
    sass: {
    	global: {
    		options: {
    			style: "expanded"
    		},
    		files: {
    			"build/css/app-unprefixed.css": "sass/application.scss"
    		}
    	}
    },

    /* JSHINT CONFIGURATION
    /* ------------------------------------ */
    jshint: {
    	options: {
    		force: true
    	},
    	all: ['Gruntfile.js', 'build/js/scripts.js'],
    },

    /* INCLUDES CONFIGURATION
    /* ------------------------------------ */
    includes: {
        files: {
            cwd: 'site',
            src: [ '*.html', 'pages/*.html' ],
            dest: 'build/',
            options: {
                silent: true,
                includePath: 'include',
                banner: '<!-- I am a banner <% includes.files.dest %> -->'
            }
        }
    },

    /* HTMLHINT CONFIGURATION
    /* ------------------------------------ */
    htmlhint: {
    	build:{
    		options:{
	            'tag-pair': true,
	            'tagname-lowercase': true,
	            'attr-lowercase': true,
	            'attr-value-double-quotes': true,
	            'doctype-first': true,
	            'spec-char-escape': true,
	            'id-unique': true,
	            'head-script-disabled': true,
	            'style-disabled': true
    		}, // options
    		src: ['*.html']
    	}
    },


    watch: {
		options: {
			livereload: true,
		},

    	gruntfile: {
    		files: 'Gruntfile.js',
    		tasks: ['jshint:gruntfile'],
    	},

    	scripts: {
    		files: ['build/js/scripts.js'],
    		tasks: ['jshint', 'uglify'],
    	},

    	css: {
    		files: '**/*.scss',
    		tasks: ['sass', 'autoprefixer'],
    	}, // css

        html: {
            files: ['*.html'],
            tasks: ['htmlhint:build'],
        }, // html

        core: {
            files: [ 'include/*.html' , 'site/*.html' ],
            tasks: [ 'includes:files' ]
        }

    } // watch
  });

  require("load-grunt-tasks")(grunt);

  // REGISTER GRUNT TASKS
  grunt.registerTask( 'default', [ 'uglify', 'jshint', 'sass', 'autoprefixer', 'htmlhint', 'includes', 'watch'] );
  grunt.registerTask( 'serve', [ 'sass', 'autoprefixer','watch'] );

};