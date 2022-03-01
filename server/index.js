const express = require("express");
const cors = require("cors");

// routes
const eventsRouter = require("./routes/events");
const ticketsRouter = require("./routes/tickets");
const swaggerRouter = require("./routes/swagger");

const app = express();
app.use(cors());

const PORT = 7050;

// routes
app.use(eventsRouter);
app.use(ticketsRouter);
app.use("/api-docs", swaggerRouter);

app.listen(PORT, () => console.log(`Server running on 127.0.0.1:${PORT}`));
