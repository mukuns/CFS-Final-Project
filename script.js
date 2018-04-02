//Create a function named idCard
function idCard() {
	//Create three variables named firstName, lastName, and address. 
	//Set those variables equal to the DOM element they correspond with so it pulls in the value of each input.
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var address = document.getElementById('address').value;

	//Use the DOM innerHTML to post the first and last name to the tag that has an id of postFullName
	document.getElementById('postFullName').innerHTML = firstName + " " + lastName;
	//Use the DOM innerHTML to post the address to the tag that has an id of postAddress
	document.getElementById('postAddress').innerHTML = address;

	//Create two variables named age and phoneNumber that pulls in the value of the corresponding input using DOM
	var age = parseInt(document.getElementById('age').value);
	var phoneNumber = parseInt(document.getElementById('phoneNumber').value);

	//Create an empty array named numberArray
	var numberArray = [];
	//Push both the age and phoneNumber variables into your empty array
	numberArray.push(age);
	numberArray.push(phoneNumber);

	//Create a for loop that will loop through numberArray
	for(var i=0; i < numberArray.length; i++) {
		//Check to see if the numberArray at index i is less than or equal to 100. 
		if(numberArray[i] <= 100) {
			//If it is, use DOM innerHTML to write "Age: " plus the variable age.
			document.getElementById('postAge').innerHTML = "Age: " + age;
		}

		//Check to see if the numberArray at index i is greater than 100.
		if(numberArray[i] > 100) {
			//If it is, use DOM innderHTML to write "Phone Number: " plus the variable phoneNumber
			document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + phoneNumber;
		}
	}
}