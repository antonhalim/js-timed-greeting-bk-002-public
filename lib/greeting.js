'use strict';

function greeting (num){
	if (isMorning(num) == true){
		return "Good Morning!";
	}else if (isAfternoon(num) == true){
		return "Good Afternoon!";
	}
	else {
		return "Good Night!";
	}
};
