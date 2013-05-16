require.config({
  paths: {
    "bootstrap": "vendor/bootstrap/docs/assets/js/bootstrap"
  },
  shim: {
    "bootstrap": {
      deps: ['jquery']
    }
  }
});

require(['jquery', 'bootstrap', 'less'], function() {

});