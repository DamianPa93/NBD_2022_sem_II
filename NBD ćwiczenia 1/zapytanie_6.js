use nbd;

db.people.insert([{
	sex: "Male",
	first_name: "Damian",
	last_name: "Paul",
	job: "IT",
	email: "s24559@pjwstk.edu.pl",
	location: {
		city: "Warsaw",
		address: {
			streetname: "Kacprzaka",
			streetnumber: "99"
		}
	},
	description: "...",
	height: "183.0",
	weight: "75.0",
	birth_date: "1993-01-10T00:01:02",
	nationality: "Poland",
	credit: [{
		type: "switch",
		number: "6759888939100098698",
		currency: "PLN",
		balance: "1829.33"
	}]
}]);