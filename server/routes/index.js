'use strict';

var express = require('express'),
	router = express.Router(),
	books = require('../controllers/books');

router.get('/api/books', books.getBooks);
router.get('/api/books/favorites', books.getFavoriteBooks);
router.get('/api/books/top10', books.getTop10Books);
router.get('/api/books/:id', books.getBookById);

router.put('/api/books/upvote/:id', books.upvoteBookById);
router.put('/api/books/favorite/:id', books.favoriteBookById);


router.get('/partials/*', function (req, res) {
	res.render('partials/' + req.params[0]);
});

router.get('*', function(req, res) {
	res.render('index');
});

module.exports = router;
