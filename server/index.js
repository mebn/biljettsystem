const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'PVK biljettsystem',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js'], // files containing annotations as above
  };

const swaggerSpec = swaggerJSDoc(options);

// routes
const eventsRouter = require("./routes/events.js");

const app = express();
app.use(cors());

const PORT = 7050;

// routes
app.use(eventsRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log(`Server running on 127.0.0.1:${PORT}`));
