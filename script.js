let playercheck = "player1";
let playerHand1;
let playerHand2;
let player1 = document.querySelector(".choice-player-1");
let player2 = document.querySelector(".choice-player-2");

let checkGame = function() {
	if(playerHand1==playerHand2){
		alert("ничья")
	}

	if(playerHand1=="камень" && playerHand2=="ножницы"){
		alert("проиграл игрок 2")
	}

	if(playerHand1=="камень" && playerHand2=="бумага"){
		alert("проиграл игрок 1")
	}

	if(playerHand1=="ножницы" && playerHand2=="камень"){
		alert("проиграл игрок 1")
	}

	if(playerHand1=="ножницы" && playerHand2=="бумага"){
		alert("проиграл игрок 2")
	}

	if(playerHand1=="бумага" && playerHand2=="камень"){
		alert("проиграл игрок 2")
	}

	if(playerHand1=="бумага" && playerHand2=="ножницы"){
		alert("проиграл игрок 2")
	}
}

let showHands = function() {
	if(playerHand1=="камень"){
		player1.style.backgroundImage = "url(kamen.jpg)";
		player1.style.backgroundSize = "100%";
	}
	if(playerHand1=="ножницы"){
		player1.style.backgroundImage = "url(ножницы.jpeg)";
		player1.style.backgroundSize = "100%";
	}
	if(playerHand1=="бумага"){
		player1.style.backgroundImage = "url(бумага.jpg)";
		player1.style.backgroundSize = "100%";
	}
	//второй игрок
	if(playerHand2=="камень"){
		player2.style.backgroundImage = "url(kamen.jpg)";
		player2.style.backgroundSize = "100%";
	}
	if(playerHand2=="ножницы"){
		player2.style.backgroundImage = "url(ножницы.jpeg)";
		player2.style.backgroundSize = "100%";
	}
	if(playerHand2=="бумага"){
		player2.style.backgroundImage = "url(бумага.jpg)";
		player2.style.backgroundSize = "100%";
	}
}
document.addEventListener("keydown", function(arg){
	if(playercheck=="player1"){
	     if(arg.code == "KeyA") {
		     console.log("нажата клавиша A")
		     playercheck = "player2";
		     playerHand1 = "камень"
	     }
	     if(arg.code == "KeyS"){
		     console.log("нажата клавиша S")
		     playercheck = "player2";
		     playerHand1 = "ножницы";
	     }
	     if(arg.code == "KeyD"){
		     console.log("нажата клавиша D")
		     playercheck = "player2";
		     playerHand1 = "бумага"
	     }
    }

	//второй игрок
	if(playercheck=="player2"){
	     if(arg.code == "KeyJ"){
		      console.log("нажата клавиша J")
		      playerHand2 = "камень"
		      playercheck = "endgame";
	     }
	     if(arg.code == "KeyK"){
		      console.log("нажата клавиша K")
		      playerHand2 = "ножницы";
		      playercheck = "endgame";
	     }
	     if(arg.code == "KeyL"){
		      console.log("нажата клавиша L")
		      playerHand2 = "бумага";
		      playercheck = "endgame";
	     }
	}

	//конец игры
	if(playercheck=="endgame"){
		playercheck = null;
		console.log("end")
		setTimeout(checkGame, 2000)
		setTimeout(showHands, 1500)
	}

})