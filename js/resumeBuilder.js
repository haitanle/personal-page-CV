

//bioVariables used from helper.js that we will use 
var bioVariables = [HTMLheaderName, HTMLheaderRole, HTMLmobile, HTMLemail, HTMLgithub, HTMLblog,HTMLlocation, HTMLbioPic,
HTMLwelcomeMsg,HTMLskills];

var bioKeys = Object.keys(bio);

let htmlString = '';
for( let i = 0; i < bioVariables.length; i++){
	htmlString += bioVariables[i].replace("%data%", bio[bioKeys[i]]);
	
}


$("#header").append(htmlString);





var schoolVariables = 
[
HTMLschoolName,
HTMLschoolDegree,
HTMLschoolDates,
HTMLschoolLocation
];


var schoolsKey = Object.keys(education['schools'][0]); 


htmlString = '';

for(let x = 0; x < education.schools.length; x++){
	for( let i = 0; i < schoolVariables.length; i++){
		htmlString += schoolVariables[i].replace("%data%", education.schools[x][schoolsKey[i]]);
		
	}
}


var schoolOnlineVar = 
[
HTMLonlineTitle,
HTMLonlineSchool,
HTMLonlineDates,
HTMLonlineURL
];


schoolsKey = Object.keys(education['onlineCourses'][0]); 


for(let x = 0; x < education.onlineCourses.length; x++){
	for( let i = 0; i < schoolOnlineVar.length; i++){
		htmlString += schoolOnlineVar[i].replace("%data%", education.onlineCourses[x][schoolsKey[i]]);
		
	}
}


$("#education .education-entry").append(htmlString);







let jobVar = [
HTMLworkEmployer,
HTMLworkTitle,
HTMLworkDates,
HTMLworkLocation,
HTMLworkDescription
];


let jobKey = Object.keys(jobs[0]); 

htmlString = '';

for(let x = 0; x < jobs.length; x++){
	for( let i = 0; i < jobVar.length; i++){
		htmlString += jobVar[i].replace("%data%", jobs[x][jobKey[i]]);
	}
}


$("#workExperience").append(htmlString);