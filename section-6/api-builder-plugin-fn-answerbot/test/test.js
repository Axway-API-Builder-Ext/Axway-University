const { expect } = require('chai');
const { MockRuntime } = require('@axway/api-builder-test-utils');
const getPlugin = require('../src');

describe('flow-node fn-answerbot', () => {
	let plugin;
	let flowNode;
	beforeEach(async () => {
		plugin = await MockRuntime.loadPlugin(getPlugin);
		plugin.setOptions({ validateOutputs: true });
		flowNode = plugin.getFlowNode('fn-answerbot');
	});

	describe('#constructor', () => {
		it('should define flow-nodes', () => {
			expect(plugin).to.be.a('object');
			expect(plugin.getFlowNodeIds()).to.deep.equal([
				'fn-answerbot'
			]);
			expect(flowNode).to.be.a('object');

			// Ensure the flow-node matches the spec
			expect(flowNode.name).to.equal('answerbot');
			expect(flowNode.description).to.equal("Give me a piece of text and a natural language question and I'll answer it.");
			expect(flowNode.icon).to.be.a('string');
			expect(flowNode.getMethods()).to.deep.equal([
				'answer'
			]);
		});

		// It is vital to ensure that the generated node flow-nodes are valid
		// for use in API Builder. Your unit tests should always include this
		// validation to avoid potential issues when API Builder loads your
		// node.
		it('should define valid flow-nodes', () => {
			// if this is invalid, it will throw and fail
			plugin.validate();
		});
	});

	describe('#answer', () => {
		const text = "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
		const question = "Who is the CEO of Google?"
		
		it('should error when missing required parameter (texts)', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.answer({
				text: null, question: question
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: text');
			expect(output).to.equal('error');
		});
		
		it('should error when missing required parameter (question)', async () => {
			// Invoke #hello with a non-number and check error.
			const { value, output } = await flowNode.answer({
				text: text, question: null
			});

			expect(value).to.be.instanceOf(Error)
				.and.to.have.property('message', 'Missing required parameter: question');
			expect(output).to.equal('error');
		});

		it('should succeed with valid argument', async () => {
			const { value, output } = await flowNode.answer({ question: question, text: text });

			expect(value).to.be.instanceOf(Array);
			expect(output).to.equal('next');
		});
	});
});
