/////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
//arrows code sections !!!!important!!!
$(function(){
var $arrowLeft = $('.fa-arrow-circle-left');
var $arrowRight = $('.fa-arrow-circle-right')
var $landing_info = $('div.landing_info');
var $first_half = $('div.first_half');
var $second_half= $('div.second_half');
var landing_info_position =  Math.ceil($('div.landing_info').offset().left / $(window).width()*100)


function returnPosition(ele){
  return Math.ceil(ele.offset().left / $(window).width()*100);
}



var interval = null;
var timer = 5;
var timerZero;
function countDown(){
   if(timer < 6 && timer > 0){
     timer--;
     $('.timer_wrapper p').text(timer).css({
       "color":"#d60808"
     });
   }
   timerZero=timer;

if(timer === 0){
clearInterval(interval)
//console.log('running position reset from count method')
 //positionReset($('div.landing_info'),$('div.first_half'),$('div.second_half'))
 timerZero = timer;
}
return timer;
}
var counter = ()=>{
   interval = setInterval(function(){
     //countDown();
   },1000);
}

/////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
//above is countDown

function positionReset(landing,left,right){
  if(returnPosition(landing) != landing_info_position){
    console.log('position reset ran')
    $('div.second_half').children().each(function(i){
     $(this).delay((($('div.second_half').children().length)-i) * 25).fadeOut('fast');
    })
    $('div.programmer_logo img').fadeOut('slow');
    $('div.programmer_text p').fadeOut('slow');
    $('div.programmer_logo_two div.hammer').fadeOut('slow');
  landing.animate({
    left: 24+'%',
    boxShadow: '0px 2px 28px -3px rgba(0,0,0,1)'
  },()=>{
    left.animate({
      width: '50%'
    })
    right.animate({
      width: '50%'
    })
  })

  } else{

}

  $arrowRight.css({
    "pointer-events": "initial",
    "color": "#22776A"
  }).addClass('addAnimation')
  $arrowLeft.css({
    "pointer-events": "initial",
    "color": "#22776A"
  }).addClass('addAnimation')

  $('p.timer').css({
    "color":"grey"
  }).text("M");

}

/////////////////////////////////
//////////////////////////////////
///////////////////////////////////
//////////////////////////////////
//position reset above

$arrowLeft.click(()=>{
  counter();
if(Math.ceil($('div.landing_info').offset().left / $(window).width()*100) === landing_info_position){
  console.log('nope no problem here')
$('div.landing_info').animate({
  left: '13%',
  boxShadow: "-8px 2px 17px 2px rgba(0,0,0,1)"
},()=>{
  $('div.first_half').animate({
    width: '39%'
  })
  $('div.second_half').animate({
    width:'61%'

  },function(){
       $('div.second_half').children().each(function(i){
        $(this).delay(i * 25).fadeIn('fast');
       })
  })
})

$arrowLeft.css({
  "pointer-events": "none",
  "color": 'grey'
})
$('p.timer').css({
  "color":"#d60808"
}).text("-1");
} else {
positionReset($('div.landing_info'),$('div.first_half'),$('div.second_half'));
}
})


$arrowRight.click(()=>{
    if(Math.ceil($('div.landing_info').offset().left / $(window).width()*100) === landing_info_position){
      console.log('nope no problem here')
      console.log (Math.ceil($('div.landing_info').offset().left / $(window).width()*100) + ''+landing_info_position)
      $('div.landing_info').animate({
        left: '35%',
        boxShadow:"5px 2px 17px 2px rgba(0,0,0,1)"
      },()=>{
        $('div.second_half').animate({
          width:'39%'
        })
          $('div.first_half').animate({
          width: '61%'
        },function(){
          $('div.programmer_logo img').fadeIn('slow');
          $('div.programmer_text p').fadeIn('slow');
          $('div.programmer_logo_two div.hammer').fadeIn('slow');
        })

    })
    $arrowRight.css({
      "pointer-events": "none",
      "color": 'grey'
    })
    $('p.timer').css({
      "color":"#4CAF50"
    }).text("1");

  } else {
    positionReset($('div.landing_info'),$('div.first_half'),$('div.second_half'));
  }
})




 })
/////////////////////////////
/////////////////////////////
