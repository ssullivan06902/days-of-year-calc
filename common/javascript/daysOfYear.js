var date = new Date();					// this holds today's date
var month = date.getMonth() + 1;		// this holds the current month
var day = date.getDate();				// this holds the current day
var year = date.getFullYear();			// this holds the current year in 4 digits
var isLeapYear = calculateLeapYear();	// this is a boolean variable to hold if leap year
var numbOfDays = 0;
var daysPerMonth = [31, 28, 31, 30, 31,  30, 31, 31, 30, 31, 30, 31];
var theDate = month + "/" + day + "/" + year;

if (isLeapYear == false)
{
	for (var x = 0; x < (month - 1); x++)
	{
		numbOfDays = numbOfDays + daysPerMonth[x];
	}
}
else
{
	for (var x = 0; x < (month - 1); x++)
	{
		numbOfDays = numbOfDays + daysPerMonth[x];
	}
	if ((month - 1) > 1)
	{
		daysPerMonth++;
	}
}

numbOfDays = numbOfDays + day;
//test comment
addEventListener('load', function(e) 
{
	document.querySelector('#title').innerHTML = 'Number of Days Currently in ' + year;
	document.querySelector('#opening').innerHTML = 'The current date is: ' + theDate;
	document.querySelector('#test').innerHTML = 'Days in the Year thus far is: ' + numbOfDays;

});

// calculating is leap year or not
function calculateLeapYear()
{
	const date2 = new Date(this.year, 1, 29);
	return date2.getMonth() === 1
}
// end calculation