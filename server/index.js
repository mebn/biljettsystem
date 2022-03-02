const express = require("express");
const cors = require("cors");

// routes
const eventRouter = require("./routes/event");
const ticketRouter = require("./routes/ticket");
const userRouter = require("./routes/user");
const swaggerRouter = require("./routes/swagger");

const app = express();
app.use(cors());

const PORT = 7050;

// routes
app.use(eventRouter);
app.use(ticketRouter);
app.use(userRouter);
app.use("/api-docs", swaggerRouter);

app.listen(PORT, () => console.log(`Server running on 127.0.0.1:${PORT}`));
