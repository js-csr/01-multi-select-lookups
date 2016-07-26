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
                SPClientTemplates.TemplateManager.RegisterTemplateOverrides(csr);
            };
            this._overrides = {};
        }
        return JSLink;
    }());
    PoC.JSLink = JSLink;
})(PoC || (PoC = {}));
