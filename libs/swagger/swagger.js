
const swaggerjsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { version } =require('../../package.json');

const options = {
  definition:{
    openapi:"3.0.0",
    info:{
      title:'REST API DOCS',
      version
    },
    components:{
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis:['./routes/url.js','./model/url.js']
}
const swaggerSpec = swaggerjsDoc(options);

function swaggerDocs(app,port) {
  //swagger page
 
  app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec));

  //Docs in json format

  app.get('/docs.json',(req, res) => {
    res.setHeader('Content-Type','application/json');
    res.send(swaggerSpec);
  });
  console.log(`docs availalbe on http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
  
  