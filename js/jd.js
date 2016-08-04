$(function(){
	//可关闭头部广告的效果
	$('#top_ad').delay(5000).animate({'marginTop':'-70px'},3000);
	//顶部的点击下拉效果
	$('#top .top_main .top_r li.shouji').mouseover(function(event) {
		$(this).children('.topnei,.xia').show();
	}).mouseout(function(event) {
		$(this).children('.topnei,.xia').hide();
	});;

	$('#top .top_main .top_r .li_kehu').hover(function(event) {
		$(this).children('.xiabai').show();
	},function(){
		$(this).children('.xiabai').hide();
	});

	$('#top .top_main .top_r li.li_kong').hover(function(){
		$(this).children('.kong_wang,.kong_wang_da').show();
	},function(){
		$(this).children('.kong_wang,.kong_wang_da').hide();
	});
	//我的京东
	$('#main .main_logo .mine').hover(function(){
		$(this).children('.mine_kong_da').show();
		$('#main .main_logo .mine a.mine_a').addClass('mine_a_a');
		$('#main .main_logo .mine .mine_nei').css('background','white');
		$('#main .main_logo .mine .mine_nei span').addClass('xiajiao2');
		$(this).css('border-bottom','0px');
	},function(){
		$(this).children('.mine_kong_da').hide();
		$('#main .main_logo .mine a.mine_a').removeClass('mine_a_a');
		$('#main .main_logo .mine .mine_nei').css('background','#f7f7f7');
		$('#main .main_logo .mine .mine_nei span').removeClass('xiajiao2');
		$(this).css('border','1px solid #f1f1f1');
	});

	//结算
	$('#main .main_logo .jiesuan').hover(function(){
		$(this).children('.jie').css('background','white');
		$('#main .main_logo .jiesuan .jie a').addClass('jiejie');
		$(this).children('.jie_kong_da').show();
		$('#main .main_logo .jiesuan .youjiao').addClass('youjiao2');
		$(this).css('border-bottom','0px');
	},function(){
		$(this).children('.jie').css('background','#f7f7f7');
		$('#main .main_logo .jiesuan .jie a').removeClass('jiejie');
		$(this).children('.jie_kong_da').hide();
		$('#main .main_logo .jiesuan .youjiao').removeClass('youjiao2');
		$(this).css('border','1px solid #f1f1f1');
	});
	//搜索框里面的点击消失
	$('.shuru').focus(function(event) {
		if($(this).val()=='平板电脑'){
			$(this).val('');
		}
	});
	$('.shuru').blur(function(event) {
		if($(this).val()==''){
			$(this).val('平板电脑');
		}
	});
	//轮换图效果
	var lun=0;
	var timer=null;
	timer=setInterval(function(){
		lun++;
		if(lun==6){
			lun=0;
		}
		$('#main .middle .middle_m .qiehuan_da .qiehuan_da_tu span').eq(lun).addClass('active').siblings('span').removeClass('active');
		$('#main .middle .middle_m .qiehuan_da a').eq(lun).fadeIn().siblings('a').fadeOut();
	},1000);
	var index;
	$('#main .middle .middle_m .qiehuan_da .qiehuan_da_tu span').mouseover(function(){
		clearInterval(timer);
		index=$(this).index();
		lun=index;
		$(this).addClass('active').siblings('span').removeClass('active');
		$('#main .middle .middle_m .qiehuan_da a').eq(index).fadeIn().siblings('a').fadeOut();
	});
	$('#main .middle .middle_m .qiehuan_da .qiehuan_da_tu span').mouseout(function(){
		timer=setInterval(function(){
		lun++;
		if(lun==6){
			lun=0;
		}
		$('#main .middle .middle_m .qiehuan_da .qiehuan_da_tu span').eq(lun).addClass('active').siblings('span').removeClass('active');
		$('#main .middle .middle_m .qiehuan_da a').eq(lun).fadeIn().siblings('a').fadeOut();
		},1000);
	});

	//左侧的竖着的分类
	$('#main .middle .middle_l li').mouseover(function(event) {
		// $(this).children('.bao').addClass('hover');
		$(this).children('.bao').css({'border-bottom':'0px'});
		$(this).children('.bao').children('.kong').show();
		$(this).children('.youkuang').show();
	}).mouseout(function(event) {
		$(this).children('.bao').css({'border-bottom':'1px solid white'});
		$(this).children('.bao').children('.kong').hide();
		$(this).children('.youkuang').hide();
	});

	////轮换图效果下面的小图点击切换效果
	var c=0;
	function yundong(){
		
		
		var juli=lunhuan.css('left');
		// alert(lunhuan.css('left'));
		lunhuan.animate({'left':'-='+608*speed+'px'},300);
		if(speed==1){
			var x=608*speed;
			lunhuan.stop().animate({'left':'-='+x+'px'},300);
			if(parseInt(lunhuan.css('left'))<=-1824){
				lunhuan.stop().css({'left':'0px'});
				lunhuan.stop().animate({'left':'-608px'},300);
			}
			// document.title=lunhuan.css('left');
		}else{
			//向右走
			// if(parseInt(juli)>=0){
			// lunhuan.stop().animate({'left':'-1216px'},300);
			// }

		}
		
		// console.log(lunhuan.css('left'));
		
	}
	var lunhuan=$('#main .middle .middle_m .qiehuan_xiao .qiehuan_xiao_gun .gun');
	//左边的图标
	var left_san=$('#main .middle .middle_m .qiehuan_xiao .left_san');
	var left_san_span=$('#main .middle .middle_m .qiehuan_xiao .left_san span');
	//左边的图标鼠标移动上去
	left_san.mouseover(function(event) {
		$(this).css('background','#f5f5f5');
		left_san_span.addClass('yin');
	});
	//左边的图标鼠标移动出去
	left_san.mouseout(function(event) {
		$(this).css('background','#fff');
		left_san_span.removeClass('yin');
	});
	//左边的图标鼠标点击
	left_san.click(function(){
		c--;
		lunhuan.stop().animate({'left':'-=608px'},100);
		if(c==-4){
			lunhuan.stop().css({'left':'0px'});
			lunhuan.stop().animate({'left':'-608px'},100);
			c=-1;
		}
		// document.title=c;
	});
	//右边的图标鼠标移动上去
	var right_san=$('#main .middle .middle_m .qiehuan_xiao .right_san');
	var right_san_span=$('#main .middle .middle_m .qiehuan_xiao .right_san span');
	right_san.mouseover(function(event) {
		$(this).css('background','#f5f5f5');
		right_san_span.addClass('yin2');
	});
	//左边的图标鼠标移动出去
	right_san.mouseout(function(event) {
		$(this).css('background','#fff');
		right_san_span.removeClass('yin2');
	});
	right_san.click(function(){
		c++;
		lunhuan.stop().animate({'left':'+=608px'},100);
		if(c==1){
			lunhuan.stop().css({'left':'-1824px'});
			lunhuan.stop().animate({'left':'-1216px'},100);
			c=-2;
		}
	});

	//轮播图右侧的小图标的移动
	$('#main .middle .middle_r  .huafei ul .huafeia').hover(function(){
		var index=$(this).index();
		var juli=($(this).outerWidth())*index;
		$('#main .middle .middle_r  .huafei ul span.yuanbiao').stop().animate({'left':juli+'px'},300);
		$(this).parent('ul').siblings('.biaodan').eq(index).show().siblings('.biaodan').hide();
	});
	$('#main .middle .middle_r  .huafei .biaodan ul li').hover(function(){
		var index=$(this).index();
		$(this).parent('ul').siblings('.dan').children('div').eq(index).show().siblings('div').hide();
	});

	//生活橱窗里面的特效
	$('.neirong li').hover(function(){
		$(this).children('img').animate({'left':-10},150);
	},function(){
		$(this).children('img').animate({'left':0},150);
	
	});

	//家电上面的导航分类栏目
	$('#main .jiadian .jiadian_m .jiadian_fenlei li').hover(function(){
		var index=$(this).index();
		$(this).css('color','#E4393C').siblings('li').css('color','#666');
		$(this).parent('.jiadian_fenlei').siblings('.xianei').children('ul').eq(index).show().siblings('ul').hide();
		$(this).parent('.jiadian_fenlei').parent('.jiadian_m').children('.yi').stop().animate({'left':160*index+'px'},300);
	
	});

	//家电中间的图片点击切换
	$('#main .jiadian .jiadian_m .xianei .jiadian_img li.da p span').mouseover(function(event) {
		var index=$(this).index();
		$(this).addClass('xuan').siblings().removeClass('xuan');
		$(this).parent('p').siblings('a').eq(index).show().siblings('a').hide();

	});

	//家电的小图鼠标一上去就有模糊效果
	$('#main .jiadian .jiadian_m .xianei .jiadian_img li a.jiadian_img_a').hover(function(){
		$(this).css('opacity',0.5).siblings().css('opacity',1);
	},function(){
		$(this).css('opacity',1);
	});

	//家电右侧的两个图片之间的切换
	$('#main .jiadian .jiadian_r .jiadian_r_ul li.last span.zuo').mouseover(function(){
		$(this).css('background','#7ABD54').siblings('span').css('background','#999');
		$(this).siblings('a').children('img').eq(0).show();
		$(this).siblings('a').children('img').eq(1).hide();
	});

	$('#main .jiadian .jiadian_r .jiadian_r_ul li.last span.you').mouseover(function(){
		$(this).css('background','#7ABD54').siblings('span').css('background','#999');
		$(this).siblings('a').children('img').eq(1).show();
		$(this).siblings('a').children('img').eq(0).hide();
	});

	//热门晒单效果
	setInterval(function(){
		var yuansu=$('#main .remen .remen_l li dl').eq(0).children('dd').last();
		$('#main .remen .remen_l li dl').eq(0).children('dd').eq(0).before(yuansu);
		$('#main .remen .remen_l li dl').eq(0).children('dd').eq(0).css('height',0);
		$('#main .remen .remen_l li dl').eq(0).children('dd').eq(0).animate({'height':'70px'},300)
	},2500);
	setInterval(function(){
		var yuansu=$('#main .remen .remen_l li dl').eq(1).children('dd').last();
		$('#main .remen .remen_l li dl').eq(1).children('dd').eq(0).before(yuansu);
		$('#main .remen .remen_l li dl').eq(1).children('dd').eq(0).css('height',0);
		$('#main .remen .remen_l li dl').eq(1).children('dd').eq(0).animate({'height':'70px'},300)
	},3500);

	//订阅促销信息
	$('.remen_shuru').focus(function(event) {
		if($(this).val()=='请输入您的Email地址'){
			$(this).val('');
		}
	});
	$('.remen_shuru').blur(function(event) {
		if($(this).val()==''){
			$(this).val('请输入您的Email地址');
		}
	});
});