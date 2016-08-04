/* 
* @Author: admin
* @Date:   2014-05-12 22:35:35
* @Last Modified by:   admin
* @Last Modified time: 2014-05-13 00:19:11
*/

$(document).ready(function(){
    //一周销量排行
    $('#content .l .xiao li').mouseover(function(event) {
    	$(this).children('.hide').show().siblings('p.show').hide();
    }).mouseout(function(event) {
    	$(this).children('p.show').show().siblings('.hide').hide();
    });
    //商品筛选
    var biao=1;
    $('#content .r .shaixuan li.pin .more').click(function(){
    	if(biao==1){
    		biao=2;
    		$('#content .r .shaixuan li.pin .r .hide').show();
    	}else{
    		biao=1;
    		$('#content .r .shaixuan li.pin .r .hide').hide();
    	}
    });
    $('#content .r .shaixuan li.pin .r .hide h3 span').mouseover(function(){
    	var index=$(this).index();
    	$(this).css({'background':'#4598D2','color':'white'}).children('b').show();
    	$(this).siblings('span').css({'background':'white','color':'#005AA0'}).children('b').hide();
    	$('#content .r .shaixuan li.pin .r .hide .bao').children('div').eq(index).show().siblings('div').hide();
    });
});