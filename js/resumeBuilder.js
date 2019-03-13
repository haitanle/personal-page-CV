/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	name : 'Tan Le',
    role : 'Software Engineer',
 	mobile: '704-451-2956',
    email: 'haitansle@gmail.com',
    github: 'github.com/haitanle',
    linkedin: 'linkedin.com/in/tan-le-6b155a94',
    location: 'Charlotte,NC',
    biopic: './images/biopic.jpg',
	welcomeMessage: "Hi! Welcome to my personal page! I like working at the intersection of sports and technology", 
	skills: ['Java','Python','HTML/CSS','JavaScript']
};

//bioVariables used from helper.js that we will use 
var bioVariables = [HTMLheaderName, HTMLheaderRole, HTMLmobile, HTMLemail, HTMLgithub, HTMLblog,HTMLlocation, HTMLbioPic,
HTMLwelcomeMsg,HTMLskills];

var bioKeys = Object.keys(bio);

let htmlString = '';
for( let i = 0; i < bioVariables.length; i++){
	htmlString += bioVariables[i].replace("%data%", bio[bioKeys[i]]);
	
}


$("#header").append(htmlString);


let education = {
	schools: [
	{
		name: 'University of North Carolina-Chapel Hill',
		degree: 'BS Sociology',
		dates: '2006-2010',
		location: 'Chapel Hill, NC'
	},
	{
		name: 'University of North Carolina-Charlotte',
		degree: 'MS Computer Science',
		dates: '2013-2015',
		location: 'Charlotte, NC'
	}
	],
	onlineCourses: [
		{
			title: 'Front-End Developer Nanodegree',
			school: 'Udacity',
			dates: 'Nover 2018-March 2019',
			url: 'https://confirm.udacity.com/RRUJTU4H'
		}
	]
}


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


