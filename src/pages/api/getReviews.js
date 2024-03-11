import fetch from 'node-fetch';
//get reviews by api

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const response = await fetch(process.env.URL_REVIEWS);
        const data = await response.json();
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ success: false });
    }
}
