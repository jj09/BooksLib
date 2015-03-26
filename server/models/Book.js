'use strict';

var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title: {type: String, required: '{PATH} is required!'},
	author: {type: String, required: '{PATH} is required!'},
	coverUrl: {type: String, required: '{PATH} is required!'},
	votes: {type: Number, default: 0},
	isFavorite: {type: Boolean, default: false}
});

var Book = mongoose.model('Book', bookSchema);

function createDefaultBooks() {
	Book.find({}).exec(function (err, collection) {
		if (collection.length === 0) {
			Book.create({title: 'The Pragmatic Programmer: From Journeyman to Master', author: 'Andrew Hunt', coverUrl: 'http://jj09.net/wp-content/uploads/2013/07/the_pragmatic_programmer.jpg'});
			Book.create({title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert Martin', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Martin-Clean-Code-225x300.jpg'});
			Book.create({title: 'Smart and Gets Things Done', author: 'Joel Spolsky', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Smart-and-Gets-Things-Done-Joel-Spolskys-Concise-Guide-to-Finding-the-Best-Technical-Talent-183x300.png'});
			Book.create({title: 'The Passionate Programmer', author: 'Chad Fowler', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Chad-Fowler-The-Passionate-Programmer-200x300.jpg'});
			Book.create({title: 'Practical Unix & Internet Security', author: 'Simson Garfinkel', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Practical-Unix-Internet-Security-3rd-Edition.gif'});
			Book.create({title: 'Introduction to Algorithms', author: 'Thomas Cormen', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Cormen-Introduction-to-Algorithms-266x300.png'});
			Book.create({title: 'Computer Networks', author: 'Andrew Tanenbaum', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Tanenbaum-Computer-Networks-5th-edition-227x300.jpg'});
			Book.create({title: 'Operating System Concepts', author: 'Abraham Silberschatz', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/Silberschatz-Operating-System-Concepts-210x300.jpg'});
			Book.create({title: 'Getting Things Done', author: 'David Allen', coverUrl: 'http://jj09.net/wp-content/uploads/2013/06/David-Allen-Getting-Things-Done.jpg'});
			Book.create({title: 'The Elements of Computing Systems', author: 'Noam Nisan', coverUrl: 'http://jj09.net/wp-content/uploads/2013/08/the_elements_of_computing_systems.jpg'});
			Book.create({title: 'Effective JavaScript', author: 'David Herman', coverUrl: 'http://jj09.net/wp-content/uploads/2014/11/EffectiveJavaScriptCover.jpg'});
			Book.create({title: 'JavaScript The Good Parts', author: 'Douglas Crockford', coverUrl: 'http://ecx.images-amazon.com/images/I/71M32wxOOmL.jpg'});
			Book.create({title: 'Rework', author: 'DHH', coverUrl: 'http://37signals.com/rework/images/front-cover.png'});
			Book.create({title: 'Remote', author: 'DHH', coverUrl: 'http://37signals.com/images/remote/remote_front.png'});
			Book.create({title: 'Clean Coder: A Code of Conduct for Professional Programmers', author: 'Robert Martin', coverUrl: 'http://ecx.images-amazon.com/images/I/81AZxqehh-L.jpg'});
			console.log('Books initialized');
		}
	});
}

exports.createDefaultBooks = createDefaultBooks;