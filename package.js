Package.describe({
  name: 'elmarti:just-gage',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'JustGage and Raphael packaged and Meteorized',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/elmarti/justgage-meteor-wrapper',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  Npm.depends({
    "raphael": "2.1.4"
  });
  api.use(['templating'], 'client');
  api.addFiles(['lib/justgage.js', 'lib/raphael.js','client.html', 'client.js'], 'client');
  api.export(['JustGage'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('elmarti:peerjs');
  api.addFiles('justGage-tests.js');
  api.export(["JustGage"], "client");
});
