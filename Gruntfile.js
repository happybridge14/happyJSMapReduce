module.exports = function(grunt){
grunt.initConfig({
pkg: grunt.file.readJSON("package.json"),
uglify:{build:{src:'<%=pkg.name%>.js',
dest:'build/<%=pkg.name%>.min.js'
}},
jshint: {
   scripts:['<%=pkg.name%>.js']
}
});
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint', 'uglify']);



}
