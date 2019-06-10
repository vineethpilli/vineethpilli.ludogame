    var counter= 0;
    var redtokens = 2;
    var bluetokens = 2;
    var redwin = 0;
    var bluewin = 0;
function move(id,res){
	        
	        var num = parseInt(res);
            var pos_id = id;
            var newpos = pos_id+num;
            
            if(document.getElementById(id).innerHTML === "1A" && counter === 1){
           	     	
            		if(document.getElementById(newpos).innerHTML === "1B"){
            			      document.getElementById(pos_id).innerHTML ="";
                        document.getElementById(newpos).innerHTML = "1A";
                        bluetokens++;
                        document.getElementById("bluetoken").innerHTML = bluetokens+'B';
                      }
                    else if(document.getElementById(newpos).innerHTML === "2B"){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "1A";
                    	bluetokens+=2;
                    	document.getElementById("bluetoken").innerHTML = bluetokens+'B';
                    }
                    else if(document.getElementById(newpos).innerHTML === "1A"){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "2A";
                    }
                    else if(document.getElementById(newpos).innerHTML === ""){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "1A";
                    }
                    if(newpos === 28){
                    	redwin++;
                      document.getElementById("redwin").innerHTML = "WIN TOKENS: "+redwin;
                      document.getElementById(newpos).innerHTML = "";
                    }
           	    }
            else if(document.getElementById(id).innerHTML === "2A" && counter === 1){
                	if(document.getElementById(newpos).innerHTML === "1B"){
            			document.getElementById(pos_id).innerHTML ="1A";
                        document.getElementById(newpos).innerHTML = "1A";
                        bluetokens++;
                        document.getElementById("bluetoken").innerHTML = bluetokens+'B';
                      }
                    else if(document.getElementById(newpos).innerHTML === "2B"){
                    	document.getElementById(pos_id).innerHTML ="1A";
                    	document.getElementById(newpos).innerHTML = "1A";
                    	bluetokens+=2;
                    	document.getElementById("bluetoken").innerHTML = bluetokens+'B';
                    }
                    else if(document.getElementById(newpos).innerHTML === ""){
                    	document.getElementById(pos_id).innerHTML ="1A";
                    	document.getElementById(newpos).innerHTML = "1A";
                    }
                    if(newpos === 28){
                    	redwin++;
                      document.getElementById("redwin").innerHTML = "WIN TOKENS: "+redwin;
                      document.getElementById(newpos).innerHTML = "";
                    }
                }
            if(document.getElementById(id).innerHTML === "1B" && counter === 0){
                    if(newpos > 28){
                          newpos = newpos - 28;
                      }
            		    if(document.getElementById(newpos).innerHTML === "1A"){
            			      document.getElementById(pos_id).innerHTML ="";
                        document.getElementById(newpos).innerHTML = "1B";
                        redtokens++;
                        document.getElementById("redtoken").innerHTML = redtokens+'A';
                      }
                    else if(document.getElementById(newpos).innerHTML === "2A"){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "1B";
                    	redtokens+=2;
                    	document.getElementById("redtoken").innerHTML = redtokens+'A';
                    }
                    else if(document.getElementById(newpos).innerHTML === "1B"){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "2B";
                    }
                    else if(document.getElementById(newpos).innerHTML === ""){
                    	document.getElementById(pos_id).innerHTML ="";
                    	document.getElementById(newpos).innerHTML = "1B";
                    }
                    if(newpos === 14){
                    	bluewin++;
                      document.getElementById("bluewin").innerHTML = "WIN TOKENS: "+bluewin;
                      document.getElementById(newpos).innerHTML = "";
                    }
           	    }
            else if(document.getElementById(id).innerHTML === "2B" && counter === 0){
                  if(newpos > 28){
                         newpos = newpos - 28;
                     }
                	if(document.getElementById(newpos).innerHTML === "1A"){
            			document.getElementById(pos_id).innerHTML ="1B";
                        document.getElementById(newpos).innerHTML = "1B";
                        redtokens++;
                        document.getElementById("redtoken").innerHTML = redtokens+'A';
                      }
                    else if(document.getElementById(newpos).innerHTML === "2A"){
                    	document.getElementById(pos_id).innerHTML ="1B";
                    	document.getElementById(newpos).innerHTML = "1B";
                    	redtokens+=2;
                    	document.getElementById("redtoken").innerHTML = redtokens+'A';
                    }
                    else if(document.getElementById(newpos).innerHTML === ""){
                    	document.getElementById(pos_id).innerHTML ="1B";
                    	document.getElementById(newpos).innerHTML = "1B";
                    }
                    if(newpos === 14){
                    	bluewin++;
                      document.getElementById("bluewin").innerHTML = "WIN TOKENS: "+bluewin;
                      document.getElementById(newpos).innerHTML = "";

                    }

                	
                }
              if(redwin === 2){
                document.getElementById("redwin").innerHTML = "WINNER IS A";
              }
              else if(bluewin === 2){
                document.getElementById("bluewin").innerHTML = "WINNER IS B";
              }
         
}
function open(lockerid){
	
	if(lockerid == "locker-a"){
      var home_a = document.getElementById("1") ; 
      var tokenNum = home_a.innerHTML;
    if(redtokens >= 1){
      if(tokenNum === ""){
      	home_a.innerHTML = "1A";
      }
      else if(tokenNum === "1A"){
      	home_a.innerHTML = "2A";
      }
      else if(tokenNum === "1B"){
      	home_a.innerHTML = "1A";
      	bluetokens++;
      	document.getElementById("bluetoken").innerHTML = bluetokens+'B';
      }
      else if(tokenNum === "2B"){
      	home_a.innerHTML = "1A";
      	bluetokens+=2;
      	document.getElementById("bluetoken").innerHTML = bluetokens+'B';
      }
      
      redtokens--;
      document.getElementById("redtoken").innerHTML = redtokens+'A';
      }
	}
	else if(lockerid == "locker-b"){
	  var home_b = document.getElementById("15") ;
	  var tokenNum = home_b.innerHTML;
    if(bluetokens >= 1){
      if(tokenNum === ""){
      	home_b.innerHTML = "1B";
      }
      else if(tokenNum === "1B"){
      	home_a.innerHTML = "2B";
      }
      else if(tokenNum === "1A"){
      	home_a.innerHTML = "1B";
      	redtokens++;
      	document.getElementById("redtoken").innerHTML = redtokens+'A';
      }
      else if(tokenNum === "2A"){
      	home_a.innerHTML = "1B";
      	redtokens+=2;
      	document.getElementById("redtoken").innerHTML = redtokens+'A';
      }
      
      bluetokens--;
      document.getElementById("bluetoken").innerHTML = bluetokens+'B';
      }
	}
}
function mover(num){
document.getElementById(1).onclick =function(){move(1,num);}
document.getElementById(2).onclick =function(){move(2,num);}
document.getElementById(3).onclick =function(){move(3,num);}
document.getElementById(4).onclick =function(){move(4,num);}
document.getElementById(5).onclick =function(){move(5,num);}
document.getElementById(6).onclick =function(){move(6,num);}
document.getElementById(7).onclick =function(){move(7,num);}
document.getElementById(8).onclick =function(){move(8,num);}
document.getElementById(9).onclick =function(){move(9,num);}
document.getElementById(10).onclick =function(){move(10,num);}
document.getElementById(11).onclick =function(){move(11,num);}
document.getElementById(12).onclick =function(){move(12,num);}
document.getElementById(13).onclick =function(){move(13,num);}
document.getElementById(14).onclick =function(){move(14,num);}
document.getElementById(15).onclick =function(){move(15,num);}
document.getElementById(16).onclick =function(){move(16,num);}
document.getElementById(17).onclick =function(){move(17,num);}
document.getElementById(18).onclick =function(){move(18,num);}
document.getElementById(19).onclick =function(){move(19,num);}
document.getElementById(20).onclick =function(){move(20,num);}
document.getElementById(21).onclick =function(){move(21,num);}
document.getElementById(22).onclick =function(){move(22,num);}
document.getElementById(23).onclick =function(){move(23,num);}
document.getElementById(24).onclick =function(){move(24,num);}
document.getElementById(25).onclick =function(){move(25,num);}
document.getElementById(26).onclick =function(){move(26,num);}
document.getElementById(27).onclick =function(){move(27,num);}
document.getElementById(28).onclick =function(){move(28,num);}

}
if(counter === 0){
    document.getElementById("locker-a").setAttribute("class","turn");
  }
    else if(counter === 1){
      document.getElementById("locker-b").setAttribute("class","turn");
    }



	         
var button = document.getElementById("button");
button.onclick = function(){
	var num = Math.floor(Math.random()*(6))+1;
	var result = document.getElementById("result");
	result.innerHTML = num;
	

	if(num === 6){
		if(counter === 0 && redtokens === 2){
			open("locker-a");
			
		}
	    else if(counter === 1 && bluetokens === 2){
			open("locker-b");
		}
      else if(counter === 1 && num === 6){
        	document.getElementById("locker-a").onclick = function(){ open("locker-a");}
        }
      else if(counter === 0 && num === 6){
        	document.getElementById("locker-b").onclick = function(){ open("locker-b");}
        }
      
    mover(num);
      
	}


	if(num!== 6){
		
      mover(num);
      if(counter === 0){
        counter = 1;
      }
      else{
        counter = 0;
      }
      var name;
      if(counter===0){
        name = "TURN - PLAYER : A";
      }
      else if(counter === 1){
        name = "TURN - PLAYER : B"
      }
      document.getElementById("playername").innerHTML = name;
		
		   
	}
	if(counter === 0){
		document.getElementById("locker-a").setAttribute("class","turn");
	}
    else if(counter === 1){
    	document.getElementById("locker-b").setAttribute("class","turn");
    }
 }


var check = document.getElementById("selecter");
check.onclick = function(){
	var num = check.value;
	var result = document.getElementById("result");
	result.innerHTML = num;
	if(num === 6){
    if(counter === 0 && redtokens === 2){
      open("locker-a");
      
    }
      else if(counter === 1 && bluetokens === 2){
      open("locker-b");
    }
        if(counter === 1){
          document.getElementById("locker-a").onclick = function(){ open("locker-a");}
        }
        else if(counter === 0){
          document.getElementById("locker-b").onclick = function(){ open("locker-b");}
        }
        
    mover(num);
      
  }


  if(num!== 6){
    
      mover(num);
      if(counter === 0){
        counter = 1;
      }
      else{
        counter = 0;
      }
      var name;
      if(counter===0){
        name = "TURN - PLAYER : A";
      }
      else if(counter === 1){
        name = "TURN - PLAYER : B"
      }
      document.getElementById("playername").innerHTML = name;
    
       
  }
  if(counter === 0){
    document.getElementById("locker-a").setAttribute("class","turn");
  }
    else if(counter === 1){
      document.getElementById("locker-b").setAttribute("class","turn");
    }
    
}