import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    const url = req.url;
    res.json({ masssage: url });
});

router.get('/about', (req, res) => {
    const url = req.url;
    res.json({ masssage: url });
});

export { router };