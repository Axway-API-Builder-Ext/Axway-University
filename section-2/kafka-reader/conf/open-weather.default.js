module.exports = {
	// The configuration settings for the OAS3 flow-node: OpenWeatherMap API
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'open-weather': {}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'OpenWeatherMap API app_id': {
				type: 'apiKey',
				key: process.env.WEATHER_API_KEY
			}
		}
	}
};
