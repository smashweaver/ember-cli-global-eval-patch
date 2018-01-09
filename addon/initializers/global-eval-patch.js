import $ from 'jquery';
export const _globalEval = () => {};

export const _textScriptConverter = text => { return text; };

export function initialize(/* application */) {
  $.globalEval = _globalEval;

  $.ajaxSetup({
    converters: {
      'text script': _textScriptConverter
    }
  });
}

export default {
  initialize
};
