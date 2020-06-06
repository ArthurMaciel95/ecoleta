fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "21bb0d6becmsh649bb947dbce8c2p111d64jsna462e3466105"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});