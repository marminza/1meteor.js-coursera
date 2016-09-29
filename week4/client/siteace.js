	/////
	// Routing
	/////

	//Macro Template
	Router.configure({
		layoutTemplate: "ApplicationLayout"
	});


	Router.route('/', function () {
	  this.render('welcome', {
	    to:"main"
	  });
	});


	Router.route('/webs', function () {
	  this.render('navbar', {
	  	to:"navbar"
	  });
	  this.render('website_form', {
	  	to:"first_line"
	  });
	  this.render('website_list', {
	  	to:"main"
	  });
	});


	Router.route('/detail/:_id', function () {
	  this.render('navbar', {
	  	to:"navbar"
	  });
	  this.render('detail', {
	  	to:"main",
	    data: function () {
	    	return Items.findOne({_id: this.params._id});
	    }
	  });
	});



	/////
	// template helpers 
	/////

	// helper function that returns logged user
	Template.body.helpers({
		username:function(){
			if (Meteor.user()) {
				return Meteor.user().emails[0].address;
			}
			else{
				return "Anonymous"
			}
		}
	});

	// helper function that returns IF user is logged
	Template.body.helpers({
		currentUser:function(){
			if (Meteor.user()) {
				return true;
			}
			else{return false;} //Check with videos
		}
	});

	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			return Websites.find({});
		}
	});


	/////
	// template events 
	/////

	Template.website_item.events({
		"click .js-upvote":function(event){
			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Up voting website with id "+website_id);
			// put the code in here to add a vote to a website!

			return false;// prevent the button from reloading the page
		}, 
		"click .js-downvote":function(event){

			// example of how you can access the id for the website in the database
			// (this is the data context for the template)
			var website_id = this._id;
			console.log("Down voting website with id "+website_id);

			// put the code in here to remove a vote from a website!

			return false;// prevent the button from reloading the page
		}
	})

	Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").toggle('slow');
		}, 
		"submit .js-save-website-form":function(event){

			// here is an example of how to get the url out of the form:
			var url = event.target.url.value;
			var title = event.target.title.value;
			var descrip = event.target.description.value;
			
			Websites.insert({
	    		title: title, 
	    		url: url, 
	    		description: descrip, 
	    		createdOn:new Date()
	    	});	

			return false;// stop the form submit from reloading the page

		}
	});


