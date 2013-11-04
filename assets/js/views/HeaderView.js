//Filename: boilerplate.js

define([
        //LIBRARIES
        "jquery",
        "backbone",
        "marionette",
        //OTHER
        
        //TEMPLATES
        "text!tpl/app/Header.mustache",
        
        //NO EXPORTS

], function($, Backbone, Marionette, tpl){
	var HeaderView = Marionette.ItemView.extend({
        initialize : function() {
            //controls the header information
            this.model = (new Backbone.Model({
                brand : "PHYLO | DNA Puzzle",
                links : [
                    {
                        name : "Home",
                        route : "#/home"
                    },
                    {
                        name : "About",
                        route : "#/about"
                    }
                ]
            }));
        },
		template: tpl,
		events: {
			//"click button.logout": "logout"
		}
		//enable if have login
		/*logout: function(e){
			$(e.target.form).submit();
		} */
	});
	
  return HeaderView;
  
});