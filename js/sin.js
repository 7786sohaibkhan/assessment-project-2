fetch("https://pozzad-email-validator.p.rapidapi.com/emailvalidator/validateEmail/john%2540gmail.com", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "pozzad-email-validator.p.rapidapi.com",
		"x-rapidapi-key": "86ff794510msh5deedffbd9ea748p14d9bejsn3d0af28368bd"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});