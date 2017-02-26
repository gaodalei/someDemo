$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/movie/in_theaters",
	async:true,
	dataType:"jsonp",
	success:function(data){
		for (var i = 0; i < 20; i++) {
			var url=data.subjects[i].images.medium;
			$(".hot_pic").eq(i).css("background","url("+url+")");
		}
//		$(".hot_pic").css("background","url("+url+")");
	}
})
$(function(){
	var bimg = $(".hot_movie_bottom div");
	var Wid = bimg.width();
	var i=0;
	function go(){
			bimg.eq(i).show().animate({left:-Wid});
			i++;
			if (i == bimg.length) {i = 0};
			bimg.eq(i).css("left",Wid).show().animate({left:'0px'});
			
		}
		setInterval(go,2000);
})