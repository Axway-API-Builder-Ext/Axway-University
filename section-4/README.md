# Deployment & Regression Testing

Now that we have working API Builder projects, we need to be able to deploy them in production. In this section, we will dockerize and API Builder project, and deploy it in a Kubernetes cluster. We will also introduce how we put projects into source control, and how to create your own automated regression tests.

All of the videos below use the same project: [source-control-project](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-4)

The lessons in this section are:

1. Source Control and your project
We put a project under source control using git, and explain which files and folders we ignore and why.

2. Creating a production runtime
In this video, we show you how to create a production runtime that can be deployed anywhere you can run a NodeJS app.

3. Deploying to Kubernetes
We dockerize a project, and deploy it in a Kubernetes cluster running in the cloud. We also set up an Ingress controller so that we can test the deployed API with Postman.

4. Automated Regression Testing
Automated testing is a crucial so that you can implement new functionality with confidence, and safely pick up API Builder updates. Here, we extend the exist sample tests to account for new functionality.
