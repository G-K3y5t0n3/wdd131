// function isCardNumberValid(number) {
// 	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
// 	return number === '1234123412341234'
// }
// function displayError(msg) {
// 	// display error message
// 	document.querySelector('.errorMsg').innerHTML = msg
// }
// function submitHandler(event) {
// 	event.preventDefault()
// 	let errorMsg = ''
// 	console.log(this.cardNumber.value)
// 	// clear any previous errors
// 	displayError('')
// 	// check credit card number
// 	if (isNaN(this.cardNumber.value)) {
// 		// it is not a valid number
// 		errorMsg += 'Card number is not a valid number\n'
// 	} else if (!isCardNumberValid(this.cardNumber.value)) {
// 		// it is a number, but is it valid?
// 		errorMsg += 'Card number is not a valid card number\n'
// 	}
// 	if (errorMsg !== '') {
// 		// there was an error. stop the form and display the errors.
// 		displayError(errorMsg)
// 		return false
// 	}
// 	return true
// }

// document.querySelector('.cCard').addEventListener('submit', submitHandler)

function isCardNumberValid(number) {
  // Accepts only a specific test card number
  return number === '1234123412341234';
}

function isExpirationValid(monthStr, dayStr) {
  const month = parseInt(monthStr, 10);
  const day = parseInt(dayStr, 10);

  if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  const today = new Date();
  const currentYear = today.getFullYear();
  const expDate = new Date(currentYear, month - 1, day);

  // Consider it invalid if it's before today
  return expDate >= today;
}

function displayError(msg) {
  document.querySelector('.errorMsg').innerHTML = msg.replace(/\n/g, '<br>');
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = '';
  displayError('');

  const cardNumberInput = document.querySelector('#card-number').value.replace(/\s+/g, '');
  const expMonthInput = document.querySelector('#e-month').value.trim();
  const expDayInput = document.querySelector('#e-day').value.trim();

  if (isNaN(cardNumberInput)) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(cardNumberInput)) {
    errorMsg += 'Card number is not a valid card number\n';
  }

  if (!isExpirationValid(expMonthInput, expDayInput)) {
    errorMsg += 'Expiration date is invalid or in the past\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return false;
  }

  alert('Payment submitted successfully!');
  return true;
}

// Attach to the only form in your page
document.querySelector('.cCard form').addEventListener('submit', submitHandler);

