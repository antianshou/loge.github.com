$(function() {
	$('#text1').click(function() {
		alert('还在筹备中');
	});
	$('#text2').click(function() {
		alert('请耐心等待博主更新！')
	});
	$('#text3').click(function() {
		alert('您的权限不够，请提升权限！');
	});
	$('#text4').click(function() {
		alert('请耐心等待博主更新！')
	});
	$('#text5').click(function() {
		alert('请耐心等待博主更新！')
	});
})
$(function() {
	var $news = $('.rolling ul'),
		fadeInSpeed = 1000,
		timer, speed = 3000;

	function newsScroll() {
		var $last = $news.find('li:last');
		$last.clone().hide().prependTo($news).fadeIn(fadeInSpeed, function() {
			timer = setTimeout(newsScroll, speed);
		});
		$last.remove();
	}
	timer = setTimeout(newsScroll, speed);
})