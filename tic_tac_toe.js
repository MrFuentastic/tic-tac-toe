  
  var oPic = "https://orig05.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png";
var xPic = "http://icons.iconarchive.com/icons/gordon-irving/x-set/128/X-icon.png";
var x = [];
var o = [];
var player = x;
$(document).ready(function(){

  $(".xo").click(function(){
    $(this).attr('src', xPic).removeClass("xo");
  });
});

  // function addPic(cell){  
  //   if (cell.getElementsByClassName('pic')[0]){
  //     if (player == x) {
  //       x.push(cell.id)
  //       cell.getElementsByClassName('pic')[0].src = xPic;
  //       cell.getElementsByClassName('pic')[0].classList.replace("pic", "xo");
  //       player = o;
  //     }else{
  //       o.push(cell.id)
  //       cell.getElementsByClassName('pic')[0].src = oPic;
  //       cell.getElementsByClassName('pic')[0].classList.replace("pic", "xo");
  //       player = x;
  //     }
  //   }else{
  //     return;
  //   }
  // };

