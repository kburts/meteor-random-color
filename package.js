Package.describe({
    summary: "Random Color (v0.2.0), lib for generating attractive random colors, from David Merfield, https://github.com/davidmerfield/randomColor, packaged for Meteor.js.",
    name: "kburts:randomcolor",
    version: "0.2.0",
    git: "https://github.com/rzymek/meteor-random-color.git"
});

Package.on_use(function (api) {
    api.add_files('lib/js/randomColor.js', 'client');
});