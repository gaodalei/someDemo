$.ajax({
	type:"get",
	url:"https://api.douban.com/v2/movie/in_theaters",
	async:true,
	dataType:"jsonp",
	success:function(data){
		for (var i = 0; i < 20; i++) {
			var url=data.subjects[i].images.large;
		}
//		$(".hot_pic").css("background","url("+url+")");
	}
})
