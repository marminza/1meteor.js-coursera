//This is the ddbb
Websites = new Mongo.Collection("websites"); 

//config of security on Websites collection
Websites.allow({
	insert:function(userId, doc){
		if (true) {return true;}
		else{return false;}
	}
	//CONTINUE 
})