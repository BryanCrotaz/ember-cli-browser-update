import Ember from 'ember';
import injectScript from 'ember-inject-script';

export default Ember.Service.extend(Ember.Evented, {
	inject: function () {
		var config = this.get('_config');
		// send config to browser-update script as global variable
		window.$buoop = config;
		this._injectAfterDelay(config.delay);		
	},

	show: function(infos) {
	    this.trigger('show', infos);
	},

	click: function(infos) {
	    this.trigger('click', infos);
	},

	close: function(infos) {
	    this.trigger('close', infos);
	}, 

	_injectAfterDelay: function(delay) {
		delay = delay || 100;
		Ember.run.later(this, function() {
			// inject the browser update script
			var url = "//browserupdate.org/update.js";
			injectScript(url);
		}, delay);
	},

	_config: function() {
		var config = this.get('config');
		config.vs = config.vs || {i:9,f:2,o:9.63,s:2,c:10};
		config.onshow = this.show;
		config.onclick = this.click;
		config.onclose = this.close;
		return config;
	}
});
