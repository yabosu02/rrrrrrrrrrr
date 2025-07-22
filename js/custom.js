$(document).ready(function(){  		

	
	$("article").on("mouseover",function(){		// 마우스 오버시
		$(this).stop().animate({"width":"35%"},1000, function(){  // 콜백함수 :  앞의 내용이 다 실행된후 실행되는 함수
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"10px"},400);
			$(this).find("p").stop().animate({"right":"10px"},800);	
		});
		$(this).find("video").stop().animate({"opacity":"0.9"},1200);			
		var vid = $(this).find("video").get(0);// 변수 vid에 video파일 참조
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
		var vid = $(this).find("video").get(0);// 변수 vid에 video파일 참조		
		vid.pause();// 동영상을 정지
			
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-310px"},200);
		$(this).find("p").stop().animate({"right":"-310px"},500);	
	});

});















