import Ember from 'ember';
import { initialize } from '../../../instance-initializers/browser-update';
import browserUpdate from '../../../services/browser-update';
import { module, test } from 'qunit';

var application, appInstance;

module('Unit | Initializer | browser update', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.register('service:browser-update', browserUpdate);
      appInstance = application.buildInstance();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(appInstance);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
