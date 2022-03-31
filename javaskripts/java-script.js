// FIRST PATH
$( document ).ready(function(){
	  $( ".button_12" ).click(function(){
	    $( ".first_path_1" ).animate({left: "-=100%"}, 18500);
	    $( ".first_path_white" ).animate({left: "-=100%"}, 18500);
	  });
    });

$( document ).ready(function(){
	  $( ".button_13" ).click(function(){
	    $( ".first_path_1" ).stop();
	    $( ".first_path_white" ).stop();
	  });
    });

$( document ).ready(function(){
      $(".button_11").on( "click", function() {
        $(".music_visual_1").toggleClass( "newClass", 1000 );
      });
    });

$( document ).ready(function(){
      $(".button_11").on( "click", function() {
        $(".first_path_1").toggleClass( "newerClass", 1000 );
      });
    });
// FIRST PATH


// SECOND PATH
$( document ).ready(function(){
	  $( ".button_22" ).click(function(){
	    $( ".second_path_1" ).animate({left: "-=100%"}, 18500);
	    $( ".second_path_white" ).animate({left: "-=100%"}, 18500);
	  });
    });

$( document ).ready(function(){
	  $( ".button_23" ).click(function(){
	    $( ".second_path_1" ).stop();
	    $( ".second_path_white" ).stop();
	  });
    });

$( document ).ready(function(){
      $(".button_21").on( "click", function() {
        $(".music_visual_2").toggleClass( "newClass", 1000 );
      });
    });

$( document ).ready(function(){
      $(".button_21").on( "click", function() {
        $(".second_path_1").toggleClass( "newerClass", 1000 );
      });
    });
// SECOND PATH


// THIRD PATH
$( document ).ready(function(){
	  $( ".button_32" ).click(function(){
	    $( ".third_path_1" ).animate({left: "-=100%"}, 18500);
	    $( ".third_path_white" ).animate({left: "-=100%"}, 18500);
	  });
    });

$( document ).ready(function(){
	  $( ".button_33" ).click(function(){
	    $( ".third_path_1" ).stop();
	    $( ".third_path_white" ).stop();
	  });
    });

$( document ).ready(function(){
      $(".button_31").on( "click", function() {
        $(".music_visual_3").toggleClass( "newClass", 1000 );
      });
    });

$( document ).ready(function(){
      $(".button_31").on( "click", function() {
        $(".third_path_1").toggleClass( "newerClass", 1000 );
      });
    });
// THIRD PATH


// FOURTH PATH
$( document ).ready(function(){
	  $( ".button_42" ).click(function(){
	    $( ".fourth_path_1" ).animate({left: "-=100%"}, 18500);
	    $( ".fourth_path_white" ).animate({left: "-=100%"}, 18500);
	  });
    });

$( document ).ready(function(){
	  $( ".button_43" ).click(function(){
	    $( ".fourth_path_1" ).stop();
	    $( ".fourth_path_white" ).stop();
	  });
    });

$( document ).ready(function(){
      $(".button_41").on( "click", function() {
        $(".music_visual_4").toggleClass( "newClass", 1000 );
      });
    });

$( document ).ready(function(){
      $(".button_41").on( "click", function() {
        $(".fourth_path_1").toggleClass( "newerClass", 1000 );
      });
    });
// FOURTH PATH


$( document ).ready(function(){
      $(".synth").on( "click", function() {
        $(".circle1").toggleClass( "stopclass", 1000 );
				$(".circle2").toggleClass( "stopclass", 1000 );
				$(".circle3").toggleClass( "stopclass", 1000 );
				$(".circle4").toggleClass( "stopclass", 1000 );
				$(".circle5").toggleClass( "stopclass", 1000 );
				$(".circle6").toggleClass( "stopclass", 1000 );
				$(".graphic_1").toggleClass( "stop2class", 1000 );
				$(".graphic_2").toggleClass( "stop2class", 1000 );
      });
    });

$( document ).ready(function(){
      $(".synth_text").on( "click", function() {
        $(".circle1").toggleClass( "stopclass", 1000 );
				$(".circle2").toggleClass( "stopclass", 1000 );
				$(".circle3").toggleClass( "stopclass", 1000 );
				$(".circle4").toggleClass( "stopclass", 1000 );
				$(".circle5").toggleClass( "stopclass", 1000 );
				$(".circle6").toggleClass( "stopclass", 1000 );
				$(".graphic_1").toggleClass( "stop2class", 1000 );
				$(".graphic_2").toggleClass( "stop2class", 1000 );
      });
    });

		$( document ).ready(function(){
					$( ".make_bc" ).click(function(){
						$( ".newton_cradle" ).removeClass( "paused", 1000 );
					});
					});

					$( document ).ready(function(){
								$( ".make_bc" ).click(function(){
									$( ".newton_cradle" ).addClass( "makeblue", 1000 );
								});
								});

		$( document ).ready(function(){
			$( ".make_ac" ).click(function(){
				$( ".newton_cradle" ).addClass( "paused", 1000 );
			});
		  });

			$( document ).ready(function(){
				$( ".make_ac" ).click(function(){
					$(".newton_cradle").css({'transform':'rotate(-25deg)'});
				});
			  });


				$(function(){
				    let informer = 0;
				    let MinInformValue = 0;
				    let MaxInformValue = 99;

				$("#lowerchange").click(function(){
				  if(informer>MinInformValue) {
				                 --informer;
				                 $('#num').text(informer);
				              }
				          });


				$("#upperchange").click(function(){
				  if(informer<MaxInformValue) {
				              ++informer;
				              $('#num').text(informer);
				           }
				        });


				        $("#make_max").click(function(){
				        let informer = $( this ).html();
				        $(".number").text( 99 );
				        $(".number").css({'margin-left':'15%'});
				        });


				        $("#upperchange").click(function(){
				          if(informer>9) {
				                      $(".number").css({'margin-left':'15%'});
				                   }
				                   else{
				             $(".number").css({'margin-left':'53%'});
				         }
				                });

				                $("#lowerchange").click(function(){
				                  if(informer<10) {
				                              $(".number").css({'margin-left':'53%'});
				                           }
				                           else{
				                     $(".number").css({'margin-left':'15%'});
				                 }
				                        });

				                        $("#make_min").click(function(){
				  let informer = $( this ).html();
				  $(".number").text( 0 );
				  $(".number").css({'margin-left':'53%'});
				});

				});
