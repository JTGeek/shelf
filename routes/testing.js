
module.exports = (site) => {
	const express = require('express');
	const router = express.Router();

	router.get('/', (req, res) => {
		const comiclist = require('comic-list');
		comiclist().then(comics => {
			res.send('<pre>' + JSON.stringify(comics, null, 2) + '</pre>');
		});
	});

	return router;
};
