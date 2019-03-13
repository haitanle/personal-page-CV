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
		name: 'University of North Carolina-Charlotte',
		degree: 'MS Computer Science',
		dates: '2013-2015',
		location: 'Charlotte, NC'
	},
	{
		name: 'University of North Carolina-Chapel Hill',
		degree: 'BS Sociology',
		dates: '2006-2010',
		location: 'Chapel Hill, NC'
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



let jobs = [
	{
		employer: 'Premier Inc',
		title: 'Software Engineer',
		location: 'Charlotte, NC',
		dates: 'Aug 2014 - Nov 2018',
		description: "Work in Full Stack development with Hadoop (Impala, Hive), Spring, Kafka, database \
						design and modeling, SQL functions and procedures. \
						Streamline successfully 10 datasets implementation Java, SQL, Bash. \
						Oversee file-ingestion application from design, implementation, and maintenance."

	},
	{
		employer: 'Premier Inc',
		title: 'Software Intern',
		location: 'Charlotte, NC',
		dates: 'Jun 2014 - Aug 2014',
		description: " Implemented automation deployment to allow for central location of control and instant \
						status update of deployment process. \
						Produced documentation and trained 3 team leads on automation process. \
						Executed data cleaning, analysis, and visualization on Big Data health record."
	},
	{
		employer: 'Geeks-N-Things',
		title: 'Computer Repair Technician',
		location: 'Charlotte, NC',
		dates: 'Mar 2013 - Dec 2014',
				description: "Diagnose and debug computers/laptops' hardware problems. \
								Build and deploy operating system images for refurbished resell. \
								Repair and replace computer's hardware."
	},
	{
		employer: 'Siemens',
		title: 'Intern',
		location: 'Charlotte, NC',
		dates: 'Jun 2012 - Jul 2012',
				description: "Assisted engineers with data collection for turbine construction. \
								Learned to properly use measurement and calibration tools. \
								Performed evaluation and checks of turbine's components in final assembly."
	}

]




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