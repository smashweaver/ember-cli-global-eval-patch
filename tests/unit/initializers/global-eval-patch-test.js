import $ from 'jquery';
import Application from '@ember/application';
import { run } from '@ember/runloop';

import { initialize, _globalEval, _textScriptConverter } from 'dummy/initializers/global-eval-patch';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | global eval patch', {
  beforeEach() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

test('it works', function(assert) {
  initialize(this.application);

  assert.ok(_globalEval === $.globalEval);
  assert.ok(_textScriptConverter === $.ajaxSetup()['converters']['text script']);
});
