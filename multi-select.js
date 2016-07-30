var PoC;
(function (PoC) {
    var OverrdieType = (function () {
        function OverrdieType() {
        }
        OverrdieType.Edit = "EditForm";
        OverrdieType.New = "NewForm";
        OverrdieType.Display = "DisplayForm";
        OverrdieType.View = "View";
        return OverrdieType;
    }());
    PoC.OverrdieType = OverrdieType;
    var JSLink = (function () {
        function JSLink() {
            var _this = this;
            this.addOverride = function (fieldName, type, callback) {
                if (!_this._overrides.hasOwnProperty(fieldName))
                    _this._overrides[fieldName] = {};
                _this._overrides[fieldName][type] = callback;
            };
            this.register = function () {
                var csr = {};
                csr.Templates = {};
                csr.Templates.Fields = _this._overrides;
                console.log("register", _this._overrides, csr);
                SPClientTemplates.TemplateManager.RegisterTemplateOverrides(csr);
            };
            this._overrides = {};
        }
        return JSLink;
    }());
    PoC.JSLink = JSLink;
})(PoC || (PoC = {}));

var PoC;
(function (PoC) {
    var MultiSelectLookup = (function () {
        function MultiSelectLookup() {
            var _this = this;
            this.init = function () {
                var link = new PoC.JSLink();
                link.addOverride("Orgs", PoC.OverrdieType.Edit, _this.edit);
                link.register();
            };
            this.edit = function (ctx) {
                var formCtx = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);
                var item = ctx['CurrentItem'];
                var lookupValues = ctx.CurrentItem[formCtx.fieldSchema.fieldName];
                for (var i = 0; i < lookupValues.length; i++)
                    console.log(lookupValues[i].lookupId, lookupValues[i].lookupValue);
                console.log(formCtx.fieldSchema.Choices);
                formCtx.registerGetValueCallback(formCtx.fieldName, _this.getMultiValue.bind(null, formCtx.fieldName));
            };
            this.getMultiValue = function (fieldName) {
                console.log('getMultiValue', fieldName);
                return '4;#CRM;#2;#Pharma';
            };
        }
        return MultiSelectLookup;
    }());
    PoC.MultiSelectLookup = MultiSelectLookup;
})(PoC || (PoC = {}));
(function () {
    new PoC.MultiSelectLookup().init();
})();
