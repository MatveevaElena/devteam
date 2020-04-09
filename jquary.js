<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
	function test(id) {
    	var element = $('#test1');
        var elementInput = $('#test-input');
        
        console.log( elementInput.val() );
        
        //element.hide();
        if (element.css('display') == 'none') {
        	element.css({'display': 'block'});
        } else {
        	element.css({'display': 'none'});
        }
        //console.log(element.css('display'));
        element.html('<p>123</p><p>456</p><p>879</p>');
        element.css({'height': '100px', 'background-color': 'green'});
    	
        
    }
    
    $(document).ready(function(){
		/*var testObgect = {height: 100, 'test': 123, testO: {'testinner': 'sdfsdf'}};
        console.log(testObgect, testObgect.height);
        var testArray = [
        	testObgect,testObgect
        ];
        console.log(testArray, testArray[2]);*/
        
        $('#test-input').change(function(){
        	var element = $('#test2');
        	var value = $(this).val();
            element.html(value);
            console.log( $(this).val() );
        })
        
        $('.button2').click(function(){
        	var heigh = $(this).css('height');
            var width = $(this).css('width');
            var newHeigh = parseFloat(heigh.replace('px', ''))+20+'px';
            var newWidth = parseFloat(width.replace('px', ''))+20+'px';
            
            console.log(heigh, width, newHeigh, newWidth);
            
        	//$(this).css({height: newHeigh, width: newWidth});
            $(this).animate({
              left: '250px',
              opacity: '0.5',
              height: '150px',
              width: '150px'
            }, "slow");
        });
	});
</script>
<style>
	
.cssload-preloader {
	font-family: Arial, Tahoma;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 10;
	display: box;
		display: -o-box;
		display: -ms-box;
		display: -webkit-box;
		display: -moz-box;
	display: flex;
		display: -o-flex;
		display: -ms-flex;
		display: -webkit-flex;
		display: -moz-flex;
	box-pack: center;
		-o-box-pack: center;
		-ms-box-pack: center;
		-webkit-box-pack: center;
		-moz-box-pack: center;
	justify-content: center;
		-o-justify-content: center;
		-ms-justify-content: center;
		-webkit-justify-content: center;
		-moz-justify-content: center;
	box-align: center;
		-o-box-align: center;
		-ms-box-align: center;
		-webkit-box-align: center;
		-moz-box-align: center;
	align-items: center;
		-o-align-items: center;
		-ms-align-items: center;
		-webkit-align-items: center;
		-moz-align-items: center;
	transform-style: preserve-3d;
		-o-transform-style: preserve-3d;
		-ms-transform-style: preserve-3d;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
	perspective: 487px;
		-o-perspective: 487px;
		-ms-perspective: 487px;
		-webkit-perspective: 487px;
		-moz-perspective: 487px;
	overflow: hidden;
	animation: wobble 5.75s ease-in-out infinite;
		-o-animation: wobble 5.75s ease-in-out infinite;
		-ms-animation: wobble 5.75s ease-in-out infinite;
		-webkit-animation: wobble 5.75s ease-in-out infinite;
		-moz-animation: wobble 5.75s ease-in-out infinite;
	padding-bottom: 2em;
}


.cssload-preloader > span {
	font-size: 49px;
	animation: 5.75s ease-in-out infinite;
		-o-animation: 5.75s ease-in-out infinite;
		-ms-animation: 5.75s ease-in-out infinite;
		-webkit-animation: 5.75s ease-in-out infinite;
		-moz-animation: 5.75s ease-in-out infinite;
	color: transparent;
	text-shadow: 0 0 0px rgb(0,0,0);
}
span:nth-child(-n+3) {
	animation-delay: -2.88s;
		-o-animation-delay: -2.88s;
		-ms-animation-delay: -2.88s;
		-webkit-animation-delay: -2.88s;
		-moz-animation-delay: -2.88s;
}

span:nth-child(1),
span:nth-last-child(1) {
	animation-name: blur-1;
		-o-animation-name: blur-1;
		-ms-animation-name: blur-1;
		-webkit-animation-name: blur-1;
		-moz-animation-name: blur-1;
}



span:nth-child(2),
span:nth-last-child(2) {
	animation-name: blur-2;
		-o-animation-name: blur-2;
		-ms-animation-name: blur-2;
		-webkit-animation-name: blur-2;
		-moz-animation-name: blur-2;
}



span:nth-child(3),
span:nth-last-child(3) {
	animation-name: blur-3;
		-o-animation-name: blur-3;
		-ms-animation-name: blur-3;
		-webkit-animation-name: blur-3;
		-moz-animation-name: blur-3;
}






@keyframes blur-1 {
	50% {
		text-shadow: 0 0 0.15em rgb(0,0,0);
	}
}

@-o-keyframes blur-1 {
	50% {
		text-shadow: 0 0 0.15em rgb(0,0,0);
	}
}

@-ms-keyframes blur-1 {
	50% {
		text-shadow: 0 0 0.15em rgb(0,0,0);
	}
}

@-webkit-keyframes blur-1 {
	50% {
		text-shadow: 0 0 0.15em rgb(0,0,0);
	}
}

@-moz-keyframes blur-1 {
	50% {
		text-shadow: 0 0 0.15em rgb(0,0,0);
	}
}

@keyframes blur-2 {
	50% {
		text-shadow: 0 0 0.075em rgb(0,0,0);
	}
}

@-o-keyframes blur-2 {
	50% {
		text-shadow: 0 0 0.075em rgb(0,0,0);
	}
}

@-ms-keyframes blur-2 {
	50% {
		text-shadow: 0 0 0.075em rgb(0,0,0);
	}
}

@-webkit-keyframes blur-2 {
	50% {
		text-shadow: 0 0 0.075em rgb(0,0,0);
	}
}

@-moz-keyframes blur-2 {
	50% {
		text-shadow: 0 0 0.075em rgb(0,0,0);
	}
}

@keyframes blur-3 {
	50% {
		text-shadow: 0 0 0.05em rgb(0,0,0);
	}
}

@-o-keyframes blur-3 {
	50% {
		text-shadow: 0 0 0.05em rgb(0,0,0);
	}
}

@-ms-keyframes blur-3 {
	50% {
		text-shadow: 0 0 0.05em rgb(0,0,0);
	}
}

@-webkit-keyframes blur-3 {
	50% {
		text-shadow: 0 0 0.05em rgb(0,0,0);
	}
}

@-moz-keyframes blur-3 {
	50% {
		text-shadow: 0 0 0.05em rgb(0,0,0);
	}
}

@keyframes wobble {
	from, to {
		transform: rotateY(-45deg);
	}
	50% {
		transform: rotateY(45deg);
	}
}

@-o-keyframes wobble {
	from, to {
		-o-transform: rotateY(-45deg);
	}
	50% {
		-o-transform: rotateY(45deg);
	}
}

@-ms-keyframes wobble {
	from, to {
		-ms-transform: rotateY(-45deg);
	}
	50% {
		-ms-transform: rotateY(45deg);
	}
}

@-webkit-keyframes wobble {
	from, to {
		-webkit-transform: rotateY(-45deg);
	}
	50% {
		-webkit-transform: rotateY(45deg);
	}
}

@-moz-keyframes wobble {
	from, to {
		-moz-transform: rotateY(-45deg);
	}
	50% {
		-moz-transform: rotateY(45deg);
	}
}
</style>
</head>
<body>

	<button onclick='test(123)'>test</button>
	<div id='test1' test-attr='987' style='height: 20px; width: 30px; background-color: red;'>kkk</div>
    
    <p>---------</p>
    
    <input type='text' id='test-input' />
	<div id='test2' style='height: 50px; width: 173px; background-color: red;'></div>
    
    <br><br>
    
	<button class='button2'>One</button>
	<button class='button2'>Two</button>
	<button class='button2'>Three</button>


  <div class="cssload-preloader">
          <span>C</span>
          <span>U</span>
          <span>C</span>
          <span>U</span>
          <span>M</span>
          <span>B</span>
          <span>E</span>
          <span>R</span>

  </div>

</body>
</html>
