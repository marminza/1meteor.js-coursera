//This is the ddbb
Websites = new Mongo.Collection("websites"); 

//config of security on Websites collection
Websites.allow({
	update:function(userId, doc){
		if (Meteor.user()) {// they are logged in
			return true;
		}
		else{ // user not logged in - do not let them update
			return false;
		}
	},

	insert:function(userId, doc){
		//console.log("testing security on image insert");
		if (Meteor.user()){// they are logged in
			if (userId != doc.createdBy){// the user is messing about
				return false;
			}
			else {// the user is logged in, the image has the correct user id
				return true;
			}
		}
		else {// user not logged in
			return false;
		}
	}, 

	remove:function(userId, doc){
		return true;
	}
})