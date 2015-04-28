Package.describe({
    summary: "Random Color (v0.2.0), lib for generating attractive random colors, from David Merfield, https://github.com/davidmerfield/randomColor, packaged for Meteor.js."
});

Package.on_use(function (api) {
    api.use('ui', 'client');
    api.add_files('lib/js/randomColor.js', 'client');
    api.add_files('client/helpers.js', 'client');
});