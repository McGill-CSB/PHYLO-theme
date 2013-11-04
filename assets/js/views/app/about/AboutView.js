define([
        //LIBRARIES
         "jquery",
         "underscore",
         "backbone",
         "marionette",
         //TEMPLATES
         "text!tpl/app/about/About.mustache",
], function(
        $, _, Backbone, Marionette,
        tpl
) {
         var AboutView = Marionette.ItemView.extend({
             tagName : "div",
             className : "",
             id : "content",
             template : tpl,
             onClose : function() {
                 
             }
         });
         return AboutView;
});
        
