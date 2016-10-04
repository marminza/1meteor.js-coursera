 
// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
    // code to run on server at startup
    if (!Websites.findOne()){
    	console.log("No websites yet. Creating starter data.");
    	  Websites.insert({
    		title:"Goldsmiths Computing Department", 
    		url:"http://www.gold.ac.uk/computing/", 
    		description:"This is where this course was developed.", 
    		createdBy:admin.profile.name,
            createdOn:new Date(now-5*3600*1000)
            //upvotes:[];
  	    });
    	 Websites.insert({
    		title:"University of London", 
    		url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
    		description:"University of London International Programme.", 
    		createdBy:admin.profile.name,
            createdOn:new Date(/*now-7*3600*1000*/)
            //upvotes:[];
  	    });
    	 Websites.insert({
    		title:"Coursera", 
    		url:"http://www.coursera.org", 
    		description:"Universal access to the world’s best education.", 
    		createdBy:admin.profile.name,
            createdOn:new Date()
            //upvotes:[];
  	    });
    	Websites.insert({
    		title:"Google", 
    		url:"http://www.google.com", 
    		description:"Popular search engine.", 
    		createdBy:admin.profile.name,
            createdOn:new Date()
            //upvotes:[];
  	    });
    }

    // create admin user
    var adminId = Meteor.users.insert({
            profile: {
                name: 'Tom Coleman'
            }
        });
    var admin = Meteor.users.findOne(adminId);
});

