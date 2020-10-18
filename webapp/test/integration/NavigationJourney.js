sap.ui.define(
	[
		"moizaled/SAPUI5/localService/mockserver",
		"sap/ui/test/opaQunit",
		"./pages/App"
	],

	function (mockserver) {

		QUnit.module("Navigation");

		opaTest("Should Open Hello Dialog", function (Given, When, Then) {

			// Initialize Mock Server

			mockserver.init();

			//Arrangements

			Given.iStartMyUIComponent({

				componentConfig: {
					name: "moizaled.SAPUI5"
				}
			});

			//aCTIONS

			When.onTheAppPage.iSayHelloDialogButton();

			Then.onTheAppPage.iSeeHelloDialogButton();

			//Clean UP

			Then.iTeardownMyApp();
		});

	}

);