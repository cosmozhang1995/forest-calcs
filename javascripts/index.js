var rootPath = '';
// var rootPath = '/forest-calcs';

var currentHash = null;

$(document).on('hashChange', function(event) {
	var theHash = location.hash;
	// if (theHash == currentHash) return;
	currentHash = theHash;
	var refPath = theHash.replace(/^#/, '').replace(/\.\w+$/, '');
	if (refPath === '') refPath = 'index';
	loadPage(refPath);
});

$(document).on('click', 'a', function(event) {
	$(document).trigger('hashChange');
});

$(document).trigger('hashChange');