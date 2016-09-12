import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('my-engine');
  this.mount('my-engine', { as: 'immediate' });
  this.route('slow-in-host', function() {
    // index route.
  });

  this.route('just-slow');
});

export default Router;
