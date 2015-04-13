export function initialize(container, application) {
  application.ready = function() {
  	this._super();
  	var service = application.registry.lookup('service:browser-update');
  	service.inject();
  };
}

export default {
  name: 'browser-update',
  initialize: initialize
};
