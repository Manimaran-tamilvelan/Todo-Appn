//let counter_a = 0;
//let counter_b = 100;

//alert("start");

let loginstatus = false;

let myarray = []

$('#newTask').keypress(function(event) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		addTodo();
		//alert("wait");
	}
});

let addTodo = function() {

	let task = document.getElementById("newTask");

	if (task.value == "") {
		alert("Please enter your task")
		return "";
	}

	for (let index = 0; index < myarray.length; index++) {

		if (myarray[index] == task.value) {
			alert("Task already there..!")
			return "";
		}
	}


	$('ul').append("<input value=\"&#10004;\" style=\"height: 20px; text-align:center; border-radius: 5px;\" type=\"button\" onclick=clicked(" + counterb() + ") id=" + counter() + "> &nbsp&nbsp&nbsp <label class=\"list\" id=" + counter_b + " for=" + counter_a + " onclick=clicked(" + counter_b + ")>" + task.value + "</label><br>");

	if (counter_a == 2) {

		$("#login").prop("value", "SignUp").attr("onclick", "create()");

	}


	myarray.push(task.value);

	$("#newTask").val("");
}


let create = function() {

	let userName = document.getElementById("uname");
	let password = document.getElementById("pwd");


	if (userName.value == "") {
		alert("Please enter Username");
		return "";
	}
	if (password.value == "") {
		alert("Please enter password");
		return "";
	}

	//console.log(userName.value);
	//console.log(password.value);

	//console.log(task.value);
	var req = new XMLHttpRequest();
	var urlreq = "welcometodo.jsp?array=" + myarray.toString() + "&userName=" + userName.value + "&password=" + password.value;
	//var loginurl = "todologin.jsp?
	//var urlreq = "todo";
	//alert(urlreq)
	try {
		req.onreadystatechange = getInfo;
		req.open("POST", urlreq, true);
		req.send();

	} catch (e) {
		alert("Error");
	}

	function getInfo() {

		if (req.readyState == 4) {
			var val = req.responseText;

			//document.getElementById("task").innerHTML = val;
			//only one value goes and come we need to take take(persistance done on front end)
			// of completed task & add delete module
			//after login !!
			//console.log(val)

		}

	}

	alert("Account Created Successfully you can login now!");
	//$("#uname").hide();
	//$("#pwd").hide();
	//$("#login").hide();
	//$("#loginfield").hide();
	//$("#loginfield1").append(`<h6 id="loginfield1css">Hii, ${userName.value}!, your Account is Created</h6>`);
	location.reload();

}



let todoLogin = function() {

	let userName = document.getElementById("uname");
	let password = document.getElementById("pwd");

	if (userName.value == "") {
		alert("Please Enter UserName");
		return "";
	}

	if (password.value == "") {
		alert("Please Enter Password");
		return "";
	}



	var loginreq = new XMLHttpRequest();
	//todologin.jsp?userName=Demo&password=demo@123
	var loginurl = "todologin.jsp?userName=" + userName.value + "&password=" + password.value;
	//alert(loginurl);


	try {
		loginreq.onreadystatechange = getLoginInfo;
		loginreq.open("GET", loginurl, true);
		loginreq.send();
	} catch (e) {
		alert("Error");
	}

	function getLoginInfo() {

		//console.log("Before check readystate");
		if (loginreq.readyState == 4) {
			var response_val = loginreq.responseText;

			//if (response_val.toString() == "") {
			//	alert("User Not Exists");
			//	return "";
			//}

			//alert("hii");
			//alert(response_val);

			var ListArray = response_val.split(',');
			const check = [];

			for (let index = 0; index < ListArray.length; index++) {

				check.push(ListArray[index]);

			}
			console.log(check.length)


			for (let index = 0; index < ListArray.length; index++) {
				//console.log($(ListArray[index]).text());



				//console.log(check[0].document);
				if (check.length == 1) {
					alert("Incorrect User")
					return "";
				}


				$('ul').append("<input value=\"&#10004;\" style=\"height: 20px; text-align:center; border-radius: 5px;\" type=\"button\" onclick=clicked(" + counterb() + ") id=" + counter() + "> &nbsp&nbsp&nbsp <label class=\"list\" id=" + counter_b + " for=" + counter_a + " onclick=clicked(" + counter_b + ")>" + ListArray[index] + "</label><br>");
				myarray.push(ListArray[index]);

			}



			let temparray = [];
			for (let i = 0; i < myarray.length; i++) {

				if (i == 0) {
					let a = myarray[0].split("<body>");
					temparray.push(a[1]);
				}



				else if (i == myarray.length - 1) {
					let a = myarray[i].split("</body>");
					temparray.push(a[0]);
				}
				else {
					temparray.push(myarray[i]);
				}
				console.log(temparray);

			} localStorage.setItem("current-user", temparray);
			localStorage.setItem("user-name", userName.value);





			if (check.length > 1) {
				
				//$("#loginfield").hide();
				$("#uname").hide();
				$("#pwd").hide();
				
				$(`<div style="display: inline; margin-left:550px;">Welcome ${userName.value}!</div>`).insertBefore("#login");
				
				$("#login").prop("value", "Logout!").attr("onclick", "logout()").css("margin-left","35%");
				$("#newTask").attr("placeholder","Enter more task!");
				
			}


		}

		if (counter_a >= 12) {
			alert("The List goes too big !")
			// $("#button").hide();
		}


	}




}






let clicked = function(id) {
	var newId = id - 100;
	$(document.getElementById(`${id}`)).css("text-decoration", 'line-through');
	$(`#${newId}`).css("background-color", "#12b776").css("height", "20px").css("border-radius", "5px");

}



