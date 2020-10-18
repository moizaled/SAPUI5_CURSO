sap.ui.define([
		"sap/ui/core/UIComponent",
		"moizaled/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel",
		"./controller/HelloDialog",
		"sap/ui/model/json/JSONModel",
		"sap/ui/Device"
	], function (UIComponent, models, ResourceModel, HelloDialog, JSONModel, Device) {

		return UIComponent.extend("moizaled.SAPUI5.Component", {
			metadata: {
				manifest: "json"
					/*				rootView: {

										"viewName": "moizaled.SAPUI5.view.App",
										"type": "XML",
										"async": "true",
										"id": "app"

									}*/
			},

			init: function () {

				UIComponent.prototype.init.apply(this, arguments);

				this.setModel(models.createRecipient());
				//Set I18n
				var i18nModel = new ResourceModel({
					bundleName: "moizaled.SAPUI5.i18n.i18n"

				});
				this.setModel(i18nModel, "i18n");
				// set device model

				var oDeviceModel = new JSONModel(Device);
				//				oDeviceModel.setDefaultBindingMode("Oneway");
				this.setModel(oDeviceModel, "device");

				this._helloDialog = new HelloDialog(this.getRootControl());

				// Create the views based on the  url/hash

				this.getRouter().initialize();

			},

			exit: function () {

				this._helloDialog.destroy();

				delete this._helloDialog;

			},

			openHelloDialog: function () {
				this._helloDialog.open();

			},

			getContentDensityClass: function () {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
				return this._sContentDensityClass;
			}
		});

	}

);