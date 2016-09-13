import { Template } from 'meteor/templating';


import './main.html';

// Template.images.onCreated(function imagesOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });


// Template.images.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.time.set(instance.time.get() + 1);
//   },
// });


	var today = new Date();

	Template.times.helpers({time:today});
 