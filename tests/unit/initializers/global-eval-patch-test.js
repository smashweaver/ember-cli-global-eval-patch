import Ember from 'ember';
import { initialize, _globalEval, _textScriptConverter } from 'dummy/initializers/global-eval-patch';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | global eval patch', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

test('it works', function(assert) {
  initialize(this.application);

  assert.ok(_globalEval === Ember.$.globalEval);
  assert.ok(_textScriptConverter === Ember.$.ajaxSetup()['converters']['text script']);
});
