/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'my-engine',
  lazyLoading: false,

  isDevelopingAddon: function() {
    return true;
  }
});
