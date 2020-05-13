"use strict";

$(function(){ 

	$('.product-detail-content').hide();

	$('.product-img').on('click', function(){
		// クリックした要素のIDと違うクラス名のコンテンツを非表示
		$('.product-detail-content').not($('.'+$(this).attr('id'))).hide();
		// クリックした要素のIDと同じクラスのセクションを表示
		// $('.'+$(this).attr('id')).show();
		// 二回押すと非表示
		$('.'+$(this).attr('id')).toggle();
	})

 	

});