/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name : 'Tan Le',
    role : 'Software Enginner',
    contacts : {
          mobile: '704-451-2956',
          email: 'haitansle@gmail.com',
          github: 'github.com/haitanle',
          linkedin: 'linkedin.com/in/tan-le-6b155a94',
          location: 'Charlotte,NC'
      }, 
    welcomeMessage: "Hi! Welcome to my personal page! I like working at the intersection of sports and technology",
    skills: ['Java','Python','HTML/CSS','JavaScript'],
    biopic: './images/biopic.jpg',
    display: function() {
    	console.log('display');
    }
}

//document.getElementById('header').append(HTMLheaderName+HTMLheaderRole);


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header:last").append(formattedName).append(formattedRole).append(formattedPic);