$(document).ready(function(){
  var oPic = "https://orig05.deviantart.net/570e/f/2012/051/8/0/circulos_png_by_dulcezavala-d4qg7zf.png";
  var xPic = "http://icons.iconarchive.com/icons/gordon-irving/x-set/128/X-icon.png";
  var x = [];
  var o = [];
  var xScore = 0;
  var oScore = 0;
  var player = x;
  var winMoves = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];

  var score = function(){
    if (player == x){
      xScore += 1;
      $('#win-message').html("X wins! Click to play again!");
    } else {
      oScore += 1;
      $('#win-message').html("O wins! Click to play again!");      
    }
    $("#scores").html("<h2>X's: " + xScore + "............O's: " + oScore + "</h2>");
  }

  var victory = function(current, winningMove){
    $('#' + winningMove[0]).fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow");
    $('#' + winningMove[1]).fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow");
    $('#' + winningMove[2]).fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow").fadeToggle("slow");
    score();
    // $(".xo").one('click', newGame());
  }

  var checkWin = function(current){
    for(var i = 0; i < winMoves.length; i++){
      win = true;
      for(var j = 0; j < winMoves[i].length; j++){
        if (current.includes(winMoves[i][j]) == false){
          win = false;
          continue;
        }
      };
      if (win){
        victory(current, winMoves[i]);
        break;
      }
    };
    // add a check draw here... and a corresponding function elsewhere
  };
  var newGame = function(){
    x = [];
    o = [];
    $(".xo").attr('src', '');
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
  }

  newGame();
  
});
