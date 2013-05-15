var jam = {
    "packages": [
        {
            "name": "angularjs",
            "location": "vendor/angularjs",
            "main": "angular.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "marked",
            "location": "vendor/marked",
            "main": "./lib/marked.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "vague-time",
            "location": "vendor/vague-time",
            "main": "src/vagueTime.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "angularjs",
            "location": "vendor/angularjs",
            "main": "angular.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "marked",
            "location": "vendor/marked",
            "main": "./lib/marked.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "vague-time",
            "location": "vendor/vague-time",
            "main": "src/vagueTime.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "angularjs",
            "location": "vendor/angularjs",
            "main": "angular.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "marked",
            "location": "vendor/marked",
            "main": "./lib/marked.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        },
        {
            "name": "vague-time",
            "location": "vendor/vague-time",
            "main": "src/vagueTime.js"
        }
    ],
    "shim": {
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}