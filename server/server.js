const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ['http://localhost:5173']
}
const port = 8080;


app.use(cors(corsOptions));
app.get("/api", (req, rest) => {
    rest.json({fruits : ["apple", "orange", "banana", "grapes"]})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})