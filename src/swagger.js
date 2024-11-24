const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUi = require('swagger-ui-express');  
  
const options = {  
  definition: {  
    openapi: '3.0.0',  
    info: {  
      title: 'Order Service APIs',  
      version: '1.0.0',  
      description: 'Order Services for Food Delivery System.',  
    },  
  },  
  apis: ['./src/routes/*.js'],   
};  
  
const swaggerSpec = swaggerJSDoc(options);  
  
module.exports = (app) => {  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));  
};  