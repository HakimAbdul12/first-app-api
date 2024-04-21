import express from "express"
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"

const app = express()
const port = 3000

// app.set('case sensitive routing', true);
app.use(bodyParser.json())
app.listen(port, () => console.log(`Listening http://localhost/${port}/`))
app.get("/", (req, res) => res.send("Hello World!"))
app.use('/users', usersRoutes);