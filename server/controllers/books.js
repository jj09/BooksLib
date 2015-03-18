'use strict';

var Book = require('mongoose').model('Book');

// Create

// Read

exports.getBooks = function (req, res) {
	Book.find({}).exec(function (err, collection) {
		res.send(collection);
	});
};

exports.getBookById = function (req, res) {
	Book.findOne({_id: req.params.id}).exec(function (err, book) {
		res.send(book);
	});
};

exports.getFavoriteBooks = function (req, res) {
	Book.find({isFavorite: true}).exec(function (err, collection) {
		res.send(collection);
	});
};

exports.getTop10Books = function (req, res) {
	Book.find({}).sort({votes:-1}).limit(10).exec(function (err, collection) {
		res.send(collection);
	});
};

// Update

exports.upvoteBookById = function (req, res, next) {
	Book.findOne({_id: req.params.id}).exec(function (err, book) {
		if (err) {
			return next(err);
		}		

		book.votes += 1;
		book.save(function (err) {
			if (err) {
				return next(err);
			}
		});
		res.json(book);
	});
};

exports.favoriteBookById = function (req, res, next) {
	Book.findOne({_id: req.params.id}).exec(function (err, book) {
		if (err) {
			return next(err);
		}

		book.isFavorite = !book.isFavorite;
		book.save(function (err) {
			if (err) {
				return next(err);
			}
		});
		res.json(book);
	});
};

// Delete