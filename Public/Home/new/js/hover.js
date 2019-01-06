// JavaScript Document

//下拉菜单
$(function(){
	if(screen.width > 767){
		$(document).ready(function(){
			$(document).off('click.bs.dropdown.data-api');
		});
		$(document).ready(function(){
			dropdownOpen();//调用
		});
		/*** 鼠标划过就展开子菜单，免得需要点击才能展开 */
		function dropdownOpen() {
			var $dropdownLi = $('li.dropdown');
			$dropdownLi.mouseenter(function() {
			$(this).addClass('open');			
			$(this).find('.dropdown-menu').fadeIn(100);
			}).mouseleave(function() {
			$(this).removeClass('open');			 
			$(this).find('.dropdown-menu').fadeOut(100);
			 });
			}
		}
		//导航滚动改变颜色
		window.onscroll = function () {
		if ($(document).scrollTop() > 200) {
			$(".navbar-default").addClass('navbar-default-b');
			$(".navbar-default").css('margin-top','-1px');
			//$(".navbar-brand img").attr("src","images/logoh.png");
			//$(".case_con_title").addClass('case_con_title_fixed');
		} else {
			$(".navbar-default").removeClass('navbar-default-b');
			$(".navbar-default").css('margin-top','auto');
			//$(".navbar-brand img").attr("src","images/logo.png");
			//$(".case_con_title").removeClass('case_con_title_fixed');
		}
	}
	//头部联系我们按钮

	$(".in_contact_but").mouseover(function(){
		$(".in_con_pop").show();
	});
	$(".inClose").click(function(){
		$(".in_con_pop").hide();
	})


	//banner下面的三条
	$('.inb_but').hover(
		function(){
			$(this).addClass('inb_but_color')
		},function(){
			$(this).removeClass('inb_but_color')
		}	
	);
	//创狮服务

	$('.in_service_con').hover(
		function(){
			$(this).addClass('in_sercon');
			$(this).find('.b-pic').show().siblings('.h-pic').hide();		
		},function(){
			$(this).removeClass('in_sercon');
			$(this).find('.h-pic').show().siblings('.b-pic').hide();
		}	
	);

	//服务优势
	$('.inadv_con').hover(
		function(){
			$(this).addClass('inadv_congl');			
		},function(){
			$(this).removeClass('inadv_congl');
		}	
	);

		 //创狮观点鼠标经过事件	 
	$('.inNewsr a').hover(
		function(){
		 $(this).addClass('textwhite')
		},
		function(){
		 $(this).removeClass('textwhite')
		}
	)
	$('.inNewsr_con1').hover(
		function(){
		 $(this).addClass('textwhitel')
		},
		function(){
		 $(this).removeClass('textwhitel')
		}
	)
	$(function(){
	 $(".titclass ol li").hover(function(){
	 $(this).addClass("act").siblings().removeClass("act"); //切换选中的按钮高亮状态
	 var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
	 $(".tab-box-con").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
	 });
	});

	//$(".in_service_con").mouseover(function () {
	//  $(".in_service_con h4").attr("style"," color:#fff");
	//  $(".in_service_con ul li a").attr("style"," color:#fff !important");
	// });
	// $(".in_service_con").mouseout(function () {
	//  $(this).attr("style","color:#333");
	//   $(".in_service_con ul li a").attr("style"," color:#fff !important");
	// });
});

