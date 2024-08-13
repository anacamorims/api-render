import express from "express";
import { petRouter } from "../src/routes/pet.routes.js"
import { database } from './database/connection.db.js';
// import { Pet } from './models/Findmypet.model.js';

const app = express();
const port = 4000;

app.use(express.json());

app.use(petRouter);

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// })

database.sync({ force: true })
  .then(() => {
    console.log('Database and tables created successfully.');
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((err) => {
    console.error('Error creating the database:', err);
  });