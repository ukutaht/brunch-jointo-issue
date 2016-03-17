module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'dev.js': 'app/dev-file.js',
        'app.js': 'app/prod-file.js'
      }
    }
  },

  overrides: {
    production: {
      files: {
        javascripts: {
          joinTo: {
            'app.js': 'app/prod-file.js'
          }
        }
      }
    }
  },

  onCompile: function(generatedFiles) {
    console.log(generatedFiles.map(function(file) {
      return file.path;
    }));
  }
}
