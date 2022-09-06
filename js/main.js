
var btnT = document.getElementById("btn");
var rate =100;




btnT.onclick = function func (){

	Answer();	
	

	

}
function Answer(){
	
		var first = document.querySelectorAll(".first");
		var text ="";
		var result;

		for(var i = 0; i < first.length; i++){

			if (first[0].checked && first[6].checked && first[8].checked && 
				first[12].checked) {
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+rate + 
			" "+ "%";
			}
			// 75%

			else if (first[0].checked && first[6].checked && first[8].checked ) {
				result = rate - 25 ;

				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+result+" "+  
			" "+ "%";
			
		}
		else if (first[0].checked && first[6].checked &&  first[12].checked) {
				result = rate - 25 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[0].checked  && first[8].checked && first[12].checked) {

				result = rate - 25 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if ( first[6].checked && first[8].checked && first[12].checked) {
				
				result = rate - 25 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

			// 50%


		else if (first[0].checked && first[6].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[0].checked && first[6].checked && first[9].checked 
			&& first[11].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[0].checked && first[6].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[0].checked && first[6].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
			else if (first[0].checked  && first[8].checked && first[4].checked 
				&& first[10].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
			else if (first[0].checked  && first[8].checked && first[4].checked 
				&& first[11].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
			else if (first[0].checked  && first[8].checked && first[5].checked 
				&& first[10].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
			else if (first[0].checked  && first[8].checked && first[5].checked 
				&& first[11].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
		else if (first[0].checked  && first[12].checked && first[4].checked 
			&& first[7].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
		else if (first[0].checked  && first[12].checked && first[5].checked 
			&& first[7].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
		else if (first[0].checked  && first[12].checked && first[4].checked 
			&& first[9].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
		else if (first[0].checked  && first[12].checked && first[4].checked 
			&& first[9].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}
		else if (first[0].checked  && first[12].checked && first[5].checked 
			&& first[9].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
		}

		// нулевой разряд


		else if (first[6].checked && first[8].checked && first[1].checked 
			&& first[10].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[8].checked && first[2].checked 
			&& first[10].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[8].checked && first[3].checked 
			&& first[10].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[8].checked && first[1].checked 
			&& first[11].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[8].checked && first[2].checked 
			&& first[11].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[8].checked && first[3].checked 
			&& first[11].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}


		else if (first[6].checked && first[12].checked && first[1].checked 
			&& first[7].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		else if (first[6].checked && first[12].checked && first[2].checked 
			&& first[7].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		else if (first[6].checked && first[12].checked && first[3].checked 
			&& first[7].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[12].checked && first[1].checked 
			&& first[9].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		else if (first[6].checked && first[12].checked && first[2].checked 
			&& first[9].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		else if (first[6].checked && first[12].checked && first[3].checked 
			&& first[9].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[12].checked && first[3].checked 
			&& first[9].checked ) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		// шестой  разряд


		else if (first[8].checked && first[12].checked && first[1].checked 
			&& first[4].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[12].checked && first[2].checked 
			&& first[4].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[12].checked && first[3].checked 
			&& first[4].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[12].checked && first[1].checked 
			&& first[5].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[12].checked && first[2].checked 
			&& first[5].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[12].checked && first[3].checked 
			&& first[5].checked) {
				result = rate - 50 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		// восьмой  разряд + двенадцатый

		// первый ряд

		else if (first[0].checked && first[4].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[0].checked && first[5].checked && first[9].checked 
			&& first[11].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		// по первому вопросу если человек угадал один вариант ответа

		// второй ряд

		else if (first[6].checked && first[1].checked && first[7].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[2].checked && first[7].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[3].checked && first[7].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[1].checked && first[9].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[2].checked && first[9].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[3].checked && first[9].checked 
		&& first[10].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[1].checked && first[7].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[2].checked && first[7].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[3].checked && first[7].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[1].checked && first[9].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[2].checked && first[9].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[6].checked && first[3].checked && first[9].checked 
		&& first[11].checked ) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		// по второму вопросу если человек угадал один вариант

		else if (first[8].checked && first[1].checked && first[4].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[2].checked && first[4].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[3].checked && first[4].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[1].checked && first[5].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[2].checked && first[5].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[3].checked && first[5].checked
			&& first[10].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[1].checked && first[5].checked
			&& first[11].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[2].checked && first[5].checked
			&& first[11].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[8].checked && first[3].checked && first[5].checked
			&& first[11].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
			else if (first[8].checked && first[1].checked && first[4].checked
			&& first[11].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

			// по третьему вопросу если человек угадал один вариант

		else if (first[12].checked && first[1].checked && first[7].checked 
			&& first[4].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[2].checked && first[4].checked 
			&& first[7].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[3].checked && first[4].checked 
			&& first[7].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[1].checked && first[5].checked 
			&& first[7].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[2].checked && first[5].checked 
			&& first[7].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[3].checked && first[5].checked 
			&& first[7].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[1].checked && first[4].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[2].checked && first[4].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[3].checked && first[4].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[1].checked && first[5].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[2].checked && first[5].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[12].checked && first[3].checked && first[5].checked 
			&& first[9].checked) {
				result = rate - 75 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

			// по четвертому вопросу если человек угадал один вариант


		else if (first[1].checked && first[4].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[5].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[4].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[5].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[4].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[5].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[1].checked && first[5].checked && first[9].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}

		// если человек ничего не угадал

		else if (first[2].checked && first[4].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[5].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[4].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[5].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[4].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[5].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[2].checked && first[5].checked && first[9].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}


		// второй элемент если человек ничего не угадал

		else if (first[3].checked && first[4].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[5].checked && first[7].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[4].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[5].checked && first[9].checked 
			&& first[10].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[4].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[5].checked && first[7].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}
		else if (first[3].checked && first[5].checked && first[9].checked 
			&& first[11].checked) {
				result = rate - 100 ;
				text = "Вы ответили на все вопросы! " + " " + "Из них верно: "+" "+result + 
			" "+ "%";
			}


			else{
				text = "Вы не ответили на все вопросы !";
			}

		


		if (text != "") {
		document.getElementById("answer").innerHTML = text;
	}
	else{
		text.innerHTML = "Дайте ответ";
	}

}

}
		
		

		








		

		



	