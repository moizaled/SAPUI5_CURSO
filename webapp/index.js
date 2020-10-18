sap.ui.define([
		//"sap/ui/core/mvc/XMLView"
		"sap/ui/core/ComponentContainer"
	],
	function (ComponentContainer) {
		//function (XMLView) {

		new ComponentContainer({

			name: "moizaled.SAPUI5",
			settings: {
				id: "moizaled"
			},

			async: true
		}).placeAt("content");
		/*		XMLView.create({
					
				 viewName:"moizaled.SAPUI5.view.App"	
				 
			   }).then(function (Oview){
			   	
			   	Oview.placeAt("content");
			   });*/
		/*eslint-disable no-alert
		alert("UI5 OF THE FUTURE");
		/*eslint-enable no-alert*/
		/*	new sap.m.Text(
				{
					text: "My first Own Application" // string
				}).placeAt("content");
				*/

	});