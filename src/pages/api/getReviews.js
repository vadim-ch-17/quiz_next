import fetch from 'node-fetch';
//get reviews by api

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const response = await fetch('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request%5Bslug%5D=codevery-quiz');
        const data = await response.json();
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ success: false });
    }
}
