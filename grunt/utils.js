module.exports = function(grunt) {
	return {
		noVendorFiles: function(files) {
			return grunt.file.expand(files).filter(function(x) {
				return x.indexOf('/vendor') === - 1;
			});
		}
	};
};

