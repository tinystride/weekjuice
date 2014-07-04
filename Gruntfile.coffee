module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    compass:
      dist:
        options:
          sassDir: 'scss'
          cssDir: 'css'

    emberTemplates:
      compile:
        options:
          templateBasePath: /js\/app\/templates\//

        files:
          "js/templates.js": "js/app/templates/**/*.hbs"

    concat:
      libs:
        src: [
          "js/libs/jquery-2.0.3.min.js"
          "js/libs/handlebars-1.0.0.js"
          "js/libs/ember-1.1.2.js"
          "js/libs/ember-data-1.0.0-beta.3.js"
          "js/libs/localstorage_adapter.js"
          "js/libs/moment.min.js"
          "js/libs/emberfire.js"
        ]
        dest: "js/libs.js"

      app:
        src: "js/app/**/*.js"
        dest: "js/app.js"

    watch:
      sass:
        files: "scss/*.scss"
        tasks: ["compass"]

      emberTemplates:
        files: "js/app/templates/**/*.hbs"
        tasks: ["emberTemplates"]

      concat:
        files: [
          "js/**/*.js"
          "!js/app.js"
          "!js/libs.js"
          "!js/templates.js"
        ]
        tasks: ["concat"]

  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-compass"
  grunt.loadNpmTasks "grunt-ember-templates"

  # Default task(s).
  grunt.registerTask "default", [
    "compass"
    "concat"
    "emberTemplates"
  ]
