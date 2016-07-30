/// <reference path="typings/sharepoint/sharepoint.d.ts" />
/// <reference path="typings/microsoft-ajax/microsoft.ajax.d.ts" />

module PoC {
  declare var SPClientTemplates: any 

  export class OverrdieType {
    public static Edit: string = "EditForm";
    public static New: string = "NewForm";
    public static Display: string = "DisplayForm";
    public static View: string = "View";
  }
  export interface IOverrideItem {
    FieldName: string;
    Type: string;
    Callback: Function;
  }
  export class JSLink {
    private _overrides: any;

    constructor() {
      this._overrides = <any>{};
    }

    addOverride = (fieldName: string, type: string, callback: Function): void => {
      if (!this._overrides.hasOwnProperty(fieldName))
        this._overrides[fieldName] = <any>{};

      this._overrides[fieldName][type] =callback;
    }

    register = (): void => {
      var csr = <any>{}; 
      csr.Templates = <any>{}; 
      csr.Templates.Fields = this._overrides;
      console.log("register", this._overrides, csr);

      SPClientTemplates.TemplateManager.RegisterTemplateOverrides(csr);  
    }
  }
}