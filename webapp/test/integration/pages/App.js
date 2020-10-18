sap.ui.define(

	[
		"sap/ui/test/Opa5",
		"sap/ui/test/actions/Press"
	],
	function (Opa5, Press) {

		var sViewName = "moizaled.SAPUI5.view.HelloPanel";
		Opa5.createPageObjects({
			onTheAppPage: {
				actions: {
					iSayHelloDialogButton: function () {
						return this.waitFor({
							id: "HelloDialogButton",
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "Did Not Find the Say Hello Dialog Button"
						});
					}
				},

				assertions: {
					iSeeHelloDialogButton: function () {
						return this.waitFor({
							controlType: "sap.m.Dialog",
							success: function () {
								Opa5.assert.ok(true, "The Dialog Was Open");
							},
							errorMessage: "Did Not Find The Dialog Control"
						});

					}
				}
			}
		});
	});