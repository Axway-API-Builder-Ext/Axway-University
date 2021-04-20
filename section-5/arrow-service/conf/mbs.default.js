module.exports = {
	connectors: {
		mbs: {
			connector: '@axway/api-builder-plugin-dc-mbs',
			key: process.env.MBS_KEY, // Your MBS App Key
			username: process.env.MBS_USERNAME, // MBS user
			password: process.env.MBS_PASSWORD // MBS password
		}
	}
};
