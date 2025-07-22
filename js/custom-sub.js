$(document).ready(function(){  		

	// 마우스 오버시
	$("article").on("mouseover",function(){		
	    /*
	    $(this).stop().animate({"width":"35%"},1000); // 1초동안 넓이 값을 35%로 늘려준다.
	    $(this).find("video").stop().animate({"opacity":"0.9"},1200);	// $(this) 선택자를 이용하여 해당 article 요소를 기준으로 <video>태그를 찾은 뒤 1.2초에 걸쳐 투명도를 0.9로 변경한다.
	    */
	 // ------------------- 콜백함수 이용 ----------------------
		
		$(this).stop().animate({"width":"35%"},1000, function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);	
		});
		$(this).find("video").stop().animate({"opacity":"0.9"},1200);	

		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		/*
			get () 메서드는 선택기에서 지정한 DOM 요소를 가져옵니다.
						$(selector).get(index);
			
			$("li").get(0);  --- 첫번째 li를 가져온다.
			$("li").get(3);  --- 네번째 li를 가져온다.
			$("li").get(-2);  --- 끝에서 두번째 li를 가져온다.
		*/
		
		vid.currentTime=0;
		// 동영상을 재생...동영상의 재생위치를 처음(0)이나 지정한(8초)으로 설정
		//currentTime 속성은 오디오 / 비디오 재생의 현재 위치 (초)를 설정하거나 반환합니다. 이 속성을 설정하면 재생이 지정된 위치로 점프됩니다.
		vid.play();	
		
	});
	
	// 마우스 아웃시
	$("article").on("mouseout",function(){		
		/*
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상을 정지
		vid.pause();
		*/	
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-310px"},200);
		$(this).find("p").stop().animate({"right":"-310px"},500);	
	});


/*  서브메뉴 추가부분 수정 요망	
	$("footer ul li a.aa").mouseenter(function(){
		$(this).siblings("ul").addClass("on");
	});
	
	$("footer ul li a.aa").mouseout(function(){
		$(this).siblings("ul").removeClass("on");
	});

*/	
});















