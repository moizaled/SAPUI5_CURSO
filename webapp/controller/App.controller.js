sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
		/*		"moizaled/SAPUI5/model/models",
				"sap/ui/model/resource/ResourceModel"*/
	],

	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("moizaled.SAPUI5.controller.App",

			{
				/*
				metadata: {

					rooview: {

						"viewName": "moizaled.SAPUI5.view.app",
						"type": "XML",
						"async": "true",
						"id": "app"

					}
				},*/
				/*			onInit: function () {
								//Set Model of the application..

								/*	var odata = {
										recipient: {

											name: "Este curso es calidad"

										}
									};

									var omodel = new JSONModel(odata);*/

				//					this.getView().setModel(models.createRecipient());
				//Set I18n
				//					var i18n = new ResourceModel({
				//						bundleName: "moizaled.SAPUI5.i18n.i18n"

				//					});
				//					this.getView().setModel(i18n, "i18n");
				//				},
				onInit: function () {

					this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
				},

				onOpenHeader: function () {

					this.getOwnerComponent().openHelloDialog();
				}

				/*				onShowHello: function () {
									// Read the text from I18N and from model 

									var sayMizael = this.getView().getModel("i18n").getResourceBundle().getText("showPressButtonText");
									var sname = this.getView().getModel().getProperty("/recipient/name");

									var msg = sayMizael.concat("").concat(sname);
									MessageToast.show(msg);

									/*eslint-disable no-alert*/
				//alert("Hola Mizael!!");
				/*eslint-enable no-alert*/

				//		}*/

			});

	});