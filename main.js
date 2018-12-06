var Info= {


	Title:'Ameer Hamza',
	Balance:1900,
	Currency:'USD',
	IBAN:'54321',

};

function displayinfo(){

document.getElementById("title").innerText =Info.Title;
document.getElementById("balance").innerText =Info.Balance;
document.getElementById("currency").innerText =Info.Currency;
document.getElementById("IBAN").innerText =Info.IBAN;


	}

	displayinfo();