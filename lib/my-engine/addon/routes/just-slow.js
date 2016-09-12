import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return new Ember.RSVP.Promise((resolve) => {
      Ember.run.later(this, resolve, 3000);
    });
  }
});
