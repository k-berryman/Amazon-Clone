const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const SECRET_KEY = 'ENTER SECRET KEY';
const stripe = require("stripe")(`${SECRET_KEY}`);

// SETUP EXPRESS APP / API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (request, response) => response.status(200).send('hello world'));

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-554ae/us-central1/api










// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
