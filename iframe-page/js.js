var IFRAMEHELPER = function(){
	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	$('body').on('click', '.closeForm', function(){
		if($('form').hasClass('xHidden')) {
			$('form').removeClass('xHidden');
		} else {
			$('form').addClass('xHidden');
		}
		return false;
	});

	if(typeof NGX != 'undefined') {
		$('form').addClass('xHidden');

		$('form textarea').val(getUrlParameter('code'));

		$.ajax({
			url: 'https://api-ssl.bitly.com/v3/shorten',
			type: 'get',
			data: {
				'access_token': 'ccce0769d3cab20dd9b4cf5cb56e9549b9d661db',
				'longUrl': window.location.href,
				'format': 'txt'
			},
			success: function(msg) {
				console.log(msg);
				$('form .inner').append('<div class="bitlyLink"><p>Your bit.ly link: <input value="' + msg +'"></input></p></div>');
				$('form').addClass('bitlyLink');
			}
		});
	}
};

$(document).ready(function(){
	IFRAMEHELPER();
});