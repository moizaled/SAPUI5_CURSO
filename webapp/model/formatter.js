sap.ui.define([

	],

	function () {

		return {

			statusText: function (sStatus) {
				var ResourceBundle = this.getView().getModel("i18n").getResourceBundle();
				switch (sStatus) {
				case "A":
					return ResourceBundle.getText("invoiceStatusA");
				case "B":
					return ResourceBundle.getText("invoiceStatusB");
				case "C":
					return ResourceBundle.getText("invoiceStatusC");
				case "D":
					return ResourceBundle.getText("invoiceStatusD");
				case "E":
					return ResourceBundle.getText("invoiceStatusE");
				default:
					return sStatus;
				}
			}
		};
	}

	// 	function (sStatus) {

	// 		statusText: return {

	// var ResourceBundle = this.getView().getModel("i18n").getResourceBundle();

	// 		};
	// 	}

);