export function initialize(instance) {
  // instance.lookup supports Ember 2.1 and higher
  // instance.container supports Ember 1.11 - 2.0
  const container = instance.lookup ? instance : instance.container;

  let service = container.lookup('service:browser-update');

  service.inject();
}

export default {
  name: 'browser-update',
  initialize
};
