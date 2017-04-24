import Ember from 'ember';

export const _globalEval = () => {};

export const _textScriptConverter = text => { return text; };

export function initialize() {
  Ember.$.globalEval = _globalEval;

  Ember.$.ajaxSetup({
    converters: {
      'text script': _textScriptConverter
    }
  });
}

export default {
  name: 'global-eval-patch',
  initialize
};
