export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  console.log('initialized');
}

export default {
  name: 'browser-update',
  initialize: initialize
};
