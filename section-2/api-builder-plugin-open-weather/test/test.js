const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../index');

describe('Plugin open-weather', () => {
	let plugin;
	let openAPIFiles;
	before(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		const files = fs.readdirSync('openapi');
		openAPIFiles = files.filter(file =>
			[ '.yml', '.yaml', '.json' ].includes(path.extname(file))
		);
	});

	it('should have at least one YAML or JSON OpenAPI document in the openapi directory', () => {
		try {
			expect(openAPIFiles).to.have.length.above(0);
		} catch (err) {
			throw new Error('Please create files in the openapi directory before running tests.');
		}
	});

	it('should create a flow-node for each OpenAPI document in the openapi directory', () => {
		expect(plugin.getFlowNodeIds()).to.have.length(openAPIFiles.length);
	});

	// It is vital to ensure that the generated node flow-nodes are valid
	// for use in API Builder. Your unit tests should always include this
	// validation to avoid potential issues when API Builder loads your
	// node.
	it('should define valid flow-nodes', () => {
		plugin.validate();
	});
});
