define([
        //LIBRARIES
         "jquery",
         "underscore",
         "backbone",
         "marionette",
         //TEMPLATES
], function(
        $, _, Backbone, Marionette,
        tpl
) {
         var View = Marionette.ItemView.extend({
             tagName : "div",
             className : "",
             id : "content",
             template : tpl,
             onClose : function() {
                 
             }
         });
         return View;
});
        
