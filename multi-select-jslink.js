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
                var lookupStr = ctx.CurrentItem[formCtx.fieldName];
                var lookupValues = SPClientTemplates.Utility.ParseMultiLookupValues(lookupStr);
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
