# The Flow Editor, REST connectors, Flow Triggers

In this section, we introduce you to the Flow Editor. This is where you develop the logic for your integrations. After introducing you to the Flow Editor and how it deals with data, we create a REST connector directly from an OpenAPI specification, and then a Kafka subscriber that supplies cities to a flow that calls the Open Weather API to find out what the weather is.

By the end of this section, you should have a good understanding of API Builder flows, and how to connect API Builder to other systems. These are the lessons:

1. Introduction to the Flow Editor
In this lesson, we introduce you to the Flow Editor, and how we represent the data you process using flows. The [greeting project](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-2/greeting-project) is the project we use in the demo.

2. The REST Connector
Here, we download the OpenAPI specification for the Open Weather online service and automatically generate a REST connector from it. The [weather-app](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-2/weather-app) project includes the OpenAPI specification, but you need to register and get your own API key to try it out.

3. Flow Triggers
API Builder can be used for more than building REST APIs. You can also subscribe to brokers like Kafka and process events in whichever way you like. In this example, we subscribe to a Kafka topic that sends us cities. We take those cities and ask the Open Weather API from the last lesson and ask for the weather. The project for this is [kafka-reader](https://github.com/Axway-API-Builder-Ext/Axway-University/tree/main/section-2/kafka-reader).
