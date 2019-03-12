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
}

//variables used from helper.js that we will use 
var variables = [HTMLheaderName, HTMLheaderRole, HTMLmobile, HTMLemail, HTMLgithub, HTMLblog,HTMLlocation, HTMLbioPic,
HTMLwelcomeMsg,HTMLskills];

var keyIndex = Object.keys(bio);

let htmlString = '';
for( let i = 0; i < variables.length; i++){
	variables[i] = variables[i].replace("%data%", bio[keyIndex[i]]);
	htmlString+= variables[i];
}


$("#header").append(htmlString);



// variables.forEach(function(element){
// 	$("#header").append(element);
// })



