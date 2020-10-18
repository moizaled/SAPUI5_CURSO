sap.ui.define([
		"sap/ui/base/ManagedObject",
		"sap/ui/core/Fragment",
		"sap/ui/core/syncStyleClass"
	], function (ManagedObject, Fragment, syncStyleClass) {

		return ManagedObject.extend("moizaled.SAPUI5.controller.HelloDialog", {

			constructor: function (OView) {
				this._oView = OView;
			},
			exit: function () {
				delete this._oView;
			},
			open: function () {
				var oView = this._oView;
				if (!oView.byId("helloDialog")) {
					// var oView = this._oView;
					var oFragmenterController = {

						onCloseDialog: function () {
							oView.byId("helloDialog").close();
						}
					};
					Fragment.load({
						id: oView.getId(),
						name: "moizaled.SAPUI5.view.HelloDialog",
						// controller: this
						controller: oFragmenterController

					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
						oDialog.open();
					});
				} else {
					oView.byId("helloDialog").open();
				}
			}
		});

	}

);