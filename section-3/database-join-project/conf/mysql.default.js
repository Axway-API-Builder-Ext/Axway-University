/*
 * Use this file to configure you mysql data connector
 *
 * By default, MYSQL username and password are environment variables.
 * username MYSQL_USER, password MYSQL_PASSWORD
 * Example setting of environment variables:
 * linux/mac: export MYSQL_PASSWORD=password
 * windows: setx MYSQL_PASSWORD 'password'
 */
module.exports = {
	connectors: {
		mysql_aws: {
			connector: '@axway/api-builder-plugin-dc-mysql',
			connectionPooling: true,
			connectionLimit: 10,
			host: process.env.AWS_MYSQL_HOST,
			port: 3306,
			database: 'employees',
			user: process.env.AWS_MYSQL_USER,
			password: process.env.AWS_MYSQL_PASSWORD,

			// Create models based on your schema that can be used in your API.
			generateModelsFromSchema: true,

			// Whether or not to generate APIs based on the methods in generated models.
			modelAutogen: false
		},
      		mysql_local: {
			connector: '@axway/api-builder-plugin-dc-mysql',
			connectionPooling: true,
			connectionLimit: 10,
			host: process.env.LOCAL_MYSQL_HOST,
			port: 3306,
			database: 'sakila',
			user: process.env.LOCAL_MYSQL_USER,
			password: process.env.LOCAL_MYSQL_PASSWORD,

			// Create models based on your schema that can be used in your API.
			generateModelsFromSchema: true,

			// Whether or not to generate APIs based on the methods in generated models.
			modelAutogen: false
		}
	}
};
