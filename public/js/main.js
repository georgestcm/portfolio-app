$(function(){
var $navLinks = $('.nav_intro_page li');
var $navAbout = $('.nav-about');
var $navProjects = $('.nav-projects');
var $navContact = $('.nav-contact');
var $introPage = $('.landing_parent');
var $navAboutTwo = $(".nav-about-two");
var $navProjectTwo = $(".nav-projects-two");
var $titleSpan = $('.title').fadeIn('slow');
var $socialMedia = $("div.social_media a");
var $socialMediaMainPage = $("div.sMtwo a");
var $projectEntry = $('div.project-entry-title');
var $mainPage = $('div.main_page');
var $mainPageFooter = $('div.footer footer').hide();
var $mainPageNav = $("div.nav").hide();
var $mainPageLogo = $("div.site_logo");
var $contacts = $(".contact");
var $modal = $("div.modal");
var $modalBg = $("div.modal_background");
var $modalClose = $(".close");
var $mainPageNavAnimation = $("li.second_nav");
var $mainPageExit = $("a.fa-times");
var $aboutSection = $(".about");
var $projectSection = $(".project");
var $projectList = $(".project_ul li");
var $projectHoverDiv = $(".pro_info");
var $projectRuth = $(".ruth");
var $arrows = $('i.arrow');
var $arrowLeft = $('.fa-arrow-circle-left');
var $arrowRight = $('.fa-arrow-circle-right')
var $jobTitle = $('.title').hide();
var $techSkills = $(".tech");
var $programLogo = $('.fa-laptop-code');
var $socialMediaTwo = $('div.social_media').clone();
var landing_info_position =  Math.ceil($('div.landing_info').offset().left / $(window).width()*100)
$("div.down_arrow img").hide();
$mainPage.append($socialMediaTwo);
$techSkills.on("click",function(e){
  e.preventDefault();
})

$projectHoverDiv.children().hide();

//aniamtion for the main page navigation
$navLinks.hover(function(){
  $(this).children('a').animate({
    color:"white"
  })
  if($(window).width() > 600){
    $(this).animate({
      backgroundColor: "#22776A"
    })
  } else {
    $(this).off();
    }
},function(){
  $(this).animate({
    backgroundColor: "white"
  })
  $(this).children('a').animate({
    color:"#22776A"
  })
})

$(window).on('resize',()=>{
  if($(this).width() < 600){
    $navLinks.off();
  }
})

$mainPageNavAnimation.hover(function(){
  $(this).animate({
    backgroundColor: "#22776A"
  })
},function(){
  $(this).animate({
    backgroundColor: "#202124"
  })
})
//animation for hover

function hover(el){
  el.off().hover(function(e){
    $(this).animate({
      width: "+=5px"
    },"fast")
    console.log(e.type)
  },function(){
    $(this).animate({
      width: "-=5px"
    },"fast")
  })
}
hover($socialMedia);


//animation for social media link hover
$navAbout.on("click",function(e){
  e.preventDefault();
  positionReset($('div.landing_info'),$('div.first_half'),$('div.second_half'));
  $socialMediaTwo.fadeIn('fast').addClass('sMtwo');
  hover($socialMediaTwo.children('a'));
  $introPage.fadeOut();
  $mainPage.animate({
   height: "100vh"
 },function(){
   $("div.down_arrow img").fadeIn("slow");
    $mainPageFooter.show();
    $mainPage.css("position","unset");
    $mainPageNav.fadeIn().addClass("fixed");
    $mainPageLogo.hide().fadeIn("slow");
    $mainPage.css("position","unset");
 })
})

$navProjects.on("click",function(e){
  positionReset($('div.landing_info'),$('div.first_half'),$('div.second_half'));
  e.preventDefault();
  $socialMediaTwo.fadeIn('fast').addClass('sMtwo');
  hover($socialMediaTwo.children('a'));
  $introPage.fadeOut("fast");
  $mainPage.animate({
   height: "100vh"
 },function(){
    $mainPageFooter.show();
    $mainPageNav.fadeIn().addClass("fixed");
    $mainPageLogo.hide().delay("600").fadeIn("slow");
    $mainPage.css("position","unset").delay(500);
    $("div.down_arrow img").fadeIn("slow");
    $('html, body').animate({
    scrollTop: $(".project").offset().top
                }, 2000);
 })
})


$navProjectTwo.on("click",function(){
if($(window).width() > 768){
  $('html, body').animate({
  scrollTop: $(".project").offset().top
              }, 2000);
}
})

$navAboutTwo.on("click",function(){
  if($(window).width() > 768){
    $('html, body').animate({
    scrollTop: $(".about").offset().top
                }, 2000);  }
})

$mainPageExit.on("click",function(e){
  e.preventDefault();
  $socialMediaTwo.children('a').off("hover");
  $("div.scrollPercentage").css('width',0);
  $mainPage.animate({
    height: "0vh"
  },function(){
    $introPage.fadeIn();
  })
  $mainPage.css("position","fixed");
  $mainPageNav.removeClass("fixed");
  $socialMediaTwo.fadeOut('fast').removeClass('sMtwo');
})

//adding colors to profesion text
var colors = ["#22776A","#ab003c","#1769aa","#357a38","#b2a429","#4615b2","#357a38","#22776A","#ab003c", "#0276aa","#a31545","#b2102f","#22776A"];
var styledText = '';
for(var i =0; i < $titleSpan.text().length; i++){
    styledText += '<span style="color:' + colors[i%colors.length] + '">' +  $titleSpan.text()[i] + '</span>';
}
$titleSpan.html(styledText);
//modal show

$contacts.on("click",function(e){
  e.preventDefault();
$modal.css("display","block");
$modalBg.css("z-index","9999");
$modalBg.find(".modal_content").hide().fadeIn("slow");
})

$modalClose.on("click",function(){
  $('div.modal_background .modal_content').children('p').text(' ');
  $modalBg.find(".modal_content").fadeOut("slow").css("z-index","unset");
  $modal.css("display","none");
  $("#my_form").show();
  $(".modal_logo").css("marginBottom","0");
  $("#my_form").children('input')[0].value= ' ';
  $("#my_form").children('input')[1].value= ' ';
  $("#my_form").children('textarea')[0].value= ' ';
})

$(window).scroll(function(){
if($(window).width() > 768){
  if($aboutSection.height() >= $(window).scrollTop()){
   $navAboutTwo.addClass("navColor");
   $navProjectTwo.removeClass("navColor");
  }else if($aboutSection.height() <= $(window).scrollTop()){
    $navAboutTwo.removeClass("navColor");
    $navProjectTwo.addClass("navColor");
  }
}

})

$(window).resize(function(){
if($(window).width() <= 768){
  $navAboutTwo.removeClass("navColor");
  $navProjectTwo.removeClass("navColor");
}
})

$projectList.hover(function(){
 $(this).children(".pro_info").animate({
   "width":"100%"
 },function(){
   $(this).children().fadeIn();
 })

},function(){
  $projectHoverDiv.children().fadeOut(20);
  $(this).children(".pro_info").animate({
    "width":"0%"
  },function(){
   $(this).children().hide();
  })
})

 $('.title').typeIt({
   strings: '',
   speed: 100,
   deleteSpeed: undefined,
   lifeLike: false,
   cursor: true,
   breakLines: true,
   breakDelay: 750,
   startDelay: 250,
   loop: true,
   loopDelay: 750,
   html: true,
   autoStart: true,
   callback: function(){}
 });

$jobTitle.fadeIn('slow');

   $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
  					var docHeight = $(document).height();
  					var winHeight = $(window).height();
  					var scrollPercent = (scrollTop) / (docHeight - winHeight);
  					var scrollPercentRounded = Math.round(scrollPercent*100);
$('div.scrollPercentage').animate({
    width: scrollPercentRounded+"%"
  },25);

  var percent = scrollPercentRounded+"%";
  if(percent=== 0+"%"){
    $("div.down_arrow img").fadeIn("fast");
  } else {
    $("div.down_arrow img").fadeOut("fast");
  }

  if(percent > 0+"%"){
    $programLogo.fadeIn('slow');
  } else {
    $programLogo.fadeOut('slow');
  }

$("div.down_arrow img").on("click",function(){
if($(window).width() > 768){
  $('html, body').animate({
  scrollTop: $(".project").offset().top
              }, 2000);
}
})

})
function returnPosition(ele){
  return Math.ceil(ele.offset().left / $(window).width()*100);
}




function positionReset(landing,left,right){
  if(returnPosition(landing) != landing_info_position){
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

  $arrowLeft.css({
    "pointer-events": "initial",
    "color": '#22776A'
  })
  $arrowRight.css({
    "pointer-events": "initial",
    "color": '#22776A'
  })
  $('p.timer').css({
    "color":"grey"
  }).text("M");
  } else{

}}












 })
