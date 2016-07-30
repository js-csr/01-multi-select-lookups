/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/microsoft-ajax/microsoft.ajax.d.ts" />
/// <reference path="jslink-helper.ts" />

module PoC {
  export class MultiSelectLookup {
    init = (): void => {
      var link: PoC.JSLink = new PoC.JSLink();
      link.addOverride("Orgs", PoC.OverrdieType.Edit, this.edit);
      link.register();
    }

    edit = (ctx: any): void => {
      var formCtx: any = SPClientTemplates.Utility.GetFormContextForCurrentField(ctx);

      var item: any = ctx['CurrentItem'];
      var lookupStr: string = ctx.CurrentItem[formCtx.fieldName];
      var lookupValues: any[] = SPClientTemplates.Utility.ParseMultiLookupValues(lookupStr);
      
      console.log(formCtx.fieldSchema.Choices);

      formCtx.registerGetValueCallback(formCtx.fieldName, this.getMultiValue.bind(null, formCtx.fieldName));
    }

    getMultiValue = (fieldName: string): string => {
      console.log('getMultiValue', fieldName);
      return '4;#CRM;#2;#Pharma';
    }
  }
}

(function() {
  new PoC.MultiSelectLookup().init();
})();