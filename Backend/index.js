import myex from "express";
import myenv from "dotenv";
import db from "./config/db.js";

// loaed process env so throughout the project we can handle it
myenv.config();
const PORT = process.env.PORT;

const app = myex();

function main() {
  // connecting db
  db(); 

  
  app.listen(PORT, () => {
    console.log("server created at 5400 ");
  });


}

main();
