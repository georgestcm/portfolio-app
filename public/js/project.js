$(function(){


  var $liveLinks = $('div.pro_temp_links a.more_info');
  console.log($liveLinks)
$liveLinks.on('click',(e)=>{
  e.preventDefault();
  console.log(e)
})
})
