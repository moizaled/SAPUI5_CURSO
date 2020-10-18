sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment"
		/*		"moizaled/SAPUI5/model/models",
				"sap/ui/model/resource/ResourceModel"*/
	],

	function (Controller, MessageToast, Fragment) {
		"use strict";

		return Controller.extend("moizaled.SAPUI5.controller.HelloPanel",

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

				},
				onShowHello: function () {
					// Read the text from I18N and from model 

					var sayMizael = this.getView().getModel("i18n").getResourceBundle().getText("showPressButtonText");
					var sname = this.getView().getModel().getProperty("/recipient/name");

					var msg = sayMizael.concat("").concat(sname);
					MessageToast.show(msg);

					/*eslint-disable no-alert*/
					//alert("Hola Mizael!!");
					/*eslint-enable no-alert*/

				},

				onOpenDialog: function () {
					/*					if (!this.byId("helloDialog")) {
											var oView = this.getView();
											Fragment.load({
												id: oView.getId(),
												name: "moizaled.SAPUI5.view.HelloDialog",
												controller: this

											}).then(function (oDialog) {
												oView.addDependent(oDialog);
												oDialog.open();
											});
										} else {
											this.byId("helloDialog").open();
										}*/
					this.getOwnerComponent().openHelloDialog();
				},

				onCloseDialog: function () {

					this.byId("helloDialog").close();

				}

			});

	});