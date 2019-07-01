const express = require("express");
const controller = require("./controllers/messages_controller.js")
const app = express();

app.use(express.json()); //configure express to parse JSON
app.use(express.static(__dirname + '/../public/build'));

app.post("/api/messages/", controller.create);
app.get("/api/messages/", controller.read);
app.put("/api/messages/:id", controller.update)
app.delete("/api/messages/:id", controller.delete)


const port = 3001; //configure app to listen on port 3001
app.listen(port, () => {
    console.log (`Server is listening on port ${port}`)
})

