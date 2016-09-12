import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    var mountPoint = Ember.getOwner(this).mountPoint;
    if (mountPoint === 'immediate') { return; }

    return new Ember.RSVP.Promise((resolve) => {
      Ember.run.later(this, resolve, 3000);
    });
  }
});
