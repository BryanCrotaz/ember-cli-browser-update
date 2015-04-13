import browserUpdate from 'ember-cli-browser-update/services/browser-update';
import Environment from '../config/environment';

export default browserUpdate.extend({
	config: Environment.browserUpdate || {}
});
