sap.ui.define([
		"sap/ui/model/json/JSONModel"
	],

	function (JSONModel) {
		"use strict";
		return {

			createRecipient: function () {

				var odata = {
					recipient: {

						name: "Este curso es calidad"

					}
				};

				return new JSONModel(odata);

			}
		};

	});