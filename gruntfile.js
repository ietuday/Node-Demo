grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.initConfig({
htmlmin: {
// Task
dist: {
// Target
options: {
// Target options
removeComments: true,
collapseWhitespace: true
},
files: {
'dist/index.html': 'src/index.html', // 'destination': 'source'
'dist/contact.html': 'src/contact.html'
}
}
}
});
grunt.registerTask('default', ['htmlmin']);
