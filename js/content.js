// 详细内容页面的js特效
$(document).ready(function(){

	//放大镜效果
	//鼠标放上去的效果
	$('#fang .fang_l .tu .gai').mouseover(function(){
		$('#fang .fang_l .tu span').show();
		$('#fang .fang_l .tu div.large ').show();
	});
	$('#fang .fang_l .tu .gai').mouseout(function(){
		$('#fang .fang_l .tu span').hide();
		$('#fang .fang_l .tu div.large ').hide();
	});
	//鼠标移动的效果
	$('#fang .fang_l .tu .gai').mousemove(function(e){
		//获得鼠标距离u元素的左边距离
		var tu_left=e.pageX-$('#fang .fang_l .tu').offset().left;
		//获得鼠标距离元素的上边距离
		var tu_top=e.pageY-$('#fang .fang_l .tu').offset().top;
		//获得小滑块的left值
		var span_width_ban=$('#fang .fang_l .tu span').width()/2;
		var span_left=tu_left-span_width_ban;
		//限制左右边界
		if(span_left<=0){
			span_left=0;
		}
		if(span_left>=175){
			span_left=175;
		}
		//获得小滑块的top值
		var span_height_ban=$('#fang .fang_l .tu span').height()/2;
		var span_top=tu_top-span_height_ban;
		//限制上下边界
		if(span_top<=0){
			span_top=0;
		}
		if(span_top>=175){
			span_top=175;
		}
		$('#fang .fang_l .tu span').css({'left':span_left+'px','top':span_top+'px'});
		//获取百分比
		var you_ji=$('#fang .fang_l .tu div.large img').width()-$('#fang .fang_l .tu div.large').width();
		var percent=175/you_ji;
		var left=span_left/percent;
		var top=span_top/percent;
		$('#fang .fang_l .tu div.large img').css({'left':-left+'px','top':-top+'px'});
	});
	//下面的一排小图的鼠标经过效果
	var xiao_tu=$('#fang .fang_l .lie .lie_m ul li');//单个小图
	var chang_tu=$('#fang .fang_l .lie .lie_m ul');//一排小图的长条
	xiao_tu.mouseover(function(){
		$(this).css('border','2px solid red').siblings('li').css('border','2px solid #CECFCE');
		var src=$(this).children('img').attr('src');
		$('#fang .fang_l .tu div.large img').attr('src',src);
		$('#fang .fang_l .tu a img').attr('src',src);
	});
	//js控制ul的长度
	var chang_width=xiao_tu.size()*(xiao_tu.width()+12);
	chang_tu.css('width',chang_width+'px');
	var i=xiao_tu.size();
	//ul的左右极限
	var zuo_lin=xiao_tu.width()-chang_tu.width();
	var you_lin=0;
	//点击左移动
	$('#fang .fang_l .lie .lie_l').click(function(){
		if(chang_width>$('#fang .fang_l .lie .lie_m').width()&&chang_tu.offset().left>zuo_lin){
			if(i<=5){
				i=5;
				return false;
			}
			document.title=xiao_tu.size()-4
			$('#fang .fang_l .lie .lie_m ul').animate({'left':'-=62px'});
			i--;
		}else{
			return false;
		}
	});
	//点击右移动
	$('#fang .fang_l .lie .lie_r').click(function(){
		if(i<xiao_tu.size()){
			i++;
			$('#fang .fang_l .lie .lie_m ul').animate({'left':'+=62px'});
		}else{
			return false;
		}
	});
	//商品评价 售后服务  商品规格
	$('#content .content_r .piao ul li').click(function(){
		var index=$(this).index();
		$(this).addClass('dian').siblings('li').removeClass('dian');
		$('#content .content_r .jj').eq(index).show().siblings('.jj').hide();

	});
	//单反相机排行榜区域
	$('#content .content_l .pai .biao li').click(function(){
		var index=$(this).index();
		$('#content .content_l .pai div.nei').eq(index).show().siblings('#content .content_l .pai div.nei').hide();
	});

});