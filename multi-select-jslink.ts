/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/microsoft-ajax/microsoft.ajax.d.ts" />
/// <reference path="jslink-helper.ts" />

module PoC {
  export class MultiSelectLookup {
    init = (): void => {
      var link: PoC.JSLink = new PoC.JSLink();
      link.addOverride("", PoC.OverrdieType.Edit, this.edit);
      link.register();
    }

    edit = (ctx: any): void => {

    }
  }
}

(function() {
  new PoC.MultiSelectLookup().init();
})();