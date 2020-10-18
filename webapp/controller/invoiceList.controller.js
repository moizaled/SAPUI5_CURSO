sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	return Controller.extend("moizaled.SAPUI5.controller.invoiceList", {
		formatter: formatter,
		onInit: function () {

			var oViewmodel = new JSONModel({
				currency: "EUR"
			});

			this.getView().setModel(oViewmodel, "view");

		},
		onFilterInvoices: function (oEvent) {

			// Build Filter

			var aFilter = [];
			var sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			//Filter binding Over the list
			var Olist = this.byId("InvoiceList");
			var oBinding = Olist.getBinding("items");
			oBinding.filter(aFilter);

		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))

			});

		}
	});

});