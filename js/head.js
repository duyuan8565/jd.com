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
	$('#main .menu .menu_l').hover(function(){
		$('#main .menu .menu_l .middle_l').show();
	},function(){
		$('#main .menu .menu_l .middle_l').hide();
	});
	//左侧的竖着的分类
	$('#main .menu .menu_l .middle_l li').mouseover(function(event) {
		// $(this).children('.bao').addClass('hover');
		$(this).children('.bao').css({'border-bottom':'0px'});
		$(this).children('.bao').children('.kong').show();
		$(this).children('.youkuang').show();
	}).mouseout(function(event) {
		$(this).children('.bao').css({'border-bottom':'1px solid white'});
		$(this).children('.bao').children('.kong').hide();
		$(this).children('.youkuang').hide();
	});
	
});