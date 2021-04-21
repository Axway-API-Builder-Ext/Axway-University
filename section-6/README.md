# The Plugin SDK

You've seen plugins throughout the course. Now we teach you how to create your own. In this section, we first introduce you to the anatomy of a plugin, then we create a plugin that applies a TensorFlow machine-learning model to a piece of text and answers questions on it.

These are the lessons:

1. Introducing Plugins
In this video, we show you the various files used to develop a plugin, and show you how each part affects what a plugin does, and how it's represented in the Flow Editor. You can find a basic plugin project here: [api-builder-plugin-fn-sample](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-6/api-builder-plugin-sample), and a project to test it in here: [sample-project](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-6/sample-project)

2. Creating and testing your own plugin
Here, we create a plugin that takes a piece of text and a question, and tries to answer the question based on the contents of the text. We use a TensorFlow model (which you can find [here](https://www.npmjs.com/package/@tensorflow-models/qna)) for this purpose, and show you how to initialise the model on startup, and then put your new flow-node in a project to test it out. You can find the project here: [answerservice](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-6/answerservice), and the plugin here: [api-builder-plugin-fn-answerbot](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-6/api-builder-plugin-fn-answerbot)
