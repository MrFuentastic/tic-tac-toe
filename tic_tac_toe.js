$(document).ready(function(){
  var oPic = "https://orig05.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png";
  var xPic = "http://icons.iconarchive.com/icons/gordon-irving/x-set/128/X-icon.png";
  var x = [];
  var o = [];
  var player = x;
  $(".xo").one('click', function(){
    if (player == x){
      $(this).attr('src', xPic);
      player = o;
    }else{
      $(this).attr('src', oPic)
      player = x;
    }
  });
});