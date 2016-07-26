var PoC;
(function (PoC) {
    var MultiSelectLookup = (function () {
        function MultiSelectLookup() {
            var _this = this;
            this.init = function () {
                var link = new PoC.JSLink();
                link.addOverride("", PoC.OverrdieType.Edit, _this.edit);
                link.register();
            };
            this.edit = function (ctx) {
            };
        }
        return MultiSelectLookup;
    }());
    PoC.MultiSelectLookup = MultiSelectLookup;
})(PoC || (PoC = {}));
(function () {
    new PoC.MultiSelectLookup().init();
})();
