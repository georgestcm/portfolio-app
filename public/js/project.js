$(function(){


  var $livelinks = $('a.more_info');
  var $projectPageExit = $('a.project_exit')
  var $projectPage = $('div.project_displayer');



var position;

  $livelinks.on('click',(e)=>{
    position = $(this).scrollTop();
    console.log(position)
    $('div.nav').css('zIndex',0)
    $('div.landing_parent').hide();
    $('div.main_page').fadeOut('fast')
    e.preventDefault();
    $projectPage.animate({
      height: '100vh'
    },()=>{
      $projectPage.css('display','contents')
    })
  })

  $projectPageExit.on('click',(e)=>{
  e.preventDefault();
console.log(position)
  $projectPage.animate({
    height: '0vh'
  },100,function(){
    $(this).css({
      'display':''
    })
    $('div.main_page').fadeIn();
  })

  })

})
