const express = require("express");
// const cors = require("cors");

// routes
const eventsRouter = require("./routes/events.js");

const app = express();

const PORT = 7050;

// app.use(cors());

// app.get("/", (req, res) => {
//     res.send("asd");
// });

// routes
app.use(eventsRouter);


// http://127.0.0.1:7050/
app.listen(PORT, () => console.log(`Server running on 127.0.0.1:${PORT}`));
