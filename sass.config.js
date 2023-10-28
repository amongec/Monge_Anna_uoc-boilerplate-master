var postcssSass = require("postcss-sass");

postcss(plugins).process(sass, { syntax: postcssSass }).then(function (result) {
    result.content // Sass with transformations
});