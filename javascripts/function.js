function loadPage(path) {
	var elId = 'page-' + path,
		el = $('#container > section#' + elId);
	if (el.length > 0) {
		el.show().siblings('section').hide();
	} else {
		$.ajax({
			url: 'pages/' + path + '.html',
			type: 'GET'
		})
		.done(function(res) {
			$('#container').children('section').hide();
			$('<section id="' + elId + '"></section>').append(res).appendTo('#container');
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
}