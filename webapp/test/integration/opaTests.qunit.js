/* GLOBAL UNIT */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	sap.ui.require([

		"moizaled/SAPUI5/test/integration/NavigationJourney"
	], function () {

		QUnit.start();
	});

});