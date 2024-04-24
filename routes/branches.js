import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";
import mysql from "mysql";
import e from "express";

// Create a database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_a_sms_db",
});
// Connect to the database
connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:", error);
    return;
  } else {
    console.log("Connected to database");
  }
});

router.post("/", (req, res) => {
  const branch = req.body;
  branch.id = uuidv4();

  //Insert record into the databse
  connection.query("INSERT INTO branches SET ?", branch, (error, results) => {
    if (error) {
      console.log("Error inserting record:", error);
      return;
    }
    res.send(branch);
  });
});
router.get("/", (req, res) => {
  // Retrieve all branches from the MySQL database
  connection.query("SELECT * FROM branches", (err, rows) => {
    if (err) {
      console.error("Error fetching branches from database:", err);
      res.status(500).send("Error fetching branches from database");
      return;
    }
    console.log("Branches fetched from database:", rows);
    res.json(rows);
  });
});

export default router;
