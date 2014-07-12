module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: [
                    "lib/config.js",
                    "lib/external/sat.js",
                    "lib/external/kibo.js",
                    "lib/external/howler.js",
                    "lib/external/spine.js",
                    "lib/utility/helpers.js",
                    "lib/utility/ticker.js",
                    "lib/resources/images.js",
                    "lib/resources/sounds.js",
                    "lib/resources/content_manager.js",
                    "lib/graphics/stage.js",
                    "lib/graphics/drawable.js",
                    "lib/graphics/screen.js",
                    "lib/graphics/sprite_sheet.js",
                    "lib/graphics/sprite.js",
                    "lib/graphics/animation.js",
                    "lib/graphics/spine_animation.js",
                    "lib/graphics/emitter.js",
                    "lib/events/event.js",
                    "lib/events/input.js",
                    "lib/events/state_machine.js",
                    "lib/events/notes.js",
                    "lib/tweens/actions.js",
                    "lib/tweens/bezier.js",
                    "lib/tweens/tween_alpha.js",
                    "lib/tweens/tween_blink.js",
                    "lib/tweens/tween_move_to.js",
                    "lib/tweens/tween_pulsate.js",
                    "lib/tweens/tween_rotate.js",
                    "lib/tweens/tween_rotate_by.js",
                    "lib/tweens/tween_rotate_to.js",
                    "lib/tweens/tween_scale.js",
                    "lib/tweens/tween_shake.js",
                    "lib/tweens/tween_time.js",
                    "lib/ui/navigator.js",
                    "lib/ui/button.js",
                    "lib/ui/label.js",
                    "lib/ui/layer.js",
                    "lib/ui/tableview.js",
                    "lib/ui/tablecell.js"

                ],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};