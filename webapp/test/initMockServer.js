sap.ui.define(
	[

		"../localService/mockserver"
	],

	function (mockserver) {

		// Initialize the mock server 	
		mockserver.init();
		// Initialize the embededd component on the HMTL PAGE
		sap.ui.require(["sap/ui/core/ComponentSupport"]);
	}

);