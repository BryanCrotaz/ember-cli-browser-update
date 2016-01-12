export function initialize(appInstance) {
  let service = appInstance.container.lookup('service:browser-update');

  service.inject();
}

export default {
  name: 'browser-update',
  initialize
};
