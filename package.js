Package.describe({
    summary: "Random Color, lib for generating attractive random colors, from David Merfield.",
    name: "kburts:randomcolor",
    version: "0.2.0",
    git: "https://github.com/rzymek/meteor-random-color.git"
});

Package.on_use(function (api) {
    api.add_files('lib/js/randomColor.js', 'client');
});