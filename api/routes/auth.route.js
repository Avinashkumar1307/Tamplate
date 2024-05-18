import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const route = express.Router();

// Define a route, for example, a GET route on the root path
route.get('/', (req, res) => {
    res.send('Hello, world!');
});

route.post('/signup', signup);

export default route;
