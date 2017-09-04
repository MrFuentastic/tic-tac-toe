$(document).ready(function(){
  var oPic = "https://orig05.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png";
  var xPic = "http://icons.iconarchive.com/icons/gordon-irving/x-set/128/X-icon.png";
  var x = [];
  var o = [];
  var player = x;
  var winMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,6],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
  
  var checkWin = function(player){
    winMoves.forEach(function(winMove){
      win = false;
      winMove.forEach(pos){
        if player.includes(pos)
      }
    });
  }

  $(".xo").one('click', function(){
    if (player == x){
      x.push($(this).attr('id'));
      $(this).attr('src', xPic);
      checkWin(player);
      player = o;
    }else{
      o.push($(this).attr('id'));      
      $(this).attr('src', oPic)
      checkWin(player);
      player = x;
    }
  });
});