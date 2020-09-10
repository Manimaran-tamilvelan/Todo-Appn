
let counter_a = 0;
let counter_b = 100;

let counter = function() {
	counter_a++;
	return counter_a;
}

let counterb = function() {
	counter_b++;
	return counter_b;
}

let logout = function(){
	
	localStorage.removeItem("current-user");
	alert("Logout Successfully!")
	location.reload();
	
}