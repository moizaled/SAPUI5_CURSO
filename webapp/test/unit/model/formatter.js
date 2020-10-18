sap.ui.define(
	[
		"moizaled/SAPUI5/model/formatter",
		"sap/ui/model/resource/ResourceModel"
	],

	function (formatter, ResourceModel) {

		QUnit.module("Formatting Functions",

			{

				beforeEach: function () {
					this._oResourceModel = new ResourceModel({

						bundleUrl: sap.ui.require.toUrl("moizaled/SAPUI5") + "/i18n/i18n.properties"
					});
				},

				afterEach: function () {
					this._oResourceModel.destroy();
				}

			});

		QUnit.test("Should Return", function (assert) {

			var oModel = this.stub();
			oModel.withArgs("i18n").returns(this._oResourceModel);

			var oViewStub = {

				getModel: oModel
			};
			var oControllerStub = {

				getView: this.stub().returns(oViewStub)
			};

			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

			assert.strictEqual(fnIsolatedFormatter("A"), "New", "The Long Text for status A is Correct");
			assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The Long Text for status B is Correct");
			assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The Long Text for status B is Correct");
		});
	});