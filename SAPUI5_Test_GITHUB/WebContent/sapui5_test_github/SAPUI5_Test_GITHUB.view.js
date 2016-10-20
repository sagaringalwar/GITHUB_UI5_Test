sap.ui.jsview("sapui5_test_github.SAPUI5_Test_GITHUB", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5_test_github.SAPUI5_Test_GITHUB
	*/ 
	getControllerName : function() {
		return "sapui5_test_github.SAPUI5_Test_GITHUB";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5_test_github.SAPUI5_Test_GITHUB
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});
	}

});