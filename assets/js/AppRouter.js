//Filename: dashboard

define([  
        //LIBRARIES
        "jquery",
		"backbone",
		"marionette"
], function(
		$, Backbone, Marionette
){
	var DashboardRouter = Marionette.AppRouter.extend({
		appRoutes:{
			"about" : "about",
			"" : "home",
			"*path" : "home"
		}
	});
	return DashboardRouter;
});
