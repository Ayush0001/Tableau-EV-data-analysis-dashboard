
function getLocalizeGlobalNamespace() {
  var globalContainer;

  if (typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node') {
    globalContainer = global;
  } else {
    globalContainer = self;
  }

  return globalContainer;
}
!function(){function r(e){if(!(this instanceof r))return new r(e);t(e,"locale"),u(e,"locale"),this._locale=e}var a,n,i,l,t,o,u;getLocalizeGlobalNamespace().TabGlobalize=(a=function(e,r){return e=e.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e){return e=e.replace(/^{([^}]*)}$/,"$1"),"string"==typeof(e=r[e])?e:"number"==typeof e?""+e:JSON.stringify(e)})},n=function(e,r,t){return r=e+(r?": "+a(r,t):""),(r=new Error(r)).code=e,function(){var t=arguments[0];[].slice.call(arguments,1).forEach(function(e){for(var r in e)t[r]=e[r]})}(r,t),r},i=function(e,r,t){e.length&&e[e.length-1].type===r?e[e.length-1].value+=t:e.push({type:r,value:t})},l=function(e,r,t,a){if(!t)throw n(e,r,a)},t=function(e,r){l("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==e,{name:r})},o=function(e,r,t,a){l("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",t,{expected:a,name:r,value:e})},u=function(e,r){o(e,r,void 0===e||"string"==typeof e,"a string")},r.locale=function(e){return u(e,"locale"),arguments.length&&(this._locale=e),this._locale},r._createError=n,r._formatMessage=a,r._formatMessageToParts=function(a,n){var l=0,o=[];return a.replace(/{[0-9a-zA-Z-_. ]+}/g,function(e,r){var t=e.slice(1,-1);i(o,"literal",a.slice(l,r)),i(o,"variable",n[t]),o[o.length-1].name=t,l+=r+e.length}),o.filter(function(e){return""!==e.value})},r._partsJoin=function(e){return e.map(function(e){return e.value}).join("")},r._partsPush=i,r._regexpEscape=function(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},r._runtimeKey=function(e,r,t,a){return a=a||(t=t,JSON.stringify(t,function(e,r){return r&&r.runtimeKey?r.runtimeKey:r})),a=e+r+a,0<(a=[].reduce.call(a,function(e,r){return 0|(e=(e<<5)-e+r.charCodeAt(0))},0))?"a"+a:"b"+Math.abs(a)},r._stringPad=function(e,r,t){for(var a=(e="string"!=typeof e?String(e):e).length;a<r;a+=1)e=t?e+"0":"0"+e;return e},r._validateParameterPresence=t,r._validateParameterTypeString=u,r._validateParameterType=o,r)}(),function(e){var r,t,a,n;r=e.TabGlobalize,t=r._runtimeKey,a=r._validateParameterType,n=function(e,r){a(e,r,void 0===e||null!==(r=e)&&""+r=="[object Object]"||Array.isArray(e),"Array or Plain Object")},r._messageFormatterFn=function(r){return function(e){return"number"!=typeof e&&"string"!=typeof e||(e=[].slice.call(arguments,0)),n(e,"variables"),r(e)}},r._messageFormat={number:function(e,r){if(isNaN(e))throw new Error("'"+e+"' isn't a number.");return e-(r||0)},plural:function(e,r,t,a,n){if({}.hasOwnProperty.call(a,e))return a[e]();r&&(e-=r);n=t(e,n);return n in a?a[n]():a.other()},select:function(e,r){return{}.hasOwnProperty.call(r,e)?r[e]():r.other()}},r._validateParameterTypeMessageVariables=n,r.messageFormatter=r.prototype.messageFormatter=function(){return r[t("messageFormatter",this._locale,[].slice.call(arguments,0))]},r.formatMessage=r.prototype.formatMessage=function(e){return this.messageFormatter(e).apply({},[].slice.call(arguments,1))}}(getLocalizeGlobalNamespace()),function(e){var r,t,a,n,l;r=e.TabGlobalize,t=r._runtimeKey,a=r._validateParameterPresence,n=r._validateParameterType,l=function(e,r){n(e,r,void 0===e||"number"==typeof e,"Number")},r._pluralGeneratorFn=function(r){return function(e){return a(e,"value"),l(e,"value"),r(e)}},r._validateParameterTypeNumber=l,r.plural=r.prototype.plural=function(e,r){return a(e,"value"),l(e,"value"),this.pluralGenerator(r)(e)},r.pluralGenerator=r.prototype.pluralGenerator=function(e){return r[t("pluralGenerator",this._locale,[e=e||{}])]}}(getLocalizeGlobalNamespace());
(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.currentMessageLocale = 'en_GB';
  root.Localize.msg = new root.TabGlobalize('en-GB');
  root.Localize.message = root.Localize.message || {};
  root.Localize.message.currentLocale = 'en_GB';

  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(getLocalizeGlobalNamespace(), function( Globalize ) {
// TODO: remove workaround below
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
// ----
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.b1732789968 = pluralGeneratorFn(function(n
) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.b2059969302 = messageFormatterFn((function(  ) {
  return function(d) { return ""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b917346193 = messageFormatterFn((function(  ) {
  return function(d) { return "Accepts multiple values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1643093342 = messageFormatterFn((function(  ) {
  return function(d) { return "Error occurred: " + d.EXCEPTION_CODE + ". Contact your Salesforce Flow administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b469171790 = messageFormatterFn((function(  ) {
  return function(d) { return "Workflow failed. Contact your Salesforce Flow administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b234928390 = messageFormatterFn((function(  ) {
  return function(d) { return "Action was triggered but may take some time to complete."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b497789715 = messageFormatterFn((function(  ) {
  return function(d) { return "Action isn't configured"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2001210102 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit data to Salesforce Flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1002371962 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit data to flow. Contact your workflow author."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1702292930 = messageFormatterFn((function(  ) {
  return function(d) { return "Workflow completed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2023562761 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a constant"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a266584444 = messageFormatterFn((function(  ) {
  return function(d) { return "Only a single value from the array will be sent to the flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1586486315 = messageFormatterFn((function(  ) {
  return function(d) { return "Back"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1003596263 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1312937129 = messageFormatterFn((function(  ) {
  return function(d) { return "Border"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b269308208 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse flows in Salesforce Flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b644448716 = messageFormatterFn((function(  ) {
  return function(d) { return "Button title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a671323286 = messageFormatterFn((function(  ) {
  return function(d) { return "Trigger: Button selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1154483169 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2064510959 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1184473586 = messageFormatterFn((function(  ) {
  return function(d) { return "Configure \"" + d.ACTION_NAME + "\""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1971435031 = messageFormatterFn((function(  ) {
  return function(d) { return "Configure Workflow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1246326217 = messageFormatterFn((function(  ) {
  return function(d) { return "By " + d.CREATOR; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a514015290 = messageFormatterFn((function(  ) {
  return function(d) { return "Created"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1578655225 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboard Properties"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1450357379 = messageFormatterFn((function(  ) {
  return function(d) { return d.DATA_TYPE + " is an unsupported data type. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1105298149 = messageFormatterFn((function(  ) {
  return function(d) { return "Send Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1038406333 = messageFormatterFn((function(  ) {
  return function(d) { return "Update the corresponding data in Salesforce Flow. Use this to enable your end users to create and run a flow directly from the dashboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1217510779 = messageFormatterFn((function(  ) {
  return function(d) { return "Note: You have selected to configure an External Action with Salesforce Flow. When finalised, this will share your selected data to the Salesforce org that you select. Data sent to Salesforce will be subject to your agreement with Salesforce."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1656995846 = messageFormatterFn((function(  ) {
  return function(d) { return "Done"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b451138249 = messageFormatterFn((function(  ) {
  return function(d) { return "One or more data type mismatches exist in the mapping of input fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1758260397 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit due to workflow configuration error. Contact your dashboard author."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a473249113 = messageFormatterFn((function(  ) {
  return function(d) { return "Error fetching flow inputs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1726274129 = messageFormatterFn((function(  ) {
  return function(d) { return "No selected marks found."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b965710707 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a233630445 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters (" + d.SHEET_NAME + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a102360468 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow contains one or more unsupported data types. Go back to select a different flow, or contact your Salesforce Flow administrator to remove unsupported data types from this flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1173302587 = messageFormatterFn((function(  ) {
  return function(d) { return "Select button styling."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1818633055 = messageFormatterFn((function(  ) {
  return function(d) { return "Format Button"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1286517801 = messageFormatterFn((function(  ) {
  return function(d) { return "Last updated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a107721483 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1600639230 = messageFormatterFn((function(  ) {
  return function(d) { return "Must be a non-zero, positive integer or blank."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b39424104 = messageFormatterFn((function(  ) {
  return function(d) { return "Mark limit = " + d.MAX_MARKS; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1446172801 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit the number of marks that users can select from the dashboard and send to the flow (optional)."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1546772317 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Mark Selection Limit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a341202481 = messageFormatterFn((function(  ) {
  return function(d) { return "Trigger: Mark selection in \"" + d.WORKSHEET_NAME + "\""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a965687318 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a maximum of 1 mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1783711737 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a maximum of " + d.MAX_MARKS + " marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1707442904 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks must be selected from only one pane."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b920627598 = messageFormatterFn((function(  ) {
  return function(d) { return "Uh oh! You need to be authenticated to use this extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a139442184 = messageFormatterFn((function(  ) {
  return function(d) { return "New Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1934364471 = messageFormatterFn((function(  ) {
  return function(d) { return "Next"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1172355354 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a button to the dashboard that sends user-selected data to Salesforce Flow. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b820993076 = messageFormatterFn((function(  ) {
  return function(d) { return "No limit set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b441604357 = messageFormatterFn((function(  ) {
  return function(d) { return "No results found"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a126718383 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheet for workflow removed. Undo deletion or have dashboard author configure a new sheet for the workflow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1997210682 = messageFormatterFn((function(  ) {
  return function(d) { return "No sheets available. Add a sheet to the dashboard, and retry."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1395565850 = messageFormatterFn((function(  ) {
  return function(d) { return "Try a different query or create a new action. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b671023509 = messageFormatterFn((function(  ) {
  return function(d) { return "Trigger: Parameter change"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2011162194 = messageFormatterFn((function(  ) {
  return function(d) { return "Parameters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b916984550 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b648928403 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a877095468 = messageFormatterFn((function(  ) {
  return function(d) { return "Required inputs "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1466392388 = messageFormatterFn((function(  ) {
  return function(d) { return "Run workflow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1313923868 = messageFormatterFn((function(  ) {
  return function(d) { return "Log in to Salesforce"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b139348525 = messageFormatterFn((function(  ) {
  return function(d) { return "Please log in to Salesforce"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b640661886 = messageFormatterFn((function(  ) {
  return function(d) { return "Search flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1535294208 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a flow from Salesforce Flow. You'll configure the Tableau External Actions workflow in the next step."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b524438418 = messageFormatterFn((function(  ) {
  return function(d) { return "Select which fields map to the workflow's inputs."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1868001546 = messageFormatterFn((function(  ) {
  return function(d) { return "Map Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2080137348 = messageFormatterFn((function(  ) {
  return function(d) { return "Select parameters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1421662019 = messageFormatterFn((function(  ) {
  return function(d) { return "Select which sheet will send data to the flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a382550601 = messageFormatterFn((function(  ) {
  return function(d) { return "Select sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1763570535 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1899119556 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a trigger for the action. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2055198990 = messageFormatterFn((function(  ) {
  return function(d) { return "Single values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1671243866 = messageFormatterFn((function(  ) {
  return function(d) { return "The selected flow only supports single values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a689911607 = messageFormatterFn((function(  ) {
  return function(d) { return "On mark selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2124357054 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b672477470 = messageFormatterFn((function(  ) {
  return function(d) { return "Undefined"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1319562371 = messageFormatterFn((function(  ) {
  return function(d) { return "Workflow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1639761712 = messageFormatterFn((function(  ) {
  return function(d) { return "Select optional field to map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1568036067 = messageFormatterFn((function(  ) {
  return function(d) { return "Add field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b401210475 = messageFormatterFn((function(  ) {
  return function(d) { return "Data is moved from a file-based connection to the database. This option ignores the file’s size and may impact performance."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a725790320 = messageFormatterFn((function(  ) {
  return function(d) { return "Always perform joins in the database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1688279619 = messageFormatterFn((function(  ) {
  return function(d) { return "Use this option only if the database is from a trusted source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a352311253 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2030645848 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b62248502 = messageFormatterFn((function(  ) {
  return function(d) { return "Cross-Database Join"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b440922587 = messageFormatterFn((function(  ) {
  return function(d) { return "File Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1639507334 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b797171119 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1204589897 = messageFormatterFn((function(  ) {
  return function(d) { return "Data may be moved across connections and joined in a database, or the join may occur in Tableau."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b186280156 = messageFormatterFn((function(  ) {
  return function(d) { return "Let Tableau decide where to join (default)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1294300707 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose where the join happens when joining data from multiple sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1150350595 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook uses cross-database joins that are always performed in the database. This option doesn’t consider file size when moving the file-based data into the database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1818087241 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a383423302 = messageFormatterFn((function(  ) {
  return function(d) { return "Alternatively, let Tableau decide whether to perform the join locally or move data into the database to perform the join there. Letting Tableau decide may improve performance."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2135153847 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b696985722 = messageFormatterFn((function(  ) {
  return function(d) { return "Select one of the following to continue:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1765039903 = messageFormatterFn((function(  ) {
  return function(d) { return "Show details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a417897969 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep Using the Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1466821961 = messageFormatterFn((function(  ) {
  return function(d) { return "Let Tableau Decide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1511121707 = messageFormatterFn((function(  ) {
  return function(d) { return "Please save workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2019382003 = messageFormatterFn((function(  ) {
  return function(d) { return "You must save the workbook before configuring an analytics extension."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a992625862 = messageFormatterFn((function(  ) {
  return function(d) { return "and"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a317703360 = messageFormatterFn((function(  ) {
  return function(d) { return "an area chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1885377134 = messageFormatterFn((function(  ) {
  return function(d) { return "a bar chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a707262553 = messageFormatterFn((function(  ) {
  return function(d) { return "a boxplot"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1817921823 = messageFormatterFn((function(  ) {
  return function(d) { return "a bubble chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b138103381 = messageFormatterFn((function(  ) {
  return function(d) { return "a bullet chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a932072488 = messageFormatterFn((function(  ) {
  return function(d) { return "OK, the new " + d.field + " field was added to the Data pane."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a879675125 = messageFormatterFn((function(  ) {
  return function(d) { return "OK, the updated " + d.field + " field was added to the Data pane."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a321002497 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn about tasks I can help with."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1322581017 = messageFormatterFn((function(  ) {
  return function(d) { return "I can’t create a viz based on your request."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a694676271 = messageFormatterFn((function(  ) {
  return function(d) { return "This tool uses generative AI, which can produce inaccurate or harmful responses. Review for accuracy and safety before using."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a771705890 = messageFormatterFn((function(  ) {
  return function(d) { return "Einstein is a conversational AI assistant to help you explore and analyse your data. Describe your task or ask a question and let Einstein create a viz for you."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1518202715 = messageFormatterFn((function(  ) {
  return function(d) { return " Generative AI can produce inaccurate or harmful responses. Review output for accuracy and safety. You assume responsibility for how the outcomes of Einstein are applied to your organisation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2113717191 = messageFormatterFn((function(  ) {
  return function(d) { return "Got It"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2102719625 = messageFormatterFn((function(  ) {
  return function(d) { return "You're about to use Einstein"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b286334115 = messageFormatterFn((function(  ) {
  return function(d) { return "a dual-line chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1957483184 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748666675 = messageFormatterFn((function(  ) {
  return function(d) { return "If-then scenarios (logical functions)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748665714 = messageFormatterFn((function(  ) {
  return function(d) { return "Mathematical operations (numerical functions)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748664753 = messageFormatterFn((function(  ) {
  return function(d) { return "Manipulating text fields like extracting parts of a field value (string functions)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1053558915 = messageFormatterFn((function(  ) {
  return function(d) { return "Just describe what you want to do and I'll get the calculation started."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1203923154 = messageFormatterFn((function(  ) {
  return function(d) { return "Right now I can help with:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a663692106 = messageFormatterFn((function(  ) {
  return function(d) { return "Hi, I'm Einstein, an AI assistant. I can help draft a formula for you in Tableau syntax."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1752964069 = messageFormatterFn((function(  ) {
  return function(d) { return "What calculation can I help you with?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b702857438 = messageFormatterFn((function(  ) {
  return function(d) { return "Build a simple viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b702856477 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter, sort or group data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b702855516 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a calculated field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b202471858 = messageFormatterFn((function(  ) {
  return function(d) { return "What can I help you with?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1076737690 = messageFormatterFn((function(  ) {
  return function(d) { return "You can ask me questions or describe a task you want to do in Tableau. For example, I can help you:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1389489867 = messageFormatterFn((function(  ) {
  return function(d) { return "Your feedback can’t be sent right now. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a226788080 = messageFormatterFn((function(  ) {
  return function(d) { return "Thanks for your feedback!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a244215903 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1893697410 = messageFormatterFn((function(  ) {
  return function(d) { return "Your requested viz needs filters on " + d.fields + ". To make sure the right values are selected, I'll need your help:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1497596317 = messageFormatterFn((function(  ) {
  return function(d) { return "To make this viz, the " + d.field + " field needs to be filtered to " + d.fieldValues + ". To make sure the right values are selected, I'll need your help:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1535265070 = messageFormatterFn((function(  ) {
  return function(d) { return "Your requested viz needs filters on " + d.field1 + " and " + d.field2 + ". To make sure the right values are selected, I'll need your help:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b519994858 = messageFormatterFn((function(  ) {
  return function(d) { return "OK, I've updated the viz to show only the values you selected."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b320994279 = messageFormatterFn((function(  ) {
  return function(d) { return "I've updated the viz to show no values. When all values are filtered out, the viz will be blank."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1085610167 = messageFormatterFn((function(  ) {
  return function(d) { return "1. Select the Add Filter button and I'll create the first filter on " + d.field; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1109823286 = messageFormatterFn((function(  ) {
  return function(d) { return "1. Select the Add Filter button and I'll create a filter on " + d.field; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011215372 = messageFormatterFn((function(  ) {
  return function(d) { return "2. Select the values you want to keep"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011216333 = messageFormatterFn((function(  ) {
  return function(d) { return "3. Select OK to create the filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b507174827 = messageFormatterFn((function(  ) {
  return function(d) { return "4. Repeat for the remaining filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1019966422 = messageFormatterFn((function(  ) {
  return function(d) { return "4. Repeat for the second filter on " + d.field; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1464852802 = messageFormatterFn((function(  ) {
  return function(d) { return "Describe your task or ask a question and let Einstein create a viz for you."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1971434289 = messageFormatterFn((function(  ) {
  return function(d) { return "a Gantt chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2094055 = messageFormatterFn((function(  ) {
  return function(d) { return "a heatmap"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1759384097 = messageFormatterFn((function(  ) {
  return function(d) { return "a histogram"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a808754608 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing complete."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1268482229 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau AI is temporarily unavailable. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1531518760 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1206185095 = messageFormatterFn((function(  ) {
  return function(d) { return "a line chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1057288233 = messageFormatterFn((function(  ) {
  return function(d) { return "a map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b476220203 = messageFormatterFn((function(  ) {
  return function(d) { return "I’m having trouble with that. Could you try phrasing your request another way?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1450280540 = messageFormatterFn((function(  ) {
  return function(d) { return "OK. Here’s a viz based on:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1450279579 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it. Here’s a viz based on:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1450278618 = messageFormatterFn((function(  ) {
  return function(d) { return "Alright. Here’s a viz based on:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1760733633 = messageFormatterFn((function(  ) {
  return function(d) { return "OK. I can't make exactly what you requested, but here is " + d.chart + " instead."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1760732672 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it. I can't make exactly what you requested, but here is " + d.chart + " instead."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1760731711 = messageFormatterFn((function(  ) {
  return function(d) { return "Alright. I can't make exactly what you requested, but here is " + d.chart + " instead."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1259276464 = messageFormatterFn((function(  ) {
  return function(d) { return "OK. I can't make exactly what you requested, but here's a viz based on the fields you mentioned."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1259275503 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it. I can't make exactly what you requested, but here's a viz based on the fields you mentioned."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1259274542 = messageFormatterFn((function(  ) {
  return function(d) { return "Alright. I can't make exactly what you requested, but here's a viz based on the fields you mentioned."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a514254130 = messageFormatterFn((function(  ) {
  return function(d) { return "Einstein"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1196936697 = messageFormatterFn((function(  ) {
  return function(d) { return "a pie chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1724492821 = messageFormatterFn((function(  ) {
  return function(d) { return "Recreate"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a608239438 = messageFormatterFn((function(  ) {
  return function(d) { return "Regenerate"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1627314701 = messageFormatterFn((function(  ) {
  return function(d) { return "Please double-assess your response's correctness and adherence to the original ask: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1032543354 = messageFormatterFn((function(  ) {
  return function(d) { return "a scatterplot"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b676424606 = messageFormatterFn((function(  ) {
  return function(d) { return "Looks like something’s wrong with our connection. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1940544511 = messageFormatterFn((function(  ) {
  return function(d) { return "a stacked bar chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1855488235 = messageFormatterFn((function(  ) {
  return function(d) { return "More Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1089449875 = messageFormatterFn((function(  ) {
  return function(d) { return "No more suggested questions. Try describing your request in the text box below."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1735213467 = messageFormatterFn((function(  ) {
  return function(d) { return "Select an option below or click More Options."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1470575961 = messageFormatterFn((function(  ) {
  return function(d) { return "Suggest Questions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1181614984 = messageFormatterFn((function(  ) {
  return function(d) { return "Something went wrong. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1861803040 = messageFormatterFn((function(  ) {
  return function(d) { return "a text table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a407695431 = messageFormatterFn((function(  ) {
  return function(d) { return "a treemap chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1740030715 = messageFormatterFn((function(  ) {
  return function(d) { return "Describe your task or ask a question..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1258767898 = messageFormatterFn((function(  ) {
  return function(d) { return "Building your viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1278498829 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing your data\nThis may take a minute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b838578015 = messageFormatterFn((function(  ) {
  return function(d) { return "Working on it"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a764342832 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry with Einstein"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b19168616 = messageFormatterFn((function(  ) {
  return function(d) { return "Animation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1912531758 = messageFormatterFn((function(  ) {
  return function(d) { return "Change account settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b373901938 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1350516487 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2029965617 = messageFormatterFn((function(  ) {
  return function(d) { return "Default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1348556186 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook Default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b999487170 = messageFormatterFn((function(  ) {
  return function(d) { return "Mark Transitions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b962911249 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are currently disabled. You can enable them in the Help > Settings and Performance menu."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1106245697 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are disabled for your site. For more information, contact your Tableau administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a184238635 = messageFormatterFn((function(  ) {
  return function(d) { return "Animations are disabled for your user account."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1781397482 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + " seconds (" + d["1"] + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1700509618 = messageFormatterFn((function(  ) {
  return function(d) { return "Duration"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1768397913 = messageFormatterFn((function(  ) {
  return function(d) { return "Format Animations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1778874871 = messageFormatterFn((function(  ) {
  return function(d) { return d["0"] + " (Default)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b874492537 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2118418029 = messageFormatterFn((function(  ) {
  return function(d) { return "Duration can't be negative"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1897266491 = messageFormatterFn((function(  ) {
  return function(d) { return "(None Selected)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2088952883 = messageFormatterFn((function(  ) {
  return function(d) { return "Must be a number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1734638351 = messageFormatterFn((function(  ) {
  return function(d) { return "Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1924560933 = messageFormatterFn((function(  ) {
  return function(d) { return "On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a136031509 = messageFormatterFn((function(  ) {
  return function(d) { return "Some sheets might not animate when published."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b139529364 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset All Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1345418355 = messageFormatterFn((function(  ) {
  return function(d) { return "sec"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a252837315 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected Sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a439680135 = messageFormatterFn((function(  ) {
  return function(d) { return "Sequential"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a55361319 = messageFormatterFn((function(  ) {
  return function(d) { return "Some animations in this workbook play only in Tableau Desktop."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2109127619 = messageFormatterFn((function(  ) {
  return function(d) { return "Simultaneous"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a404640331 = messageFormatterFn((function(  ) {
  return function(d) { return "Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1676293169 = messageFormatterFn((function(  ) {
  return function(d) { return "All animations are compatible with Tableau Desktop, but some might not play when published to Tableau Server."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a147282078 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b461734365 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1425837067 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is disabled on this site"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a824911699 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data lens is unavailable"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1194960100 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b710880849 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1849061953 = messageFormatterFn((function(  ) {
  return function(d) { return "New Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1238078833 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1536033133 = messageFormatterFn((function(  ) {
  return function(d) { return "Select an Ask Data lens and set its optional features."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2047048431 = messageFormatterFn((function(  ) {
  return function(d) { return "Configure Ask Data Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2105122683 = messageFormatterFn((function(  ) {
  return function(d) { return "Open Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1941697386 = messageFormatterFn((function(  ) {
  return function(d) { return "From the Server menu, select Sign In to use Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1688646447 = messageFormatterFn((function(  ) {
  return function(d) { return "To configure Ask Data, edit this dashboard in Tableau Cloud or Tableau Server."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1818603446 = messageFormatterFn((function(  ) {
  return function(d) { return "This version of the Ask Data Dashboard Object (" + d.version + ") isn’t supported by your server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b169151137 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't load Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b397727157 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't load lenses"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a589725291 = messageFormatterFn((function(  ) {
  return function(d) { return "The server isn't responding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1439785760 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data isn't configured"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a374657250 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data isn't supported by this version of Tableau Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1492912458 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to authenticate. Refresh the dashboard to load Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b828865715 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t configure Ask Data until this workbook is connected to a published data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b625365237 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn't refresh data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1335221137 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn't create a new Ask Data lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1890219586 = messageFormatterFn((function(  ) {
  return function(d) { return "You don't have permission to create an Ask Data lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a538583329 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to apply selected lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2010687211 = messageFormatterFn((function(  ) {
  return function(d) { return "For more information, contact your Tableau administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a101703038 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a191821992 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1125109172 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a195052166 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified on"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b3580517 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1030024415 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data settings such as synonyms, selected fields and recommended visualisations are published as a lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2003272617 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2073192237 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a817206048 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1016939706 = messageFormatterFn((function(  ) {
  return function(d) { return "To use Ask Data, first connect this workbook to a published data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1262052261 = messageFormatterFn((function(  ) {
  return function(d) { return "No connected data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b238037376 = messageFormatterFn((function(  ) {
  return function(d) { return "No published data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b259826305 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b502456728 = messageFormatterFn((function(  ) {
  return function(d) { return "Refreshing..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2023622422 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to the data source page and create a new lens. Then click Refresh above."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1824408026 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Data Source Page"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b440941946 = messageFormatterFn((function(  ) {
  return function(d) { return "No lenses for this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1736069926 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data needs a workbook published to Tableau Cloud or Tableau Server and connected to a published data source there."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2058871157 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish workbook to use Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1720984935 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Another Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1559820624 = messageFormatterFn((function(  ) {
  return function(d) { return "The lens or its data source has been removed from the site, or you no longer have permission to access them."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1117163250 = messageFormatterFn((function(  ) {
  return function(d) { return "Lens Toolbar Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b198337745 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Visualisation to Pins"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1774702535 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish as Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1000256313 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b366004525 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1679585423 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again later"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1166798034 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1775814477 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1289959343 = messageFormatterFn((function(  ) {
  return function(d) { return "Extend the date range to show values for forecasted and calculated fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1195927993 = messageFormatterFn((function(  ) {
  return function(d) { return "Length of additional time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2116630373 = messageFormatterFn((function(  ) {
  return function(d) { return "Length of time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b603972828 = messageFormatterFn((function(  ) {
  return function(d) { return "DAY"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1415886606 = messageFormatterFn((function(  ) {
  return function(d) { return "HOUR"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b263515038 = messageFormatterFn((function(  ) {
  return function(d) { return "MINUTE"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b806600248 = messageFormatterFn((function(  ) {
  return function(d) { return "MONTH"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1813452876 = messageFormatterFn((function(  ) {
  return function(d) { return "QUARTER"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2027723458 = messageFormatterFn((function(  ) {
  return function(d) { return "SECOND"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1063263032 = messageFormatterFn((function(  ) {
  return function(d) { return "Unit of time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b996167934 = messageFormatterFn((function(  ) {
  return function(d) { return "WEEK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b939022069 = messageFormatterFn((function(  ) {
  return function(d) { return "YEAR"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1813788895 = messageFormatterFn((function(  ) {
  return function(d) { return "Extend Date Range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2093013196 = messageFormatterFn((function(  ) {
  return function(d) { return "Background Opacity Slider"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1217366223 = messageFormatterFn((function(  ) {
  return function(d) { return "Toggle Visual State Tabs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1341569929 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1945550555 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2029306023 = messageFormatterFn((function(  ) {
  return function(d) { return "Border"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1457646568 = messageFormatterFn((function(  ) {
  return function(d) { return "Button Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a735076681 = messageFormatterFn((function(  ) {
  return function(d) { return "Button"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b234237585 = messageFormatterFn((function(  ) {
  return function(d) { return "Title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a846479091 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter optional title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2019292085 = messageFormatterFn((function(  ) {
  return function(d) { return "characters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a112611837 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Button"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2027334511 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a677052050 = messageFormatterFn((function(  ) {
  return function(d) { return "Font"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a655162468 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1485601136 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2147288984 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b411071561 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an image..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a226289221 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1473205275 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a338124265 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b603667373 = messageFormatterFn((function(  ) {
  return function(d) { return "Item Hidden"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1884886977 = messageFormatterFn((function(  ) {
  return function(d) { return "Item Shown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b990692780 = messageFormatterFn((function(  ) {
  return function(d) { return "Opacity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1704558606 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1750179957 = messageFormatterFn((function(  ) {
  return function(d) { return "Button Appearance"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b619798394 = messageFormatterFn((function(  ) {
  return function(d) { return "Text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a962951454 = messageFormatterFn((function(  ) {
  return function(d) { return "Tooltip"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1133658301 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter optional tooltip text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a760340068 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Button"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2050246605 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1441230162 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a954310684 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b362832935 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1557089536 = messageFormatterFn((function(  ) {
  return function(d) { return "Don’t show this again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1740751897 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1762406089 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a615953629 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1444252230 = messageFormatterFn((function(  ) {
  return function(d) { return "Field to be added"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1479012420 = messageFormatterFn((function(  ) {
  return function(d) { return "Not directly related"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1032517387 = messageFormatterFn((function(  ) {
  return function(d) { return d.text + "…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1690320586 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1190002059 = messageFormatterFn((function(  ) {
  return function(d) { return "Add custom values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1775001529 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a361810126 = messageFormatterFn((function(  ) {
  return function(d) { return "(All in Search)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a826646401 = messageFormatterFn((function(  ) {
  return function(d) { return "(All)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a553524805 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a956383626 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1631735162 = messageFormatterFn((function(  ) {
  return function(d) { return "By field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1000539558 = messageFormatterFn((function(  ) {
  return function(d) { return "By formula"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b58807494 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1323696615 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1976591906 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1232085480 = messageFormatterFn((function(  ) {
  return function(d) { return "Comparison"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a685769394 = messageFormatterFn((function(  ) {
  return function(d) { return "Condition"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2043991043 = messageFormatterFn((function(  ) {
  return function(d) { return "Condition:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1790973822 = messageFormatterFn((function(  ) {
  return function(d) { return "Contains"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1990391898 = messageFormatterFn((function(  ) {
  return function(d) { return "Count"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1944757276 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a New Parameter..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1787706645 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom value list"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1506830334 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid data value."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b380809974 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2067160441 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not contain"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b103229018 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not end with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1212425046 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not match"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a298938733 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not start with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a205224484 = messageFormatterFn((function(  ) {
  return function(d) { return "All values in hierarchy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1480575871 = messageFormatterFn((function(  ) {
  return function(d) { return "All values in hierarchy and context"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a64229346 = messageFormatterFn((function(  ) {
  return function(d) { return "All values in context"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b888681282 = messageFormatterFn((function(  ) {
  return function(d) { return "All values in data set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2144483486 = messageFormatterFn((function(  ) {
  return function(d) { return "Only relevant values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1783540093 = messageFormatterFn((function(  ) {
  return function(d) { return "Ends with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b619113954 = messageFormatterFn((function(  ) {
  return function(d) { return "Equals"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1170241871 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude selected values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a485492945 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1547609215 = messageFormatterFn((function(  ) {
  return function(d) { return "The filter limit must be greater than zero."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1026603203 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1129902808 = messageFormatterFn((function(  ) {
  return function(d) { return "Empty formula"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a475061237 = messageFormatterFn((function(  ) {
  return function(d) { return "In a browser, you can’t edit the formula. Use Tableau Desktop instead."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1725507135 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a531711826 = messageFormatterFn((function(  ) {
  return function(d) { return "Greater than"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1967008208 = messageFormatterFn((function(  ) {
  return function(d) { return "Greater than or equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a909118904 = messageFormatterFn((function(  ) {
  return function(d) { return "Include all values when empty"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a383131966 = messageFormatterFn((function(  ) {
  return function(d) { return "This value isn’t formatted correctly."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701137139 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter to latest date value when workbook is opened"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b219853447 = messageFormatterFn((function(  ) {
  return function(d) { return "Less than"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b329179255 = messageFormatterFn((function(  ) {
  return function(d) { return "Less than or equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2039569245 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a464953405 = messageFormatterFn((function(  ) {
  return function(d) { return "List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a191576998 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading all values..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a676733414 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter text to search or add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a476192655 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter text to add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1738918965 = messageFormatterFn((function(  ) {
  return function(d) { return "Match value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2053095370 = messageFormatterFn((function(  ) {
  return function(d) { return "Exactly matches"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1485006199 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2037482523 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b772242932 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a527589463 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1933935515 = messageFormatterFn((function(  ) {
  return function(d) { return "Not equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a349144795 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b123811300 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentile"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a734467853 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a629182539 = messageFormatterFn((function(  ) {
  return function(d) { return "Rank"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1851145242 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a92831641 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a984351810 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1228159581 = messageFormatterFn((function(  ) {
  return function(d) { return "Select from list"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1975232236 = messageFormatterFn((function(  ) {
  return function(d) { return "Selection:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a762584854 = messageFormatterFn((function(  ) {
  return function(d) { return "Starts with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1342567043 = messageFormatterFn((function(  ) {
  return function(d) { return "Summary"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2055649940 = messageFormatterFn((function(  ) {
  return function(d) { return "Top"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1498338249 = messageFormatterFn((function(  ) {
  return function(d) { return "Top/Bottom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1511538119 = messageFormatterFn((function(  ) {
  return function(d) { return "Use all"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1578350472 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1684300481 = messageFormatterFn((function(  ) {
  return function(d) { return "Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b340339591 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1854302742 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1548130539 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b907332810 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified by"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1441206364 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1469859120 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Data Source (Live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1790558189 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified Tableau Server connection icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b514242113 = messageFormatterFn((function(  ) {
  return function(d) { return "Data connection icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1378825539 = messageFormatterFn((function(  ) {
  return function(d) { return "External server connection icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1007184785 = messageFormatterFn((function(  ) {
  return function(d) { return "File icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1926383971 = messageFormatterFn((function(  ) {
  return function(d) { return "Last extract:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1387235544 = messageFormatterFn((function(  ) {
  return function(d) { return "Live connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a651785762 = messageFormatterFn((function(  ) {
  return function(d) { return "No data connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1625242344 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b538083244 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server connection icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b448843718 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook connects to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2081534664 = messageFormatterFn((function(  ) {
  return function(d) { return "Add an Extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2018438280 = messageFormatterFn((function(  ) {
  return function(d) { return "We were unable to reach the Tableau Exchange. Please confirm that you are connected to the internet."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1562902790 = messageFormatterFn((function(  ) {
  return function(d) { return "You can still use any extensions that you have downloaded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1269298690 = messageFormatterFn((function(  ) {
  return function(d) { return "File reading aborted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1735765670 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected file is too large. Select a file less than " + d.fileSize + " MB"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1542740768 = messageFormatterFn((function(  ) {
  return function(d) { return "The Tableau Exchange is not available in this browser."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b868937952 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid Extension Manifest selected. Only .trex files are supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b791464349 = messageFormatterFn((function(  ) {
  return function(d) { return "My Extensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1038357075 = messageFormatterFn((function(  ) {
  return function(d) { return "Wrong number of files selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a273656869 = messageFormatterFn((function(  ) {
  return function(d) { return "<p><strong>Can’t authorise access</strong><br />Tableau can’t authorise access to the endpoint.</p><p>What to do now:<ul><li>Make sure you have permission to access, then try again. <a target='_blank' href='https://help.tableau.com/current/pro/desktop/en-gb/examples_azure_data_lake_gen2.htm'>Learn more</a>.</li><li>Close this connector and try again.</li><ul></p>"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1766600762 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse This Site"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a127045585 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1412283639 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b426871639 = messageFormatterFn((function(  ) {
  return function(d) { return "Document Library"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b141149099 = messageFormatterFn((function(  ) {
  return function(d) { return "Endpoint URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b103299757 = messageFormatterFn((function(  ) {
  return function(d) { return "File"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1360500990 = messageFormatterFn((function(  ) {
  return function(d) { return "File extension:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a910450011 = messageFormatterFn((function(  ) {
  return function(d) { return "File URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a544329925 = messageFormatterFn((function(  ) {
  return function(d) { return "Folder"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a56840644 = messageFormatterFn((function(  ) {
  return function(d) { return "My Drive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2117792574 = messageFormatterFn((function(  ) {
  return function(d) { return "Shared drives"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1775114963 = messageFormatterFn((function(  ) {
  return function(d) { return "Shared with me"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b40470538 = messageFormatterFn((function(  ) {
  return function(d) { return "Home"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b765109348 = messageFormatterFn((function(  ) {
  return function(d) { return "Endpoint must be in the format of https://{accountName}.dfs.core.windows.net/"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b542546318 = messageFormatterFn((function(  ) {
  return function(d) { return "File URL must start with " + d.urlBase; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2122402739 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint Site URL should be in format of https://{host}.sharepoint.com or https://{host}.sharepoint.com/sites/{path/to/site}."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a39904619 = messageFormatterFn((function(  ) {
  return function(d) { return "Kind"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2048086507 = messageFormatterFn((function(  ) {
  return function(d) { return "Last Modified On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1901008865 = messageFormatterFn((function(  ) {
  return function(d) { return "List Endpoints"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a694694957 = messageFormatterFn((function(  ) {
  return function(d) { return "List Sites"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a118375074 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1391383062 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive and SharePoint Online"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2133103365 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive (personal files)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a853315040 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive (shared with you)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1455777882 = messageFormatterFn((function(  ) {
  return function(d) { return "No items matching the searched text were found"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1138865023 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1926466672 = messageFormatterFn((function(  ) {
  return function(d) { return "Search Results"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b72150568 = messageFormatterFn((function(  ) {
  return function(d) { return "Search site names"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1058382470 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint Sites"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a493824388 = messageFormatterFn((function(  ) {
  return function(d) { return "Shared Drive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a223916208 = messageFormatterFn((function(  ) {
  return function(d) { return "sign Out"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1221381770 = messageFormatterFn((function(  ) {
  return function(d) { return "signed in as " + d.user + " "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a269117534 = messageFormatterFn((function(  ) {
  return function(d) { return "Site"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1375656121 = messageFormatterFn((function(  ) {
  return function(d) { return "Site URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a269296280 = messageFormatterFn((function(  ) {
  return function(d) { return "Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a639238340 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2008839761 = messageFormatterFn((function(  ) {
  return function(d) { return "File URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1929442035 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL you entered is invalid or points to a file you don’t have permission to view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b90612773 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Endpoint"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a632444492 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a23428049 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1267975079 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1876991522 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011708879 = messageFormatterFn((function(  ) {
  return function(d) { return "@mention to notify someone"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b609014646 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a comment"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b623162439 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a snapshot of the view to your comment"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1391893477 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn’t create a snapshot of the view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b397847442 = messageFormatterFn((function(  ) {
  return function(d) { return "You don’t have permission to add a snapshot of this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1659924408 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn’t apply snapshot from " + d.user + " to the view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a904809303 = messageFormatterFn((function(  ) {
  return function(d) { return "Press Enter or Space to apply the snapshot filters to the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b564847752 = messageFormatterFn((function(  ) {
  return function(d) { return "Applying the snapshot’s filters and selection to the view..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1652113034 = messageFormatterFn((function(  ) {
  return function(d) { return "Something went wrong"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1018602930 = messageFormatterFn((function(  ) {
  return function(d) { return "Close panel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1518193262 = messageFormatterFn((function(  ) {
  return function(d) { return "You no longer have add comment permission."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2015667680 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified about " + d.comment; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1824558468 = messageFormatterFn((function(  ) {
  return function(d) { return "You no longer have permission to view the comments."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1485810966 = messageFormatterFn((function(  ) {
  return function(d) { return "Comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1182232833 = messageFormatterFn((function(  ) {
  return function(d) { return "Confirm delete of comment by " + d.user + " on " + d.date; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a171310210 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and retry."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1619057124 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and refresh to try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b728019729 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact your administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1262434016 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1140706577 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b699001522 = messageFormatterFn((function(  ) {
  return function(d) { return "This message has already been deleted."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1318287832 = messageFormatterFn((function(  ) {
  return function(d) { return "You do not have permission to delete this comment."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a144138677 = messageFormatterFn((function(  ) {
  return function(d) { return "Press Delete or Backspace to delete this comment."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b81849071 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b258598345 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to download image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1419612490 = messageFormatterFn((function(  ) {
  return function(d) { return "An unknown error has occurred"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b972290464 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to get comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2038956503 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to get image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a574927661 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1357468258 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a739804740 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading comments..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a501213405 = messageFormatterFn((function(  ) {
  return function(d) { return "Message is too long"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a793743873 = messageFormatterFn((function(  ) {
  return function(d) { return "No comments on this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2001971134 = messageFormatterFn((function(  ) {
  return function(d) { return "Post"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1579348674 = messageFormatterFn((function(  ) {
  return function(d) { return "@mention someone in your comment to notify them"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a89635547 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove snapshot"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b441901348 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b736382700 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn’t send."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a274750416 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot added."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1890424863 = messageFormatterFn((function(  ) {
  return function(d) { return "A snapshot of the view is attached to this comment."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a710511448 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1469449744 = messageFormatterFn((function(  ) {
  return function(d) { return "Snapshot removed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b185203925 = messageFormatterFn((function(  ) {
  return function(d) { return "Tap to retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1067497738 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1204719278 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " lacks an email address in their Tableau account"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1062227787 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " doesn’t have permissions to see comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1189496001 = messageFormatterFn((function(  ) {
  return function(d) { return d.user + " doesn’t have permissions to see this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1031997364 = messageFormatterFn((function(  ) {
  return function(d) { return "User will not be notified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1131536634 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return d.formattedItemCount + " user";}, other: function() { return d.formattedItemCount + " users";} }) + " won’t be notified"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b577970103 = messageFormatterFn((function(  ) {
  return function(d) { return "User Removed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b916352533 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1591551983 = messageFormatterFn((function(  ) {
  return function(d) { return "All Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1928966856 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b799112043 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a240640889 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a392839367 = messageFormatterFn((function(  ) {
  return function(d) { return "Database / Schema"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1722030036 = messageFormatterFn((function(  ) {
  return function(d) { return "Default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1847209102 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand / Collapse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1101254810 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1422412950 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1481966998 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a188813427 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b433726282 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1673422372 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a871602644 = messageFormatterFn((function(  ) {
  return function(d) { return "Authentication:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1220531737 = messageFormatterFn((function(  ) {
  return function(d) { return "Active Directory Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1368877421 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Azure HDInsight Service"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a833674281 = messageFormatterFn((function(  ) {
  return function(d) { return "Integrated Authentication"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b435062031 = messageFormatterFn((function(  ) {
  return function(d) { return "Kerberos"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b400152163 = messageFormatterFn((function(  ) {
  return function(d) { return "LDAP"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b301821682 = messageFormatterFn((function(  ) {
  return function(d) { return "No Authentication"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1188997769 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in using OAuth"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1680353841 = messageFormatterFn((function(  ) {
  return function(d) { return "Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1930821560 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1159582688 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1559407188 = messageFormatterFn((function(  ) {
  return function(d) { return "Username"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1542299548 = messageFormatterFn((function(  ) {
  return function(d) { return "Username and Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2095890229 = messageFormatterFn((function(  ) {
  return function(d) { return "Windows Authentication"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a285339635 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b349862390 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a651565367 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1843790757 = messageFormatterFn((function(  ) {
  return function(d) { return "Direct"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1257831708 = messageFormatterFn((function(  ) {
  return function(d) { return "HiveServer2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1162252742 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1323546485 = messageFormatterFn((function(  ) {
  return function(d) { return "MultiNode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1096580386 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer (Shark 0.8.1 and earlier)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b365732762 = messageFormatterFn((function(  ) {
  return function(d) { return "SharkServer2 (Shark 0.9.*)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b490969754 = messageFormatterFn((function(  ) {
  return function(d) { return "SingleNode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2129242138 = messageFormatterFn((function(  ) {
  return function(d) { return "SparkThriftServer (Spark 1.1 and later)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1906302042 = messageFormatterFn((function(  ) {
  return function(d) { return "ZooKeeper"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a520569108 = messageFormatterFn((function(  ) {
  return function(d) { return "Type:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1988193694 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1726883215 = messageFormatterFn((function(  ) {
  return function(d) { return "Cut"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1456113413 = messageFormatterFn((function(  ) {
  return function(d) { return "Detailed Error Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1732720781 = messageFormatterFn((function(  ) {
  return function(d) { return "Dialect:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b456169275 = messageFormatterFn((function(  ) {
  return function(d) { return "File Name:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1040601297 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide connection details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1682150059 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide Initial SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2062275745 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1647666199 = messageFormatterFn((function(  ) {
  return function(d) { return "Add SQL statements to be run at connect time."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b460578394 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1553419040 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1240134107 = messageFormatterFn((function(  ) {
  return function(d) { return "Initial SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1615607794 = messageFormatterFn((function(  ) {
  return function(d) { return "OAuth Service URL:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2006695315 = messageFormatterFn((function(  ) {
  return function(d) { return "Properties File:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b709848375 = messageFormatterFn((function(  ) {
  return function(d) { return "Host FQDN:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2056597516 = messageFormatterFn((function(  ) {
  return function(d) { return "Realm:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a995317454 = messageFormatterFn((function(  ) {
  return function(d) { return "Service Name:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a435688898 = messageFormatterFn((function(  ) {
  return function(d) { return "Database password:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1695594227 = messageFormatterFn((function(  ) {
  return function(d) { return "Password:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a986244931 = messageFormatterFn((function(  ) {
  return function(d) { return "Workgroup file:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a726568032 = messageFormatterFn((function(  ) {
  return function(d) { return "Workgroup security"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a359731826 = messageFormatterFn((function(  ) {
  return function(d) { return "Username:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1449111354 = messageFormatterFn((function(  ) {
  return function(d) { return "No driver installed for " + d.connectorName + " connector. Contact your administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1565028092 = messageFormatterFn((function(  ) {
  return function(d) { return " and then connect."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b24194600 = messageFormatterFn((function(  ) {
  return function(d) { return "Download and install the drivers,"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b556052904 = messageFormatterFn((function(  ) {
  return function(d) { return "No file chosen"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a801883657 = messageFormatterFn((function(  ) {
  return function(d) { return "Open"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a873370569 = messageFormatterFn((function(  ) {
  return function(d) { return "Optional"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1837634199 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a DSN (data source name) for the database you want to connect to. To publish and run your flow on Tableau Server, the server must be configured with a matching DSN."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a937403859 = messageFormatterFn((function(  ) {
  return function(d) { return "DSN:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1431821670 = messageFormatterFn((function(  ) {
  return function(d) { return "Select DSN"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b447106746 = messageFormatterFn((function(  ) {
  return function(d) { return "Secret Access Key:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b69645871 = messageFormatterFn((function(  ) {
  return function(d) { return "Password:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b241015520 = messageFormatterFn((function(  ) {
  return function(d) { return "Paste"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1980332226 = messageFormatterFn((function(  ) {
  return function(d) { return d.prompt + ":"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a268082404 = messageFormatterFn((function(  ) {
  return function(d) { return "Read uncommitted data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1445211014 = messageFormatterFn((function(  ) {
  return function(d) { return "Remember Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a90150165 = messageFormatterFn((function(  ) {
  return function(d) { return "Require Encryption"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1674712688 = messageFormatterFn((function(  ) {
  return function(d) { return "Require SSL (recommended)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b899317536 = messageFormatterFn((function(  ) {
  return function(d) { return "SAML IdP(Okta):"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1065953684 = messageFormatterFn((function(  ) {
  return function(d) { return "Show connection details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b415154950 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Initial SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1751666687 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign In"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2080148718 = messageFormatterFn((function(  ) {
  return function(d) { return "Signing In…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1467725085 = messageFormatterFn((function(  ) {
  return function(d) { return "SSL certificate file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1647449383 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep your data safe by encrypting the data connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1860399631 = messageFormatterFn((function(  ) {
  return function(d) { return "To a File"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1041174506 = messageFormatterFn((function(  ) {
  return function(d) { return "To a Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1539655345 = messageFormatterFn((function(  ) {
  return function(d) { return "Binary"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1524890875 = messageFormatterFn((function(  ) {
  return function(d) { return "Transport:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b763010408 = messageFormatterFn((function(  ) {
  return function(d) { return "HTTP"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b565505688 = messageFormatterFn((function(  ) {
  return function(d) { return "No Transport Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b465670281 = messageFormatterFn((function(  ) {
  return function(d) { return "SASL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1743409532 = messageFormatterFn((function(  ) {
  return function(d) { return "URL:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a717566401 = messageFormatterFn((function(  ) {
  return function(d) { return "Access Key ID:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1985680182 = messageFormatterFn((function(  ) {
  return function(d) { return "Username:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1633527358 = messageFormatterFn((function(  ) {
  return function(d) { return "For support, contact vendor."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a210191045 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1655665305 = messageFormatterFn((function(  ) {
  return function(d) { return "Convert to SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1382663738 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a New Parameter..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2082525479 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter SQL query here. For example, “SELECT * FROM table_name”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1831506100 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Custom SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b397007508 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert Parameter:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1389006969 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2045170030 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview Results..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1203716595 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b260829954 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1222280704 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a834448080 = messageFormatterFn((function(  ) {
  return function(d) { return "Author:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1067212902 = messageFormatterFn((function(  ) {
  return function(d) { return " (default)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1502341399 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1658670789 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1824503035 = messageFormatterFn((function(  ) {
  return function(d) { return "Nothing saved yet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1089725281 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1722429845 = messageFormatterFn((function(  ) {
  return function(d) { return "Back"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1521336142 = messageFormatterFn((function(  ) {
  return function(d) { return "To eliminate the need to filter every time you open the dashboard, save your own custom view with all filters applied "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b261616590 = messageFormatterFn((function(  ) {
  return function(d) { return "This view is private"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1197726512 = messageFormatterFn((function(  ) {
  return function(d) { return "This view is public"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a183588700 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1646037985 = messageFormatterFn((function(  ) {
  return function(d) { return "Make it my default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b595098746 = messageFormatterFn((function(  ) {
  return function(d) { return "Select the view name to change the view or use the icons to modify the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a677840184 = messageFormatterFn((function(  ) {
  return function(d) { return "Max character limit is 255"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1265280901 = messageFormatterFn((function(  ) {
  return function(d) { return "My Views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1965630282 = messageFormatterFn((function(  ) {
  return function(d) { return "Save a custom view for quick access to your preferred filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1528939689 = messageFormatterFn((function(  ) {
  return function(d) { return "Original"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1158722095 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1422283530 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b462667474 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1726731937 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a704547682 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1151336773 = messageFormatterFn((function(  ) {
  return function(d) { return "Please enter a name for the Custom View in the text field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b549664154 = messageFormatterFn((function(  ) {
  return function(d) { return "Save Custom View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1406169261 = messageFormatterFn((function(  ) {
  return function(d) { return "Name this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b39143665 = messageFormatterFn((function(  ) {
  return function(d) { return "Select this view as your current view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a786798182 = messageFormatterFn((function(  ) {
  return function(d) { return "This view is your current view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1206445717 = messageFormatterFn((function(  ) {
  return function(d) { return "Set this view as your default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1447073568 = messageFormatterFn((function(  ) {
  return function(d) { return "This is your current default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631527946 = messageFormatterFn((function(  ) {
  return function(d) { return "Make visible to others"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1082667581 = messageFormatterFn((function(  ) {
  return function(d) { return "Anyone with access to the view can see this custom view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1189450513 = messageFormatterFn((function(  ) {
  return function(d) { return d.VIEW_NAME + ": " + d.PROPERTY + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a845137011 = messageFormatterFn((function(  ) {
  return function(d) { return d.VIEW_NAME + ": " + d.FIRST_PROPERTY + ". " + d.SECOND_PROPERTY + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1348919910 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2107044098 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1730799433 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2107366117 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1261358747 = messageFormatterFn((function(  ) {
  return function(d) { return "Show actions for"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a888782243 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b519601797 = messageFormatterFn((function(  ) {
  return function(d) { return "This sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1130634688 = messageFormatterFn((function(  ) {
  return function(d) { return "Run On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1173683861 = messageFormatterFn((function(  ) {
  return function(d) { return "Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1318822 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions let you create interactive relationships between data, dashboard objects, other worksheets and the web."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1885677351 = messageFormatterFn((function(  ) {
  return function(d) { return "In a browser, you can’t edit this action; use Tableau Desktop instead."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1676911701 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b309771063 = messageFormatterFn((function(  ) {
  return function(d) { return "An empty name is not allowed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b433870521 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b927658333 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a396784010 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b201066432 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a854196711 = messageFormatterFn((function(  ) {
  return function(d) { return "Select"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1020454397 = messageFormatterFn((function(  ) {
  return function(d) { return "Select"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1635463601 = messageFormatterFn((function(  ) {
  return function(d) { return "Single-select only"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1175573483 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b590171773 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b474404455 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Sheet..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a354379441 = messageFormatterFn((function(  ) {
  return function(d) { return "Highlight..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1170269740 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to URL..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b563298644 = messageFormatterFn((function(  ) {
  return function(d) { return "Change Parameter..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2070170843 = messageFormatterFn((function(  ) {
  return function(d) { return "Change Set Values..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1896930566 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b899655036 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Go to Sheet Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b746232206 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Highlight Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1393393433 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Parameter Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3589408 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Set Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a77383085 = messageFormatterFn((function(  ) {
  return function(d) { return "Add URL Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a674974136 = messageFormatterFn((function(  ) {
  return function(d) { return "Add values to set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a612386184 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1181954536 = messageFormatterFn((function(  ) {
  return function(d) { return "Assign values to set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b363698245 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2065134386 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1735176881 = messageFormatterFn((function(  ) {
  return function(d) { return "boolean type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a230369216 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b571038476 = messageFormatterFn((function(  ) {
  return function(d) { return "Add all values to set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1000850989 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude all values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1231873022 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep current value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1829708784 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep set values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b86047124 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep filtered values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1812357611 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove all values from set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1154113967 = messageFormatterFn((function(  ) {
  return function(d) { return "Set value to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1881686556 = messageFormatterFn((function(  ) {
  return function(d) { return "Show all values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a610959355 = messageFormatterFn((function(  ) {
  return function(d) { return "Clearing the selection will"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1771964368 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a New Parameter..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1959650749 = messageFormatterFn((function(  ) {
  return function(d) { return "dashboard icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1087729478 = messageFormatterFn((function(  ) {
  return function(d) { return "data source icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1157614570 = messageFormatterFn((function(  ) {
  return function(d) { return "date time type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b567861321 = messageFormatterFn((function(  ) {
  return function(d) { return "date type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1761837456 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a313819201 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Filter Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1318779177 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Go to Sheet Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b181029545 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Highlight Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b828190772 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Parameter Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2072943675 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Set Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1999149998 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit URL Action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b22864055 = messageFormatterFn((function(  ) {
  return function(d) { return "error icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a583759584 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b883265981 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753737168 = messageFormatterFn((function(  ) {
  return function(d) { return "Datetime"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2092769122 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b225387868 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1951817906 = messageFormatterFn((function(  ) {
  return function(d) { return "Hyperlink input"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b552326831 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter the URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a696132235 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b292459506 = messageFormatterFn((function(  ) {
  return function(d) { return "Proceed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1095535478 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1827715335 = messageFormatterFn((function(  ) {
  return function(d) { return "integer type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1072500547 = messageFormatterFn((function(  ) {
  return function(d) { return "Running the action will"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1917725396 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b420638018 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b267294302 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1119805233 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1231279047 = messageFormatterFn((function(  ) {
  return function(d) { return "real type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a567166922 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a992538772 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove values from set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1243723316 = messageFormatterFn((function(  ) {
  return function(d) { return "Run action on"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a714605833 = messageFormatterFn((function(  ) {
  return function(d) { return "Select sheets from:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1038417588 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected source sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b707624536 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1173773710 = messageFormatterFn((function(  ) {
  return function(d) { return "story icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a427901940 = messageFormatterFn((function(  ) {
  return function(d) { return "string type icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a607333021 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a929263743 = messageFormatterFn((function(  ) {
  return function(d) { return "Click to add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1891845956 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1673769759 = messageFormatterFn((function(  ) {
  return function(d) { return "Row " + d.rowIndex; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2114521581 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a388380834 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a428113545 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1697202580 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a419600218 = messageFormatterFn((function(  ) {
  return function(d) { return "Please specify target field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1278617980 = messageFormatterFn((function(  ) {
  return function(d) { return "All fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1396426056 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2064572048 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1725852829 = messageFormatterFn((function(  ) {
  return function(d) { return "Please select one or more fields to highlight on the target."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1687359427 = messageFormatterFn((function(  ) {
  return function(d) { return "All Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1410185385 = messageFormatterFn((function(  ) {
  return function(d) { return "Dates and Times"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1017320145 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Highlighting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1051201319 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b198480819 = messageFormatterFn((function(  ) {
  return function(d) { return "Target"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b148857450 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected target sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a603653574 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1835010590 = messageFormatterFn((function(  ) {
  return function(d) { return "Target Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a727714519 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow multiple values via URL parameters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2105177834 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Delimiter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2080803754 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Delimiter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a763854528 = messageFormatterFn((function(  ) {
  return function(d) { return "Encode data values that URLs do not support"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b797209461 = messageFormatterFn((function(  ) {
  return function(d) { return "Delimiter Escape Character"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1885648233 = messageFormatterFn((function(  ) {
  return function(d) { return "Delimiter Escape Character"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a164068077 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b902386830 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1565722702 = messageFormatterFn((function(  ) {
  return function(d) { return "Please specify a multi-select delimiter."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1064530612 = messageFormatterFn((function(  ) {
  return function(d) { return "Please specify a multi-select escape."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1206645775 = messageFormatterFn((function(  ) {
  return function(d) { return "URL Target"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b514377077 = messageFormatterFn((function(  ) {
  return function(d) { return "New Browser Tab"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a830338190 = messageFormatterFn((function(  ) {
  return function(d) { return "New Tab if no Web Page Object Exists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1415104160 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Page Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b549996002 = messageFormatterFn((function(  ) {
  return function(d) { return "web icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b985729035 = messageFormatterFn((function(  ) {
  return function(d) { return "warning icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1887430237 = messageFormatterFn((function(  ) {
  return function(d) { return "worksheet icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2045559541 = messageFormatterFn((function(  ) {
  return function(d) { return "Above"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1098913165 = messageFormatterFn((function(  ) {
  return function(d) { return "Above or equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a732701446 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1307591984 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Me"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1579612665 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Invalid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b553584867 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Suspended"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a643107575 = messageFormatterFn((function(  ) {
  return function(d) { return "This alert is visible only to recipients."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a125885147 = messageFormatterFn((function(  ) {
  return function(d) { return "This alert is visible to everyone."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1223488823 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to connected alerts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1271246199 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to alerts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1278978423 = messageFormatterFn((function(  ) {
  return function(d) { return "Below"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1879881607 = messageFormatterFn((function(  ) {
  return function(d) { return "Below or equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1908006694 = messageFormatterFn((function(  ) {
  return function(d) { return "Change owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1750173407 = messageFormatterFn((function(  ) {
  return function(d) { return "Change owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b946142656 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an owner for the alert \"" + d.alertSubject + "\""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1396115476 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b63282108 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1973628873 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1337971172 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b360483843 = messageFormatterFn((function(  ) {
  return function(d) { return "—"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1371362890 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom (" + d.viewName + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1415526861 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1958975206 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b593840257 = messageFormatterFn((function(  ) {
  return function(d) { return "Activity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a567054510 = messageFormatterFn((function(  ) {
  return function(d) { return "Condition"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2034402831 = messageFormatterFn((function(  ) {
  return function(d) { return "Current status"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1555632058 = messageFormatterFn((function(  ) {
  return function(d) { return "Email sent"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1114722754 = messageFormatterFn((function(  ) {
  return function(d) { return "Frequency"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b426820457 = messageFormatterFn((function(  ) {
  return function(d) { return "Last checked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a195173383 = messageFormatterFn((function(  ) {
  return function(d) { return "Last triggered"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2053650436 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a745956315 = messageFormatterFn((function(  ) {
  return function(d) { return "Notification"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1656871892 = messageFormatterFn((function(  ) {
  return function(d) { return "Operator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a771093209 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a187338218 = messageFormatterFn((function(  ) {
  return function(d) { return "Recipients"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a543435025 = messageFormatterFn((function(  ) {
  return function(d) { return "Threshold"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a766284821 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b478007436 = messageFormatterFn((function(  ) {
  return function(d) { return "Alert Overview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1700983980 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a856980583 = messageFormatterFn((function(  ) {
  return function(d) { return "Equal to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a60369373 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom (auto-saved)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1359209236 = messageFormatterFn((function(  ) {
  return function(d) { return "Daily at most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a201679102 = messageFormatterFn((function(  ) {
  return function(d) { return "As frequently as possible"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b915571436 = messageFormatterFn((function(  ) {
  return function(d) { return "Hourly at most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b548391132 = messageFormatterFn((function(  ) {
  return function(d) { return "Once, the first time it’s true"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a356211747 = messageFormatterFn((function(  ) {
  return function(d) { return d.interval + " minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1292853468 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekly at most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1857145129 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid on "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a797786012 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1657043897 = messageFormatterFn((function(  ) {
  return function(d) { return "Last triggered " + d.lastTriggeredTime; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1595079886 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1397105819 = messageFormatterFn((function(  ) {
  return function(d) { return "Alerts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2033159088 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1475303166 = messageFormatterFn((function(  ) {
  return function(d) { return "Check your internet connection and retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1399595267 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load alerts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1842551007 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading alerts..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b224444295 = messageFormatterFn((function(  ) {
  return function(d) { return "Never"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1405136745 = messageFormatterFn((function(  ) {
  return function(d) { return "Never triggered"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a707591731 = messageFormatterFn((function(  ) {
  return function(d) { return "alert bell symbol"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1173441551 = messageFormatterFn((function(  ) {
  return function(d) { return "Create"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a780108563 = messageFormatterFn((function(  ) {
  return function(d) { return "Create an alert and we’ll notify you when your data meets those conditions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1598214726 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1490017105 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a numeric axis of a chart. Then click Create."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b670891240 = messageFormatterFn((function(  ) {
  return function(d) { return "No alerts on this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1065489386 = messageFormatterFn((function(  ) {
  return function(d) { return "Original"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1157150223 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + " recipients"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1000125764 = messageFormatterFn((function(  ) {
  return function(d) { return d.recipientCount + " recipient"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1931042526 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove me"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1054273743 = messageFormatterFn((function(  ) {
  return function(d) { return "Resume"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a125637904 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1190165453 = messageFormatterFn((function(  ) {
  return function(d) { return "Suspended on "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b18891456 = messageFormatterFn((function(  ) {
  return function(d) { return "Suspended"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b357440116 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b292226998 = messageFormatterFn((function(  ) {
  return function(d) { return "Derived from a data source filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b479256342 = messageFormatterFn((function(  ) {
  return function(d) { return "Data space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b383895733 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a segment of your data to send to Data Cloud so that others can review, refine and activate it."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b458522025 = messageFormatterFn((function(  ) {
  return function(d) { return d.percentParam + " of " + d.wholeParam; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a320006336 = messageFormatterFn((function(  ) {
  return function(d) { return "Segment population"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1311331291 = messageFormatterFn((function(  ) {
  return function(d) { return "Create"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b394304736 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish schedule"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b178889443 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1299178079 = messageFormatterFn((function(  ) {
  return function(d) { return "You can't edit segment rules after creation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1023181743 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (optional) \nAutogenerated with rule details so users can view them in Data Cloud. Revise as needed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1265834993 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Segment for Data Cloud"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b450189160 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a177070869 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name can only contain alphanumeric characters and underscores."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b722308197 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name cannot be empty."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1858199638 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name cannot contain a space."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1850205452 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name cannot contain consecutive underscores."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701336331 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name cannot end with an underscore."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a90457096 = messageFormatterFn((function(  ) {
  return function(d) { return "Segment name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1558347370 = messageFormatterFn((function(  ) {
  return function(d) { return "The Segment Name must start with a letter."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b872193228 = messageFormatterFn((function(  ) {
  return function(d) { return "Segment on"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a352321124 = messageFormatterFn((function(  ) {
  return function(d) { return "No rules for this segment because there are no filters applied to the viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b301395116 = messageFormatterFn((function(  ) {
  return function(d) { return "Rules"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a256799377 = messageFormatterFn((function(  ) {
  return function(d) { return "Derived from selected marks on the viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b899600426 = messageFormatterFn((function(  ) {
  return function(d) { return "Derived from an enabled context filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a950679927 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a base table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1486584617 = messageFormatterFn((function(  ) {
  return function(d) { return "Cardinality: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1636455196 = messageFormatterFn((function(  ) {
  return function(d) { return "(default)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a861737437 = messageFormatterFn((function(  ) {
  return function(d) { return "(detected)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1712539842 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1975927323 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here to create a data model"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b400977954 = messageFormatterFn((function(  ) {
  return function(d) { return "There can’t be more than one path between two tables. Update the data model to remove any cycles."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b370208501 = messageFormatterFn((function(  ) {
  return function(d) { return "Cyclical Relationships"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1267914553 = messageFormatterFn((function(  ) {
  return function(d) { return "The graph has an issue."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1225906138 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown Graph Issue"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1539291379 = messageFormatterFn((function(  ) {
  return function(d) { return "All tables in a data source must be related. Relate all the tables in this model or create a separate data source for unrelated tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1082829216 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b306917082 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "is made of " + plural(d.tableCount, 0, pluralFuncs["en-GB"], { one: function() { return "1 table";}, other: function() { return d.formattedTableCount + " tables";} }) + "."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1773128019 = messageFormatterFn((function(  ) {
  return function(d) { return "This table contains invalid physical tables or invalid joins. Please double-click this table to fix these errors."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a688632855 = messageFormatterFn((function(  ) {
  return function(d) { return d.name1 + " to " + d.name2; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a301239511 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b137260813 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2077979616 = messageFormatterFn((function(  ) {
  return function(d) { return "Logical Table: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a410417573 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a675648946 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to One"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1741722200 = messageFormatterFn((function(  ) {
  return function(d) { return "New Base Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1847715973 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a193345706 = messageFormatterFn((function(  ) {
  return function(d) { return "This object has an issue."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b497535225 = messageFormatterFn((function(  ) {
  return function(d) { return "This object has an invalid analytics script."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b688072461 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t execute this Custom SQL Query. Modify the query and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1138709718 = messageFormatterFn((function(  ) {
  return function(d) { return "This table has an invalid join."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a89505794 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau found no tables to union based on your pattern. Modify the pattern and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a75452668 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t find or recognise this table. Remove or replace the table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a87246873 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t find or recognise this stored procedure. Remove or replace the stored procedure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1808128982 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau doesn’t recognise this table because the underlying data has changed. Remove or replace table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1735409774 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t find or recognise one or more tables in this union. Remove the union or replace tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a525250796 = messageFormatterFn((function(  ) {
  return function(d) { return "This object has no analytics connection."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1694252048 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1919897731 = messageFormatterFn((function(  ) {
  return function(d) { return " Learn more about the difference between physical and logical tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b127700985 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.tableCount, 0, pluralFuncs["en-GB"], { one: function() { return "1 physical table defines";}, other: function() { return d.formattedTableCount + " physical tables define";} }) + " the logical table. "; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1536535170 = messageFormatterFn((function(  ) {
  return function(d) { return "One to Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1326818631 = messageFormatterFn((function(  ) {
  return function(d) { return "One to One"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1780302583 = messageFormatterFn((function(  ) {
  return function(d) { return "Physical Tables: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1663378127 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an error in one of the relationship links."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1728044538 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an error in one of the inputs to the relationship."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a394898937 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship has no matching fields. Edit the relationship to select matching fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1754817877 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship clause contains an invalid calculation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a582458844 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship references unknown field %1. Edit the relationship to select a valid field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a305701860 = messageFormatterFn((function(  ) {
  return function(d) { return "No error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b692919239 = messageFormatterFn((function(  ) {
  return function(d) { return "The related field %1 is a spatial column and must use a spatial comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a135289578 = messageFormatterFn((function(  ) {
  return function(d) { return "The related field %1 must be a spatial column to use a spatial comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a369320871 = messageFormatterFn((function(  ) {
  return function(d) { return "The relationship uses functionality not supported by extracts stored as “Physical Tables”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2117629147 = messageFormatterFn((function(  ) {
  return function(d) { return "The relationship field %1 must only appear in a single relationship comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1076755839 = messageFormatterFn((function(  ) {
  return function(d) { return "Type mismatch between %1 (%2) and %3 (%4)."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1956039001 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown relationship error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1438348284 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship type is not supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1946707833 = messageFormatterFn((function(  ) {
  return function(d) { return "Relate tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1019057441 = messageFormatterFn((function(  ) {
  return function(d) { return "Related Fields: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2041140205 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a397303382 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.truncatedAmount + " More)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a185180265 = messageFormatterFn((function(  ) {
  return function(d) { return "Relations:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a847605793 = messageFormatterFn((function(  ) {
  return function(d) { return "more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1248206898 = messageFormatterFn((function(  ) {
  return function(d) { return "Related Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1138056516 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a920089733 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationships"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a480610245 = messageFormatterFn((function(  ) {
  return function(d) { return "A data model with multiple base tables creates a data source where some fields aren't directly related."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a552108969 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple base tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2142780681 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b681570956 = messageFormatterFn((function(  ) {
  return function(d) { return "Input table error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b749454785 = messageFormatterFn((function(  ) {
  return function(d) { return "No matching fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1887032229 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b532768170 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1273313613 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial operator required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2143953124 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial field required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b443035539 = messageFormatterFn((function(  ) {
  return function(d) { return "Unsupported extract type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1108091285 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate filed in use"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2102984443 = messageFormatterFn((function(  ) {
  return function(d) { return "Data type mismatch"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b968829459 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2048275382 = messageFormatterFn((function(  ) {
  return function(d) { return "Join error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1469879854 = messageFormatterFn((function(  ) {
  return function(d) { return "Visually Separate Unrelated Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1766862680 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here to relate them."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b816137791 = messageFormatterFn((function(  ) {
  return function(d) { return "Need more data?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1731626664 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag out additional base tables for multi-fact analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1416122231 = messageFormatterFn((function(  ) {
  return function(d) { return "Need help adding data? "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b242419721 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables near "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1105597335 = messageFormatterFn((function(  ) {
  return function(d) { return " to relate them"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a334345707 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Double-click this logical table to see its physical " + plural(d.tableCount, 0, pluralFuncs["en-GB"], { one: function() { return "table";}, other: function() { return "tables";} }) + "."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1599852528 = messageFormatterFn((function(  ) {
  return function(d) { return "Union"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b428667890 = messageFormatterFn((function(  ) {
  return function(d) { return "Unioned Tables: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a599727066 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.failureCountString + " " + plural(d.failureCount, 0, pluralFuncs["en-GB"], { one: function() { return "Alert";}, other: function() { return "Alerts";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1549504491 = messageFormatterFn((function(  ) {
  return function(d) { return "Object graph validation warnings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a38306389 = messageFormatterFn((function(  ) {
  return function(d) { return "Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1737474348 = messageFormatterFn((function(  ) {
  return function(d) { return "is made of multiple tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1667679599 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit alt text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a622497936 = messageFormatterFn((function(  ) {
  return function(d) { return "Accessibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a487629034 = messageFormatterFn((function(  ) {
  return function(d) { return "Add link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1915344361 = messageFormatterFn((function(  ) {
  return function(d) { return "Add or edit link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1545681837 = messageFormatterFn((function(  ) {
  return function(d) { return "Additional resources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1222044741 = messageFormatterFn((function(  ) {
  return function(d) { return "Applied Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1890379729 = messageFormatterFn((function(  ) {
  return function(d) { return "published on " + d.date; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a360774513 = messageFormatterFn((function(  ) {
  return function(d) { return "average of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b680597347 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1448643572 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b951620383 = messageFormatterFn((function(  ) {
  return function(d) { return "distinct count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a899690797 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1851125697 = messageFormatterFn((function(  ) {
  return function(d) { return "count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1770284815 = messageFormatterFn((function(  ) {
  return function(d) { return "Count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1730017277 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1546374346 = messageFormatterFn((function(  ) {
  return function(d) { return "To ask Tableau to monitor data changes for this view, or to see monitoring status, go to this view’s workbook page."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b582317627 = messageFormatterFn((function(  ) {
  return function(d) { return "Notable Data Changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1121544208 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + " is lower than predicted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1191332716 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + " is higher than predicted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2031740174 = messageFormatterFn((function(  ) {
  return function(d) { return "Value is unexpected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1119314487 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected these notable data changes based on historical trends."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a737165625 = messageFormatterFn((function(  ) {
  return function(d) { return "The filter and parameter settings have changed. No data changes are available for the current settings."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a852436680 = messageFormatterFn((function(  ) {
  return function(d) { return "Notable Data Changes (" + d.NumberOfSignals + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1579735525 = messageFormatterFn((function(  ) {
  return function(d) { return "Detecting Data Changes..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1883779559 = messageFormatterFn((function(  ) {
  return function(d) { return "No unexpected data change has been found in this view in the past 24 hours."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1808709070 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + ": lower than predicted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b159569615 = messageFormatterFn((function(  ) {
  return function(d) { return "Lower than predicted: found " + d.timeStamp; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1738920562 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + ": higher than predicted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2029176107 = messageFormatterFn((function(  ) {
  return function(d) { return "Higher than predicted: found " + d.timeStamp; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a740791152 = messageFormatterFn((function(  ) {
  return function(d) { return "Value is unexpected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1218057808 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau found that " + d.unexpectedValue + " is notably lower than values it predicted for " + d.aggTargetMeasureLabel + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1148269300 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau found that " + d.unexpectedValue + " is notably higher than values it predicted for " + d.aggTargetMeasureLabel + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2024619314 = messageFormatterFn((function(  ) {
  return function(d) { return "We are having trouble retrieving this information. Please try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a730968550 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureLabel + " for " + d.dimensionNames; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1631184146 = messageFormatterFn((function(  ) {
  return function(d) { return "Higher than predicted range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1293433031 = messageFormatterFn((function(  ) {
  return function(d) { return "Current value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b297662940 = messageFormatterFn((function(  ) {
  return function(d) { return "Lower than predicted range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1933661996 = messageFormatterFn((function(  ) {
  return function(d) { return "Predicted range unavailable"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1266672362 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Change detected " + d.RELATIVE_TIME + ", at " + d.TIMESTAMP + " on " + d.DATE + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1019536712 = messageFormatterFn((function(  ) {
  return function(d) { return d.truncatedHeader + "..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a568482889 = messageFormatterFn((function(  ) {
  return function(d) { return "Within predicted range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1566032304 = messageFormatterFn((function(  ) {
  return function(d) { return "14D"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2084730776 = messageFormatterFn((function(  ) {
  return function(d) { return "Max"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1681570568 = messageFormatterFn((function(  ) {
  return function(d) { return "1D"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a625513969 = messageFormatterFn((function(  ) {
  return function(d) { return "7D"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a592569393 = messageFormatterFn((function(  ) {
  return function(d) { return "Was it useful to identify this data change?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a534807389 = messageFormatterFn((function(  ) {
  return function(d) { return d.MIN + " to " + d.MAX; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1569641177 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1483497364 = messageFormatterFn((function(  ) {
  return function(d) { return "To estimate the predicted range, Tableau trains a machine learning model by automatically recording this measure’s value at each data refresh."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1455635300 = messageFormatterFn((function(  ) {
  return function(d) { return "The model may use more historical records than what is shown in the chart, up to a maximum of 960 data points."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a675433464 = messageFormatterFn((function(  ) {
  return function(d) { return "About this predicted range."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1946222558 = messageFormatterFn((function(  ) {
  return function(d) { return "Your response has been recorded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1473140173 = messageFormatterFn((function(  ) {
  return function(d) { return "Thank you for the feedback!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1404299305 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b383641689 = messageFormatterFn((function(  ) {
  return function(d) { return "All: Last " + d.numDays + " days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1583663723 = messageFormatterFn((function(  ) {
  return function(d) { return "Latest: Last " + d.numHours + " hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a916330125 = messageFormatterFn((function(  ) {
  return function(d) { return "Notable data change information is no longer available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701176006 = messageFormatterFn((function(  ) {
  return function(d) { return "Data in These Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b633632812 = messageFormatterFn((function(  ) {
  return function(d) { return "Data in this " + d.paneTypeText; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717555472 = messageFormatterFn((function(  ) {
  return function(d) { return "Total data in " + d.thisItem + " is pre-filtered to "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1023014520 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Summary"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b161096815 = messageFormatterFn((function(  ) {
  return function(d) { return "Is ranked " + d.currentIndex + " out of " + d.totalNumber + " based on "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1859149903 = messageFormatterFn((function(  ) {
  return function(d) { return "sorting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1520598330 = messageFormatterFn((function(  ) {
  return function(d) { return "Is sorted in " + d.sortDirection + " order based on "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a309447788 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a589466251 = messageFormatterFn((function(  ) {
  return function(d) { return d.shelfType; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1901056417 = messageFormatterFn((function(  ) {
  return function(d) { return d.paneTypeText + " description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1788768428 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a description that helps users understand this dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b374558913 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a description that helps users understand this viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2085588809 = messageFormatterFn((function(  ) {
  return function(d) { return d.paneTypeText + " Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1292851265 = messageFormatterFn((function(  ) {
  return function(d) { return "Detecting Outliers..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1902787676 = messageFormatterFn((function(  ) {
  return function(d) { return "Do you want to see possible explanations for these outliers? To turn on explanations, contact: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1664070817 = messageFormatterFn((function(  ) {
  return function(d) { return "No Outlier Marks Found"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b792713461 = messageFormatterFn((function(  ) {
  return function(d) { return "Detected Outlier (1)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a597311404 = messageFormatterFn((function(  ) {
  return function(d) { return d.MeasureName + ": " + d.MeasureValue; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1826521292 = messageFormatterFn((function(  ) {
  return function(d) { return "High"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1738309184 = messageFormatterFn((function(  ) {
  return function(d) { return "Low"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a836403483 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected these marks as unusual compared to other marks in the same viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a295534318 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected these marks as unusual compared to other marks in the selected viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2031878366 = messageFormatterFn((function(  ) {
  return function(d) { return "Detected Outliers (" + d.NumberOfOutliers + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1221186309 = messageFormatterFn((function(  ) {
  return function(d) { return "Detected Outliers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a629981585 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a923739840 = messageFormatterFn((function(  ) {
  return function(d) { return "Couldn’t update the description. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1590520801 = messageFormatterFn((function(  ) {
  return function(d) { return "No data available"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2093776289 = messageFormatterFn((function(  ) {
  return function(d) { return "Explanations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a444947400 = messageFormatterFn((function(  ) {
  return function(d) { return "Go back"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a350061205 = messageFormatterFn((function(  ) {
  return function(d) { return "Has " + d.recordCount + " records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b342663135 = messageFormatterFn((function(  ) {
  return function(d) { return "Has 1 record"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a338583163 = messageFormatterFn((function(  ) {
  return function(d) { return "Have " + d.recordCount + " records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1091960199 = messageFormatterFn((function(  ) {
  return function(d) { return "Have 1 record"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b123304938 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Guide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a580976353 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1269291546 = messageFormatterFn((function(  ) {
  return function(d) { return "Help"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1655880888 = messageFormatterFn((function(  ) {
  return function(d) { return "attribute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1988690044 = messageFormatterFn((function(  ) {
  return function(d) { return "boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a395379585 = messageFormatterFn((function(  ) {
  return function(d) { return "group"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1854167912 = messageFormatterFn((function(  ) {
  return function(d) { return "date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b356066155 = messageFormatterFn((function(  ) {
  return function(d) { return "date & time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b75852563 = messageFormatterFn((function(  ) {
  return function(d) { return "geographic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a271158304 = messageFormatterFn((function(  ) {
  return function(d) { return "level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a61216899 = messageFormatterFn((function(  ) {
  return function(d) { return "number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1361805260 = messageFormatterFn((function(  ) {
  return function(d) { return "numeric bin"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b944784212 = messageFormatterFn((function(  ) {
  return function(d) { return "other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b64765506 = messageFormatterFn((function(  ) {
  return function(d) { return "set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b552301749 = messageFormatterFn((function(  ) {
  return function(d) { return "string"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a972159430 = messageFormatterFn((function(  ) {
  return function(d) { return "varying attribute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b120578461 = messageFormatterFn((function(  ) {
  return function(d) { return "Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b923227390 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a412896463 = messageFormatterFn((function(  ) {
  return function(d) { return "Has " + d.includedDataPointCount + " data points"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a856503700 = messageFormatterFn((function(  ) {
  return function(d) { return "Mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a581047182 = messageFormatterFn((function(  ) {
  return function(d) { return "maximum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2108781472 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1287394764 = messageFormatterFn((function(  ) {
  return function(d) { return "median of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a608524130 = messageFormatterFn((function(  ) {
  return function(d) { return "Median of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b667002656 = messageFormatterFn((function(  ) {
  return function(d) { return "minimum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b877912114 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a435152537 = messageFormatterFn((function(  ) {
  return function(d) { return "No filters apply to these marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1580227743 = messageFormatterFn((function(  ) {
  return function(d) { return "No filters apply to this mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b596608919 = messageFormatterFn((function(  ) {
  return function(d) { return "No filters apply to this viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2004070671 = messageFormatterFn((function(  ) {
  return function(d) { return d.N + "st/nd/rd/th percentile of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a922504219 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1505592853 = messageFormatterFn((function(  ) {
  return function(d) { return "Has 1 data point"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1475705068 = messageFormatterFn((function(  ) {
  return function(d) { return "Published by "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1319692294 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Pulse Metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2003526283 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1012735392 = messageFormatterFn((function(  ) {
  return function(d) { return "Rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753047417 = messageFormatterFn((function(  ) {
  return function(d) { return "Show more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a657780386 = messageFormatterFn((function(  ) {
  return function(d) { return "an ascending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1010148970 = messageFormatterFn((function(  ) {
  return function(d) { return "a descending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1423345453 = messageFormatterFn((function(  ) {
  return function(d) { return "standard deviation (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1485281787 = messageFormatterFn((function(  ) {
  return function(d) { return "Standard deviation (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b947203606 = messageFormatterFn((function(  ) {
  return function(d) { return "standard deviation of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b654672764 = messageFormatterFn((function(  ) {
  return function(d) { return "Standard deviation of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1480755069 = messageFormatterFn((function(  ) {
  return function(d) { return "sum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a267381835 = messageFormatterFn((function(  ) {
  return function(d) { return "Sum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1153091274 = messageFormatterFn((function(  ) {
  return function(d) { return "These marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b675719528 = messageFormatterFn((function(  ) {
  return function(d) { return "This " + d.paneTypeText; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a450173726 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1041737895 = messageFormatterFn((function(  ) {
  return function(d) { return "Please enter a valid URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a257721688 = messageFormatterFn((function(  ) {
  return function(d) { return "variance (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1182795690 = messageFormatterFn((function(  ) {
  return function(d) { return "Variance (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b171925243 = messageFormatterFn((function(  ) {
  return function(d) { return "variance of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1676034423 = messageFormatterFn((function(  ) {
  return function(d) { return "Variance of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a451826646 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1692579914 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply analytics extension table changes to generate data preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a226787734 = messageFormatterFn((function(  ) {
  return function(d) { return "Bin"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a418666282 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1200235092 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1404057003 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t rename the Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b4066294 = messageFormatterFn((function(  ) {
  return function(d) { return "Cardinality"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1944483011 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1771007116 = messageFormatterFn((function(  ) {
  return function(d) { return "Data preview unavailable"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2107558012 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Relationship"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1593844052 = messageFormatterFn((function(  ) {
  return function(d) { return "A field or logical table named “" + d.fieldName + "” already exists."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a394419923 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1607584606 = messageFormatterFn((function(  ) {
  return function(d) { return "Group"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1596693849 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldCount + " fields " + d.rowCount + " rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b921356193 = messageFormatterFn((function(  ) {
  return function(d) { return "Input Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b167187458 = messageFormatterFn((function(  ) {
  return function(d) { return "Input Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1996486154 = messageFormatterFn((function(  ) {
  return function(d) { return "Logical Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1671830355 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1718721032 = messageFormatterFn((function(  ) {
  return function(d) { return "Many to One"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a834574821 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a908296587 = messageFormatterFn((function(  ) {
  return function(d) { return "No fields available"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a118858222 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a423872444 = messageFormatterFn((function(  ) {
  return function(d) { return "One to Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b676840321 = messageFormatterFn((function(  ) {
  return function(d) { return "One to One"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1920522316 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a77676041 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1142176713 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationships"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a962332083 = messageFormatterFn((function(  ) {
  return function(d) { return "rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a454167293 = messageFormatterFn((function(  ) {
  return function(d) { return "Show aliases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a294433850 = messageFormatterFn((function(  ) {
  return function(d) { return "Show hidden fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b809499528 = messageFormatterFn((function(  ) {
  return function(d) { return "A to Z ascending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1909780489 = messageFormatterFn((function(  ) {
  return function(d) { return "A to Z ascending per table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a954857127 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source order"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b537513199 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Fields:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b549855263 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1419650844 = messageFormatterFn((function(  ) {
  return function(d) { return "Z to A descending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1263021741 = messageFormatterFn((function(  ) {
  return function(d) { return "Z to A descending per table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a944913582 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1286241124 = messageFormatterFn((function(  ) {
  return function(d) { return "The logical table " + d.tableName + " has " + d.numCols + " columns, which is over the preview limit of " + d.colLimit + " columns. To see the contents of this table, reduce the number of columns in the table, build a view or use View Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a615733206 = messageFormatterFn((function(  ) {
  return function(d) { return "Update Automatically"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1640355913 = messageFormatterFn((function(  ) {
  return function(d) { return "Update Now"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1211843940 = messageFormatterFn((function(  ) {
  return function(d) { return "Collapse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a908479305 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1684152660 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1359453296 = messageFormatterFn((function(  ) {
  return function(d) { return "attribute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1138197412 = messageFormatterFn((function(  ) {
  return function(d) { return "boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1668932521 = messageFormatterFn((function(  ) {
  return function(d) { return "group"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1428697712 = messageFormatterFn((function(  ) {
  return function(d) { return "date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a239401661 = messageFormatterFn((function(  ) {
  return function(d) { return "date & time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1151582779 = messageFormatterFn((function(  ) {
  return function(d) { return "geographic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b871279857 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1581539064 = messageFormatterFn((function(  ) {
  return function(d) { return "level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2028314795 = messageFormatterFn((function(  ) {
  return function(d) { return "number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b347884452 = messageFormatterFn((function(  ) {
  return function(d) { return "numeric bin"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a365596548 = messageFormatterFn((function(  ) {
  return function(d) { return "other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1140495722 = messageFormatterFn((function(  ) {
  return function(d) { return "set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1414796147 = messageFormatterFn((function(  ) {
  return function(d) { return "string"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a790851566 = messageFormatterFn((function(  ) {
  return function(d) { return "varying attribute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1245223312 = messageFormatterFn((function(  ) {
  return function(d) { return "More options for field name " + d.NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1882540022 = messageFormatterFn((function(  ) {
  return function(d) { return "null"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1290792258 = messageFormatterFn((function(  ) {
  return function(d) { return "Physical Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1308951162 = messageFormatterFn((function(  ) {
  return function(d) { return "Remote Field Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2058121449 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a172847437 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1903566466 = messageFormatterFn((function(  ) {
  return function(d) { return "Cross-database join"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1842918452 = messageFormatterFn((function(  ) {
  return function(d) { return "Data may be moved across connections and joined in a database, or the join may occur in Tableau."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1443803685 = messageFormatterFn((function(  ) {
  return function(d) { return "Data is moved from a file-based connection to the database. This option ignores the file’s size and may impact performance."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1280691703 = messageFormatterFn((function(  ) {
  return function(d) { return "Default join location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1982093904 = messageFormatterFn((function(  ) {
  return function(d) { return "Remote join location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b327595609 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a412363166 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1831786403 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b739925811 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract contains subset of data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a588913273 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will contain subset of data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a241281651 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will be created automatically when you switch to a different data source or when you switch tabs."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1583925850 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract contains all data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b327871680 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will contain all data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b809725641 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract contains a subset of user-filtered data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a687163471 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will contain a subset of user-filtered data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a57914256 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract contains user-filtered data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b398711914 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract will contain user-filtered data. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a148778864 = messageFormatterFn((function(  ) {
  return function(d) { return "Character set:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b391844129 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1886175604 = messageFormatterFn((function(  ) {
  return function(d) { return "Locale:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1463802126 = messageFormatterFn((function(  ) {
  return function(d) { return "Text qualifier:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1240934537 = messageFormatterFn((function(  ) {
  return function(d) { return "Field separator:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1794261349 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753712196 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a295968001 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1839940610 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1308496932 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b896279883 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1338458877 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a174032563 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1922518994 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1059592207 = messageFormatterFn((function(  ) {
  return function(d) { return "Semicolon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1506442404 = messageFormatterFn((function(  ) {
  return function(d) { return "Space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1932767283 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1771760549 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Bar"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b973778616 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1125114207 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1832024839 = messageFormatterFn((function(  ) {
  return function(d) { return "You can only union data from the same connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1356932672 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag table to union"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a650713371 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b101655307 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t find or recognise this table. Remove or replace the table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1333117004 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b105583869 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables in union: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1187607593 = messageFormatterFn((function(  ) {
  return function(d) { return "Only the first table in your selection will be added because union is not available for this database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1603081201 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1690775378 = messageFormatterFn((function(  ) {
  return function(d) { return "Live"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2084092119 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.ValidationFailuresCountString + " " + plural(d.ValidationFailuresCount, 0, pluralFuncs["en-GB"], { one: function() { return "Alert";}, other: function() { return "Alerts";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b946144463 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b412205581 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1143103082 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Data Source Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b172700544 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b549168873 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1362383506 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b748892533 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a259611601 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1421636038 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1568623008 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Error Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1127458134 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy link address"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2049526938 = messageFormatterFn((function(  ) {
  return function(d) { return "Dismiss"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2064679035 = messageFormatterFn((function(  ) {
  return function(d) { return "Error Code: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1729474218 = messageFormatterFn((function(  ) {
  return function(d) { return "Error copied to clipboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1052344284 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Support"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b103947258 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1823670641 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to complete action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1082539224 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1232250320 = messageFormatterFn((function(  ) {
  return function(d) { return "... + " + d.count; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1222596135 = messageFormatterFn((function(  ) {
  return function(d) { return "Comment"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1149516752 = messageFormatterFn((function(  ) {
  return function(d) { return d.text + "…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a240159774 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a515472018 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.worksheetCount, 0, pluralFuncs["en-GB"], { one: function() { return "Also applies to worksheet: ";}, other: function() { return "Also applies to worksheets: ";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1008142267 = messageFormatterFn((function(  ) {
  return function(d) { return "This measure is incompatible with one or more of the dimensions in this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1584420242 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated dimensions can show combinations of values in the viz that don't exist in the data. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b461049610 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure values repeat for unrelated dimensions. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a724403524 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is ignored by unrelated filters:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1650008666 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure values repeat for unrelated dimensions. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1158036423 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated dimensions can show combinations of values in the viz that don't exist in the data. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1487995265 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure values repeat for unrelated dimensions. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1388506215 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is ignored by unrelated filters:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a299036209 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure values repeat for unrelated dimensions. Unrelated to:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1937781517 = messageFormatterFn((function(  ) {
  return function(d) { return "This filter ignores unrelated fields:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b169473108 = messageFormatterFn((function(  ) {
  return function(d) { return "Not related to any dimensions in the viz. If used, this field can show combinations of values in the viz that don't exist in the data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b388068940 = messageFormatterFn((function(  ) {
  return function(d) { return "Not related to any measures in the viz. If used, measure values will repeat for this field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1577027996 = messageFormatterFn((function(  ) {
  return function(d) { return "Not related to any dimensions in the viz. If used, this field will show repeated values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a202142276 = messageFormatterFn((function(  ) {
  return function(d) { return "Created from: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1653620989 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a689710666 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1552513897 = messageFormatterFn((function(  ) {
  return function(d) { return "Add " + d.device + " Layout"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a183635071 = messageFormatterFn((function(  ) {
  return function(d) { return "Device Preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b415164354 = messageFormatterFn((function(  ) {
  return function(d) { return "Device Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1094795377 = messageFormatterFn((function(  ) {
  return function(d) { return "Model"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1035143266 = messageFormatterFn((function(  ) {
  return function(d) { return "Switch to Landscape Mode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b532007106 = messageFormatterFn((function(  ) {
  return function(d) { return "Switch to Portrait Mode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b457686069 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Mobile App"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a477816398 = messageFormatterFn((function(  ) {
  return function(d) { return "Adjusts the preview frame to show available screen size for devices running Tableau Mobile"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b566970112 = messageFormatterFn((function(  ) {
  return function(d) { return "https://help.tableau.com/current/pro/desktop/en-gb/dates_custom_date_formats.htm"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1536842651 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1301558335 = messageFormatterFn((function(  ) {
  return function(d) { return "Format Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1560663199 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b731698995 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a736933804 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Editing Properties"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1115703830 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Range Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a350579041 = messageFormatterFn((function(  ) {
  return function(d) { return "Synchronise Axes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b889538160 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Titles"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1598400549 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1500263883 = messageFormatterFn((function(  ) {
  return function(d) { return "Days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a254285408 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b872793487 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed end"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1524357768 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed start"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b69968876 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1084252111 = messageFormatterFn((function(  ) {
  return function(d) { return "Hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b596606066 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1670944146 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weekdays"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a33515950 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1805037765 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1834897170 = messageFormatterFn((function(  ) {
  return function(d) { return "Include zero"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1007503204 = messageFormatterFn((function(  ) {
  return function(d) { return "Independent"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b512675113 = messageFormatterFn((function(  ) {
  return function(d) { return "Independent axis ranges for each row or column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1534012781 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1535917511 = messageFormatterFn((function(  ) {
  return function(d) { return "Interval"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b50545418 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid date."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1254021317 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid number."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b82366234 = messageFormatterFn((function(  ) {
  return function(d) { return "Positive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1067769310 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithm base must be greater than one."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a973011853 = messageFormatterFn((function(  ) {
  return function(d) { return "Log axis origin must be greater than zero."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1855302879 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithmic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1723218460 = messageFormatterFn((function(  ) {
  return function(d) { return "Major Tick Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1400572536 = messageFormatterFn((function(  ) {
  return function(d) { return "Major tick interval must be greater than zero."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b274973080 = messageFormatterFn((function(  ) {
  return function(d) { return "Minor Tick Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b392156556 = messageFormatterFn((function(  ) {
  return function(d) { return "Minor tick interval must be greater than zero."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1862747201 = messageFormatterFn((function(  ) {
  return function(d) { return "Minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a673231399 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1799143532 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1360721979 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1405330288 = messageFormatterFn((function(  ) {
  return function(d) { return "Range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1087674767 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b734356490 = messageFormatterFn((function(  ) {
  return function(d) { return "Reversed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a47848131 = messageFormatterFn((function(  ) {
  return function(d) { return "Scale"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b123303455 = messageFormatterFn((function(  ) {
  return function(d) { return "Seconds"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1351021135 = messageFormatterFn((function(  ) {
  return function(d) { return "End Extent"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1271565832 = messageFormatterFn((function(  ) {
  return function(d) { return "Start Extent"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1040308437 = messageFormatterFn((function(  ) {
  return function(d) { return "End Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a970593522 = messageFormatterFn((function(  ) {
  return function(d) { return "Start Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b344708485 = messageFormatterFn((function(  ) {
  return function(d) { return "Axis Extents"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2074640071 = messageFormatterFn((function(  ) {
  return function(d) { return "Show times"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b110714676 = messageFormatterFn((function(  ) {
  return function(d) { return "Subtitle"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1535079247 = messageFormatterFn((function(  ) {
  return function(d) { return "Symmetric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1532588208 = messageFormatterFn((function(  ) {
  return function(d) { return "Synchronise dual axes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1900522333 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick interval"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1983697416 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick interval (powers of)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b89780098 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1651452028 = messageFormatterFn((function(  ) {
  return function(d) { return "Tick origin"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a802966842 = messageFormatterFn((function(  ) {
  return function(d) { return "Title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2020425693 = messageFormatterFn((function(  ) {
  return function(d) { return "Uniform axis range for all rows or columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1395808992 = messageFormatterFn((function(  ) {
  return function(d) { return "Uniform"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1998489528 = messageFormatterFn((function(  ) {
  return function(d) { return "Unit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1341796258 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b957875167 = messageFormatterFn((function(  ) {
  return function(d) { return "Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a813646648 = messageFormatterFn((function(  ) {
  return function(d) { return "Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1572060789 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1600639825 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom-right cell: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b729355717 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b581491831 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a218995002 = messageFormatterFn((function(  ) {
  return function(d) { return "Top-left cell: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a683621900 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b996438138 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Alias"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a366249454 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1197829770 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2068053397 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1459036954 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b248323803 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a466277010 = messageFormatterFn((function(  ) {
  return function(d) { return "Height in pixels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1061133703 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a650118270 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b928910906 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Height"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1708785059 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Width"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a203881717 = messageFormatterFn((function(  ) {
  return function(d) { return "Width in pixels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b863081426 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1472097869 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a578991432 = messageFormatterFn((function(  ) {
  return function(d) { return "EPS URL cannot be empty"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b314997961 = messageFormatterFn((function(  ) {
  return function(d) { return "Always Include"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a392480457 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1250861671 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic (Exclude when number of members is large)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a523513970 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1871936379 = messageFormatterFn((function(  ) {
  return function(d) { return "Cannot be used"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1977517946 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because the required aggregation (AVG) can’t be used with this measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a949423508 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because it’s being automatically hidden."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1959670094 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because it isn’t a discrete dimension."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a286131264 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because it isn’t a continuous measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a975583107 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because its domain information isn’t available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2133199757 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because geometry, latitude and longitude aren’t supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1369880807 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because it has more than 500 members."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a418782610 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields that aren’t valid can’t be selected for consideration."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1205920091 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because its field type isn’t supported. Supported field types for dimensions: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1123154333 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because its field type isn’t supported. Supported field types for measures: calculated fields and physical columns defined in the database for the data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1497651313 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because its data type isn’t supported. Supported data types for dimensions: string, number and boolean."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b9226647 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " can’t be used in explanations because its data type isn’t supported. Supported data type for measures: number."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1484240849 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2084255518 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain the Average"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1682148573 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain the Average."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2134997582 = messageFormatterFn((function(  ) {
  return function(d) { return "Explanations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1403548228 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type indicates if one or more records have values that are significantly higher or lower than most records in the target measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b882639322 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to get field metadata from the data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b282301199 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a668582563 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose the fields used for explaining data:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1370593990 = messageFormatterFn((function(  ) {
  return function(d) { return "Include"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b494851426 = messageFormatterFn((function(  ) {
  return function(d) { return "Include None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b996040583 = messageFormatterFn((function(  ) {
  return function(d) { return "Not connected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b305212081 = messageFormatterFn((function(  ) {
  return function(d) { return "Unsupported connection type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2118933289 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b820936276 = messageFormatterFn((function(  ) {
  return function(d) { return "Average Value of the Mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2132618795 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type describes when the average of the target measure is correlated to the SUM."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1513199491 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1833583668 = messageFormatterFn((function(  ) {
  return function(d) { return "Never Include"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2066896672 = messageFormatterFn((function(  ) {
  return function(d) { return "None of the data sources in this workbook can be used in explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a203442440 = messageFormatterFn((function(  ) {
  return function(d) { return "Null Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387861255 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type reveals how the fraction of target measure values that are null might be contributing to the aggregated value of that measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2037556879 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1810132496 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type describes when the count of the underlying records is correlated to the SUM of the target measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1307914828 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a622192982 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1063374394 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing to the value of a measure:\n\nThis explanation type indicates when the distribution of values across an unvisualised dimension may be contributing to the aggregate value of the analysed mark. This type of explanation is used for sums, counts and averages.\n\nUnique Attributes:\n\nThis explanation type can also indicate that the distribution of values across an unvisualised dimension in the analysed mark is unusual in contrast to the distribution of values for all other marks in the view.\n\nAn unvisualised dimension is a dimension that exists in the data source, but isn’t currently being used in the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b219768638 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Dimensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b416430142 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type indicates the average of an unvisualised measure may be contributing to the aggregate value of the analysed mark.\n\nAn unvisualised measure is a measure that exists in the data source but isn’t currently being used in the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b441752502 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Measures"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a597335799 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing to the value of a measure:\n\nThis explanation type indicates when a single value in an unvisualised dimension may be contributing to the aggregate value of the analysed mark. This explanation reveals when every underlying record of a dimension has the same value.\n\nUnique Attributes:\n\nThis explanation type can also indicate that the value of the analysed mark is unusual in contrast to the distribution of values for all other marks in the view.\n\nAn unvisualised dimension is a dimension that exists in the data source, but isn’t currently being used in the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1622143297 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Single Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b960273811 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a930367798 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1047320905 = messageFormatterFn((function(  ) {
  return function(d) { return "Explanation types to show in this workbook:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2092373563 = messageFormatterFn((function(  ) {
  return function(d) { return "Analysed mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a202715616 = messageFormatterFn((function(  ) {
  return function(d) { return "average of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1001954632 = messageFormatterFn((function(  ) {
  return function(d) { return "Average values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1907712607 = messageFormatterFn((function(  ) {
  return function(d) { return d.columnCaption + ":"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1926550382 = messageFormatterFn((function(  ) {
  return function(d) { return "distinct count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a57087598 = messageFormatterFn((function(  ) {
  return function(d) { return "count of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1704182469 = messageFormatterFn((function(  ) {
  return function(d) { return "What has changed unexpectedly for " + d.analyzedMark + "?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a807021255 = messageFormatterFn((function(  ) {
  return function(d) { return "No unexpected data changes found."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a970866471 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Change Radar is not enabled for this workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1103173010 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1678026475 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data can’t generate this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1912301866 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude extreme values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b51513452 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of the analysed mark is higher than predicted, but within the expected range."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b283047694 = messageFormatterFn((function(  ) {
  return function(d) { return "The aggregated value of the analysed mark is lower than predicted, but within the expected range."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1214934270 = messageFormatterFn((function(  ) {
  return function(d) { return "Expected Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b431015556 = messageFormatterFn((function(  ) {
  return function(d) { return "The mark value is within the expected range.\n\nThe expected range is from the 15th to the 85th percentile that a statistical model predicts for the analysed mark based on visualised dimensions only."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1834733372 = messageFormatterFn((function(  ) {
  return function(d) { return "Why is this the median value?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a986732309 = messageFormatterFn((function(  ) {
  return function(d) { return "Why is this slightly high compared to other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a27538769 = messageFormatterFn((function(  ) {
  return function(d) { return "Why is this slightly low compared to other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1289641985 = messageFormatterFn((function(  ) {
  return function(d) { return "Why is this high compared to other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1292818649 = messageFormatterFn((function(  ) {
  return function(d) { return "Why is this low compared to other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1431133376 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " for " + d.analyzedMark + " is expected to be between " + d.low + " and " + d.high + ", given the model of current values in the viz. This takes into account the filters set on " + d.fieldCaptions + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2102437423 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " for " + d.analyzedMark + " is expected to be between " + d.low + " and " + d.high + ", given the model of current values in the viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a853554099 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " for " + d.analyzedMark + " is expected to be between " + d.low + " and " + d.high + ", given the model of current values in the viz. This takes into account the filter set on " + d.fieldCaption + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b155105158 = messageFormatterFn((function(  ) {
  return function(d) { return "Expected Range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1382156750 = messageFormatterFn((function(  ) {
  return function(d) { return "Within expected range compared to other marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b708793075 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2044258543 = messageFormatterFn((function(  ) {
  return function(d) { return d.numFields + " fields were skipped to reduce time and resources required for analysis. Click Explain All to run a longer analysis that considers these additional fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1353019809 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose fields for '" + d.datasourceCaption + "'"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b894012955 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data can’t generate this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1283306240 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse this viz for explanations because the data source is not currently connected."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2049026728 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse data sources that don’t support CountD aggregations or cross-table joins at different levels of detail."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a799469015 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a story for explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1630300117 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse multiple marks at the same time for explanations. Try selecting a single mark."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1646184333 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that has no dimensions or contains only Measures Names as a dimension."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b443325646 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that has no measures."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a15540901 = messageFormatterFn((function(  ) {
  return function(d) { return "The viz must have a mark selected to be analysed for explanations. Try selecting a single mark."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1846844398 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse marks that aren’t aggregated."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2145084500 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse marks that are totals."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b141038487 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse this viz for explanations because there are too many marks."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748298744 = messageFormatterFn((function(  ) {
  return function(d) { return "This viz can’t be analysed for explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a134878698 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that uses blending."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1644386382 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that contains clusters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2082382783 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that uses pages."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a268322008 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse a viz that uses a table calculation as a filter."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1864149354 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to complete this operation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a72995822 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau couldn’t complete explanation analysis because the selected mark changed. Close the Explain Data pane and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a780010377 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau couldn’t complete explanation analysis because the visualisation changed. Close the Explain Data pane and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a863196805 = messageFormatterFn((function(  ) {
  return function(d) { return "For the measure values listed below, why is " + d.analyzedMark + " different from other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b385466356 = messageFormatterFn((function(  ) {
  return function(d) { return "For the measure value listed below, why is " + d.analyzedMark + " different from other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a12945195 = messageFormatterFn((function(  ) {
  return function(d) { return "Explore underlying values for " + d.analyzedMark; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1935658779 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation can’t be generated."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a794362381 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred in showing explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1338978759 = messageFormatterFn((function(  ) {
  return function(d) { return d.X + " records out of " + d.numberOfRows + " have extreme values, which are making " + d.aggTargetMeasureName + " higher for the analysed mark " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1753631149 = messageFormatterFn((function(  ) {
  return function(d) { return d.X + " records out of " + d.numberOfRows + " have extreme values, which are making " + d.aggTargetMeasureName + " lower for the analysed mark " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1808119759 = messageFormatterFn((function(  ) {
  return function(d) { return "One record out of " + d.numberOfRows + " has an extreme value, which is making " + d.aggTargetMeasureName + " higher for the analysed mark " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1863733067 = messageFormatterFn((function(  ) {
  return function(d) { return "One record out of " + d.numberOfRows + " has an extreme value, which is making " + d.aggTargetMeasureName + " lower for the analysed mark " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1442023027 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfValues + " extreme values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b416299298 = messageFormatterFn((function(  ) {
  return function(d) { return "One extreme value: " + d.outlierValue; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1772834570 = messageFormatterFn((function(  ) {
  return function(d) { return "Include or Exclude Extreme Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b322338243 = messageFormatterFn((function(  ) {
  return function(d) { return "Underlying record details not available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1188831671 = messageFormatterFn((function(  ) {
  return function(d) { return "Go back"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2038779849 = messageFormatterFn((function(  ) {
  return function(d) { return "Help"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b874787638 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a315084824 = messageFormatterFn((function(  ) {
  return function(d) { return "High"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a236502172 = messageFormatterFn((function(  ) {
  return function(d) { return "Include extreme values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1732933056 = messageFormatterFn((function(  ) {
  return function(d) { return "When you select a mark in your viz and run Explain Data, Tableau analyses the data in the view and in your connected data source. Based on the mark you selected, this pane shows possible explanations for the value, while considering other record values in the data source. Click section names below to explore possible explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1297826174 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1669108125 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b192807397 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a662348531 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b154830328 = messageFormatterFn((function(  ) {
  return function(d) { return "All Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a656334856 = messageFormatterFn((function(  ) {
  return function(d) { return "Extreme"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1289699399 = messageFormatterFn((function(  ) {
  return function(d) { return "All Other Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1311534757 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b410887381 = messageFormatterFn((function(  ) {
  return function(d) { return "Analysed Mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1538070772 = messageFormatterFn((function(  ) {
  return function(d) { return "Low"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b539498378 = messageFormatterFn((function(  ) {
  return function(d) { return "Underlying Characteristics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1962127888 = messageFormatterFn((function(  ) {
  return function(d) { return "These explanations show relationships between the underlying records that make up " + d.analyzedMark + " and the value of " + d.aggTargetMeasureName + ".\n\n**Extreme Values** Are one or multiple records skewing " + d.aggTargetMeasureName + "?\n\n**Null Values** Is the presence of null values influencing " + d.aggTargetMeasureName + "?\n\nFor SUM aggregations:\n\n**Number of Records** Is the sum of " + d.measureName + " high/low because there are many/few records?\n\n**Average Value of Mark** Is the sum of " + d.measureName + " high/low because individual records have high/low values?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a422988285 = messageFormatterFn((function(  ) {
  return function(d) { return "maximum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1875270154 = messageFormatterFn((function(  ) {
  return function(d) { return "On average, record values in " + d.analyzedMark + " are higher than record values for other marks. This may explain why " + d.aggTargetMeasureName + " is high."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b82346052 = messageFormatterFn((function(  ) {
  return function(d) { return "On average, record values in " + d.analyzedMark + " are lower than record values for other marks. This may explain why " + d.aggTargetMeasureName + " is low."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a538636024 = messageFormatterFn((function(  ) {
  return function(d) { return "The average of record values in " + d.analyzedMark + " may be affecting " + d.aggTargetMeasureName + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2030498900 = messageFormatterFn((function(  ) {
  return function(d) { return "Average " + d.baseColumnCaption + ": " + d.averageOfRecords; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1494379649 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a312464765 = messageFormatterFn((function(  ) {
  return function(d) { return "median of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b825061553 = messageFormatterFn((function(  ) {
  return function(d) { return "minimum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1479871787 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows all records of " + d.measureCaption + " for " + d.analyzedMark + ". The extreme values are highlighted."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a685908091 = messageFormatterFn((function(  ) {
  return function(d) { return "When the extreme values are excluded, the " + d.aggTargetMeasureName + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1197389420 = messageFormatterFn((function(  ) {
  return function(d) { return "Next Record"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a874160504 = messageFormatterFn((function(  ) {
  return function(d) { return "No Explanation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1673866354 = messageFormatterFn((function(  ) {
  return function(d) { return "When the analysed mark value is outside of the expected range and no statistical models, including unvisualised predictors, can explain the mark, no explanations are generated.\n\nThe expected range is from the 15th to the 85th percentile that a statistical model predicts for the analysed mark based on visualised dimensions only."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1906327852 = messageFormatterFn((function(  ) {
  return function(d) { return "The fields " + d.consideredFields + " were each considered as predictors, but none adequately explain the mark."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1662580120 = messageFormatterFn((function(  ) {
  return function(d) { return d.numberOfFields + " fields were each considered as predictors, such as " + d.fieldCaption1 + ", " + d.fieldCaption2 + " and " + d.fieldCaption3 + ", but none adequately explain the mark."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1865404433 = messageFormatterFn((function(  ) {
  return function(d) { return "Additional fields were not available for consideration in this analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a906943282 = messageFormatterFn((function(  ) {
  return function(d) { return "The field " + d.fieldCaption + " was considered as a predictor but did not adequately explain the mark."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b796065567 = messageFormatterFn((function(  ) {
  return function(d) { return "The analysed mark " + d.analyzedMark + " is made of " + d.numRows + " records."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1484992871 = messageFormatterFn((function(  ) {
  return function(d) { return "The analysed mark " + d.analyzedMark + " is made of a single record."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1055168842 = messageFormatterFn((function(  ) {
  return function(d) { return "Random Variation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1112081360 = messageFormatterFn((function(  ) {
  return function(d) { return "When the analysed mark has a low number of records, there may not be enough data available for Explain Data to form a statistically significant explanation. If the mark’s value is outside the expected range, Explain Data can’t determine whether this unexpected value is being caused by random variation or by a meaningful difference in the underlying records.\n\nThe expected range is from the 15th to the 85th percentile that a statistical model predicts for the analysed mark based on visualised dimensions only."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a300431262 = messageFormatterFn((function(  ) {
  return function(d) { return "The analysed mark " + d.analyzedMark + " is made of " + d.numRows + " records. Its unexpected value is likely to be caused by random variation rather than a meaningful difference in the underlying records."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1430220650 = messageFormatterFn((function(  ) {
  return function(d) { return "The analysed mark " + d.analyzedMark + " is made of a single record. Its unexpected value is likely to be caused by random variation rather than a meaningful difference in the underlying records."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1352984514 = messageFormatterFn((function(  ) {
  return function(d) { return d.N + "st/nd/rd/th percentile of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1222882715 = messageFormatterFn((function(  ) {
  return function(d) { return "Null Values: " + d.percentNull; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b440275246 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " may be high because of the percentage of null records in " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a812790260 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " may be low because of the percentage of null records in " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1893923934 = messageFormatterFn((function(  ) {
  return function(d) { return "The percentage of null records in " + d.analyzedMark + " may be affecting " + d.aggTargetMeasureName + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1934110757 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentage of Nulls in " + d.targetMeasureName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1926306187 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " may be high because of the high number of records in " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b773436389 = messageFormatterFn((function(  ) {
  return function(d) { return d.aggTargetMeasureName + " may be low because of the low number of records in " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b152454313 = messageFormatterFn((function(  ) {
  return function(d) { return "The number of records in " + d.analyzedMark + " may be affecting " + d.aggTargetMeasureName + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a592844595 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Records: " + d.numberOfRows; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1103006464 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a847941368 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide explanation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1054848512 = messageFormatterFn((function(  ) {
  return function(d) { return "Open explanation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1376823786 = messageFormatterFn((function(  ) {
  return function(d) { return "Open in worksheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2144956819 = messageFormatterFn((function(  ) {
  return function(d) { return "Open in larger view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1284997939 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of " + d.measureCaption + " in the analysed mark"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2129383357 = messageFormatterFn((function(  ) {
  return function(d) { return "Visualise the Difference"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b173341008 = messageFormatterFn((function(  ) {
  return function(d) { return "Mark Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1697323504 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous Record"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1178475037 = messageFormatterFn((function(  ) {
  return function(d) { return "Record Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a943570565 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " for " + d.dimension + ": " + d.primaryDisplayValue; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b778565644 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentage of records with " + d.dimension + ": " + d.primaryDisplayValue; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b953064639 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has fewer records with " + d.dimensionName + ": " + d.markValue + " than other marks, and " + d.baseColumnCaption + " tends to be lower for " + d.markValue + ". This may explain why " + d.aggTargetMeasureName + " is higher for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1004866651 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has fewer records with " + d.dimensionName + ": " + d.markValue + " than other marks, and " + d.baseColumnCaption + " tends to be higher for " + d.markValue + ". This may explain why " + d.aggTargetMeasureName + " is lower for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1117645361 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has fewer records with " + d.dimensionName + ": " + d.markValue + " than other marks, which may be affecting " + d.aggTargetMeasureName + " for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1982819209 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has more records with " + d.dimensionName + ": " + d.markValue + " than other marks, and " + d.baseColumnCaption + " tends to be higher for " + d.markValue + ". This may explain why " + d.aggTargetMeasureName + " is higher for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1730821201 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has more records with " + d.dimensionName + ": " + d.markValue + " than other marks, and " + d.baseColumnCaption + " tends to be lower for " + d.markValue + ". This may explain why " + d.aggTargetMeasureName + " is lower for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1319701337 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has more records with " + d.dimensionName + ": " + d.markValue + " than other marks, which may be affecting " + d.aggTargetMeasureName + " for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a860343476 = messageFormatterFn((function(  ) {
  return function(d) { return "Average"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a921376590 = messageFormatterFn((function(  ) {
  return function(d) { return "The annual cycles may explain why " + d.aggTargetMeasureName + " of " + d.analyzedMark + " is higher"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a25430520 = messageFormatterFn((function(  ) {
  return function(d) { return "The annual cycles may explain why " + d.aggTargetMeasureName + " of " + d.analyzedMark + " is lower"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1155457890 = messageFormatterFn((function(  ) {
  return function(d) { return "The annual cycles may affect " + d.aggTargetMeasureName + " of " + d.analyzedMark; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1807515645 = messageFormatterFn((function(  ) {
  return function(d) { return "Annual Trend"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1105676727 = messageFormatterFn((function(  ) {
  return function(d) { return "The trending of annual average may explain why  " + d.aggTargetMeasureName + " of " + d.analyzedMark + " is higher"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1416849007 = messageFormatterFn((function(  ) {
  return function(d) { return "The trending of annual average may explain why " + d.aggTargetMeasureName + " of " + d.analyzedMark + " is lower"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1721172455 = messageFormatterFn((function(  ) {
  return function(d) { return "The trending of annual average may affect " + d.aggTargetMeasureName + " of " + d.analyzedMark; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2043760912 = messageFormatterFn((function(  ) {
  return function(d) { return "Relevant Trends"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1006059018 = messageFormatterFn((function(  ) {
  return function(d) { return "Which time trends have the largest influence on " + d.aggTargetMeasureName + " for " + d.analyzedMark + "? Time trends are listed in order of explanatory power."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b443217300 = messageFormatterFn((function(  ) {
  return function(d) { return "Monthly Variations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a186751284 = messageFormatterFn((function(  ) {
  return function(d) { return "Seasonal Variations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b408036466 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " by Month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1045747718 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " by Quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1013497477 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " by Year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1459810484 = messageFormatterFn((function(  ) {
  return function(d) { return ": "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a776887062 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1965244045 = messageFormatterFn((function(  ) {
  return function(d) { return "Share this explanation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1398430146 = messageFormatterFn((function(  ) {
  return function(d) { return "Share explanation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1199802974 = messageFormatterFn((function(  ) {
  return function(d) { return "You can’t share explanations when the original mark is not selected or available. Reselect the mark to share its related explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b706543857 = messageFormatterFn((function(  ) {
  return function(d) { return "The shared explanation is no longer available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a613574475 = messageFormatterFn((function(  ) {
  return function(d) { return "Similar"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1372020019 = messageFormatterFn((function(  ) {
  return function(d) { return "This chart shows all records of " + d.measureCaption + " for " + d.analyzedMark + ". The extreme value " + d.outlierValue + " is highlighted."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b112652941 = messageFormatterFn((function(  ) {
  return function(d) { return "When the extreme value is excluded, the " + d.aggTargetMeasureName + " changes from " + d.measureValue + " to " + d.measureValueWithoutOutlier + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1869859960 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Single Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b640657514 = messageFormatterFn((function(  ) {
  return function(d) { return "Relevant Single Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b297857097 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type indicates when every underlying record of a dimension has the same value. It can also reveal when a single value in an unvisualised dimension has a substantial contribution to the mark’s value."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b499099431 = messageFormatterFn((function(  ) {
  return function(d) { return "All records in the analysed mark have the same single value in the unvisualised dimension, which is unusual in contrast to the distribution of values for all other marks in the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1088023620 = messageFormatterFn((function(  ) {
  return function(d) { return "Every underlying record of the analysed mark has the value of " + d.markValue + " for " + d.dimensionName + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1538932575 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of " + d.dimensionName + " is increasing the expected " + d.aggTargetMeasureName + " in the analysed mark. All records in the analysed mark have " + d.dimensionName + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1894310969 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of " + d.dimensionName + " is decreasing the expected " + d.aggTargetMeasureName + " in the analysed mark. All records in the analysed mark have " + d.dimensionName + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1175143055 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of " + d.dimensionName + " may be contributing to the expected " + d.aggTargetMeasureName + ". All records in the analysed mark have " + d.dimensionName + ": " + d.primaryDisplayValue + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a101370106 = messageFormatterFn((function(  ) {
  return function(d) { return "Shared explanations might change if the data changes."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a805899844 = messageFormatterFn((function(  ) {
  return function(d) { return "standard deviation (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1643973017 = messageFormatterFn((function(  ) {
  return function(d) { return "standard deviation of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1964863097 = messageFormatterFn((function(  ) {
  return function(d) { return d.consideredFieldsNum + " of " + d.totalFieldsNum + " fields analysed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1378532684 = messageFormatterFn((function(  ) {
  return function(d) { return "When you run Explain Data on a mark, a statistical analysis is run on the aggregated mark, and then on possibly related fields from the data source that aren’t represented in the current view. Explain Data does not include every column from the data source in the analysis. The fields considered in the analysis are listed below."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b697729195 = messageFormatterFn((function(  ) {
  return function(d) { return "data source: " + d.datasourceCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1411425466 = messageFormatterFn((function(  ) {
  return function(d) { return "Excluded (" + d.fieldNum + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1520046892 = messageFormatterFn((function(  ) {
  return function(d) { return "Included (" + d.fieldNum + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a765071358 = messageFormatterFn((function(  ) {
  return function(d) { return "Analysed Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b736870798 = messageFormatterFn((function(  ) {
  return function(d) { return "sum of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a593778729 = messageFormatterFn((function(  ) {
  return function(d) { return "This value for " + d.dimensionName + " was the top contributor to " + d.aggTargetMeasureName + " for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a399656643 = messageFormatterFn((function(  ) {
  return function(d) { return "Top Contributors"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1425207293 = messageFormatterFn((function(  ) {
  return function(d) { return "Which dimensions have the most influence on " + d.aggTargetMeasureName + " for " + d.analyzedMark + "?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a770127546 = messageFormatterFn((function(  ) {
  return function(d) { return "These values for " + d.dimensionName + " were the top contributors to " + d.aggTargetMeasureName + " for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1121855202 = messageFormatterFn((function(  ) {
  return function(d) { return "Top contributing " + d.dimensionName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b523447567 = messageFormatterFn((function(  ) {
  return function(d) { return "% of Number of Records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1759570988 = messageFormatterFn((function(  ) {
  return function(d) { return "Unique Attributes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2135581611 = messageFormatterFn((function(  ) {
  return function(d) { return "Other than measure values, why is " + d.analyzedMark + " different from other marks?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1189823650 = messageFormatterFn((function(  ) {
  return function(d) { return "Other things to explore"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1544020293 = messageFormatterFn((function(  ) {
  return function(d) { return "What is unique about " + d.analyzedMark + "?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b420953957 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse measures that use forecasting."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1787343669 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse measures that use this aggregation. Try using an aggregation type of Sum, Average, Count or Count Distinct."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b338360853 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse this measure because too few marks have values for this measure."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a76083680 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse measures that are null values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1334022582 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse the aggregation of this measure. Try changing the aggregation to Sum or Count."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1037480680 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse measures that are special values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2145306693 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t analyse measures that use table calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a605879908 = messageFormatterFn((function(  ) {
  return function(d) { return "This mark can’t be analysed for explanations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1339745639 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.baseColumnCaption + " by " + d.dimension; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1571921556 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Dimensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1118786186 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Dimensions of Interest"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1477548611 = messageFormatterFn((function(  ) {
  return function(d) { return "Which dimensions have the largest influence on " + d.aggTargetMeasureName + " for " + d.analyzedMark + "? Dimensions are listed in order of explanatory power."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1284326043 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation type offers suggestions about what makes " + d.analyzedMark + " unique compared to other marks, even though the dimensions listed are uncorrelated with measure values shown in the viz.\n\nFor example, this explanation type could surface information like, “This sales representative is the only one who owns a cat”, or “The employees in New York had different distributions of pets than employees in other states”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a488638736 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of records for " + d.dimensionName + " is correlated with " + d.aggTargetMeasureName + ", which may explain why " + d.aggTargetMeasureName + " is higher for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b404170762 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of records for " + d.dimensionName + " is correlated with " + d.aggTargetMeasureName + ", which may explain why " + d.aggTargetMeasureName + " is lower for " + d.analyzedMark + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a625486304 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of " + d.dimensionName + " is correlated with " + d.aggTargetMeasureName + ", though the analysed mark " + d.analyzedMark + " is still in the expected range."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a446778094 = messageFormatterFn((function(  ) {
  return function(d) { return "The distribution of records for " + d.dimensionName + " is different for " + d.analyzedMark + " from other marks, but no correlations were found with the measure values shown in the viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1307172434 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribution of records by " + d.dimension; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a214419293 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has a higher average " + d.measureName + " than other marks. This value is associated with higher values of " + d.aggTargetMeasureName + " and may explain why it is higher."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1735371478 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has a lower average " + d.measureName + " than other marks. This value is associated with higher values of " + d.aggTargetMeasureName + " and may explain why it is higher."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b967205879 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has a lower average " + d.measureName + " than other marks. This value is associated with lower values of " + d.aggTargetMeasureName + " and may explain why it is lower."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b996338946 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has a higher average " + d.measureName + " than other marks. This value is associated with lower values of " + d.aggTargetMeasureName + " and may explain why it is lower."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a714618163 = messageFormatterFn((function(  ) {
  return function(d) { return d.analyzedMark + " has an average " + d.measureName + " that may be influencing the values of " + d.aggTargetMeasureName + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1576101947 = messageFormatterFn((function(  ) {
  return function(d) { return "Contributing Measures"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a110140277 = messageFormatterFn((function(  ) {
  return function(d) { return "Which measures have the largest influence on " + d.aggTargetMeasureName + " for " + d.analyzedMark + "? Measures are listed in order of explanatory power."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a31585741 = messageFormatterFn((function(  ) {
  return function(d) { return d.unvisualizedMeasureName + ": " + d.unvisualizedMeasureValue; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a16886950 = messageFormatterFn((function(  ) {
  return function(d) { return "Average of " + d.measureName + " and " + d.targetMeasureName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1497257390 = messageFormatterFn((function(  ) {
  return function(d) { return "Analysed at " + d.datetime; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b351871801 = messageFormatterFn((function(  ) {
  return function(d) { return "variance (from population) of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b776783754 = messageFormatterFn((function(  ) {
  return function(d) { return "variance of " + d.measureCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b572442330 = messageFormatterFn((function(  ) {
  return function(d) { return "View Full Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1636197013 = messageFormatterFn((function(  ) {
  return function(d) { return "You can’t view full data because the original mark is no longer selected or available"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1365628257 = messageFormatterFn((function(  ) {
  return function(d) { return "This explanation can’t be displayed in a new worksheet because the data has changed. To refresh explanations, run Explain Data again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1373007341 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b353895870 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data can’t generate this view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1061067993 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1560751778 = messageFormatterFn((function(  ) {
  return function(d) { return "You are currently running Tableau version " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387093764 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook functionality and features will not change when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387092803 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has slight underlying changes but looks the same when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387091842 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has slight underlying changes but looks the same when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387090881 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has some feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387089920 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has major feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b387088959 = messageFormatterFn((function(  ) {
  return function(d) { return "The new workbook has critical feature and functionality loss when exported to Tableau " + d.VERSION + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1497928089 = messageFormatterFn((function(  ) {
  return function(d) { return "Export As Version"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1068522128 = messageFormatterFn((function(  ) {
  return function(d) { return "Export As"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a715636525 = messageFormatterFn((function(  ) {
  return function(d) { return "Export"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b648927045 = messageFormatterFn((function(  ) {
  return function(d) { return "The following functionality is not available in Tableau version " + d.VERSION + ":"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1464082742 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1168538577 = messageFormatterFn((function(  ) {
  return function(d) { return "When you export your workbook as Tableau version " + d.VERSION + ", some functionality and visual features may be lost or degraded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b252765706 = messageFormatterFn((function(  ) {
  return function(d) { return "This action will save a new workbook and will not overwrite your existing workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1719136639 = messageFormatterFn((function(  ) {
  return function(d) { return "CSV"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a944973333 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a sheet from this dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1444109457 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while generating the document. More information: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1409335948 = messageFormatterFn((function(  ) {
  return function(d) { return "No sheets to select. Try a different view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1952357746 = messageFormatterFn((function(  ) {
  return function(d) { return "Excel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b355034910 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid export command was found."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1613024551 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while rendering the export crosstab dialog. The error is 'InvalidFileType'"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1413154614 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while generating the document. The error is 'InvalidSheetSelection'"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2096232688 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while rendering the export crosstab dialog. The error is 'InvalidSheetType'"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a224766086 = messageFormatterFn((function(  ) {
  return function(d) { return "Single Sheet Selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1689535229 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b945462812 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a sheet from this storypoint"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a910993735 = messageFormatterFn((function(  ) {
  return function(d) { return "Landscape"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1868853861 = messageFormatterFn((function(  ) {
  return function(d) { return "Portrait"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b90596269 = messageFormatterFn((function(  ) {
  return function(d) { return "Orientation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b20732947 = messageFormatterFn((function(  ) {
  return function(d) { return "A5"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b15209119 = messageFormatterFn((function(  ) {
  return function(d) { return "A4"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1134832295 = messageFormatterFn((function(  ) {
  return function(d) { return "A3"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a866770734 = messageFormatterFn((function(  ) {
  return function(d) { return "B5"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a872294562 = messageFormatterFn((function(  ) {
  return function(d) { return "B4"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b912651166 = messageFormatterFn((function(  ) {
  return function(d) { return "Executive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1298006243 = messageFormatterFn((function(  ) {
  return function(d) { return "Folio"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1360757243 = messageFormatterFn((function(  ) {
  return function(d) { return "Ledger"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2036910707 = messageFormatterFn((function(  ) {
  return function(d) { return "Legal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b890685054 = messageFormatterFn((function(  ) {
  return function(d) { return "Letter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a132589198 = messageFormatterFn((function(  ) {
  return function(d) { return "Note"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3232108 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarto"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1464263721 = messageFormatterFn((function(  ) {
  return function(d) { return "Statement"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b812674963 = messageFormatterFn((function(  ) {
  return function(d) { return "Tabloid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1382846415 = messageFormatterFn((function(  ) {
  return function(d) { return "Unspecified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a715688833 = messageFormatterFn((function(  ) {
  return function(d) { return "Page Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b825557989 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to create PDF because something went wrong. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b678217898 = messageFormatterFn((function(  ) {
  return function(d) { return "At most 1 page high"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b248872889 = messageFormatterFn((function(  ) {
  return function(d) { return "At most 1 page wide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b567470639 = messageFormatterFn((function(  ) {
  return function(d) { return "At most 2 pages high"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b138125630 = messageFormatterFn((function(  ) {
  return function(d) { return "At most 2 pages wide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a689716192 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1336211974 = messageFormatterFn((function(  ) {
  return function(d) { return d.PERCENT_NUMBER + "%"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1815168124 = messageFormatterFn((function(  ) {
  return function(d) { return "Scaling"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a973495586 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2101127202 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific sheets from this dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1492082304 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific sheets from this workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b297242520 = messageFormatterFn((function(  ) {
  return function(d) { return "Include"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1186963046 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheet Selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a128342955 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1605618933 = messageFormatterFn((function(  ) {
  return function(d) { return "This Story"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1050640479 = messageFormatterFn((function(  ) {
  return function(d) { return "This View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b486610930 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets Selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a748483961 = messageFormatterFn((function(  ) {
  return function(d) { return d.x + " of " + d.y; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1575113661 = messageFormatterFn((function(  ) {
  return function(d) { return "by " + d["0"]; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1959588003 = messageFormatterFn((function(  ) {
  return function(d) { return "Developer Website"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1639737281 = messageFormatterFn((function(  ) {
  return function(d) { return "About Extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a264683201 = messageFormatterFn((function(  ) {
  return function(d) { return "Version: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a289184516 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension URL: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1638145124 = messageFormatterFn((function(  ) {
  return function(d) { return "Instance ID: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1573825466 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701951944 = messageFormatterFn((function(  ) {
  return function(d) { return "Network Enabled"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1230839638 = messageFormatterFn((function(  ) {
  return function(d) { return "Sandboxed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b526850789 = messageFormatterFn((function(  ) {
  return function(d) { return "Support: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b92811075 = messageFormatterFn((function(  ) {
  return function(d) { return "View in Gallery"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b905740907 = messageFormatterFn((function(  ) {
  return function(d) { return "Try clicking here and holding " + d.shortcutHint + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b946304232 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b145375877 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631928073 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1966562224 = messageFormatterFn((function(  ) {
  return function(d) { return "Created by:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a910963080 = messageFormatterFn((function(  ) {
  return function(d) { return "Created By"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2010167940 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a245301757 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1529565528 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a365602971 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension Name:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a850045749 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension URL:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1561516667 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow Extensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1278978340 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook contains the following network-enabled extensions, which are web applications that expand the capabilities of Tableau. To allow these extensions to run, select OK. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1381009822 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Data Access:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a868670714 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Data Access"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1907276758 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more about how extensions access your data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a943614814 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow Extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1010171847 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1601196975 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook contains the following network-enabled extension, which is a web application that expands the capabilities of Tableau. To allow this extension to run, select OK."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1039272425 = messageFormatterFn((function(  ) {
  return function(d) { return " value. Add rows with "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b219536341 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b109257534 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation is not available if incremental refresh is active"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a866963837 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation is not available if physical tables are used"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b866844501 = messageFormatterFn((function(  ) {
  return function(d) { return "Day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b974973877 = messageFormatterFn((function(  ) {
  return function(d) { return "Hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748144773 = messageFormatterFn((function(  ) {
  return function(d) { return "Minute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b23207537 = messageFormatterFn((function(  ) {
  return function(d) { return "Month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b592334405 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a543093723 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b498109340 = messageFormatterFn((function(  ) {
  return function(d) { return "Year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1021491658 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2092247870 = messageFormatterFn((function(  ) {
  return function(d) { return "No data aggregated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b973929853 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b117117445 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a789079857 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregate data for visible dimensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2079163179 = messageFormatterFn((function(  ) {
  return function(d) { return "Roll up dates to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1098788930 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation Uber"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b145505017 = messageFormatterFn((function(  ) {
  return function(d) { return "Incremental Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b950180653 = messageFormatterFn((function(  ) {
  return function(d) { return "All Rows: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b500116846 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b794386845 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b186847435 = messageFormatterFn((function(  ) {
  return function(d) { return " about setting up data extracts."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1458196151 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1743618004 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1870760552 = messageFormatterFn((function(  ) {
  return function(d) { return "Save Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1294254276 = messageFormatterFn((function(  ) {
  return function(d) { return "Collapse All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b106499031 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Name Dropdown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1781685865 = messageFormatterFn((function(  ) {
  return function(d) { return "Store data using one table for each physical table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b495861912 = messageFormatterFn((function(  ) {
  return function(d) { return "Store data using one table for each logical table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b171192740 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a586386933 = messageFormatterFn((function(  ) {
  return function(d) { return "Need help with extract settings? "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a588095592 = messageFormatterFn((function(  ) {
  return function(d) { return "Physical Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a505288305 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Storage Option Dropdown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a316666973 = messageFormatterFn((function(  ) {
  return function(d) { return "In some situations, this option can improve performance and reduce the size of your extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a672730612 = messageFormatterFn((function(  ) {
  return function(d) { return "Use this option if you need to use extract filters, aggregation or other extract settings."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1243796937 = messageFormatterFn((function(  ) {
  return function(d) { return "Logical Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a714605572 = messageFormatterFn((function(  ) {
  return function(d) { return "Specify how to store data in the extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b752189779 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Storage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a425992756 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide All Unused Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1619018799 = messageFormatterFn((function(  ) {
  return function(d) { return "Specify how much data to extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1103200000 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2110009104 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b37326025 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1218114712 = messageFormatterFn((function(  ) {
  return function(d) { return "1 filter applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a515266576 = messageFormatterFn((function(  ) {
  return function(d) { return "No filters applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2102442088 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1278712470 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1796559643 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1962402229 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1524924069 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b301138014 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b475960387 = messageFormatterFn((function(  ) {
  return function(d) { return "Add…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1755127484 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b868720258 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1228573450 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter Uber"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a261119285 = messageFormatterFn((function(  ) {
  return function(d) { return d.count + " filters applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a20139796 = messageFormatterFn((function(  ) {
  return function(d) { return " values greater than or equal to the last recorded value. Use this option if "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1207403398 = messageFormatterFn((function(  ) {
  return function(d) { return " values greater than the last recorded value."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1536809634 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide All Unused Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1788517668 = messageFormatterFn((function(  ) {
  return function(d) { return "History..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a118033004 = messageFormatterFn((function(  ) {
  return function(d) { return "Incremental refresh is not available if data is aggregated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1330156177 = messageFormatterFn((function(  ) {
  return function(d) { return "Incremental refresh is not available if data is aggregated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a735044273 = messageFormatterFn((function(  ) {
  return function(d) { return "Incremental refresh is not available; it’s disabled"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a652587091 = messageFormatterFn((function(  ) {
  return function(d) { return "Incremental refresh is not available if data does not include all rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a269108442 = messageFormatterFn((function(  ) {
  return function(d) { return "Not enabled"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1716199629 = messageFormatterFn((function(  ) {
  return function(d) { return "Enabled on field "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2016950337 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced settings are not available; filters are used"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1324394543 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced settings are not available, minimum date range has been set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1132902119 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum date range to refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b79676135 = messageFormatterFn((function(  ) {
  return function(d) { return "The last " + d.count + " " + d.type + " of data from the refresh date will always be refreshed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701359232 = messageFormatterFn((function(  ) {
  return function(d) { return "Input must be a"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2079967449 = messageFormatterFn((function(  ) {
  return function(d) { return "positive number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b14271390 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum date range is not available, filters are used"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1871610459 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum date range is not available, 'replace the last rows' option is selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1896100667 = messageFormatterFn((function(  ) {
  return function(d) { return "Date or DateTime column types are required for minimum date range refresh."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631969161 = messageFormatterFn((function(  ) {
  return function(d) { return "second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1371759639 = messageFormatterFn((function(  ) {
  return function(d) { return "minute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b757202457 = messageFormatterFn((function(  ) {
  return function(d) { return "hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1414008945 = messageFormatterFn((function(  ) {
  return function(d) { return "day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b337483785 = messageFormatterFn((function(  ) {
  return function(d) { return "week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1862228109 = messageFormatterFn((function(  ) {
  return function(d) { return "month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1635421855 = messageFormatterFn((function(  ) {
  return function(d) { return "quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b280337920 = messageFormatterFn((function(  ) {
  return function(d) { return "year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1522161972 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a633824170 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1465016107 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b447698755 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1883868594 = messageFormatterFn((function(  ) {
  return function(d) { return "seconds"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b425048046 = messageFormatterFn((function(  ) {
  return function(d) { return "minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1998363582 = messageFormatterFn((function(  ) {
  return function(d) { return "hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b884528230 = messageFormatterFn((function(  ) {
  return function(d) { return "days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1871986638 = messageFormatterFn((function(  ) {
  return function(d) { return "weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1894420426 = messageFormatterFn((function(  ) {
  return function(d) { return "months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b841453942 = messageFormatterFn((function(  ) {
  return function(d) { return "quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b100464823 = messageFormatterFn((function(  ) {
  return function(d) { return "years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a57695229 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1826211105 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1829217044 = messageFormatterFn((function(  ) {
  return function(d) { return "iso-years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1273883716 = messageFormatterFn((function(  ) {
  return function(d) { return "Seconds"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1987517788 = messageFormatterFn((function(  ) {
  return function(d) { return "Minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1174635308 = messageFormatterFn((function(  ) {
  return function(d) { return "Hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1952330964 = messageFormatterFn((function(  ) {
  return function(d) { return "Days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a365908284 = messageFormatterFn((function(  ) {
  return function(d) { return "Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1006750024 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b530924572 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1918138939 = messageFormatterFn((function(  ) {
  return function(d) { return "Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a21624977 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO-Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b693020561 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO-Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2032545050 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO-Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1245826095 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a776738419 = messageFormatterFn((function(  ) {
  return function(d) { return "All rows will be added."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a119333653 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b981892746 = messageFormatterFn((function(  ) {
  return function(d) { return "Identify new rows using column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1525376159 = messageFormatterFn((function(  ) {
  return function(d) { return "Table to refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1900025315 = messageFormatterFn((function(  ) {
  return function(d) { return "number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1416901356 = messageFormatterFn((function(  ) {
  return function(d) { return "Don’t replace the last rows added"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a227315191 = messageFormatterFn((function(  ) {
  return function(d) { return "Add rows with "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a570844285 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete rows in the extract with the last recorded "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1422237517 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace the last rows added"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1274222268 = messageFormatterFn((function(  ) {
  return function(d) { return "When new rows are retrieved:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b341151346 = messageFormatterFn((function(  ) {
  return function(d) { return "All rows must be processed when incremental refresh is active"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1912839741 = messageFormatterFn((function(  ) {
  return function(d) { return "Sampling is not available; it’s disabled"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a450984260 = messageFormatterFn((function(  ) {
  return function(d) { return "Sample Option Dropdown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1133871902 = messageFormatterFn((function(  ) {
  return function(d) { return "percent"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1741533659 = messageFormatterFn((function(  ) {
  return function(d) { return "records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1676783926 = messageFormatterFn((function(  ) {
  return function(d) { return "rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b632221415 = messageFormatterFn((function(  ) {
  return function(d) { return "Sample: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a512209508 = messageFormatterFn((function(  ) {
  return function(d) { return "by"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1767712427 = messageFormatterFn((function(  ) {
  return function(d) { return "Input must be"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a229013609 = messageFormatterFn((function(  ) {
  return function(d) { return "All rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b634461743 = messageFormatterFn((function(  ) {
  return function(d) { return "Sample"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a130316180 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of Rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a281586148 = messageFormatterFn((function(  ) {
  return function(d) { return "Top"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1727442728 = messageFormatterFn((function(  ) {
  return function(d) { return "Why can I only sample one table?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1943073767 = messageFormatterFn((function(  ) {
  return function(d) { return "Sampling Uber"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a525363186 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Dropdown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1977076210 = messageFormatterFn((function(  ) {
  return function(d) { return "Top: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a84655030 = messageFormatterFn((function(  ) {
  return function(d) { return " values are not unique for all rows of your data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a463277997 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1367975194 = messageFormatterFn((function(  ) {
  return function(d) { return "Data extracts might take some time to create. You can either create the extract now or wait until you select another data source or sheet, which will cause the extract to be created automatically."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b943392893 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b997682798 = messageFormatterFn((function(  ) {
  return function(d) { return "Importing data from:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a449719851 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1284178394 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b517064292 = messageFormatterFn((function(  ) {
  return function(d) { return "and close."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a530301693 = messageFormatterFn((function(  ) {
  return function(d) { return "Elapsed Time (hh:mm:ss):"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1816894575 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2015057087 = messageFormatterFn((function(  ) {
  return function(d) { return "Save As..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1855317407 = messageFormatterFn((function(  ) {
  return function(d) { return "or"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1604118012 = messageFormatterFn((function(  ) {
  return function(d) { return "Creating Extract..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2100870864 = messageFormatterFn((function(  ) {
  return function(d) { return "Refreshing the extract may take a while. Are you sure you want to continue?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1488651961 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh Now"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a392710241 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2092890470 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1100270313 = messageFormatterFn((function(  ) {
  return function(d) { return "Close Editor"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a874692522 = messageFormatterFn((function(  ) {
  return function(d) { return "You can now close the editor. When the extract finishes. the workbook '" + d.WORKBOOK_NAME + "' will be saved to the '" + d.PROJECT_NAME + "' project and you'll receive an email notification."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1073514679 = messageFormatterFn((function(  ) {
  return function(d) { return "Notify When Extract is Complete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1756563970 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed password for data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1829220435 = messageFormatterFn((function(  ) {
  return function(d) { return "Notify Me When Complete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1280792376 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Save Location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a437135687 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a565350850 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Save Location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1263228592 = messageFormatterFn((function(  ) {
  return function(d) { return "When the extract finishes, the workbook will be published at this location and you'll receive an email notification."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b423933447 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1696193629 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1989757224 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a745842199 = messageFormatterFn((function(  ) {
  return function(d) { return "Borders"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1527986200 = messageFormatterFn((function(  ) {
  return function(d) { return "Cell"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1889595929 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Banding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a633385782 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Dividers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a56739990 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b307941667 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.count, 0, pluralFuncs["en-GB"], { one: function() { return d.itemCount + " Column";}, other: function() { return d.itemCount + " Columns";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1597702483 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b620352681 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a944818523 = messageFormatterFn((function(  ) {
  return function(d) { return "Corner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1124413513 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1544552464 = messageFormatterFn((function(  ) {
  return function(d) { return "Dotted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b651880864 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1449152171 = messageFormatterFn((function(  ) {
  return function(d) { return "Grand Totals"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a287902611 = messageFormatterFn((function(  ) {
  return function(d) { return "Header"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1355861482 = messageFormatterFn((function(  ) {
  return function(d) { return "Horizontal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b716237356 = messageFormatterFn((function(  ) {
  return function(d) { return "Level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1203777474 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1159448466 = messageFormatterFn((function(  ) {
  return function(d) { return "Pane"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1808375188 = messageFormatterFn((function(  ) {
  return function(d) { return "pane header linked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b233721043 = messageFormatterFn((function(  ) {
  return function(d) { return "pane header unlinked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1631211609 = messageFormatterFn((function(  ) {
  return function(d) { return "Row Banding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1890730236 = messageFormatterFn((function(  ) {
  return function(d) { return "Row Dividers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1037768932 = messageFormatterFn((function(  ) {
  return function(d) { return "Row Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1082101425 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.count, 0, pluralFuncs["en-GB"], { one: function() { return d.itemCount + " Row";}, other: function() { return d.itemCount + " Rows";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1088979297 = messageFormatterFn((function(  ) {
  return function(d) { return "Rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1429980358 = messageFormatterFn((function(  ) {
  return function(d) { return "Shading"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1065815353 = messageFormatterFn((function(  ) {
  return function(d) { return "Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1478488891 = messageFormatterFn((function(  ) {
  return function(d) { return "Solid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a553285173 = messageFormatterFn((function(  ) {
  return function(d) { return "Totals"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a26030972 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1028739522 = messageFormatterFn((function(  ) {
  return function(d) { return "Worksheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b798355825 = messageFormatterFn((function(  ) {
  return function(d) { return "Close formatting pane"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1259380976 = messageFormatterFn((function(  ) {
  return function(d) { return "Colour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b803330956 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear " + d.context + " formatting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1804006208 = messageFormatterFn((function(  ) {
  return function(d) { return "Distribute Contents Evenly"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1433181513 = messageFormatterFn((function(  ) {
  return function(d) { return "Uh-oh, something went wrong! Please close the formatting pane and try that again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1433182474 = messageFormatterFn((function(  ) {
  return function(d) { return "We’ve sent an error report to our engineers."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1328207966 = messageFormatterFn((function(  ) {
  return function(d) { return "Fill"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b849684894 = messageFormatterFn((function(  ) {
  return function(d) { return "Floating"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a690728312 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Family"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1838838405 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1949162395 = messageFormatterFn((function(  ) {
  return function(d) { return "Fonts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a402084886 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a235986418 = messageFormatterFn((function(  ) {
  return function(d) { return "HexColour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a498200826 = messageFormatterFn((function(  ) {
  return function(d) { return "Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a693196623 = messageFormatterFn((function(  ) {
  return function(d) { return "Interactive Controls"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2006302652 = messageFormatterFn((function(  ) {
  return function(d) { return "Legends, Filters, Highlighters and Parameters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1159911880 = messageFormatterFn((function(  ) {
  return function(d) { return "Less"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1122090764 = messageFormatterFn((function(  ) {
  return function(d) { return "More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a799282927 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1093580777 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a480491637 = messageFormatterFn((function(  ) {
  return function(d) { return "Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a904992749 = messageFormatterFn((function(  ) {
  return function(d) { return "Pane and header linked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b800851130 = messageFormatterFn((function(  ) {
  return function(d) { return "Pane and header unlinked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1351761613 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset to Defaults"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a84805825 = messageFormatterFn((function(  ) {
  return function(d) { return "Shading"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2058873528 = messageFormatterFn((function(  ) {
  return function(d) { return "Borders"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1329006514 = messageFormatterFn((function(  ) {
  return function(d) { return "Toggle between " + d.leftTab + " and " + d.rightTab; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a568089680 = messageFormatterFn((function(  ) {
  return function(d) { return "Lines"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1929440547 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b22560184 = messageFormatterFn((function(  ) {
  return function(d) { return "Billions (B)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b22555379 = messageFormatterFn((function(  ) {
  return function(d) { return "Billions (G)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a258214499 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1089572974 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a536762920 = messageFormatterFn((function(  ) {
  return function(d) { return "Centre Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b916176396 = messageFormatterFn((function(  ) {
  return function(d) { return "Colour Palette"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1806871616 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency (Custom)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b938111220 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency (Standard)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2026386319 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1237438182 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a302728980 = messageFormatterFn((function(  ) {
  return function(d) { return "Dark Palette"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1107363889 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1820634869 = messageFormatterFn((function(  ) {
  return function(d) { return "Decimal Places"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1527502840 = messageFormatterFn((function(  ) {
  return function(d) { return "Dotted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1861470681 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Family"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a245059100 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a275841616 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a536847301 = messageFormatterFn((function(  ) {
  return function(d) { return "Height"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1121960915 = messageFormatterFn((function(  ) {
  return function(d) { return "Hex Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1691560450 = messageFormatterFn((function(  ) {
  return function(d) { return "Horizontal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1082038222 = messageFormatterFn((function(  ) {
  return function(d) { return "Horizontal Alignment Control"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1088978421 = messageFormatterFn((function(  ) {
  return function(d) { return "Horizontal Position"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b184770514 = messageFormatterFn((function(  ) {
  return function(d) { return "Include thousands separators"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1420131037 = messageFormatterFn((function(  ) {
  return function(d) { return "is Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a461458311 = messageFormatterFn((function(  ) {
  return function(d) { return "is On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1812058482 = messageFormatterFn((function(  ) {
  return function(d) { return "Italic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b581973199 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2054993270 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b577140036 = messageFormatterFn((function(  ) {
  return function(d) { return "Level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b476379186 = messageFormatterFn((function(  ) {
  return function(d) { return "Light Palette"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1158305397 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b843189056 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Width"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b973955016 = messageFormatterFn((function(  ) {
  return function(d) { return "Locale"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1103946984 = messageFormatterFn((function(  ) {
  return function(d) { return "Middle Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1994042725 = messageFormatterFn((function(  ) {
  return function(d) { return "Millions (M)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1149405867 = messageFormatterFn((function(  ) {
  return function(d) { return "Negative Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a30934180 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a601824854 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1167957064 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (Custom)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1121550076 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (Standard)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a708062273 = messageFormatterFn((function(  ) {
  return function(d) { return "Number Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1232411069 = messageFormatterFn((function(  ) {
  return function(d) { return "Opacity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b610937787 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b777938328 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom inner padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a704465584 = messageFormatterFn((function(  ) {
  return function(d) { return "Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1959083543 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b857500860 = messageFormatterFn((function(  ) {
  return function(d) { return "Left inner padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1642502780 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a53606537 = messageFormatterFn((function(  ) {
  return function(d) { return "Right inner padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2114612957 = messageFormatterFn((function(  ) {
  return function(d) { return "Inner padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2055381781 = messageFormatterFn((function(  ) {
  return function(d) { return "Top Inner Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1853065602 = messageFormatterFn((function(  ) {
  return function(d) { return "Top inner padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1057203661 = messageFormatterFn((function(  ) {
  return function(d) { return "Padding is linked. Click to unlink."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b232997376 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1222734451 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom outer padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1131994283 = messageFormatterFn((function(  ) {
  return function(d) { return "Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2018958948 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1256000425 = messageFormatterFn((function(  ) {
  return function(d) { return "Left outer padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1417730153 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1147636932 = messageFormatterFn((function(  ) {
  return function(d) { return "Right padding outer stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a879878594 = messageFormatterFn((function(  ) {
  return function(d) { return "Outer padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b125942512 = messageFormatterFn((function(  ) {
  return function(d) { return "Top Outer Padding"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b18419587 = messageFormatterFn((function(  ) {
  return function(d) { return "Top outer padding stepper widget"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1810198164 = messageFormatterFn((function(  ) {
  return function(d) { return "Padding is unlinked. Click to link."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1498690824 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1107791882 = messageFormatterFn((function(  ) {
  return function(d) { return "Position"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a131667568 = messageFormatterFn((function(  ) {
  return function(d) { return "Prefix"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a743669479 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b138594105 = messageFormatterFn((function(  ) {
  return function(d) { return "Scientific"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b107647604 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Colour Picker"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b323246514 = messageFormatterFn((function(  ) {
  return function(d) { return "Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1617586211 = messageFormatterFn((function(  ) {
  return function(d) { return "Solid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b538695825 = messageFormatterFn((function(  ) {
  return function(d) { return "Suffix"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1889942084 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Alignment"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a872005546 = messageFormatterFn((function(  ) {
  return function(d) { return "Auto"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a952440285 = messageFormatterFn((function(  ) {
  return function(d) { return "Down"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1845539119 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Orientation is " + d.textOrientationSelection; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a573137122 = messageFormatterFn((function(  ) {
  return function(d) { return "Normal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1346745750 = messageFormatterFn((function(  ) {
  return function(d) { return "Up"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b549510707 = messageFormatterFn((function(  ) {
  return function(d) { return "Thousands (K)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1612110414 = messageFormatterFn((function(  ) {
  return function(d) { return "Top Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a779476356 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b933431321 = messageFormatterFn((function(  ) {
  return function(d) { return "Display Units"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b769149548 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2075960452 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Alignment Control"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1337482141 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Position"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a693802110 = messageFormatterFn((function(  ) {
  return function(d) { return "Width"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b688131167 = messageFormatterFn((function(  ) {
  return function(d) { return "Auto"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a725941272 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Wrap is " + d.wordWrapSelection; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1533751789 = messageFormatterFn((function(  ) {
  return function(d) { return "Wrap Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1197455761 = messageFormatterFn((function(  ) {
  return function(d) { return "Wrap On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a840383867 = messageFormatterFn((function(  ) {
  return function(d) { return "Geocoding Dialog"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1988067030 = messageFormatterFn((function(  ) {
  return function(d) { return "Type here to filter list"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a295877364 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a418205864 = messageFormatterFn((function(  ) {
  return function(d) { return "Please click on an item in the list to jump directly to it"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b616724912 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1225741355 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b205796063 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a51399250 = messageFormatterFn((function(  ) {
  return function(d) { return "Load"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1657914646 = messageFormatterFn((function(  ) {
  return function(d) { return "Floating"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1683498734 = messageFormatterFn((function(  ) {
  return function(d) { return "Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1808374667 = messageFormatterFn((function(  ) {
  return function(d) { return "Show dashboard title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a91025986 = messageFormatterFn((function(  ) {
  return function(d) { return "Tiled"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b959492436 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt Text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1853617098 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1364315720 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1799921457 = messageFormatterFn((function(  ) {
  return function(d) { return "Centre Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1926559988 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an image file..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1167629598 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1934818573 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Image Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1569158545 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert Image File"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1707792635 = messageFormatterFn((function(  ) {
  return function(d) { return "Fit Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2022518948 = messageFormatterFn((function(  ) {
  return function(d) { return "File or Link Toggle"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1186092822 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter URL for web image..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1223190392 = messageFormatterFn((function(  ) {
  return function(d) { return "Link to Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1575172470 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1779433860 = messageFormatterFn((function(  ) {
  return function(d) { return "Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1306958061 = messageFormatterFn((function(  ) {
  return function(d) { return "URL Opened When Image Is Clicked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1200514745 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a177147302 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook already uses a map named “" + d.mapName + "”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1307245909 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate Map Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b878387475 = messageFormatterFn((function(  ) {
  return function(d) { return "This name is already in use."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1115880682 = messageFormatterFn((function(  ) {
  return function(d) { return "Discard new map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2093845840 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace existing map with new map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a941311759 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename new map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b976890231 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1050665712 = messageFormatterFn((function(  ) {
  return function(d) { return "New map name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1001745509 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.mapName + "” is a reserved name for Tableau maps"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a813291658 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1244691111 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a706681677 = messageFormatterFn((function(  ) {
  return function(d) { return "Deselect All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b504452455 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Schema Levels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a241147105 = messageFormatterFn((function(  ) {
  return function(d) { return "Example Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1675647717 = messageFormatterFn((function(  ) {
  return function(d) { return "Schema"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a664697787 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a8572831 = messageFormatterFn((function(  ) {
  return function(d) { return "Don’t see the data you need?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1516675259 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Desktop offers a rich experience to scan entire JSON files. You can continue your flow in Tableau Desktop for further analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1725782739 = messageFormatterFn((function(  ) {
  return function(d) { return "Schema is inferred from scanning a sample of the document."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2039633370 = messageFormatterFn((function(  ) {
  return function(d) { return "schema levels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631097637 = messageFormatterFn((function(  ) {
  return function(d) { return "selected. This high number may slow load time."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b615811302 = messageFormatterFn((function(  ) {
  return function(d) { return "Select the schema levels you want to make available as dimensions and measures in the worksheet."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1742107709 = messageFormatterFn((function(  ) {
  return function(d) { return "schema level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1251965458 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b831130622 = messageFormatterFn((function(  ) {
  return function(d) { return "selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1213935398 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b317335966 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b926352409 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1424568564 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b662196714 = messageFormatterFn((function(  ) {
  return function(d) { return "⌘"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a441448360 = messageFormatterFn((function(  ) {
  return function(d) { return "Ctrl+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b308232455 = messageFormatterFn((function(  ) {
  return function(d) { return "⌃"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2001992495 = messageFormatterFn((function(  ) {
  return function(d) { return "⌥"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1158559006 = messageFormatterFn((function(  ) {
  return function(d) { return "⇧"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1883360653 = messageFormatterFn((function(  ) {
  return function(d) { return "Shift+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a619545422 = messageFormatterFn((function(  ) {
  return function(d) { return "Win+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b483860506 = messageFormatterFn((function(  ) {
  return function(d) { return "&"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1727947460 = messageFormatterFn((function(  ) {
  return function(d) { return "Down arrow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1508650143 = messageFormatterFn((function(  ) {
  return function(d) { return "Left arrow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1621700312 = messageFormatterFn((function(  ) {
  return function(d) { return "Right arrow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1502967627 = messageFormatterFn((function(  ) {
  return function(d) { return "Up arrow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1921190263 = messageFormatterFn((function(  ) {
  return function(d) { return "*"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1660827243 = messageFormatterFn((function(  ) {
  return function(d) { return "@"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a358634279 = messageFormatterFn((function(  ) {
  return function(d) { return "Backslash"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a472671344 = messageFormatterFn((function(  ) {
  return function(d) { return "Backspace"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1422950537 = messageFormatterFn((function(  ) {
  return function(d) { return "`"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b221395151 = messageFormatterFn((function(  ) {
  return function(d) { return "Caps lock"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a513261940 = messageFormatterFn((function(  ) {
  return function(d) { return "^"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a308997342 = messageFormatterFn((function(  ) {
  return function(d) { return ">"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b642684832 = messageFormatterFn((function(  ) {
  return function(d) { return "Close brace"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a952567875 = messageFormatterFn((function(  ) {
  return function(d) { return ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2145114376 = messageFormatterFn((function(  ) {
  return function(d) { return "]"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a908821072 = messageFormatterFn((function(  ) {
  return function(d) { return ":"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a909672518 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b786067817 = messageFormatterFn((function(  ) {
  return function(d) { return "Minus sign"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b442603536 = messageFormatterFn((function(  ) {
  return function(d) { return "Del"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b863459746 = messageFormatterFn((function(  ) {
  return function(d) { return "$"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a962305180 = messageFormatterFn((function(  ) {
  return function(d) { return "\""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1787734144 = messageFormatterFn((function(  ) {
  return function(d) { return "8"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b716799412 = messageFormatterFn((function(  ) {
  return function(d) { return "End"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1632673911 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b680907516 = messageFormatterFn((function(  ) {
  return function(d) { return "="; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a578880838 = messageFormatterFn((function(  ) {
  return function(d) { return "Esc"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1872651147 = messageFormatterFn((function(  ) {
  return function(d) { return "!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777961936 = messageFormatterFn((function(  ) {
  return function(d) { return "F1"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717743114 = messageFormatterFn((function(  ) {
  return function(d) { return "F10"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717742153 = messageFormatterFn((function(  ) {
  return function(d) { return "F11"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717741192 = messageFormatterFn((function(  ) {
  return function(d) { return "F12"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777962897 = messageFormatterFn((function(  ) {
  return function(d) { return "F2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777963858 = messageFormatterFn((function(  ) {
  return function(d) { return "F3"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777964819 = messageFormatterFn((function(  ) {
  return function(d) { return "F4"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777965780 = messageFormatterFn((function(  ) {
  return function(d) { return "F5"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777966741 = messageFormatterFn((function(  ) {
  return function(d) { return "F6"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777967702 = messageFormatterFn((function(  ) {
  return function(d) { return "F7"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777968663 = messageFormatterFn((function(  ) {
  return function(d) { return "F8"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1777969624 = messageFormatterFn((function(  ) {
  return function(d) { return "F9"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b721334857 = messageFormatterFn((function(  ) {
  return function(d) { return "5"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2033019587 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b715811029 = messageFormatterFn((function(  ) {
  return function(d) { return "4"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b658803548 = messageFormatterFn((function(  ) {
  return function(d) { return "Home"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b720529026 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810520396 = messageFormatterFn((function(  ) {
  return function(d) { return "A"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810521357 = messageFormatterFn((function(  ) {
  return function(d) { return "B"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810522318 = messageFormatterFn((function(  ) {
  return function(d) { return "C"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810523279 = messageFormatterFn((function(  ) {
  return function(d) { return "D"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810524240 = messageFormatterFn((function(  ) {
  return function(d) { return "E"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810525201 = messageFormatterFn((function(  ) {
  return function(d) { return "F"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810526162 = messageFormatterFn((function(  ) {
  return function(d) { return "G"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810527123 = messageFormatterFn((function(  ) {
  return function(d) { return "H"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810528084 = messageFormatterFn((function(  ) {
  return function(d) { return "I"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810529045 = messageFormatterFn((function(  ) {
  return function(d) { return "J"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810530006 = messageFormatterFn((function(  ) {
  return function(d) { return "K"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810530967 = messageFormatterFn((function(  ) {
  return function(d) { return "L"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810531928 = messageFormatterFn((function(  ) {
  return function(d) { return "M"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810532889 = messageFormatterFn((function(  ) {
  return function(d) { return "N"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810533850 = messageFormatterFn((function(  ) {
  return function(d) { return "O"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810534811 = messageFormatterFn((function(  ) {
  return function(d) { return "P"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810535772 = messageFormatterFn((function(  ) {
  return function(d) { return "Q"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810536733 = messageFormatterFn((function(  ) {
  return function(d) { return "R"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810537694 = messageFormatterFn((function(  ) {
  return function(d) { return "S"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810538655 = messageFormatterFn((function(  ) {
  return function(d) { return "T"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810539616 = messageFormatterFn((function(  ) {
  return function(d) { return "U"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810540577 = messageFormatterFn((function(  ) {
  return function(d) { return "V"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810541538 = messageFormatterFn((function(  ) {
  return function(d) { return "W"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810542499 = messageFormatterFn((function(  ) {
  return function(d) { return "X"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810543460 = messageFormatterFn((function(  ) {
  return function(d) { return "Y"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810544421 = messageFormatterFn((function(  ) {
  return function(d) { return "Z"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1450871231 = messageFormatterFn((function(  ) {
  return function(d) { return "↓"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1231573914 = messageFormatterFn((function(  ) {
  return function(d) { return "←"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1621128819 = messageFormatterFn((function(  ) {
  return function(d) { return "→"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2052399366 = messageFormatterFn((function(  ) {
  return function(d) { return "↑"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2018270261 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1336239730 = messageFormatterFn((function(  ) {
  return function(d) { return "-"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b265649394 = messageFormatterFn((function(  ) {
  return function(d) { return "↵"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a6967905 = messageFormatterFn((function(  ) {
  return function(d) { return "⎋"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1400309855 = messageFormatterFn((function(  ) {
  return function(d) { return "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1690018426 = messageFormatterFn((function(  ) {
  return function(d) { return "+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b685860420 = messageFormatterFn((function(  ) {
  return function(d) { return "␣"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b524847836 = messageFormatterFn((function(  ) {
  return function(d) { return "Menu"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b492539977 = messageFormatterFn((function(  ) {
  return function(d) { return "9"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b707563241 = messageFormatterFn((function(  ) {
  return function(d) { return "1"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1083452548 = messageFormatterFn((function(  ) {
  return function(d) { return "<"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1067177850 = messageFormatterFn((function(  ) {
  return function(d) { return "Open brace"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a977550301 = messageFormatterFn((function(  ) {
  return function(d) { return "("; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a388160530 = messageFormatterFn((function(  ) {
  return function(d) { return "["; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1050078698 = messageFormatterFn((function(  ) {
  return function(d) { return "Page down"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b402822129 = messageFormatterFn((function(  ) {
  return function(d) { return "Page up"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b363767469 = messageFormatterFn((function(  ) {
  return function(d) { return "%"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b828396922 = messageFormatterFn((function(  ) {
  return function(d) { return "Full stop"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b432289121 = messageFormatterFn((function(  ) {
  return function(d) { return "Plus sign"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b430260675 = messageFormatterFn((function(  ) {
  return function(d) { return "#"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b605143912 = messageFormatterFn((function(  ) {
  return function(d) { return "?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2079592482 = messageFormatterFn((function(  ) {
  return function(d) { return ";"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1946623870 = messageFormatterFn((function(  ) {
  return function(d) { return "7"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1207078843 = messageFormatterFn((function(  ) {
  return function(d) { return "'"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b703999853 = messageFormatterFn((function(  ) {
  return function(d) { return "6"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2128045294 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2052884937 = messageFormatterFn((function(  ) {
  return function(d) { return "Spacebar"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b703335802 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1378655025 = messageFormatterFn((function(  ) {
  return function(d) { return "3"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1355596791 = messageFormatterFn((function(  ) {
  return function(d) { return "~"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b702667907 = messageFormatterFn((function(  ) {
  return function(d) { return "2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1086752831 = messageFormatterFn((function(  ) {
  return function(d) { return "_"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b804039762 = messageFormatterFn((function(  ) {
  return function(d) { return "|"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b152555475 = messageFormatterFn((function(  ) {
  return function(d) { return "0"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1691504223 = messageFormatterFn((function(  ) {
  return function(d) { return "Analytics Extensions Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b143953789 = messageFormatterFn((function(  ) {
  return function(d) { return "Binding Connection Failed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2135417651 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2033394005 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose a connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a921684473 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose an Analytics Extensions Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1171081752 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1589234039 = messageFormatterFn((function(  ) {
  return function(d) { return "No Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a159648402 = messageFormatterFn((function(  ) {
  return function(d) { return "If no connection is selected, some vizzes in the published workbook may break. Please contact your server admin for any connection related issue."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b820671793 = messageFormatterFn((function(  ) {
  return function(d) { return "Select..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1773476904 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1164460461 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1248611257 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1585408963 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b86774519 = messageFormatterFn((function(  ) {
  return function(d) { return "remove selected viz extensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1116760007 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Viz Extensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b401052672 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Extensions that you want to remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1428072823 = messageFormatterFn((function(  ) {
  return function(d) { return "No viz extensions in workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1368330602 = messageFormatterFn((function(  ) {
  return function(d) { return "Created By"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a134045895 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1963828573 = messageFormatterFn((function(  ) {
  return function(d) { return "Version"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a967895385 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Data Access"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011198832 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1736558482 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1052529083 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension Support"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b332418980 = messageFormatterFn((function(  ) {
  return function(d) { return "Developer website"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b542250021 = messageFormatterFn((function(  ) {
  return function(d) { return "Extension URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1124025645 = messageFormatterFn((function(  ) {
  return function(d) { return "The following extensions you have selected are being used in this workbook. Removing them will change vizzes in this worksheets to the Automatic mark type."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1542093382 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a594969430 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz Extensions in Use"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1736563287 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b635066883 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz Extension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1801509812 = messageFormatterFn((function(  ) {
  return function(d) { return "Worksheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a187586679 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a73439697 = messageFormatterFn((function(  ) {
  return function(d) { return "Stories"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1911849893 = messageFormatterFn((function(  ) {
  return function(d) { return "none"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a665016737 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a341087393 = messageFormatterFn((function(  ) {
  return function(d) { return "Demographics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1163899674 = messageFormatterFn((function(  ) {
  return function(d) { return "Layer Control"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1119905401 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when changing the map style. Please try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1070885553 = messageFormatterFn((function(  ) {
  return function(d) { return "Marks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b634463998 = messageFormatterFn((function(  ) {
  return function(d) { return "Disable interaction"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b633799031 = messageFormatterFn((function(  ) {
  return function(d) { return "Enable interaction"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a717946073 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide " + d.layerName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1952155808 = messageFormatterFn((function(  ) {
  return function(d) { return "Unhide " + d.layerName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2026039347 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a71403253 = messageFormatterFn((function(  ) {
  return function(d) { return "Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b406288562 = messageFormatterFn((function(  ) {
  return function(d) { return "Background"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1480056937 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a750814787 = messageFormatterFn((function(  ) {
  return function(d) { return "Detail"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011692675 = messageFormatterFn((function(  ) {
  return function(d) { return "Layer"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1628595417 = messageFormatterFn((function(  ) {
  return function(d) { return "Palette"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1608846094 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Layer"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1084952968 = messageFormatterFn((function(  ) {
  return function(d) { return "Zoom in to see this layer."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a918781681 = messageFormatterFn((function(  ) {
  return function(d) { return "Category " + d.category; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a675794651 = messageFormatterFn((function(  ) {
  return function(d) { return "Background Map Layers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b761228516 = messageFormatterFn((function(  ) {
  return function(d) { return "Make Default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b932870978 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred loading the Map Layers pane. Reopen the pane and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b539959316 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when changing the map style. Please try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b111063299 = messageFormatterFn((function(  ) {
  return function(d) { return "No layers are available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1384245996 = messageFormatterFn((function(  ) {
  return function(d) { return "Background Layers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2079692751 = messageFormatterFn((function(  ) {
  return function(d) { return "Repeat Background"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b756632712 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset to defaults"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1442668671 = messageFormatterFn((function(  ) {
  return function(d) { return "Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b600917685 = messageFormatterFn((function(  ) {
  return function(d) { return "Washout (%)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1931269675 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Mapbox Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a567432293 = messageFormatterFn((function(  ) {
  return function(d) { return "Add WMS Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b414122407 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1059879027 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a527254824 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Mapbox Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b461426190 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit WMS Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1930574549 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2099080590 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b695618678 = messageFormatterFn((function(  ) {
  return function(d) { return "Map Service Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a106152892 = messageFormatterFn((function(  ) {
  return function(d) { return "Mapbox"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b950879675 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when adding a new Mapbox connection. Verify that the Mapbox URL is correct and try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b533742118 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when editing the Mapbox connection. Verify that the Mapbox URL is correct and try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a228672653 = messageFormatterFn((function(  ) {
  return function(d) { return "A problem was encountered while connecting to the Mapbox server. Please verify your API token and Mapbox map IDs."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1586996175 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b48192127 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL entered is not in a valid format."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a909546651 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b243888602 = messageFormatterFn((function(  ) {
  return function(d) { return "This style name is already in use."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1072665861 = messageFormatterFn((function(  ) {
  return function(d) { return "Style Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1161744572 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter Style Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1917598098 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1491170833 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a90357446 = messageFormatterFn((function(  ) {
  return function(d) { return "WMS"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1969276623 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when adding a new WMS connection. Verify that the WMS URL is correct and try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a245510305 = messageFormatterFn((function(  ) {
  return function(d) { return "Use tiled maps (recommended)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b203210096 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred when editing the WMS connection. Verify that the WMS URL is correct and try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a897041120 = messageFormatterFn((function(  ) {
  return function(d) { return "Add..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2025960628 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure you want to delete this map?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1378397547 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1500124986 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b795753911 = messageFormatterFn((function(  ) {
  return function(d) { return "Confirm Deletion"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a933724630 = messageFormatterFn((function(  ) {
  return function(d) { return "URL / Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a907707171 = messageFormatterFn((function(  ) {
  return function(d) { return "Download"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b697934427 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b212705841 = messageFormatterFn((function(  ) {
  return function(d) { return "Export"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a992492736 = messageFormatterFn((function(  ) {
  return function(d) { return "Import..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1963029694 = messageFormatterFn((function(  ) {
  return function(d) { return "There was a problem importing the map. Try again, or try connecting to a different file."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a491001353 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Maps"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b164623443 = messageFormatterFn((function(  ) {
  return function(d) { return "Map: " + d.mapSourceName + " is being used by these worksheets:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2108402113 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a178808535 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1677673123 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a686350307 = messageFormatterFn((function(  ) {
  return function(d) { return "The username or password is not valid.  Check the database name and credentials and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a922505669 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a923909340 = messageFormatterFn((function(  ) {
  return function(d) { return "Browse..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1310885793 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t connect to " + d.dataSourceCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2105779994 = messageFormatterFn((function(  ) {
  return function(d) { return "Current Version"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a638931882 = messageFormatterFn((function(  ) {
  return function(d) { return "Detailed Error Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1138768011 = messageFormatterFn((function(  ) {
  return function(d) { return "Download Driver"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b51554158 = messageFormatterFn((function(  ) {
  return function(d) { return "To use this connector, you need to download and install the driver first."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b204965341 = messageFormatterFn((function(  ) {
  return function(d) { return "General"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b803673461 = messageFormatterFn((function(  ) {
  return function(d) { return "Information and Support"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b528373979 = messageFormatterFn((function(  ) {
  return function(d) { return "Initial SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1080106548 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b711684940 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1029338454 = messageFormatterFn((function(  ) {
  return function(d) { return "No file chosen"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b990394085 = messageFormatterFn((function(  ) {
  return function(d) { return "Optional"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a849324285 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign In"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b511716534 = messageFormatterFn((function(  ) {
  return function(d) { return "Support"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1860086031 = messageFormatterFn((function(  ) {
  return function(d) { return "For support, contact"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1356290908 = messageFormatterFn((function(  ) {
  return function(d) { return "Update and Restart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1404842311 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an update available for this connector."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b69287472 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1636808523 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a31752717 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1792289401 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b392866917 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a459646357 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b319826575 = messageFormatterFn((function(  ) {
  return function(d) { return "Location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a324823524 = messageFormatterFn((function(  ) {
  return function(d) { return "Please publish a data role before applying."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a745223995 = messageFormatterFn((function(  ) {
  return function(d) { return "No existing data roles"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1781950524 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherit synonyms from a published data role. In the list below, you can choose from all data roles you have permission to access."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1026548055 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b123894083 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a325909215 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1666584969 = messageFormatterFn((function(  ) {
  return function(d) { return "Collapse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b449090134 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a411371546 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherit synonyms from a published data role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1960478362 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role could not be applied."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a182172477 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms could not be inherited because the data role does not exist"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a217805618 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms could not be inherited because the user who associated the data role to this field can no longer view it"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1063138326 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1374173366 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1358354224 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b142755689 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Data Role..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1306030513 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply a Different Data Role..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1754802963 = messageFormatterFn((function(  ) {
  return function(d) { return "applied this data role. Their permissions are used to inherit synonyms."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b760867438 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited from geographic role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1711800794 = messageFormatterFn((function(  ) {
  return function(d) { return "No data role applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1316491153 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1245501325 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to list all data roles."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1501763926 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1219432187 = messageFormatterFn((function(  ) {
  return function(d) { return "Make this field's synonyms inheritable by other data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1182712618 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data Role..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a214108905 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b428560622 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to remove current data role."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a12940968 = messageFormatterFn((function(  ) {
  return function(d) { return "View Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b600067948 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1548471793 = messageFormatterFn((function(  ) {
  return function(d) { return "Date-time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a145190526 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a136959678 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (Whole)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b731711858 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a122359864 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b201190725 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a570856494 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b743556997 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b83335136 = messageFormatterFn((function(  ) {
  return function(d) { return "Could not save changes."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a854919482 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Field Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a420055004 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1445103220 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1928974551 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1515328217 = messageFormatterFn((function(  ) {
  return function(d) { return "Bin Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1072244410 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1220834782 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1202250637 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a426010991 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined Set Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1391646255 = messageFormatterFn((function(  ) {
  return function(d) { return "Group Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b759694575 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchical Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1676759412 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1995859424 = messageFormatterFn((function(  ) {
  return function(d) { return "There was an error retrieving indexing settings for field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a394425292 = messageFormatterFn((function(  ) {
  return function(d) { return "For immediate effect, click here to Reindex the Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a901192798 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Indexing"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1248944996 = messageFormatterFn((function(  ) {
  return function(d) { return "Index field values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b195882033 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a416053063 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b559538292 = messageFormatterFn((function(  ) {
  return function(d) { return "Fix and republish data source to use this in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a37840811 = messageFormatterFn((function(  ) {
  return function(d) { return "Field names must be unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a285582473 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field, so some analytical features are disabled. Republish the data source to retry indexing."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a96364220 = messageFormatterFn((function(  ) {
  return function(d) { return "Values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b542771549 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to index field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1569421203 = messageFormatterFn((function(  ) {
  return function(d) { return "This field has no values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a285044974 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field, so some analytical features are disabled."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1626899337 = messageFormatterFn((function(  ) {
  return function(d) { return "String values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1910115656 = messageFormatterFn((function(  ) {
  return function(d) { return "Field indexing disabled due to user filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b466661584 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data couldn't index this field, so some analytical features are disabled."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1663178101 = messageFormatterFn((function(  ) {
  return function(d) { return "Values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1944160758 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to index field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1737223617 = messageFormatterFn((function(  ) {
  return function(d) { return "Values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1186425400 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to index field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1543563949 = messageFormatterFn((function(  ) {
  return function(d) { return "Fix and republish data source to make this available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1380085068 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula is invalid."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1129233637 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data doesn’t support indexing this field and won’t be able to recognise unquoted values at this time."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1794415380 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing isn't supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b726945621 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields of type Latitude or Longitude aren’t available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a53364545 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is unsupported by Ask Data because it contains a constant formula that references parameters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a846764210 = messageFormatterFn((function(  ) {
  return function(d) { return "Unsupported aggregation type. Fix and republish data source to make this available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a579725333 = messageFormatterFn((function(  ) {
  return function(d) { return "This field’s name contains an invalid character and won’t be available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2023110830 = messageFormatterFn((function(  ) {
  return function(d) { return "The field name can’t be a number, value or date and won’t be available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a514499238 = messageFormatterFn((function(  ) {
  return function(d) { return "This field’s name is longer than the 50 character limit. This field won’t be available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b999949102 = messageFormatterFn((function(  ) {
  return function(d) { return "The field name is a reserved term and won’t be available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a488089896 = messageFormatterFn((function(  ) {
  return function(d) { return "Field names must be at least 1 character long. This field won’t be available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b558856425 = messageFormatterFn((function(  ) {
  return function(d) { return "Cluster fields aren't available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b544284834 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined fields aren't available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1242343814 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined set fields aren't available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2089002002 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchy fields aren't available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b276096897 = messageFormatterFn((function(  ) {
  return function(d) { return "Set fields aren't available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a25021799 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown field type. Fix and republish data source to make this available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1602414572 = messageFormatterFn((function(  ) {
  return function(d) { return "Table calculations aren’t available in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1056132877 = messageFormatterFn((function(  ) {
  return function(d) { return "Numbers, booleans, dates or null are not allowed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1093922986 = messageFormatterFn((function(  ) {
  return function(d) { return "Field names have a maximum length of " + d.maxLength + " characters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a167052957 = messageFormatterFn((function(  ) {
  return function(d) { return "Encountered an error while trying to edit this name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2128358792 = messageFormatterFn((function(  ) {
  return function(d) { return "Field names must be at least " + d.minLength + " character(s) long"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1445346301 = messageFormatterFn((function(  ) {
  return function(d) { return "This name is already in use"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b851669369 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert to original name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1419215978 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Field Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1849992250 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b319827956 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2031582610 = messageFormatterFn((function(  ) {
  return function(d) { return "Domain Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b311064238 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Info"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b811928016 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a356420196 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a983298271 = messageFormatterFn((function(  ) {
  return function(d) { return "Value Distribution"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a352591229 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.rowCount + " " + plural(d.rowCounter, 0, pluralFuncs["en-GB"], { one: function() { return "row";}, other: function() { return "rows";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1954542851 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.valueCount + " " + plural(d.valueCounter, 0, pluralFuncs["en-GB"], { one: function() { return "unique value";}, other: function() { return "unique values";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1952477155 = messageFormatterFn((function(  ) {
  return function(d) { return "End"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a167194038 = messageFormatterFn((function(  ) {
  return function(d) { return "Start"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b511816297 = messageFormatterFn((function(  ) {
  return function(d) { return "Null"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2056284960 = messageFormatterFn((function(  ) {
  return function(d) { return "Average"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1351400579 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a90243354 = messageFormatterFn((function(  ) {
  return function(d) { return "Min, Max"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b694484529 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1089070057 = messageFormatterFn((function(  ) {
  return function(d) { return "The first " + d.maxFetch + " values are recognised in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b392298466 = messageFormatterFn((function(  ) {
  return function(d) { return d.role + " (" + d.dataType + ") "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1352003865 = messageFormatterFn((function(  ) {
  return function(d) { return "Find Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a217526360 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1145253478 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2114004473 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b798535548 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a571343045 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows in the \"" + d.objectName + "\" table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b588881101 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows in the table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a358635825 = messageFormatterFn((function(  ) {
  return function(d) { return "A generated field that counts the number of rows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1483363598 = messageFormatterFn((function(  ) {
  return function(d) { return "Republish it to finish indexing all fields, or try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a810062993 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to complete indexing after losing connection to the data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1694979949 = messageFormatterFn((function(  ) {
  return function(d) { return "String values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b509533236 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing failed due to a system error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a676604864 = messageFormatterFn((function(  ) {
  return function(d) { return "String values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a950857951 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing has been disabled by the data source owner."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b932939837 = messageFormatterFn((function(  ) {
  return function(d) { return "String values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1565942178 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing failed due to a system error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b604298575 = messageFormatterFn((function(  ) {
  return function(d) { return "Republish with fewer fields so Ask Data can quickly retrieve string values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b824774640 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source has too many fields to index."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b546021443 = messageFormatterFn((function(  ) {
  return function(d) { return "Fix and republish data source to use this in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2102657052 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate field name."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b158164653 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to index " + d.count + " field(s)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b232393000 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove them from the data source to enable Ask Data to answer more questions and recognise field values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2049352183 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing disabled due to user filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1223674950 = messageFormatterFn((function(  ) {
  return function(d) { return "Create an extract and republish to improve performance. String values won't be searchable in Ask Data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a215920473 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source is too slow to index."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b855598491 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data can then answer more questions and recognise unquoted field values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a176080068 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed data source credentials to enable indexing so Ask Data can quickly retrieve string values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a727462470 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a lens to index values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1022419173 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data will index values for a data source only if there is an associated lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1893135791 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing allows Ask Data to quickly retrieve field values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1439266214 = messageFormatterFn((function(  ) {
  return function(d) { return "Last completed:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1524017010 = messageFormatterFn((function(  ) {
  return function(d) { return "Data distributions last updated:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a171060995 = messageFormatterFn((function(  ) {
  return function(d) { return "Updating data distributions " + d.count + "..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a649863559 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing Data Source..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1756066220 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing " + d.fieldCountLoc; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a597283856 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing values..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1772189453 = messageFormatterFn((function(  ) {
  return function(d) { return "Waiting to retry."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a135125827 = messageFormatterFn((function(  ) {
  return function(d) { return "Refresh Data Source Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1701246495 = messageFormatterFn((function(  ) {
  return function(d) { return "Index now"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a257791580 = messageFormatterFn((function(  ) {
  return function(d) { return "Update now"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1108082648 = messageFormatterFn((function(  ) {
  return function(d) { return "Index now"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a639549601 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry indexing"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1985354836 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Indexed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2039969642 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + " eligible " + plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "field";}, other: function() { return "fields";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b657499412 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.fieldCountLoc + " unsupported " + plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "field";}, other: function() { return "fields";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b526472335 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexed:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1904527888 = messageFormatterFn((function(  ) {
  return function(d) { return "Skipped:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b987370209 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1425992356 = messageFormatterFn((function(  ) {
  return function(d) { return "Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1443630006 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Content"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1119073262 = messageFormatterFn((function(  ) {
  return function(d) { return "Indexing Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1028869833 = messageFormatterFn((function(  ) {
  return function(d) { return "Field descriptions have a maximum length of " + d.maxLength + " characters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1741376450 = messageFormatterFn((function(  ) {
  return function(d) { return "Encountered an error while trying to edit this description (error: " + d.errorCode + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1179432728 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert to data source content"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a901302505 = messageFormatterFn((function(  ) {
  return function(d) { return "From data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1527635877 = messageFormatterFn((function(  ) {
  return function(d) { return "Field name is too long. Rename field in data source or lens for a better Ask Data experience."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a575400902 = messageFormatterFn((function(  ) {
  return function(d) { return "Select the data source fields to be used in the lens."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1555543108 = messageFormatterFn((function(  ) {
  return function(d) { return "Renamed to [" + d.lens_display_name + "] in lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1624015059 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b820068964 = messageFormatterFn((function(  ) {
  return function(d) { return "Select None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b17792794 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b831370890 = messageFormatterFn((function(  ) {
  return function(d) { return "Encountered an error while trying to update Lens fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a534623217 = messageFormatterFn((function(  ) {
  return function(d) { return "Lens fields successfully updated."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b362354060 = messageFormatterFn((function(  ) {
  return function(d) { return "Encountered an error while checking the Lens edit permission."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a338599257 = messageFormatterFn((function(  ) {
  return function(d) { return "[ " + d.field + " ] in data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1503130119 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b449384420 = messageFormatterFn((function(  ) {
  return function(d) { return "No dimensions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2035364344 = messageFormatterFn((function(  ) {
  return function(d) { return "No fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b350921909 = messageFormatterFn((function(  ) {
  return function(d) { return "No measures"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b414011781 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + " Field " + plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "Synonym";}, other: function() { return "Synonyms";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1156981628 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.formattedItemCount + " Value " + plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "Synonym";}, other: function() { return "Synonyms";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1319641296 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Role Contents"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1291474877 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish data role to make this field's synonyms inheritable by other data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a118148196 = messageFormatterFn((function(  ) {
  return function(d) { return "The data role will be created with default permissions for the project."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1174387464 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b546204298 = messageFormatterFn((function(  ) {
  return function(d) { return "Only values with synonyms will be copied from this field to the data role."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1388256252 = messageFormatterFn((function(  ) {
  return function(d) { return "A data role with this name already exists. Publishing will overwrite the existing data role."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2032719976 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role published but could not be applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a19467328 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role could not be published"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a388679653 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role could not be published - Permission was denied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2146364475 = messageFormatterFn((function(  ) {
  return function(d) { return "Data role published and applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b666994850 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a80461455 = messageFormatterFn((function(  ) {
  return function(d) { return "Contains an invalid character."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1872319756 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must not be numbers, booleans, dates or null."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a49206671 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must be less than " + d.max + " characters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b764845847 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms can't contain reserved terms."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b990898012 = messageFormatterFn((function(  ) {
  return function(d) { return "The maximum number of synonyms is 25"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1128635267 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms must be at least 1 character."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a666762860 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonyms for  \"" + d.value + "\""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1096549787 = messageFormatterFn((function(  ) {
  return function(d) { return "Table names work best as a plural noun that describes what the table rows collectively represent. For example, \"Orders\" or \"Customers\"."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a161456787 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1757543852 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonym could not be published."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b47045429 = messageFormatterFn((function(  ) {
  return function(d) { return "Synonym could not be published."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2017614538 = messageFormatterFn((function(  ) {
  return function(d) { return "This field already has a filter. Edit or remove the existing one."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a577182587 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't use this field since there are no more aggregation types available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b901058508 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1112135918 = messageFormatterFn((function(  ) {
  return function(d) { return d.baseTitle + " - Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1404440288 = messageFormatterFn((function(  ) {
  return function(d) { return "/"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1627057950 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1056730004 = messageFormatterFn((function(  ) {
  return function(d) { return "Contains"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1049296275 = messageFormatterFn((function(  ) {
  return function(d) { return "Ends with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a18733843 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not contain"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a11300114 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not end with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1552985749 = messageFormatterFn((function(  ) {
  return function(d) { return "Does not start with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1363221079 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific Values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b471087700 = messageFormatterFn((function(  ) {
  return function(d) { return "Starts with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a886512796 = messageFormatterFn((function(  ) {
  return function(d) { return "Categorical filter tabs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1074583409 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a872615953 = messageFormatterFn((function(  ) {
  return function(d) { return "Basic Data Analysis"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1414223069 = messageFormatterFn((function(  ) {
  return function(d) { return "Simple Calculations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a143016905 = messageFormatterFn((function(  ) {
  return function(d) { return "Date and Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1884620446 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a430985349 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b895244997 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1148516603 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1252925926 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1504122323 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a871564703 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1366251917 = messageFormatterFn((function(  ) {
  return function(d) { return "This group is empty and hidden from others until you " + d.addAQuestion + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1491508752 = messageFormatterFn((function(  ) {
  return function(d) { return "This section is empty and hidden from others."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a237210106 = messageFormatterFn((function(  ) {
  return function(d) { return "pin icon in the toolbar."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1787944300 = messageFormatterFn((function(  ) {
  return function(d) { return "To add or replace links in this list, go to a visualisation and click the"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b602792349 = messageFormatterFn((function(  ) {
  return function(d) { return "Recommended Visualisations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1376040981 = messageFormatterFn((function(  ) {
  return function(d) { return "Section Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a290720858 = messageFormatterFn((function(  ) {
  return function(d) { return "We couldn't save your changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b452912030 = messageFormatterFn((function(  ) {
  return function(d) { return "Try Again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1784760009 = messageFormatterFn((function(  ) {
  return function(d) { return "AM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b596525358 = messageFormatterFn((function(  ) {
  return function(d) { return "Day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1185015036 = messageFormatterFn((function(  ) {
  return function(d) { return "Hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1734235660 = messageFormatterFn((function(  ) {
  return function(d) { return "Minute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2055451126 = messageFormatterFn((function(  ) {
  return function(d) { return "Month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b161151902 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a557002836 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b765296364 = messageFormatterFn((function(  ) {
  return function(d) { return "Week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b708150499 = messageFormatterFn((function(  ) {
  return function(d) { return "Year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a566872713 = messageFormatterFn((function(  ) {
  return function(d) { return "day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a520586797 = messageFormatterFn((function(  ) {
  return function(d) { return "hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a966586077 = messageFormatterFn((function(  ) {
  return function(d) { return "minute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b905466899 = messageFormatterFn((function(  ) {
  return function(d) { return "month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1956834373 = messageFormatterFn((function(  ) {
  return function(d) { return "Month and Day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1421363470 = messageFormatterFn((function(  ) {
  return function(d) { return "Month, Day and Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1754271252 = messageFormatterFn((function(  ) {
  return function(d) { return "April"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1613167733 = messageFormatterFn((function(  ) {
  return function(d) { return "August"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1388882451 = messageFormatterFn((function(  ) {
  return function(d) { return "December"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b348602838 = messageFormatterFn((function(  ) {
  return function(d) { return "February"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b446291400 = messageFormatterFn((function(  ) {
  return function(d) { return "January"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1149987744 = messageFormatterFn((function(  ) {
  return function(d) { return "July"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1150028106 = messageFormatterFn((function(  ) {
  return function(d) { return "June"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b910206319 = messageFormatterFn((function(  ) {
  return function(d) { return "March"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1286206963 = messageFormatterFn((function(  ) {
  return function(d) { return "May"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1200067654 = messageFormatterFn((function(  ) {
  return function(d) { return "November"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b844166354 = messageFormatterFn((function(  ) {
  return function(d) { return "October"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1138126817 = messageFormatterFn((function(  ) {
  return function(d) { return "September"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1959943321 = messageFormatterFn((function(  ) {
  return function(d) { return "quarter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1037142723 = messageFormatterFn((function(  ) {
  return function(d) { return "second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a940305469 = messageFormatterFn((function(  ) {
  return function(d) { return "week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a914686209 = messageFormatterFn((function(  ) {
  return function(d) { return "Week " + d.weekNumber; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a997451334 = messageFormatterFn((function(  ) {
  return function(d) { return "year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1980682978 = messageFormatterFn((function(  ) {
  return function(d) { return "Q4"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1313316224 = messageFormatterFn((function(  ) {
  return function(d) { return "Q1"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a608280568 = messageFormatterFn((function(  ) {
  return function(d) { return "Q3"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1308420890 = messageFormatterFn((function(  ) {
  return function(d) { return "Q2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1797546093 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Detail"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a658275329 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid year"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b21206613 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2128558004 = messageFormatterFn((function(  ) {
  return function(d) { return "End Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b931494806 = messageFormatterFn((function(  ) {
  return function(d) { return "Following " + d.timeUnit; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2145645786 = messageFormatterFn((function(  ) {
  return function(d) { return "Includes this " + d.timeUnit; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b170419947 = messageFormatterFn((function(  ) {
  return function(d) { return "Includes today"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a346625107 = messageFormatterFn((function(  ) {
  return function(d) { return d.dateValue + " (No data)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1784313144 = messageFormatterFn((function(  ) {
  return function(d) { return "PM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a49365790 = messageFormatterFn((function(  ) {
  return function(d) { return "Day Numbers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b72045607 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b281079419 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b579389574 = messageFormatterFn((function(  ) {
  return function(d) { return "Week Numbers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1316311295 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekdays"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1836305364 = messageFormatterFn((function(  ) {
  return function(d) { return "days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b963489558 = messageFormatterFn((function(  ) {
  return function(d) { return "hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a698351194 = messageFormatterFn((function(  ) {
  return function(d) { return "minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a332806352 = messageFormatterFn((function(  ) {
  return function(d) { return "months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2060370756 = messageFormatterFn((function(  ) {
  return function(d) { return "quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b543770886 = messageFormatterFn((function(  ) {
  return function(d) { return "weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b486625021 = messageFormatterFn((function(  ) {
  return function(d) { return "years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1593193188 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous " + d.timeUnit; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1319874082 = messageFormatterFn((function(  ) {
  return function(d) { return "MM/DD/YYYY"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2039428585 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of Dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3233443 = messageFormatterFn((function(  ) {
  return function(d) { return "Last"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a64334784 = messageFormatterFn((function(  ) {
  return function(d) { return "Next"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1902794219 = messageFormatterFn((function(  ) {
  return function(d) { return "Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a254327367 = messageFormatterFn((function(  ) {
  return function(d) { return "Range Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1777675600 = messageFormatterFn((function(  ) {
  return function(d) { return "Between"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2136672747 = messageFormatterFn((function(  ) {
  return function(d) { return "Ending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1875842606 = messageFormatterFn((function(  ) {
  return function(d) { return "Starting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1010719624 = messageFormatterFn((function(  ) {
  return function(d) { return "Relative Dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1540048177 = messageFormatterFn((function(  ) {
  return function(d) { return d.firstPeriod + " to " + d.lastPeriod; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b721550719 = messageFormatterFn((function(  ) {
  return function(d) { return "Day 8"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1711295038 = messageFormatterFn((function(  ) {
  return function(d) { return "May"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a102962768 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b851582083 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May, 10:32pm"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b411569526 = messageFormatterFn((function(  ) {
  return function(d) { return "Friday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1598224177 = messageFormatterFn((function(  ) {
  return function(d) { return "Week 24"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1625553 = messageFormatterFn((function(  ) {
  return function(d) { return "2020"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1239978223 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May 2020"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a342782629 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May 2020 at 10 AM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1895472469 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May 2020 at 10:32 AM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2122428811 = messageFormatterFn((function(  ) {
  return function(d) { return "May 2020"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a690650401 = messageFormatterFn((function(  ) {
  return function(d) { return "Q1 2020"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b108256331 = messageFormatterFn((function(  ) {
  return function(d) { return "8th May 2020 at 10:32:12 AM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a762501301 = messageFormatterFn((function(  ) {
  return function(d) { return "Week 5, 2020"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1234926878 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific Dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1427235333 = messageFormatterFn((function(  ) {
  return function(d) { return "Start Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b898064343 = messageFormatterFn((function(  ) {
  return function(d) { return "Date filter tabs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1700771619 = messageFormatterFn((function(  ) {
  return function(d) { return "This " + d.timeUnit; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1667990068 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b400798224 = messageFormatterFn((function(  ) {
  return function(d) { return "Tomorrow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236416461 = messageFormatterFn((function(  ) {
  return function(d) { return "Yesterday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2106189777 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a234202403 = messageFormatterFn((function(  ) {
  return function(d) { return "Deselect All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1048501645 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1856111268 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a85418982 = messageFormatterFn((function(  ) {
  return function(d) { return "Time Period"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1001651465 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1150955498 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data embed code has been copied to your clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1372566308 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Ask Data for this lens in your HTML page. No sheets or vizzes will get embedded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1062034418 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy and paste this into any HTML page."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1762243540 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code for Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a386911009 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b940737893 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1499319974 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1212329613 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a458491064 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter Operator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a769343524 = messageFormatterFn((function(  ) {
  return function(d) { return "Group"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b603599000 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1816549913 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1740219722 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1412772002 = messageFormatterFn((function(  ) {
  return function(d) { return "Viz Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2062733436 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1293256385 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1954385755 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b152461303 = messageFormatterFn((function(  ) {
  return function(d) { return "Numeric Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b302273983 = messageFormatterFn((function(  ) {
  return function(d) { return "String Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1205182782 = messageFormatterFn((function(  ) {
  return function(d) { return "No results"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1770981659 = messageFormatterFn((function(  ) {
  return function(d) { return "No fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1213262363 = messageFormatterFn((function(  ) {
  return function(d) { return "No filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1086767670 = messageFormatterFn((function(  ) {
  return function(d) { return "Your search can't be applied to the visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1729335277 = messageFormatterFn((function(  ) {
  return function(d) { return "Your search isn't understood"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1074883063 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b133827191 = messageFormatterFn((function(  ) {
  return function(d) { return "Your search can't be applied to the visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1018457142 = messageFormatterFn((function(  ) {
  return function(d) { return "Your search isn't understood"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a913277614 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data encountered an error and couldn’t process your search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3974813 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t process your request because it contains a hidden field. Click \"Clear All\" to start over."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1828359228 = messageFormatterFn((function(  ) {
  return function(d) { return "Not used in interpretation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1681235344 = messageFormatterFn((function(  ) {
  return function(d) { return "Unspecified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1200229855 = messageFormatterFn((function(  ) {
  return function(d) { return "contains:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b497749831 = messageFormatterFn((function(  ) {
  return function(d) { return "in"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1467628184 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1079901353 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1626049681 = messageFormatterFn((function(  ) {
  return function(d) { return "Build Version Info"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1443912828 = messageFormatterFn((function(  ) {
  return function(d) { return "Comments"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1610012955 = messageFormatterFn((function(  ) {
  return function(d) { return "Company (optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b579582445 = messageFormatterFn((function(  ) {
  return function(d) { return "Send feedback directly to Tableau's Ask Data team. We'll see the last question you asked using the feature, comments you add here and your basic system setup."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2124179889 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b810569101 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit Feedback"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a184673797 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1981610641 = messageFormatterFn((function(  ) {
  return function(d) { return "How can we help you?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b965603257 = messageFormatterFn((function(  ) {
  return function(d) { return "What do you like about this experience?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b535578614 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain what's happening and walk us through the problem."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1758866289 = messageFormatterFn((function(  ) {
  return function(d) { return "Attempted to connect to " + d.URL; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1064082564 = messageFormatterFn((function(  ) {
  return function(d) { return "Feedback connection issue. Please contact your Tableau Server administrator or IT department to diagnose."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a443281290 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to submit feedback."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a312765101 = messageFormatterFn((function(  ) {
  return function(d) { return "Thanks for your feedback!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a929984545 = messageFormatterFn((function(  ) {
  return function(d) { return "Submitting, Please Wait"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a6639671 = messageFormatterFn((function(  ) {
  return function(d) { return " was created to track your input."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1397043931 = messageFormatterFn((function(  ) {
  return function(d) { return "If Ask Data isn’t producing the results you expect, email your question to the author of this lens. They will see your email address and the message you provide below."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1709085683 = messageFormatterFn((function(  ) {
  return function(d) { return "If Ask Data isn’t producing the results you expect, email your question to the author of this lens. They will see your message but not your name or contact info."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b860988545 = messageFormatterFn((function(  ) {
  return function(d) { return "Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1991957009 = messageFormatterFn((function(  ) {
  return function(d) { return "Send me a copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1183246197 = messageFormatterFn((function(  ) {
  return function(d) { return "Send Email"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1435556652 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to send your message due to an unexpected error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b688233412 = messageFormatterFn((function(  ) {
  return function(d) { return "This request cannot be completed due to missing email information. Please ensure that both your and the lens author's email information is available before trying again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1071823925 = messageFormatterFn((function(  ) {
  return function(d) { return "Your message has been sent!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1922259907 = messageFormatterFn((function(  ) {
  return function(d) { return "Sending message, please wait..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1650925313 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact the Lens Author"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1571232266 = messageFormatterFn((function(  ) {
  return function(d) { return "Feature Request"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b552457663 = messageFormatterFn((function(  ) {
  return function(d) { return "Praise"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a930476995 = messageFormatterFn((function(  ) {
  return function(d) { return "Problem"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b213922526 = messageFormatterFn((function(  ) {
  return function(d) { return "Help Improve Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1928284952 = messageFormatterFn((function(  ) {
  return function(d) { return "All Types"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a369140613 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1929213120 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2002176620 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1808039439 = messageFormatterFn((function(  ) {
  return function(d) { return "Currency"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b97021161 = messageFormatterFn((function(  ) {
  return function(d) { return "Date Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b927204910 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1068651322 = messageFormatterFn((function(  ) {
  return function(d) { return "Geographic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1666838436 = messageFormatterFn((function(  ) {
  return function(d) { return "Number Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a168758999 = messageFormatterFn((function(  ) {
  return function(d) { return "Number"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a88231595 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentage Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1290800026 = messageFormatterFn((function(  ) {
  return function(d) { return "Percentage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a252318547 = messageFormatterFn((function(  ) {
  return function(d) { return "Booleans"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1738073057 = messageFormatterFn((function(  ) {
  return function(d) { return "Dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a534780722 = messageFormatterFn((function(  ) {
  return function(d) { return "Datetimes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a584442296 = messageFormatterFn((function(  ) {
  return function(d) { return "Locations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1686449692 = messageFormatterFn((function(  ) {
  return function(d) { return "Numbers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1836262372 = messageFormatterFn((function(  ) {
  return function(d) { return "Strings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2011300291 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a249925780 = messageFormatterFn((function(  ) {
  return function(d) { return "String Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1740992769 = messageFormatterFn((function(  ) {
  return function(d) { return "Table Row"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1332758387 = messageFormatterFn((function(  ) {
  return function(d) { return "Text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b947859433 = messageFormatterFn((function(  ) {
  return function(d) { return "selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1811165773 = messageFormatterFn((function(  ) {
  return function(d) { return "At Least"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a789560437 = messageFormatterFn((function(  ) {
  return function(d) { return "At Most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1290364895 = messageFormatterFn((function(  ) {
  return function(d) { return "Between"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1346798974 = messageFormatterFn((function(  ) {
  return function(d) { return "Accept"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b924816784 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a463514516 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2054386829 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b886362955 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact the Lens Author"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a14351156 = messageFormatterFn((function(  ) {
  return function(d) { return "Answer your data questions as quickly as you can think of them."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b418712338 = messageFormatterFn((function(  ) {
  return function(d) { return "Customise this lens to give your users the best Ask Data experience."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1659113029 = messageFormatterFn((function(  ) {
  return function(d) { return "For Lens Authors"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1374184330 = messageFormatterFn((function(  ) {
  return function(d) { return "Hover over individual fields and click on the pencil icon."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a539098898 = messageFormatterFn((function(  ) {
  return function(d) { return "Add synonyms for field names and values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a356971573 = messageFormatterFn((function(  ) {
  return function(d) { return "To link to a visualisation, while viewing it, click on the pin icon in the toolbar."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1801334255 = messageFormatterFn((function(  ) {
  return function(d) { return "Customise the Recommended Visualisations list"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b398194300 = messageFormatterFn((function(  ) {
  return function(d) { return "Click on the pencil icon at the top of the Fields panel."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b617558368 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide unnecessary fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2034298486 = messageFormatterFn((function(  ) {
  return function(d) { return "Optimise for Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a240080507 = messageFormatterFn((function(  ) {
  return function(d) { return "Do More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a33649253 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Contact Form"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1271080114 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide Contact Form"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1729931051 = messageFormatterFn((function(  ) {
  return function(d) { return "Due to a system error, we couldn't change the setting. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b290708866 = messageFormatterFn((function(  ) {
  return function(d) { return "Give Product Feedback"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1146878424 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data tips"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1904733393 = messageFormatterFn((function(  ) {
  return function(d) { return "Online Help"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b260363590 = messageFormatterFn((function(  ) {
  return function(d) { return "Setup Guide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b873737203 = messageFormatterFn((function(  ) {
  return function(d) { return "Take a Tour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1741229395 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b456001013 = messageFormatterFn((function(  ) {
  return function(d) { return "To see tips again, click here."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1061016992 = messageFormatterFn((function(  ) {
  return function(d) { return "Usage Analytics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b11298517 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a985647961 = messageFormatterFn((function(  ) {
  return function(d) { return "Create New Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2086168875 = messageFormatterFn((function(  ) {
  return function(d) { return "New Ask Data Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a818316348 = messageFormatterFn((function(  ) {
  return function(d) { return "An Ask Data Lens stores settings such as field choice, synonyms and recommended visualisations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b111488274 = messageFormatterFn((function(  ) {
  return function(d) { return "Lens Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1004871134 = messageFormatterFn((function(  ) {
  return function(d) { return "Location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1821338536 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b270251836 = messageFormatterFn((function(  ) {
  return function(d) { return "The lens name is already in use. Please try a different name."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1109326226 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred while attempting to publish the lens “" + d.LENS_NAME + "”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1144212699 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to Lens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1185734014 = messageFormatterFn((function(  ) {
  return function(d) { return "Created lens “" + d.LENS_NAME + "”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1808764796 = messageFormatterFn((function(  ) {
  return function(d) { return "A lens with this name already exists. Please try a different name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b450358998 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected Ask Data Lenses (" + d.numberOfLenses + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1833100059 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to get the connected lenses of the data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a886737309 = messageFormatterFn((function(  ) {
  return function(d) { return "An error has occurred."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1942899788 = messageFormatterFn((function(  ) {
  return function(d) { return "With a lens, you customise Ask Data for specific users by selecting the subset of data fields that are relevant to them and adding synonyms they commonly use for field names and values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a272334257 = messageFormatterFn((function(  ) {
  return function(d) { return "Create a Lens to Use Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a873129891 = messageFormatterFn((function(  ) {
  return function(d) { return "Bottom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b755494073 = messageFormatterFn((function(  ) {
  return function(d) { return "Top"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b235923445 = messageFormatterFn((function(  ) {
  return function(d) { return "by"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1909040921 = messageFormatterFn((function(  ) {
  return function(d) { return "Limit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a754487544 = messageFormatterFn((function(  ) {
  return function(d) { return "To share the current sheet, send this link to people who can access this data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a552151256 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1732142537 = messageFormatterFn((function(  ) {
  return function(d) { return "Link has been copied to clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1143206913 = messageFormatterFn((function(  ) {
  return function(d) { return "en_GB"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a100948693 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2006928683 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2074722570 = messageFormatterFn((function(  ) {
  return function(d) { return "New Sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a541574827 = messageFormatterFn((function(  ) {
  return function(d) { return "Search fields or values to create a visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1844579767 = messageFormatterFn((function(  ) {
  return function(d) { return "Search fields or values to create a visualisation (English only)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1231257194 = messageFormatterFn((function(  ) {
  return function(d) { return "Search to add fields or filters to the visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1687522235 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data took too long to respond. If the issue persists, contact your administrator or Tableau support."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1410822256 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data doesn't understand. Keep typing or choose a suggestion below."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1854604547 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data encountered an error. If the issue persists, contact your administrator or Tableau support."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1302926702 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1584995894 = messageFormatterFn((function(  ) {
  return function(d) { return "No data matches the filters for your question. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1362554396 = messageFormatterFn((function(  ) {
  return function(d) { return "No records"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b422379361 = messageFormatterFn((function(  ) {
  return function(d) { return "To enable it, contact your Tableau administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1570984431 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is disabled for this site"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1438580292 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1931842675 = messageFormatterFn((function(  ) {
  return function(d) { return "Page unavailable"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2012183055 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2040235401 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1800223779 = messageFormatterFn((function(  ) {
  return function(d) { return "Advanced"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1413375507 = messageFormatterFn((function(  ) {
  return function(d) { return "Count"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1297234160 = messageFormatterFn((function(  ) {
  return function(d) { return "The number of rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2136397506 = messageFormatterFn((function(  ) {
  return function(d) { return "Distinct Count"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a145920923 = messageFormatterFn((function(  ) {
  return function(d) { return "The number of unique values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1513889755 = messageFormatterFn((function(  ) {
  return function(d) { return "Earliest"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1247336446 = messageFormatterFn((function(  ) {
  return function(d) { return "The first date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b206651623 = messageFormatterFn((function(  ) {
  return function(d) { return "Latest"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1763129590 = messageFormatterFn((function(  ) {
  return function(d) { return "The last date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b259597148 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a986734081 = messageFormatterFn((function(  ) {
  return function(d) { return "The largest value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a512881426 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1865891695 = messageFormatterFn((function(  ) {
  return function(d) { return "The smallest value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a169791052 = messageFormatterFn((function(  ) {
  return function(d) { return "Change Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1176452476 = messageFormatterFn((function(  ) {
  return function(d) { return "Change Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b192225294 = messageFormatterFn((function(  ) {
  return function(d) { return "What field do you want to filter?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1502289329 = messageFormatterFn((function(  ) {
  return function(d) { return "How do you want to group these dates?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a582055470 = messageFormatterFn((function(  ) {
  return function(d) { return "How do you want to use this field?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a218843120 = messageFormatterFn((function(  ) {
  return function(d) { return "New Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1597900712 = messageFormatterFn((function(  ) {
  return function(d) { return "New Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2065853306 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b639006331 = messageFormatterFn((function(  ) {
  return function(d) { return "Search Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1034930496 = messageFormatterFn((function(  ) {
  return function(d) { return "Select aggregation method"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b450094463 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to show values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a532998825 = messageFormatterFn((function(  ) {
  return function(d) { return "The field hasn't been indexed, so its values aren't searchable in Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2036163266 = messageFormatterFn((function(  ) {
  return function(d) { return "What field do you want to visualise?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1041889338 = messageFormatterFn((function(  ) {
  return function(d) { return "Suggestions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1985675371 = messageFormatterFn((function(  ) {
  return function(d) { return "Suggestions are unavailable at this time."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1152060576 = messageFormatterFn((function(  ) {
  return function(d) { return "Quantitative filter tabs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a621785214 = messageFormatterFn((function(  ) {
  return function(d) { return "Some linked visualisations are invalid. Go to a new visualisation, click on the pin icon in the toolbar, and then select Replace Recommendation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1769506908 = messageFormatterFn((function(  ) {
  return function(d) { return "Pin to Recommended Visualisations..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1893459551 = messageFormatterFn((function(  ) {
  return function(d) { return "Invalid visualisation.  To replace, click on the pin icon and select Replace Recommendation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a156211253 = messageFormatterFn((function(  ) {
  return function(d) { return "Name must be unique"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1603155175 = messageFormatterFn((function(  ) {
  return function(d) { return "Name is required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b236082703 = messageFormatterFn((function(  ) {
  return function(d) { return "Linked Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a341154833 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b789339704 = messageFormatterFn((function(  ) {
  return function(d) { return "Section"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2114732250 = messageFormatterFn((function(  ) {
  return function(d) { return "Recommended Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b766377321 = messageFormatterFn((function(  ) {
  return function(d) { return "Saved to Recommended Visualisations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a340725912 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace Recommendation..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1504379798 = messageFormatterFn((function(  ) {
  return function(d) { return "Replace Recommendation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a858051219 = messageFormatterFn((function(  ) {
  return function(d) { return "New Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1486201614 = messageFormatterFn((function(  ) {
  return function(d) { return "New Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b70198325 = messageFormatterFn((function(  ) {
  return function(d) { return "Recommendation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2031179802 = messageFormatterFn((function(  ) {
  return function(d) { return "Replaced Recommended Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1242566903 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Recommendation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a512319298 = messageFormatterFn((function(  ) {
  return function(d) { return "PIN Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1232783291 = messageFormatterFn((function(  ) {
  return function(d) { return "Request Access"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b7952679 = messageFormatterFn((function(  ) {
  return function(d) { return "Error requesting access."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1071742919 = messageFormatterFn((function(  ) {
  return function(d) { return "An error occurred and the request couldn’t be sent."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b296190084 = messageFormatterFn((function(  ) {
  return function(d) { return "The owner will be notified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1656794441 = messageFormatterFn((function(  ) {
  return function(d) { return "To see this page, request access from the owner."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1705823732 = messageFormatterFn((function(  ) {
  return function(d) { return "Request submitted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1784420324 = messageFormatterFn((function(  ) {
  return function(d) { return "Restore " + d.numberOfSheets + " sheets from your previous session?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1420094562 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1543784621 = messageFormatterFn((function(  ) {
  return function(d) { return "Restore Session"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1083195388 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a290071737 = messageFormatterFn((function(  ) {
  return function(d) { return "We’ve restored your previous session"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b301427949 = messageFormatterFn((function(  ) {
  return function(d) { return "Save as..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1759916469 = messageFormatterFn((function(  ) {
  return function(d) { return "Save (overwrites)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b716123199 = messageFormatterFn((function(  ) {
  return function(d) { return "Save..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1406258143 = messageFormatterFn((function(  ) {
  return function(d) { return "Saved viz to workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b330644800 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is unavailable at this time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a309032748 = messageFormatterFn((function(  ) {
  return function(d) { return "Try and refresh your network connection."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a246582734 = messageFormatterFn((function(  ) {
  return function(d) { return "Reload this page."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a398449395 = messageFormatterFn((function(  ) {
  return function(d) { return "Either it doesn't exist, or you don't have permission to access it. Go to the " + d.datasourceName + " lens to ask more questions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2136340382 = messageFormatterFn((function(  ) {
  return function(d) { return "We can't display that page."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1659536593 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Ask Data Visualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1144913871 = messageFormatterFn((function(  ) {
  return function(d) { return "Alphabetical"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1810203669 = messageFormatterFn((function(  ) {
  return function(d) { return "Ascending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2135584015 = messageFormatterFn((function(  ) {
  return function(d) { return "Descending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1963484374 = messageFormatterFn((function(  ) {
  return function(d) { return "by"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b57511954 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a763787216 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2003224817 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1508094796 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1066541510 = messageFormatterFn((function(  ) {
  return function(d) { return "Redo"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1092003205 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b326178963 = messageFormatterFn((function(  ) {
  return function(d) { return "Share"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b78928889 = messageFormatterFn((function(  ) {
  return function(d) { return "Share Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1754393056 = messageFormatterFn((function(  ) {
  return function(d) { return "Swap Axes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a243545993 = messageFormatterFn((function(  ) {
  return function(d) { return "Please try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1282265324 = messageFormatterFn((function(  ) {
  return function(d) { return "Undo"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a428497036 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data is not supported for this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b281992181 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a837830503 = messageFormatterFn((function(  ) {
  return function(d) { return "Bar Chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2137552168 = messageFormatterFn((function(  ) {
  return function(d) { return "Gantt Chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b919648800 = messageFormatterFn((function(  ) {
  return function(d) { return "Heat Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1988827720 = messageFormatterFn((function(  ) {
  return function(d) { return "Histogram"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1750195641 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1830604161 = messageFormatterFn((function(  ) {
  return function(d) { return "Map"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a850985632 = messageFormatterFn((function(  ) {
  return function(d) { return "Pie Chart"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1880243363 = messageFormatterFn((function(  ) {
  return function(d) { return "Scatter Plot"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a922361134 = messageFormatterFn((function(  ) {
  return function(d) { return "Stacked Bar"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a523216480 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1097405166 = messageFormatterFn((function(  ) {
  return function(d) { return "Treemap"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1825290203 = messageFormatterFn((function(  ) {
  return function(d) { return "No marks appear on this viz because a numeric field has null values."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1400849925 = messageFormatterFn((function(  ) {
  return function(d) { return "No marks appear on this map because geographic data is either missing or incorrectly structured."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a943555229 = messageFormatterFn((function(  ) {
  return function(d) { return "As Percentage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a658544069 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculate the difference of"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a628642741 = messageFormatterFn((function(  ) {
  return function(d) { return "Over the"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1875988581 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1658074399 = messageFormatterFn((function(  ) {
  return function(d) { return "Personal Space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1528667498 = messageFormatterFn((function(  ) {
  return function(d) { return "(Private to me)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a347183661 = messageFormatterFn((function(  ) {
  return function(d) { return "Projects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a83963071 = messageFormatterFn((function(  ) {
  return function(d) { return "You do not have permission to move to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a359523612 = messageFormatterFn((function(  ) {
  return function(d) { return "Content cannot be moved to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1410356675 = messageFormatterFn((function(  ) {
  return function(d) { return d.SITE_NAME + " (site root)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1918748966 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a78324515 = messageFormatterFn((function(  ) {
  return function(d) { return d.PROJECT_NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a212819662 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect to " + d.DATA_SOURCE; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a757793640 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in with your " + d.DATA_SOURCE + " account to see the dashboard with your data, or continue without signing in to quickly see it with sample data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b736060251 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.DATA_SOURCE + " to see your data in the dashboard. Or continue without signing in to see sample data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a302418806 = messageFormatterFn((function(  ) {
  return function(d) { return "Before you connect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1609720453 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2033818344 = messageFormatterFn((function(  ) {
  return function(d) { return "Continue"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a953638443 = messageFormatterFn((function(  ) {
  return function(d) { return "Continue without signing in"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b366631402 = messageFormatterFn((function(  ) {
  return function(d) { return " on your QuickBooks Online account to use Tableau to connect to QuickBooks Online."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2130948088 = messageFormatterFn((function(  ) {
  return function(d) { return "You must be a company Administrator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b366630441 = messageFormatterFn((function(  ) {
  return function(d) { return " can use Tableau to connect to QuickBooks Online. If another Company Administrator has used Tableau, that administrator must give up the Tableau Online application privilege so that you can use them."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b421208873 = messageFormatterFn((function(  ) {
  return function(d) { return "Only one Company Administrator per company"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1140856589 = messageFormatterFn((function(  ) {
  return function(d) { return "Make sure you’re using the cloud-based version of ServiceNow and have permission to access the necessary data. When you sign in, use your ServiceNow credentials, which may differ from those you use for single sign-on."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2077046042 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculated Insights"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1602427798 = messageFormatterFn((function(  ) {
  return function(d) { return "Collections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1994376197 = messageFormatterFn((function(  ) {
  return function(d) { return "Content suggestions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1074357592 = messageFormatterFn((function(  ) {
  return function(d) { return "Content types"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1922082512 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Lake Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a232777302 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Model Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1409963784 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Roles"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2001090579 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1993904797 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a652211785 = messageFormatterFn((function(  ) {
  return function(d) { return "Drafts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1188945126 = messageFormatterFn((function(  ) {
  return function(d) { return "Draft"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1686437919 = messageFormatterFn((function(  ) {
  return function(d) { return "You made changes to this workbook that have not been published. Your draft is visible only to you and system administrators."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a940180314 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b978082570 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1002476595 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data Lenses"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1814738664 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a726276621 = messageFormatterFn((function(  ) {
  return function(d) { return "Never Published"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1163741130 = messageFormatterFn((function(  ) {
  return function(d) { return "This workbook has never been published and is only visible to you and system administrators."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1569961075 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1650420558 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear History"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1898250960 = messageFormatterFn((function(  ) {
  return function(d) { return "Your search history is private and is only used to improve search suggestions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a582254689 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear all search history?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b481346499 = messageFormatterFn((function(  ) {
  return function(d) { return "Recents"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b991891725 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Connected to " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "workbook";}, other: function() { return "workbooks";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a209500189 = messageFormatterFn((function(  ) {
  return function(d) { return "Searching."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b471829951 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for views, metrics, workbooks and more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1289483415 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for views, workbooks and more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1705884561 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "item";}, other: function() { return "items";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b553153093 = messageFormatterFn((function(  ) {
  return function(d) { return "Press " + d.enter + " to see all"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b647942330 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b151842366 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return d.NUMBER_LOC + " recent " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "view";}, other: function() { return "views";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1700927265 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Modified " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "day";}, other: function() { return "days";} }) + " ago"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a617636867 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Modified " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "hour";}, other: function() { return "hours";} }) + " ago"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b729693005 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Modified " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "minute";}, other: function() { return "minutes";} }) + " ago"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a753576003 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Modified " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "month";}, other: function() { return "months";} }) + " ago"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a304683795 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Modified " + d.NUMBER_LOC + " " + plural(d.NUMBER, 0, pluralFuncs["en-GB"], { one: function() { return "second";}, other: function() { return "seconds";} }) + " ago"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b26900899 = messageFormatterFn((function(  ) {
  return function(d) { return "Search results"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1285621367 = messageFormatterFn((function(  ) {
  return function(d) { return "See all results for “" + d.SEARCH_TERM + "”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2048159863 = messageFormatterFn((function(  ) {
  return function(d) { return "No results."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1982506248 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Showing " + d.TOTAL_COUNT_LOC + " " + plural(d.TOTAL_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "result";}, other: function() { return "results";} }) + "."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a651238792 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1782558437 = messageFormatterFn((function(  ) {
  return function(d) { return "Projects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b684416280 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1004943263 = messageFormatterFn((function(  ) {
  return function(d) { return "Simulations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a450042310 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b898227165 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables and Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2134752637 = messageFormatterFn((function(  ) {
  return function(d) { return "Views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b237280626 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1660268333 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1621802188 = messageFormatterFn((function(  ) {
  return function(d) { return "Opening in Tableau Desktop"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a814918800 = messageFormatterFn((function(  ) {
  return function(d) { return "Skip"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1178712258 = messageFormatterFn((function(  ) {
  return function(d) { return "Having trouble?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1385654142 = messageFormatterFn((function(  ) {
  return function(d) { return "You need Tableau Desktop version 2021.2 or higher to open this workbook. Install the latest version of Tableau Desktop or download the workbook as an earlier version."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b268370802 = messageFormatterFn((function(  ) {
  return function(d) { return "You need Tableau Desktop version 2021.2 or higher to open this workbook. Contact your administrator to install the latest version of Tableau Desktop, or download the workbook as an earlier version."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b293315360 = messageFormatterFn((function(  ) {
  return function(d) { return "Opening this file in Tableau Desktop. If it didn’t open, you can try again or continue editing in the browser."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a58531502 = messageFormatterFn((function(  ) {
  return function(d) { return "We recommend publishing your data source to Tableau Online or Server to maintain a single source for your data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a593984871 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1931680276 = messageFormatterFn((function(  ) {
  return function(d) { return "Try Again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a470187769 = messageFormatterFn((function(  ) {
  return function(d) { return "Playback Mode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1441267165 = messageFormatterFn((function(  ) {
  return function(d) { return "Forward"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b737922394 = messageFormatterFn((function(  ) {
  return function(d) { return "Reverse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a734792410 = messageFormatterFn((function(  ) {
  return function(d) { return "Stop"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1323480660 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b786620760 = messageFormatterFn((function(  ) {
  return function(d) { return "Next"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a711615123 = messageFormatterFn((function(  ) {
  return function(d) { return "Add from field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b506362238 = messageFormatterFn((function(  ) {
  return function(d) { return "Add from parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1764546464 = messageFormatterFn((function(  ) {
  return function(d) { return "Click to add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b255152193 = messageFormatterFn((function(  ) {
  return function(d) { return "Add values from"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b927812528 = messageFormatterFn((function(  ) {
  return function(d) { return "Aliases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a15989877 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2031468471 = messageFormatterFn((function(  ) {
  return function(d) { return "Allowable values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2147096016 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b562635366 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1571169439 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b466885636 = messageFormatterFn((function(  ) {
  return function(d) { return "Current value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a242189320 = messageFormatterFn((function(  ) {
  return function(d) { return "Data type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1704313745 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1817711161 = messageFormatterFn((function(  ) {
  return function(d) { return "DateTime"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b712447660 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a174895562 = messageFormatterFn((function(  ) {
  return function(d) { return "Float"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a138341159 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a983604642 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a242233361 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1648484127 = messageFormatterFn((function(  ) {
  return function(d) { return "Days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b784391843 = messageFormatterFn((function(  ) {
  return function(d) { return "Hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1874026641 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1865139458 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b658306023 = messageFormatterFn((function(  ) {
  return function(d) { return "ISO Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2029311379 = messageFormatterFn((function(  ) {
  return function(d) { return "Minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1378965115 = messageFormatterFn((function(  ) {
  return function(d) { return "Months"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a965990287 = messageFormatterFn((function(  ) {
  return function(d) { return "Quarters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a279605261 = messageFormatterFn((function(  ) {
  return function(d) { return "Seconds"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b658014899 = messageFormatterFn((function(  ) {
  return function(d) { return "Weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1113506916 = messageFormatterFn((function(  ) {
  return function(d) { return "Years"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1167861196 = messageFormatterFn((function(  ) {
  return function(d) { return "Value when workbook opens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1142079659 = messageFormatterFn((function(  ) {
  return function(d) { return "Display format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1029830666 = messageFormatterFn((function(  ) {
  return function(d) { return "Domain Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1338268627 = messageFormatterFn((function(  ) {
  return function(d) { return "Duplicate values found"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1020628037 = messageFormatterFn((function(  ) {
  return function(d) { return "Every value in the list must have a unique display name. Double-click the highlighted fields to update. Duplicate values will automatically be removed when you select OK."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1653235439 = messageFormatterFn((function(  ) {
  return function(d) { return d.alias + " is a duplicate"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a545762449 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a994088880 = messageFormatterFn((function(  ) {
  return function(d) { return "New row, press enter to edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1505932021 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1050053462 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a652373901 = messageFormatterFn((function(  ) {
  return function(d) { return "List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1407366727 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a296927797 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1429152992 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b858491196 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1094888260 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b569639022 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1369941970 = messageFormatterFn((function(  ) {
  return function(d) { return "Parameters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1441669821 = messageFormatterFn((function(  ) {
  return function(d) { return "Paste from clipboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1524177241 = messageFormatterFn((function(  ) {
  return function(d) { return "Your current browser doesn’t support this feature."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b712477385 = messageFormatterFn((function(  ) {
  return function(d) { return "Properties"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2138553272 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1451770944 = messageFormatterFn((function(  ) {
  return function(d) { return "Range"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1959411285 = messageFormatterFn((function(  ) {
  return function(d) { return "When workbook opens"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a235910562 = messageFormatterFn((function(  ) {
  return function(d) { return "Set from field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1927538323 = messageFormatterFn((function(  ) {
  return function(d) { return "Set from parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b141349658 = messageFormatterFn((function(  ) {
  return function(d) { return "Step size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b620869716 = messageFormatterFn((function(  ) {
  return function(d) { return "Display As"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b166804144 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1313587673 = messageFormatterFn((function(  ) {
  return function(d) { return "Too many results to display"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b920134254 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1220804928 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a728439756 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b920740855 = messageFormatterFn((function(  ) {
  return function(d) { return "This data source contains calculations that reference different data sources in this workbook. These calculations won’t be valid outside of this workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a478888046 = messageFormatterFn((function(  ) {
  return function(d) { return "This data source name already exists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a943571191 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed credentials"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b837703875 = messageFormatterFn((function(  ) {
  return function(d) { return "Name cannot be empty"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b514311089 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1458453972 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed credentials to avoid errors when refreshing extracts and let users use this data source without being prompted for authentication."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a13942722 = messageFormatterFn((function(  ) {
  return function(d) { return "A project must be selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b139248994 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a80681747 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure you want to overwrite this data source?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a571699681 = messageFormatterFn((function(  ) {
  return function(d) { return "Confirm Overwrite"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a45789861 = messageFormatterFn((function(  ) {
  return function(d) { return "There is already a data source named: “" + d.DS_NAME + "”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1160777291 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a224115605 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a222201751 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1583682063 = messageFormatterFn((function(  ) {
  return function(d) { return "Go to the Data Source page to see this data source, change permissions and other properties."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1807958078 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source Published Success"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1920038594 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a900767881 = messageFormatterFn((function(  ) {
  return function(d) { return "An unknown error occurred"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1147694523 = messageFormatterFn((function(  ) {
  return function(d) { return "Update workbook to use the published data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1385886070 = messageFormatterFn((function(  ) {
  return function(d) { return "The extracted data source contains tables with user-filtered data. If you don’t want this data source to include a user-specific view of the data, change its connection type from extract to live."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2134616806 = messageFormatterFn((function(  ) {
  return function(d) { return "Anchor relative to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b118501466 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b681674536 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1653887065 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a948193226 = messageFormatterFn((function(  ) {
  return function(d) { return "Ending date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a392183953 = messageFormatterFn((function(  ) {
  return function(d) { return "Starting date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1344744472 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter [" + d.fieldName + "]"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1767700553 = messageFormatterFn((function(  ) {
  return function(d) { return "Include null values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b87145832 = messageFormatterFn((function(  ) {
  return function(d) { return "Maximum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a685332742 = messageFormatterFn((function(  ) {
  return function(d) { return "Minimum"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a794116373 = messageFormatterFn((function(  ) {
  return function(d) { return "Not a valid date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1931119296 = messageFormatterFn((function(  ) {
  return function(d) { return "Not a valid value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b792974130 = messageFormatterFn((function(  ) {
  return function(d) { return "Range of values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a510713118 = messageFormatterFn((function(  ) {
  return function(d) { return "At least"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1440347012 = messageFormatterFn((function(  ) {
  return function(d) { return "At most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b305811142 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1343847313 = messageFormatterFn((function(  ) {
  return function(d) { return "Relative dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1771795783 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b457724607 = messageFormatterFn((function(  ) {
  return function(d) { return "Show times"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1828353295 = messageFormatterFn((function(  ) {
  return function(d) { return "Special"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a124666229 = messageFormatterFn((function(  ) {
  return function(d) { return "All dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a660902920 = messageFormatterFn((function(  ) {
  return function(d) { return "All values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1617352386 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude null dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b310466469 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude null values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a705192035 = messageFormatterFn((function(  ) {
  return function(d) { return "Only null dates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1477333722 = messageFormatterFn((function(  ) {
  return function(d) { return "Only null values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b436153490 = messageFormatterFn((function(  ) {
  return function(d) { return "Set [" + d.fieldName + "] to show"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b475839815 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b462377725 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Story"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2090813180 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1276187112 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a773083925 = messageFormatterFn((function(  ) {
  return function(d) { return "Date & Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a638181530 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (whole)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1680130008 = messageFormatterFn((function(  ) {
  return function(d) { return "Number (decimal)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b317381920 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1941069365 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1503555356 = messageFormatterFn((function(  ) {
  return function(d) { return "Set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1291548838 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1206769194 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an error in one of the relationship links."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1566375349 = messageFormatterFn((function(  ) {
  return function(d) { return "There is an error in one of the inputs to the relationship."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1109419358 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship has no matching fields. Edit the relationship to select matching fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1794881446 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship clause contains an invalid calculation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1257755415 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship references unknown field %1. Edit the relationship to select a valid field."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a364097140 = messageFormatterFn((function(  ) {
  return function(d) { return "The related field %1 is a spatial column and must use a spatial comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a555232613 = messageFormatterFn((function(  ) {
  return function(d) { return "The related field %1 must be a spatial column to use a spatial comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1222909748 = messageFormatterFn((function(  ) {
  return function(d) { return "The relationship uses functionality not supported by extracts stored as “Physical Tables”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1052070666 = messageFormatterFn((function(  ) {
  return function(d) { return "The relationship field %1 must only appear in a single relationship comparison."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b401459268 = messageFormatterFn((function(  ) {
  return function(d) { return "Type mismatch between %1 (%2) and %3 (%4)."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a350578828 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown relationship error."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a697424233 = messageFormatterFn((function(  ) {
  return function(d) { return "This relationship type is not supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a778180379 = messageFormatterFn((function(  ) {
  return function(d) { return "Add more fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1300726482 = messageFormatterFn((function(  ) {
  return function(d) { return "Cardinality"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1887497062 = messageFormatterFn((function(  ) {
  return function(d) { return "Many"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2102772092 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields aren’t unique, or you don’t know."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1435285580 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " aren’t unique, or you don’t know."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1106291618 = messageFormatterFn((function(  ) {
  return function(d) { return "This will aggregate data before joins during analysis, preventing duplication of aggregates."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a63110037 = messageFormatterFn((function(  ) {
  return function(d) { return "One"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1001067104 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in the selected fields are unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2060922072 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in " + d.fieldName + " are unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b238010125 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields are unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1847686533 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " are unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a630917391 = messageFormatterFn((function(  ) {
  return function(d) { return "This will join data before aggregation during analysis, optimising queries. You might see duplicate aggregates if field values aren’t unique."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b564838270 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Relationship Calculation..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1958468131 = messageFormatterFn((function(  ) {
  return function(d) { return "(default)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b173350106 = messageFormatterFn((function(  ) {
  return function(d) { return "(detected)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1673532556 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Calculation..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b985593613 = messageFormatterFn((function(  ) {
  return function(d) { return "How do relationships differ from joins?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1974775207 = messageFormatterFn((function(  ) {
  return function(d) { return "Select matching fields to create this relationship."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b142519847 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a567863194 = messageFormatterFn((function(  ) {
  return function(d) { return "Operator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a624898096 = messageFormatterFn((function(  ) {
  return function(d) { return "These settings help Tableau optimise queries during analysis. The default settings are recommended, if you aren’t sure what to choose."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a381952387 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert to Default"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b70117628 = messageFormatterFn((function(  ) {
  return function(d) { return "Performance Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2029693272 = messageFormatterFn((function(  ) {
  return function(d) { return "Change the setting if you know the cardinality."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1119715375 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected the cardinality for " + d.tableName + " from the database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1723641547 = messageFormatterFn((function(  ) {
  return function(d) { return "Change the setting if you know the referential integrity."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b730452978 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected the referential integrity for " + d.tableName + " from the database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1096113734 = messageFormatterFn((function(  ) {
  return function(d) { return "Referential Integrity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b483732967 = messageFormatterFn((function(  ) {
  return function(d) { return "All records match"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1592632366 = messageFormatterFn((function(  ) {
  return function(d) { return "Some records match"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b567357422 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Relationship"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1194437210 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in the selected fields in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1185951726 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau detected that values in " + d.fieldName + " in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a436541165 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in the selected fields in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a56923893 = messageFormatterFn((function(  ) {
  return function(d) { return "Values in " + d.fieldName + " in " + d.firstTable + " have a match in " + d.secondTable + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1810845227 = messageFormatterFn((function(  ) {
  return function(d) { return "This will generate fewer and simpler joins to optimise queries. You might see inconsistent results during analysis if there are unmatched values in " + d.firstTable + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2077760966 = messageFormatterFn((function(  ) {
  return function(d) { return "Some values in the selected fields in " + d.firstTable + " don’t have a match in " + d.secondTable + ", or you don’t know."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a309055874 = messageFormatterFn((function(  ) {
  return function(d) { return "Some values in " + d.fieldName + " in " + d.firstTable + " don’t have a match in " + d.secondTable + ", or you don’t know."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a861309928 = messageFormatterFn((function(  ) {
  return function(d) { return "This will keep all measure values, even unmatched ones."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2033731370 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a977682947 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b832178606 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1143670761 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b976629773 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2025994174 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b160822576 = messageFormatterFn((function(  ) {
  return function(d) { return "Centre Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b923282209 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Formatting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1996374574 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Formatting"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a448498626 = messageFormatterFn((function(  ) {
  return function(d) { return "Text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a730400585 = messageFormatterFn((function(  ) {
  return function(d) { return "Font family"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a986430220 = messageFormatterFn((function(  ) {
  return function(d) { return "Font size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b855534471 = messageFormatterFn((function(  ) {
  return function(d) { return "Hyperlink"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1617525944 = messageFormatterFn((function(  ) {
  return function(d) { return "Hyperlink"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2112692641 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b916716825 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b284225994 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1487544952 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1483654868 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2036936732 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a75533027 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1265469772 = messageFormatterFn((function(  ) {
  return function(d) { return "Italic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b709472382 = messageFormatterFn((function(  ) {
  return function(d) { return "Left Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1855480495 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b492980704 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a517339394 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b840701551 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3168851 = messageFormatterFn((function(  ) {
  return function(d) { return "Right Align"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b181671030 = messageFormatterFn((function(  ) {
  return function(d) { return "Text Colour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2093556362 = messageFormatterFn((function(  ) {
  return function(d) { return "is Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2007202362 = messageFormatterFn((function(  ) {
  return function(d) { return "is On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b632174570 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow selection by category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1403293137 = messageFormatterFn((function(  ) {
  return function(d) { return "Show tooltips"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a628240960 = messageFormatterFn((function(  ) {
  return function(d) { return "Include command buttons"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b130940288 = messageFormatterFn((function(  ) {
  return function(d) { return "Responsive - Show tooltips instantly"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b322167323 = messageFormatterFn((function(  ) {
  return function(d) { return "On Hover - Show tooltips on hover"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1156619188 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a109395298 = messageFormatterFn((function(  ) {
  return function(d) { return "Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a734830071 = messageFormatterFn((function(  ) {
  return function(d) { return "Rich text editor"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b627697438 = messageFormatterFn((function(  ) {
  return function(d) { return "at " + d.TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2090307056 = messageFormatterFn((function(  ) {
  return function(d) { return d.EVERY_DAYS_OF_THE_WEEK + ", " + d.RECURRING_EVERY + " " + d.STARTING_FROM_ENDING_AT; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b55597837 = messageFormatterFn((function(  ) {
  return function(d) { return "Every " + d.DAYS_OF_MONTH + ", " + d.AT; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b517821317 = messageFormatterFn((function(  ) {
  return function(d) { return "day of the month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1544801194 = messageFormatterFn((function(  ) {
  return function(d) { return d.DAYS_OF_MONTH + " day of the month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a80047892 = messageFormatterFn((function(  ) {
  return function(d) { return d.ORDINAL + " " + d.DAY_OF_WEEK; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b720148559 = messageFormatterFn((function(  ) {
  return function(d) { return d.EVERY_DAYS_OF_WEEK + ", " + d.AT; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1838241589 = messageFormatterFn((function(  ) {
  return function(d) { return "Fifth"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1827177596 = messageFormatterFn((function(  ) {
  return function(d) { return "First"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a307153628 = messageFormatterFn((function(  ) {
  return function(d) { return "Fourth"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1682331423 = messageFormatterFn((function(  ) {
  return function(d) { return "Friday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a936757784 = messageFormatterFn((function(  ) {
  return function(d) { return "Last"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1035437669 = messageFormatterFn((function(  ) {
  return function(d) { return "last"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b591958958 = messageFormatterFn((function(  ) {
  return function(d) { return "Monday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a11250237 = messageFormatterFn((function(  ) {
  return function(d) { return "At"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1989881332 = messageFormatterFn((function(  ) {
  return function(d) { return "Done"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b476713945 = messageFormatterFn((function(  ) {
  return function(d) { return "Every"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1479630442 = messageFormatterFn((function(  ) {
  return function(d) { return "All days of the week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1929814988 = messageFormatterFn((function(  ) {
  return function(d) { return "From"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a11661545 = messageFormatterFn((function(  ) {
  return function(d) { return "On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a635050948 = messageFormatterFn((function(  ) {
  return function(d) { return "Repeats"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a11811461 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2145188893 = messageFormatterFn((function(  ) {
  return function(d) { return "Daily"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b166922006 = messageFormatterFn((function(  ) {
  return function(d) { return "Friday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1804375039 = messageFormatterFn((function(  ) {
  return function(d) { return "Fri"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b339449144 = messageFormatterFn((function(  ) {
  return function(d) { return "F"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a923450459 = messageFormatterFn((function(  ) {
  return function(d) { return "Monday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b208912720 = messageFormatterFn((function(  ) {
  return function(d) { return "Mon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1119626743 = messageFormatterFn((function(  ) {
  return function(d) { return "M"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1271933124 = messageFormatterFn((function(  ) {
  return function(d) { return "Saturday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1946089561 = messageFormatterFn((function(  ) {
  return function(d) { return "Sat"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1604784942 = messageFormatterFn((function(  ) {
  return function(d) { return "Sa"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b474534629 = messageFormatterFn((function(  ) {
  return function(d) { return "Sunday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b707715216 = messageFormatterFn((function(  ) {
  return function(d) { return "Sun"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a133705015 = messageFormatterFn((function(  ) {
  return function(d) { return "Su"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a417068709 = messageFormatterFn((function(  ) {
  return function(d) { return "Thursday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b392750726 = messageFormatterFn((function(  ) {
  return function(d) { return "Thu"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1390791149 = messageFormatterFn((function(  ) {
  return function(d) { return "Th"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1695817400 = messageFormatterFn((function(  ) {
  return function(d) { return "Tuesday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a287811405 = messageFormatterFn((function(  ) {
  return function(d) { return "Tue"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1274197434 = messageFormatterFn((function(  ) {
  return function(d) { return "T"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1585012351 = messageFormatterFn((function(  ) {
  return function(d) { return "Wednesday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a586493782 = messageFormatterFn((function(  ) {
  return function(d) { return "Wed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a868190353 = messageFormatterFn((function(  ) {
  return function(d) { return "W"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a925650145 = messageFormatterFn((function(  ) {
  return function(d) { return "Every " + d.DAYS_OF_WEEK_LOC; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a298098595 = messageFormatterFn((function(  ) {
  return function(d) { return "every hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a651197958 = messageFormatterFn((function(  ) {
  return function(d) { return "every " + d.NUM_HOURS + " hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1112014634 = messageFormatterFn((function(  ) {
  return function(d) { return "every " + d.NUM_MINUTES + " minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a346588163 = messageFormatterFn((function(  ) {
  return function(d) { return "Hourly"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1343257862 = messageFormatterFn((function(  ) {
  return function(d) { return "Eight hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1212511621 = messageFormatterFn((function(  ) {
  return function(d) { return "Fifteen minutes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1253140243 = messageFormatterFn((function(  ) {
  return function(d) { return "Four hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1617825338 = messageFormatterFn((function(  ) {
  return function(d) { return "Half hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1108031527 = messageFormatterFn((function(  ) {
  return function(d) { return "Hour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b493482727 = messageFormatterFn((function(  ) {
  return function(d) { return "Six hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1029732896 = messageFormatterFn((function(  ) {
  return function(d) { return "Twelve hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1225972483 = messageFormatterFn((function(  ) {
  return function(d) { return "Two hours"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b157338927 = messageFormatterFn((function(  ) {
  return function(d) { return "Monthly"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1016674860 = messageFormatterFn((function(  ) {
  return function(d) { return "Day of week"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1252158889 = messageFormatterFn((function(  ) {
  return function(d) { return "Days of month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1483605367 = messageFormatterFn((function(  ) {
  return function(d) { return "of the month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a403332701 = messageFormatterFn((function(  ) {
  return function(d) { return "Fifth"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a414396694 = messageFormatterFn((function(  ) {
  return function(d) { return "First"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1076479882 = messageFormatterFn((function(  ) {
  return function(d) { return "Fourth"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1207690682 = messageFormatterFn((function(  ) {
  return function(d) { return "Last"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1454797668 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b82439667 = messageFormatterFn((function(  ) {
  return function(d) { return "Third"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1068971971 = messageFormatterFn((function(  ) {
  return function(d) { return "time a month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1517466762 = messageFormatterFn((function(  ) {
  return function(d) { return "times a month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1829561656 = messageFormatterFn((function(  ) {
  return function(d) { return d.WHICH + d.WHAT + " " + d.OF_THE_MONTH + " at " + d.WHEN; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1116390198 = messageFormatterFn((function(  ) {
  return function(d) { return "On Data Refresh"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b639491519 = messageFormatterFn((function(  ) {
  return function(d) { return "Day"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b143237202 = messageFormatterFn((function(  ) {
  return function(d) { return "Specified Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1599061541 = messageFormatterFn((function(  ) {
  return function(d) { return "starting at " + d.START_AT; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a613332090 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " " + d.AT_OR_FROM_TO; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a713890487 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " " + d.AT_OR_FROM_TO; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1613515250 = messageFormatterFn((function(  ) {
  return function(d) { return "day a week,"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a15675391 = messageFormatterFn((function(  ) {
  return function(d) { return "days a week,"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1258943972 = messageFormatterFn((function(  ) {
  return function(d) { return "at " + d.START_TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b93095378 = messageFormatterFn((function(  ) {
  return function(d) { return "from " + d.START_TIME + " to " + d.END_TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a841191449 = messageFormatterFn((function(  ) {
  return function(d) { return d["1"] + " at " + d["2"]; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1211648229 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " from " + d.START_TIME + " to " + d.END_TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b411275653 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS + " " + d.DAYS + " every " + d.LOC_MIN_NUM + " starting at " + d.START_TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1170584112 = messageFormatterFn((function(  ) {
  return function(d) { return "to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2022859243 = messageFormatterFn((function(  ) {
  return function(d) { return "Time zone"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b30693869 = messageFormatterFn((function(  ) {
  return function(d) { return "Weekly"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b440316618 = messageFormatterFn((function(  ) {
  return function(d) { return d.NUM_DAYS_LOC + " " + d.DAYS + " at " + d.START_TIME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a957396731 = messageFormatterFn((function(  ) {
  return function(d) { return "Saturday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a685471414 = messageFormatterFn((function(  ) {
  return function(d) { return "Second"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1989944046 = messageFormatterFn((function(  ) {
  return function(d) { return "Sunday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1742295534 = messageFormatterFn((function(  ) {
  return function(d) { return "1ˢᵗ"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1743054724 = messageFormatterFn((function(  ) {
  return function(d) { return "2ⁿᵈ"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1744097409 = messageFormatterFn((function(  ) {
  return function(d) { return "3ʳᵈ"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1769095902 = messageFormatterFn((function(  ) {
  return function(d) { return d.N + "ᵗʰ"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1970953339 = messageFormatterFn((function(  ) {
  return function(d) { return "Third"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a102532316 = messageFormatterFn((function(  ) {
  return function(d) { return "Thursday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1962765729 = messageFormatterFn((function(  ) {
  return function(d) { return "Tuesday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1549261354 = messageFormatterFn((function(  ) {
  return function(d) { return "Wednesday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a750687690 = messageFormatterFn((function(  ) {
  return function(d) { return "Ask Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1228486782 = messageFormatterFn((function(  ) {
  return function(d) { return d.CURRENT_LENGTH + "/" + d.MAX_LENGTH; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a672398036 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a301831117 = messageFormatterFn((function(  ) {
  return function(d) { return "collection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1758449305 = messageFormatterFn((function(  ) {
  return function(d) { return "content type: " + d.CONTENT_TYPE; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b650405122 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b682770754 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1961665167 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Site ID"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1715912943 = messageFormatterFn((function(  ) {
  return function(d) { return "data role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1674676148 = messageFormatterFn((function(  ) {
  return function(d) { return "data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b534635543 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" embed code copied to the clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1046920451 = messageFormatterFn((function(  ) {
  return function(d) { return "Embed Code"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b197126297 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy Embed Code"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1148683208 = messageFormatterFn((function(  ) {
  return function(d) { return "Explain Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a939178333 = messageFormatterFn((function(  ) {
  return function(d) { return "flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1815467381 = messageFormatterFn((function(  ) {
  return function(d) { return "Can't share because the list of users contains errors. Correct the errors, then try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1525005467 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" link copied to the clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1112939071 = messageFormatterFn((function(  ) {
  return function(d) { return "Share using a link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1852736669 = messageFormatterFn((function(  ) {
  return function(d) { return "Getting link…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1854891937 = messageFormatterFn((function(  ) {
  return function(d) { return "metric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a667977058 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter at least one username before sharing."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b645750401 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + " doesn't have an email address set to receive notifications."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b526928866 = messageFormatterFn((function(  ) {
  return function(d) { return d.NAME + " isn't a user on this site."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1765864702 = messageFormatterFn((function(  ) {
  return function(d) { return "Share with people"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1355443980 = messageFormatterFn((function(  ) {
  return function(d) { return d.FULL_NAME + " (" + d.USER_NAME + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b952176515 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a username."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1987974752 = messageFormatterFn((function(  ) {
  return function(d) { return "project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1245991117 = messageFormatterFn((function(  ) {
  return function(d) { return "virtual connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1116590232 = messageFormatterFn((function(  ) {
  return function(d) { return d.USER_FRIENDLY_NAME + " requested access to “" + d.CONTENT_NAME + "”. Do you want to grant this user view access?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1869838310 = messageFormatterFn((function(  ) {
  return function(d) { return "Share"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a262632206 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to share \"" + d.CONTENT_NAME + "\"."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b775425270 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to data source “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1285676339 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to flow “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a31663898 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all data sources in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1376166589 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all flows in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2108302651 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all metrics in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1253772294 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all projects in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b921168646 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all views in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b579408470 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all virtual connections in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1285647759 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all workbooks in project “" + d.PROJECT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a3671953 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to all views in workbook “" + d.WORKBOOK_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a417210037 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to metric “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b272290294 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to project “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1740674282 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to view “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a381801402 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to virtual connection “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1646818687 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant view access to workbook “" + d.CONTENT_NAME + "”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1842705014 = messageFormatterFn((function(  ) {
  return function(d) { return "Dismiss"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b86671200 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1076409877 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Failed to grant access for " + plural(d.USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.USER_COUNT_LOC + " user";}, other: function() { return d.USER_COUNT_LOC + " users";} }) + "."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1378480314 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "Access granted to " + plural(d.USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.USER_COUNT_LOC + " user";}, other: function() { return d.USER_COUNT_LOC + " users";} }) + "."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1489000651 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage Permissions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b260603095 = messageFormatterFn((function(  ) {
  return function(d) { return "locked permissions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1270905361 = messageFormatterFn((function(  ) {
  return function(d) { return "tabbed views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b307512660 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the collection. Do you want to grant these users view access?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1065332371 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the data source. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b544525444 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the flow. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a6520547 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the data source. This data source is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b899317812 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the flow. This flow is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a876838670 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the metric. This metric is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1091295441 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the project. This project is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b444319869 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the view. This view is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1526533695 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the virtual connection. This virtual connection is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a968303512 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the workbook. This workbook is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1901082152 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the view. This view is in a workbook with [TABBED_VIEWS] and permissions can't be managed individually."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1765079362 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the metric. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a796215073 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the project. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b89527501 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the view. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a812825617 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the virtual connection. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a410746696 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with " + plural(d.TOTAL_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.TOTAL_USER_COUNT_LOC + " user";}, other: function() { return d.TOTAL_USER_COUNT_LOC + " users";} }) + ". " + plural(d.UNPERMISSIONED_USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;}, other: function() { return d.UNPERMISSIONED_USER_COUNT_LOC;} }) + " of these users don't have permission to view the workbook. Do you want to grant these users the view permissions template?"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b915378308 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the collection. Do you want to grant this user view access?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a457466723 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the data source. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1189856332 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the flow. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1042515891 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the data source. This data source is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a936404124 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the flow. This flow is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b225939490 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the metric. This metric is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1264910849 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the project. This project is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1391402067 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the view. This view is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b543269135 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the virtual connection. This virtual connection is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2055413864 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the workbook. This workbook is in a project with [LOCKED_PERMISSIONS] and can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1321079976 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the view. This workbook is in a workbook with [TABBED_VIEWS] and permissions can't be managed individually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1471503474 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the metric. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1307133009 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the project. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1644854275 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the view. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a179305793 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the virtual connection. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b930666472 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.CONTENT_NAME + "” shared with one user. This user doesn't have permission to view the workbook. Do you want to grant this user the view permissions template?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a574534360 = messageFormatterFn((function(  ) {
  return function(d) { return "Granting the view permissions template will give users the capability to view and connect to a data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b304083071 = messageFormatterFn((function(  ) {
  return function(d) { return "The view template gives users the capability to view a flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1666774403 = messageFormatterFn((function(  ) {
  return function(d) { return "The view template gives users the capability to view a metric."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b190500612 = messageFormatterFn((function(  ) {
  return function(d) { return "The view template gives users the capability to view a project."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a150914872 = messageFormatterFn((function(  ) {
  return function(d) { return "Granting the view permissions template will give users the capability to view, filter, comment and download an image, PDF or summary data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a221794348 = messageFormatterFn((function(  ) {
  return function(d) { return "Granting the view permissions template will give users the capability to view and connect to a virtual connection."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b112668467 = messageFormatterFn((function(  ) {
  return function(d) { return "Granting the view permissions template will give users the capability to view, filter, comment and download an image, PDF or summary data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1858428603 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Collection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1063693662 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1921462581 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2143226445 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Metric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1694610802 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1466464638 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1210726690 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Virtual Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1803756777 = messageFormatterFn((function(  ) {
  return function(d) { return "Grant Access to Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1524987313 = messageFormatterFn((function(  ) {
  return function(d) { return "\"" + d.CONTENT_NAME + "\" shared."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1748807967 = messageFormatterFn((function(  ) {
  return function(d) { return "Only people with permission can see this " + d.CONTENT_TYPE + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b670872518 = messageFormatterFn((function(  ) {
  return function(d) { return "Share the current visualisation. Only people with permission can view this."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1020786851 = messageFormatterFn((function(  ) {
  return function(d) { return "In a collection, people see only the items they have permission to access."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1197768136 = messageFormatterFn((function(  ) {
  return function(d) { return "Share this explanation and the accompanying view. Only people with permission can view this. If the data changes after sharing, explanations might change."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1406688944 = messageFormatterFn((function(  ) {
  return function(d) { return "Message (optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a698870454 = messageFormatterFn((function(  ) {
  return function(d) { return "Site ID copied to the clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1416606126 = messageFormatterFn((function(  ) {
  return function(d) { return "Site ID"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1394176276 = messageFormatterFn((function(  ) {
  return function(d) { return "view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a208041 = messageFormatterFn((function(  ) {
  return function(d) { return "workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a509222942 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Unrelated dimension: ";}, other: function() { return "Unrelated dimensions: ";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a64033446 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Unrelated measure: ";}, other: function() { return "Unrelated measures: ";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a2074609014 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Ambiguously related dimension: ";}, other: function() { return "Ambiguously related dimensions: ";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b242717186 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Ambiguously related measure: ";}, other: function() { return "Ambiguously related measures: ";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1599450457 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b913234621 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all on dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1569262538 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b411371913 = messageFormatterFn((function(  ) {
  return function(d) { return "Deselect " + d.worksheetName + ". Box ticked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1047082616 = messageFormatterFn((function(  ) {
  return function(d) { return "Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a879642678 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply Filter to Worksheets " + d.fieldCaption; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a777896253 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter will be applied to " + d.count + " worksheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a804910581 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter will be applied to 1 worksheet."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1963252152 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1057197356 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b779433912 = messageFormatterFn((function(  ) {
  return function(d) { return "Relationship"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a437661169 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter search text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1759287940 = messageFormatterFn((function(  ) {
  return function(d) { return "Select all worksheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1533708392 = messageFormatterFn((function(  ) {
  return function(d) { return "Select " + d.worksheetName + ". Box unticked"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a754109839 = messageFormatterFn((function(  ) {
  return function(d) { return "Show all worksheets in workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1690474184 = messageFormatterFn((function(  ) {
  return function(d) { return "Show only selected worksheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1769379499 = messageFormatterFn((function(  ) {
  return function(d) { return "Worksheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1798901590 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a881318006 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1421683334 = messageFormatterFn((function(  ) {
  return function(d) { return "Move down"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a610237357 = messageFormatterFn((function(  ) {
  return function(d) { return "Field Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a569033489 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to bottom"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1192166265 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to top"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a197650358 = messageFormatterFn((function(  ) {
  return function(d) { return "Alphabetic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1569452480 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source order"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a555871077 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort By"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1068550417 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1168074705 = messageFormatterFn((function(  ) {
  return function(d) { return "Manual"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a383799392 = messageFormatterFn((function(  ) {
  return function(d) { return "Nested"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1875294580 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter By"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b35373668 = messageFormatterFn((function(  ) {
  return function(d) { return "Ascending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1873331100 = messageFormatterFn((function(  ) {
  return function(d) { return "Descending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1913396469 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Order"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1688204909 = messageFormatterFn((function(  ) {
  return function(d) { return "Move up"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b15537989 = messageFormatterFn((function(  ) {
  return function(d) { return "Parameter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1906707454 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a63141891 = messageFormatterFn((function(  ) {
  return function(d) { return "Value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b833972246 = messageFormatterFn((function(  ) {
  return function(d) { return ","; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1909509660 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1428229758 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a597425349 = messageFormatterFn((function(  ) {
  return function(d) { return "False"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2098600386 = messageFormatterFn((function(  ) {
  return function(d) { return "True"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1083063328 = messageFormatterFn((function(  ) {
  return function(d) { return "The username or password is not valid.  Check the database name and credentials and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1210292294 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to reconnect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b670077362 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a809848543 = messageFormatterFn((function(  ) {
  return function(d) { return "Cut"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b68033611 = messageFormatterFn((function(  ) {
  return function(d) { return "Detailed Error Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a309798015 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide connection details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1445193866 = messageFormatterFn((function(  ) {
  return function(d) { return "No driver installed for " + d.connectorName + " connector. Contact your administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1379539892 = messageFormatterFn((function(  ) {
  return function(d) { return " and then connect."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1551279320 = messageFormatterFn((function(  ) {
  return function(d) { return "Download and install the drivers,"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a676117625 = messageFormatterFn((function(  ) {
  return function(d) { return "Optional"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1820921633 = messageFormatterFn((function(  ) {
  return function(d) { return "Password:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1043039632 = messageFormatterFn((function(  ) {
  return function(d) { return "Paste"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a357916726 = messageFormatterFn((function(  ) {
  return function(d) { return "Remember Password"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1878614300 = messageFormatterFn((function(  ) {
  return function(d) { return "Show connection details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2050097329 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign In"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b864419266 = messageFormatterFn((function(  ) {
  return function(d) { return "Signing In…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b418719610 = messageFormatterFn((function(  ) {
  return function(d) { return "Username:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b247789853 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1575117596 = messageFormatterFn((function(  ) {
  return function(d) { return "Character set"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a384011149 = messageFormatterFn((function(  ) {
  return function(d) { return "Comma"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1618448407 = messageFormatterFn((function(  ) {
  return function(d) { return "Field separator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1522851448 = messageFormatterFn((function(  ) {
  return function(d) { return "Locale"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1694004676 = messageFormatterFn((function(  ) {
  return function(d) { return "No match"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1196692330 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1712540408 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a99260003 = messageFormatterFn((function(  ) {
  return function(d) { return "search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1375068183 = messageFormatterFn((function(  ) {
  return function(d) { return "Semicolon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1716420990 = messageFormatterFn((function(  ) {
  return function(d) { return "Space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a382149517 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1615310773 = messageFormatterFn((function(  ) {
  return function(d) { return "Text qualifier"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b723219019 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertical Bar"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1868362803 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1259346360 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a442002464 = messageFormatterFn((function(  ) {
  return function(d) { return "Trend Lines Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b624573126 = messageFormatterFn((function(  ) {
  return function(d) { return "Build separate trend lines based on the following dimensions:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1725372647 = messageFormatterFn((function(  ) {
  return function(d) { return "Factors"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a677407782 = messageFormatterFn((function(  ) {
  return function(d) { return "Model Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a603156481 = messageFormatterFn((function(  ) {
  return function(d) { return "Options"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a855602472 = messageFormatterFn((function(  ) {
  return function(d) { return "Exponential"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1593683784 = messageFormatterFn((function(  ) {
  return function(d) { return "Linear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b184228702 = messageFormatterFn((function(  ) {
  return function(d) { return "Logarithmic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a854760615 = messageFormatterFn((function(  ) {
  return function(d) { return "Polynomial"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1391387757 = messageFormatterFn((function(  ) {
  return function(d) { return "Degree:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1877590760 = messageFormatterFn((function(  ) {
  return function(d) { return "Power"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a438764002 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a496917150 = messageFormatterFn((function(  ) {
  return function(d) { return "Allow a trend line per colour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a408470383 = messageFormatterFn((function(  ) {
  return function(d) { return "Show confidence bands"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1373236832 = messageFormatterFn((function(  ) {
  return function(d) { return "Show recalculated line for highlighted or selected data points"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1744757301 = messageFormatterFn((function(  ) {
  return function(d) { return "Show tooltips"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a94800644 = messageFormatterFn((function(  ) {
  return function(d) { return "Force y-intercept to zero"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1277769166 = messageFormatterFn((function(  ) {
  return function(d) { return "and "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b833935771 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1929402900 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply (Ctrl + Enter)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1205897735 = messageFormatterFn((function(  ) {
  return function(d) { return "blank = exclude none"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b294102165 = messageFormatterFn((function(  ) {
  return function(d) { return "blank = include all"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1829135234 = messageFormatterFn((function(  ) {
  return function(d) { return "Sales* "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1848935198 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2138257672 = messageFormatterFn((function(  ) {
  return function(d) { return "Only the first table in your selection will be added because union is not available for this database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1535347164 = messageFormatterFn((function(  ) {
  return function(d) { return "You can only union data from the same connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b547030205 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag table to union"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a790556216 = messageFormatterFn((function(  ) {
  return function(d) { return "Drag tables here"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1331910895 = messageFormatterFn((function(  ) {
  return function(d) { return "Exclude"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b413849071 = messageFormatterFn((function(  ) {
  return function(d) { return "finds "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1236739104 = messageFormatterFn((function(  ) {
  return function(d) { return "For example, "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b220028321 = messageFormatterFn((function(  ) {
  return function(d) { return "Include"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1721613038 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau can’t find or recognise this table. Remove or replace the table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1384164934 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a397322336 = messageFormatterFn((function(  ) {
  return function(d) { return "Matching pattern (xxx*)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1681147983 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1220347942 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply and Close (Enter)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b258753697 = messageFormatterFn((function(  ) {
  return function(d) { return "Sales.csv "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b684647769 = messageFormatterFn((function(  ) {
  return function(d) { return "Sales 1999.csv."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a393874174 = messageFormatterFn((function(  ) {
  return function(d) { return "Search In: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b156126709 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand search to parent folder"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b879028034 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand search to subfolders"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a69253655 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1482867287 = messageFormatterFn((function(  ) {
  return function(d) { return "Specific (manual)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b65422970 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables in union: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a86712101 = messageFormatterFn((function(  ) {
  return function(d) { return "Only the first table in your selection will be added because union is not available for this database."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a814305767 = messageFormatterFn((function(  ) {
  return function(d) { return "Use * to match any string of characters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a570724527 = messageFormatterFn((function(  ) {
  return function(d) { return "Wildcard (automatic)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1710792506 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1728010874 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1702975142 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1691880223 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a692876732 = messageFormatterFn((function(  ) {
  return function(d) { return "Do you want to turn off the auto-generated layout and create a custom one?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a825426006 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Layout"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b255972589 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1331354394 = messageFormatterFn((function(  ) {
  return function(d) { return "Don't show this again"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1685524875 = messageFormatterFn((function(  ) {
  return function(d) { return "(All)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1526547169 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Sort"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2057780210 = messageFormatterFn((function(  ) {
  return function(d) { return "Close View Data to see download information."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b984906787 = messageFormatterFn((function(  ) {
  return function(d) { return "Collapse navigation pane"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b186350425 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " custom SQL Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a655715850 = messageFormatterFn((function(  ) {
  return function(d) { return "Download"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2106604592 = messageFormatterFn((function(  ) {
  return function(d) { return "See the Tableau browser window for download information."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1009374886 = messageFormatterFn((function(  ) {
  return function(d) { return "No column data available to download"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a967527863 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand tab pane"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b875900086 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand navigation pane"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748656444 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " field Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631404056 = messageFormatterFn((function(  ) {
  return function(d) { return "Rows count input " + d.value + " was invalid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b987950266 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move column to first";}, other: function() { return "Move columns to first";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1025405458 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Make " + d.fieldName + " column the first column in the table";}, other: function() { return "Make selected columns the first columns in the table";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a41543023 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move column to last";}, other: function() { return "Move columns to last";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a682343035 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Make " + d.fieldName + " column the last column in the table";}, other: function() { return "Make selected columns the last columns in the table";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1116449018 = messageFormatterFn((function(  ) {
  return function(d) { return "Move Left"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1960077933 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move column to left";}, other: function() { return "Move columns to left";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1899980537 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move " + d.fieldName + " column one position to the left";}, other: function() { return "Move selected columns one position to the left";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1395395679 = messageFormatterFn((function(  ) {
  return function(d) { return "Move Right"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236103976 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move column to right";}, other: function() { return "Move columns to right";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a2024366708 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return "Move " + d.fieldName + " column one position to the right";}, other: function() { return "Move selected columns one position to the right";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1502096710 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to First"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a465572243 = messageFormatterFn((function(  ) {
  return function(d) { return "Move to Last"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1032103110 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1787831525 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return d.fieldName + " was removed";}, other: function() { return "Columns were removed";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b718121548 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.rowCount, 0, pluralFuncs["en-GB"], { one: function() { return d.formattedRowCount + " row";}, other: function() { return d.formattedRowCount + " rows";} }) + " " + plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return d.formattedFieldCount + " field";}, other: function() { return d.formattedFieldCount + " fields";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b221793637 = messageFormatterFn((function(  ) {
  return function(d) { return "rows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a928764081 = messageFormatterFn((function(  ) {
  return function(d) { return "Rows count updated to " + d.value; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b201092235 = messageFormatterFn((function(  ) {
  return function(d) { return "Update row limit button"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1055790420 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter the maximum number of rows to display"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a498304890 = messageFormatterFn((function(  ) {
  return function(d) { return d.fieldName + " is now in position " + d.columnPosition; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b258337806 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.fieldCount, 0, pluralFuncs["en-GB"], { one: function() { return d.formattedFieldCount + " field";}, other: function() { return d.formattedFieldCount + " fields";} }) + " selected"; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1387338011 = messageFormatterFn((function(  ) {
  return function(d) { return "Settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1904052501 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Aliases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a189179992 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1844585909 = messageFormatterFn((function(  ) {
  return function(d) { return "Search fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1186576673 = messageFormatterFn((function(  ) {
  return function(d) { return "Select fields to display"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1290651090 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Ascending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a522166264 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort Descending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a442873496 = messageFormatterFn((function(  ) {
  return function(d) { return d.tableName + " Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a649524839 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b178090240 = messageFormatterFn((function(  ) {
  return function(d) { return "Tabs"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1845969099 = messageFormatterFn((function(  ) {
  return function(d) { return "Tab options for what will be displayed in the View Data table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1266877774 = messageFormatterFn((function(  ) {
  return function(d) { return "View Data table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1009327749 = messageFormatterFn((function(  ) {
  return function(d) { return "Alt text description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2106847351 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter descriptive alt text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a513596455 = messageFormatterFn((function(  ) {
  return function(d) { return "Alternative text (alt text) is read aloud to people who use screen reading software. Tableau generates alt text automatically, and you can customise the alt text for your viz."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b836014947 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1586940629 = messageFormatterFn((function(  ) {
  return function(d) { return "Accessibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2004395263 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b615765498 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b547116951 = messageFormatterFn((function(  ) {
  return function(d) { return "Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b467985688 = messageFormatterFn((function(  ) {
  return function(d) { return "Discover"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a907892601 = messageFormatterFn((function(  ) {
  return function(d) { return "Display"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1328090400 = messageFormatterFn((function(  ) {
  return function(d) { return "Change display settings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1033617351 = messageFormatterFn((function(  ) {
  return function(d) { return "Download"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a7288530 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose a format to download"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b516026679 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b381234048 = messageFormatterFn((function(  ) {
  return function(d) { return "More options..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a588493745 = messageFormatterFn((function(  ) {
  return function(d) { return "Visualisation controls"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b97930426 = messageFormatterFn((function(  ) {
  return function(d) { return "Watch"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1047583117 = messageFormatterFn((function(  ) {
  return function(d) { return "Keep track of updates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1815383306 = messageFormatterFn((function(  ) {
  return function(d) { return "Add a tag"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b739786112 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1616205949 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a120723863 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b488292580 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1176121290 = messageFormatterFn((function(  ) {
  return function(d) { return "Insert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a128113992 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b232655969 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1510729090 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter the URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1725217437 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a141478039 = messageFormatterFn((function(  ) {
  return function(d) { return "Alerts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2016094789 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1597118534 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1502105766 = messageFormatterFn((function(  ) {
  return function(d) { return d.COUNT + " of " + d.MAXIMUM + " characters used"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1120674674 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1852078724 = messageFormatterFn((function(  ) {
  return function(d) { return "Close alert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b269323850 = messageFormatterFn((function(  ) {
  return function(d) { return "Close dialog"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1807511674 = messageFormatterFn((function(  ) {
  return function(d) { return ": "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a679557704 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom colour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2091749514 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1414845968 = messageFormatterFn((function(  ) {
  return function(d) { return "Editor Mode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1635446766 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter a valid date."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1409810865 = messageFormatterFn((function(  ) {
  return function(d) { return "Error: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b587343955 = messageFormatterFn((function(  ) {
  return function(d) { return "Formatting Guide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1761664030 = messageFormatterFn((function(  ) {
  return function(d) { return "Bold"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1286675251 = messageFormatterFn((function(  ) {
  return function(d) { return "To get this"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1454546373 = messageFormatterFn((function(  ) {
  return function(d) { return "Type this"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1221683916 = messageFormatterFn((function(  ) {
  return function(d) { return "Image"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2048602468 = messageFormatterFn((function(  ) {
  return function(d) { return "Italics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1480847337 = messageFormatterFn((function(  ) {
  return function(d) { return "Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1315316891 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1325853393 = messageFormatterFn((function(  ) {
  return function(d) { return "Heading 1"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1325852432 = messageFormatterFn((function(  ) {
  return function(d) { return "Heading 2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1325851471 = messageFormatterFn((function(  ) {
  return function(d) { return "Heading 3"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1590163935 = messageFormatterFn((function(  ) {
  return function(d) { return "Info: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a136317273 = messageFormatterFn((function(  ) {
  return function(d) { return "Italics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1216722985 = messageFormatterFn((function(  ) {
  return function(d) { return "Ctrl+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a26900698 = messageFormatterFn((function(  ) {
  return function(d) { return "Shift+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1998055814 = messageFormatterFn((function(  ) {
  return function(d) { return "Link"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1738512647 = messageFormatterFn((function(  ) {
  return function(d) { return "link text"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b81169493 = messageFormatterFn((function(  ) {
  return function(d) { return "URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a779360849 = messageFormatterFn((function(  ) {
  return function(d) { return "More navigation links"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1687513251 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand navigation links"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b188285149 = messageFormatterFn((function(  ) {
  return function(d) { return "Next Month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b592569656 = messageFormatterFn((function(  ) {
  return function(d) { return "No matches."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1082862697 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.optionCount, 0, pluralFuncs["en-GB"], { one: function() { return d.formattedOptionCount + " option";}, other: function() { return d.formattedOptionCount + " options";} }) + " available."; }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b2040748576 = messageFormatterFn((function(  ) {
  return function(d) { return "(optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b261004305 = messageFormatterFn((function(  ) {
  return function(d) { return d.COUNT + " options selected"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1231813697 = messageFormatterFn((function(  ) {
  return function(d) { return "Ordered List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2115945212 = messageFormatterFn((function(  ) {
  return function(d) { return "Paragraph"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a719786910 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1811628769 = messageFormatterFn((function(  ) {
  return function(d) { return "Previous Month"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1986767036 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1030517343 = messageFormatterFn((function(  ) {
  return function(d) { return "(required)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b994968470 = messageFormatterFn((function(  ) {
  return function(d) { return "Waiting for content"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1641231958 = messageFormatterFn((function(  ) {
  return function(d) { return "Success: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1630870421 = messageFormatterFn((function(  ) {
  return function(d) { return "Editing is disabled in preview mode"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1185908078 = messageFormatterFn((function(  ) {
  return function(d) { return "Textile markup guide"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a626475287 = messageFormatterFn((function(  ) {
  return function(d) { return "Textile markup preview"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2005201103 = messageFormatterFn((function(  ) {
  return function(d) { return "Information"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1846453534 = messageFormatterFn((function(  ) {
  return function(d) { return "Underline"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1503026296 = messageFormatterFn((function(  ) {
  return function(d) { return "Unordered List"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1787709626 = messageFormatterFn((function(  ) {
  return function(d) { return "Wait indicator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a427599709 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning: "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a873480797 = messageFormatterFn((function(  ) {
  return function(d) { return "Week " + d.weekNum; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1725128739 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All Cells"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1576955043 = messageFormatterFn((function(  ) {
  return function(d) { return "Select Row"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b105640998 = messageFormatterFn((function(  ) {
  return function(d) { return "Optimise Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1891474199 = messageFormatterFn((function(  ) {
  return function(d) { return "All data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a509386561 = messageFormatterFn((function(  ) {
  return function(d) { return "Laptop"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2103168381 = messageFormatterFn((function(  ) {
  return function(d) { return "Phone"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1158477005 = messageFormatterFn((function(  ) {
  return function(d) { return "Tablet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b193608716 = messageFormatterFn((function(  ) {
  return function(d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b402634713 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1194323792 = messageFormatterFn((function(  ) {
  return function(d) { return "For sensitive data, change permissions on the published workbook to adjust access."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b791987579 = messageFormatterFn((function(  ) {
  return function(d) { return "Building an extract with your data..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a849090693 = messageFormatterFn((function(  ) {
  return function(d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a116358998 = messageFormatterFn((function(  ) {
  return function(d) { return "Creating workbook..."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b9236434 = messageFormatterFn((function(  ) {
  return function(d) { return "For use with"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1093163730 = messageFormatterFn((function(  ) {
  return function(d) { return "Available layouts"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a194475399 = messageFormatterFn((function(  ) {
  return function(d) { return "More like this"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1986096528 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2070447721 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b433077774 = messageFormatterFn((function(  ) {
  return function(d) { return "Create Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b758163983 = messageFormatterFn((function(  ) {
  return function(d) { return "Select project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a423358552 = messageFormatterFn((function(  ) {
  return function(d) { return "Create workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b274504654 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a37894289 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.CONNECTION_TYPE; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b508951516 = messageFormatterFn((function(  ) {
  return function(d) { return "Sign in to " + d.CONNECTION_TYPE + " for " + d.TEMPLATE_NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a416338406 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Sample Data for " + d.TEMPLATE_NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1945529302 = messageFormatterFn((function(  ) {
  return function(d) { return "Preview " + d.TEMPLATE_NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1058353003 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1283998686 = messageFormatterFn((function(  ) {
  return function(d) { return "Start from one of our pre-built dashboards. All you have to do is sign in to your data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1575754317 = messageFormatterFn((function(  ) {
  return function(d) { return "Use Sample Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a449297770 = messageFormatterFn((function(  ) {
  return function(d) { return "Got it"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b344059507 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a706813415 = messageFormatterFn((function(  ) {
  return function(d) { return "Rename Dashboard Item"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a881816655 = messageFormatterFn((function(  ) {
  return function(d) { return "OK"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1737273012 = messageFormatterFn((function(  ) {
  return function(d) { return "Default Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b790703146 = messageFormatterFn((function(  ) {
  return function(d) { return "Add all fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1712196202 = messageFormatterFn((function(  ) {
  return function(d) { return "Add field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1880654711 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1691904855 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1296690464 = messageFormatterFn((function(  ) {
  return function(d) { return "Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1837206945 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter then add field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1504233412 = messageFormatterFn((function(  ) {
  return function(d) { return "Estimated number of unique values to be displayed: " + d.totalCount; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b66275406 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1929418236 = messageFormatterFn((function(  ) {
  return function(d) { return "Members"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1948253685 = messageFormatterFn((function(  ) {
  return function(d) { return "Estimated unique values"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2023586096 = messageFormatterFn((function(  ) {
  return function(d) { return "Adding these fields might yield " + d.totalCount + " unique values. The recommended maximum for this shelf is " + d.maxCount + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b726440207 = messageFormatterFn((function(  ) {
  return function(d) { return "Pause automatic updates"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236817813 = messageFormatterFn((function(  ) {
  return function(d) { return "You can reduce the number of values by filtering dimensions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2060161017 = messageFormatterFn((function(  ) {
  return function(d) { return "You can reduce the number of values by filtering this dimension."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1573534387 = messageFormatterFn((function(  ) {
  return function(d) { return "Adding this field might yield " + d.totalCount + " unique values. The recommended maximum for this shelf is " + d.maxCount + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b503492498 = messageFormatterFn((function(  ) {
  return function(d) { return "You can reduce the number of values by filtering dimensions or only using related dimensions in the view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b905075560 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a497710305 = messageFormatterFn((function(  ) {
  return function(d) { return "Unrelated dimensions show all possible value combinations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1232960278 = messageFormatterFn((function(  ) {
  return function(d) { return "Send"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a273007707 = messageFormatterFn((function(  ) {
  return function(d) { return "Was this helpful?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1128676425 = messageFormatterFn((function(  ) {
  return function(d) { return "Provide Additional Feedback"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b723783242 = messageFormatterFn((function(  ) {
  return function(d) { return "Helpful output"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b357319363 = messageFormatterFn((function(  ) {
  return function(d) { return "Not helpful output"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b625552602 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1642845837 = messageFormatterFn((function(  ) {
  return function(d) { return "Why wasn't it helpful?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b688829528 = messageFormatterFn((function(  ) {
  return function(d) { return "Your response helps us improve model performance and the user experience."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b677466156 = messageFormatterFn((function(  ) {
  return function(d) { return "Biased, toxic, or harmful"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1905720683 = messageFormatterFn((function(  ) {
  return function(d) { return "Inaccurate"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1556489882 = messageFormatterFn((function(  ) {
  return function(d) { return "Incomplete"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b292341144 = messageFormatterFn((function(  ) {
  return function(d) { return "Inappropriate style or tone"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b971344748 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1545554299 = messageFormatterFn((function(  ) {
  return function(d) { return "Tell us more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1731779917 = messageFormatterFn((function(  ) {
  return function(d) { return "We value your feedback. Add comments here."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b129875152 = messageFormatterFn((function(  ) {
  return function(d) { return "Continue working"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1392674797 = messageFormatterFn((function(  ) {
  return function(d) { return "You’ve made changes. Are you sure you want to abandon them?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1589434143 = messageFormatterFn((function(  ) {
  return function(d) { return "Abandon changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a278774510 = messageFormatterFn((function(  ) {
  return function(d) { return "Abandon changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b292279042 = messageFormatterFn((function(  ) {
  return function(d) { return "About"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b167804690 = messageFormatterFn((function(  ) {
  return function(d) { return "Actions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b478223470 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1436698959 = messageFormatterFn((function(  ) {
  return function(d) { return "All Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2019840086 = messageFormatterFn((function(  ) {
  return function(d) { return "Any time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b944672330 = messageFormatterFn((function(  ) {
  return function(d) { return "API Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a592070285 = messageFormatterFn((function(  ) {
  return function(d) { return "Selected Labels (" + d.total + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a109189279 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b706871667 = messageFormatterFn((function(  ) {
  return function(d) { return "Author"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b766704759 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to calculated insight"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b984258328 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to external assets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1572630912 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to data lake"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b225001490 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to data model"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b942551262 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b314970144 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1533099939 = messageFormatterFn((function(  ) {
  return function(d) { return "Back to table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1570637809 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba AnalyticDB for MySQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b432036536 = messageFormatterFn((function(  ) {
  return function(d) { return "Aster Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a492173324 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Athena"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1675322889 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Aurora"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a926627295 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon EMR Hadoop Hive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a391032701 = messageFormatterFn((function(  ) {
  return function(d) { return "Azure SQL Data Warehouse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b733380367 = messageFormatterFn((function(  ) {
  return function(d) { return "Google BigQuery"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1046777847 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM BigInsights"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b131976168 = messageFormatterFn((function(  ) {
  return function(d) { return "Box"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1138816868 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Box)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b783662634 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Box)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a927877397 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Box)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1087314891 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Dropbox)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a757797511 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Dropbox)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b575845436 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Dropbox)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b408329546 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (Google Drive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a726671100 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (Google Drive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1006780369 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (Google Drive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1030893077 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (OneDrive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b399810457 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file (OneDrive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1904471580 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file (OneDrive)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b281299884 = messageFormatterFn((function(  ) {
  return function(d) { return "TIBCO Data Virtualisation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b130935405 = messageFormatterFn((function(  ) {
  return function(d) { return "Text File (legacy)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1328975204 = messageFormatterFn((function(  ) {
  return function(d) { return "Customer Data Platform"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1562975525 = messageFormatterFn((function(  ) {
  return function(d) { return "Databricks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1105216747 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Data Engine"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b130583679 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM DB2"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1178709366 = messageFormatterFn((function(  ) {
  return function(d) { return "Denodo"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1133573015 = messageFormatterFn((function(  ) {
  return function(d) { return "Denormalised Cube"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1205843109 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba Data Lake Analytics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b425783768 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Drill"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b18650743 = messageFormatterFn((function(  ) {
  return function(d) { return "Dropbox"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1229878173 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Essbase"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1215893804 = messageFormatterFn((function(  ) {
  return function(d) { return "Exasol"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a627745156 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel (legacy)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1563110822 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1618788532 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Excel Reader"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b158977903 = messageFormatterFn((function(  ) {
  return function(d) { return "Federated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2128779432 = messageFormatterFn((function(  ) {
  return function(d) { return "Firebird"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b242010145 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Databases (JDBC)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b98864390 = messageFormatterFn((function(  ) {
  return function(d) { return "Other Databases (ODBC)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1976301015 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Analytics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1970990137 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1389542181 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Cloud SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b440890946 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Drive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b855605020 = messageFormatterFn((function(  ) {
  return function(d) { return "Pivotal Greenplum Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a777913214 = messageFormatterFn((function(  ) {
  return function(d) { return "Cloudera Hadoop"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a369942937 = messageFormatterFn((function(  ) {
  return function(d) { return "Apache Hive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1829188796 = messageFormatterFn((function(  ) {
  return function(d) { return "Hortonworks Hadoop Hive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b964070407 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Data Engine"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b142524813 = messageFormatterFn((function(  ) {
  return function(d) { return "Impala"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a515950714 = messageFormatterFn((function(  ) {
  return function(d) { return "In-memory Federating"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a421985892 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a840654725 = messageFormatterFn((function(  ) {
  return function(d) { return "Kognitio"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1704280633 = messageFormatterFn((function(  ) {
  return function(d) { return "Kyvos"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1788776980 = messageFormatterFn((function(  ) {
  return function(d) { return "MapR Hadoop Hive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b503009023 = messageFormatterFn((function(  ) {
  return function(d) { return "MariaDB"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1670414338 = messageFormatterFn((function(  ) {
  return function(d) { return "MarkLogic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1515056716 = messageFormatterFn((function(  ) {
  return function(d) { return "Alibaba MaxCompute"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b340417470 = messageFormatterFn((function(  ) {
  return function(d) { return "MemSQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1225485242 = messageFormatterFn((function(  ) {
  return function(d) { return "MonetDB"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1172844545 = messageFormatterFn((function(  ) {
  return function(d) { return "MongoDB BI Connector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1417114829 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Access"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b749946981 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft Analysis Services"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b818397009 = messageFormatterFn((function(  ) {
  return function(d) { return "MySQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a332554556 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2050043782 = messageFormatterFn((function(  ) {
  return function(d) { return "IBM PDA (Netezza)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a338853606 = messageFormatterFn((function(  ) {
  return function(d) { return "OData"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a565131647 = messageFormatterFn((function(  ) {
  return function(d) { return "unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b120214489 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial File"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a253133008 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1660786419 = messageFormatterFn((function(  ) {
  return function(d) { return "OneDrive"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1439367335 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1751519664 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Matrix"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b119391873 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1268496295 = messageFormatterFn((function(  ) {
  return function(d) { return "PDF Reader"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a267808866 = messageFormatterFn((function(  ) {
  return function(d) { return "PostgreSQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a557883078 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft PowerPivot"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b983248748 = messageFormatterFn((function(  ) {
  return function(d) { return "Presto"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a802975837 = messageFormatterFn((function(  ) {
  return function(d) { return "Progress OpenEdge"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1774311832 = messageFormatterFn((function(  ) {
  return function(d) { return "QuBole Presto"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b470049414 = messageFormatterFn((function(  ) {
  return function(d) { return "Amazon Redshift"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a91802154 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b175255224 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a858556341 = messageFormatterFn((function(  ) {
  return function(d) { return "Salesforce Data Cloud"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b478648700 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP NetWeaver Business Warehouse"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b266173477 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP HANA"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1272931898 = messageFormatterFn((function(  ) {
  return function(d) { return ""; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b100308008 = messageFormatterFn((function(  ) {
  return function(d) { return "JSON file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1918155898 = messageFormatterFn((function(  ) {
  return function(d) { return "SharePoint Lists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1617932895 = messageFormatterFn((function(  ) {
  return function(d) { return "Snowflake"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b62599126 = messageFormatterFn((function(  ) {
  return function(d) { return "Spark SQL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1622723892 = messageFormatterFn((function(  ) {
  return function(d) { return "Splunk"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2101230729 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1216986658 = messageFormatterFn((function(  ) {
  return function(d) { return "Microsoft SQL Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a694411133 = messageFormatterFn((function(  ) {
  return function(d) { return "Statistical File"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1770939839 = messageFormatterFn((function(  ) {
  return function(d) { return "Statistical file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a243714409 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase ASE"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b130451192 = messageFormatterFn((function(  ) {
  return function(d) { return "SAP Sybase IQ"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a706650429 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata OLAP Connector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1150238541 = messageFormatterFn((function(  ) {
  return function(d) { return "Teradata"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1090187831 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a830120403 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1326868091 = messageFormatterFn((function(  ) {
  return function(d) { return "Text file reader"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1645764176 = messageFormatterFn((function(  ) {
  return function(d) { return "Actian Vector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b886645181 = messageFormatterFn((function(  ) {
  return function(d) { return "Vertica"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a166062710 = messageFormatterFn((function(  ) {
  return function(d) { return "VizEngine"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b179237493 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a440737907 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a404246483 = messageFormatterFn((function(  ) {
  return function(d) { return "ServiceNow ITSM"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a400385775 = messageFormatterFn((function(  ) {
  return function(d) { return "Anaplan"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2143410548 = messageFormatterFn((function(  ) {
  return function(d) { return "Google Ads"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1287511873 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online (9.3-2018.1)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2143841747 = messageFormatterFn((function(  ) {
  return function(d) { return "Intuit QuickBooks Online"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1831222239 = messageFormatterFn((function(  ) {
  return function(d) { return "LinkedIn Sales Navigator"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1034610853 = messageFormatterFn((function(  ) {
  return function(d) { return "Marketo"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1330921898 = messageFormatterFn((function(  ) {
  return function(d) { return "Oracle Eloqua"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1348376875 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculated Insight"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1149913730 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculated Insights"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2081771263 = messageFormatterFn((function(  ) {
  return function(d) { return "Cancel"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1965543189 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b497682353 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified by"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b320054184 = messageFormatterFn((function(  ) {
  return function(d) { return d.characters + " characters remaining"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a331349018 = messageFormatterFn((function(  ) {
  return function(d) { return d.total + "/" + d.maximum; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1696861514 = messageFormatterFn((function(  ) {
  return function(d) { return "Character limit exceeded " + d.total + "/" + d.maximum; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1759186878 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a774517657 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1371110634 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a445319411 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1957251021 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1851952208 = messageFormatterFn((function(  ) {
  return function(d) { return ": "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1581526235 = messageFormatterFn((function(  ) {
  return function(d) { return "Column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2038233550 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "On " + plural(d.COLUMN_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COLUMN_COUNT_LOC + " column in table";}, other: function() { return d.COLUMN_COUNT_LOC + " columns in table";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b986413833 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b226018883 = messageFormatterFn((function(  ) {
  return function(d) { return "Column Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1911842792 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1523655345 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2011038387 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a802894503 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return "On " + plural(d.COLUMN_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COLUMN_COUNT_LOC + " column in table";}, other: function() { return d.COLUMN_COUNT_LOC + " columns";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1782749134 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a711396369 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1288936355 = messageFormatterFn((function(  ) {
  return function(d) { return "Combined fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1852803654 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b772203627 = messageFormatterFn((function(  ) {
  return function(d) { return "Connect"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2114746896 = messageFormatterFn((function(  ) {
  return function(d) { return "Content Type:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a934740120 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1017500237 = messageFormatterFn((function(  ) {
  return function(d) { return "Connecting to this data isn’t supported."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b798536246 = messageFormatterFn((function(  ) {
  return function(d) { return "You don’t have permissions to connect to this data."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1988473319 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1392037135 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected data source field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1272262602 = messageFormatterFn((function(  ) {
  return function(d) { return "Connected field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1658281411 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1259517421 = messageFormatterFn((function(  ) {
  return function(d) { return "All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b401428915 = messageFormatterFn((function(  ) {
  return function(d) { return "Add"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a101502874 = messageFormatterFn((function(  ) {
  return function(d) { return "Add label message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1080347061 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1022717175 = messageFormatterFn((function(  ) {
  return function(d) { return "If you remove the label, the message will be deleted and can’t be recovered. Are you sure you want to remove the label?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a984223455 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove Label and Delete Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a965085349 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit label message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b337499589 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred when updating data label for asset “" + d.CONTENT_NAME + "”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b516771867 = messageFormatterFn((function(  ) {
  return function(d) { return "Label message updated. There might be a delay before you see your changes."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1198063685 = messageFormatterFn((function(  ) {
  return function(d) { return "No custom label categories exist. To see more data labels, an administrator must add them first."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b731886060 = messageFormatterFn((function(  ) {
  return function(d) { return "No custom labels info icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1473118304 = messageFormatterFn((function(  ) {
  return function(d) { return "Data labels updated on asset “" + d.CONTENT_NAME + "”. There might be a delay before you see your changes. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1442884686 = messageFormatterFn((function(  ) {
  return function(d) { return "More Data Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1892350243 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom Label Dialog Info Tooltip"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1058665998 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose other data labels to apply. These labels don’t appear on downstream assets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b874914740 = messageFormatterFn((function(  ) {
  return function(d) { return "Select…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1956968613 = messageFormatterFn((function(  ) {
  return function(d) { return "Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1621355528 = messageFormatterFn((function(  ) {
  return function(d) { return "No valid custom labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1784809140 = messageFormatterFn((function(  ) {
  return function(d) { return "Applied Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1908026160 = messageFormatterFn((function(  ) {
  return function(d) { return "Messages (optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b80230787 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Message (Optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1615428782 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Custom SQL Query"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1519305176 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom SQL Query"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a588831275 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to copy to clipboard. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a95308516 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom SQL is used in this embedded data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1798898531 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom SQL is used in this flow."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1828484076 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom SQL is used in this data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b351388790 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom SQL is used in this connection."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b782089838 = messageFormatterFn((function(  ) {
  return function(d) { return "“" + d.queryName + "” copied to clipboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1247737612 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream lineage might be incomplete when an embedded data source uses custom SQL."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b917990005 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream lineage might be incomplete when a flow uses custom SQL."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b462920468 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream lineage might be incomplete when a data source uses custom SQL."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1850415345 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warnings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1227247268 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b961239557 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboards (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1040250822 = messageFormatterFn((function(  ) {
  return function(d) { return "Category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1619198341 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Cloud Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2009848032 = messageFormatterFn((function(  ) {
  return function(d) { return "Object API Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a178947066 = messageFormatterFn((function(  ) {
  return function(d) { return "CreatedBy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1459391409 = messageFormatterFn((function(  ) {
  return function(d) { return "Object Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1344535086 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Cloud Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a176051633 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Cloud Objects (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b227875370 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for the Data Details pane is being processed, which may take some time. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2052131018 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1138868937 = messageFormatterFn((function(  ) {
  return function(d) { return "✔ Copied to clipboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b127550764 = messageFormatterFn((function(  ) {
  return function(d) { return "Expand Calculation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a83450142 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified data source (extract)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b97271483 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified data source (live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1693682210 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified virtual connection table (extract)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1317264517 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified virtual connection table (live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a313370281 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (extract)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b577349734 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source (live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1785341694 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1845355850 = messageFormatterFn((function(  ) {
  return function(d) { return "Data couldn’t be loaded.\n\nIf you are the content owner, try republishing.\n\nIf republishing doesn’t fix the problem, contact the Tableau administrator."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1658371363 = messageFormatterFn((function(  ) {
  return function(d) { return "The server encountered an error. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b866634401 = messageFormatterFn((function(  ) {
  return function(d) { return "The request was for too many results."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2109966957 = messageFormatterFn((function(  ) {
  return function(d) { return "Request size limit exceeded"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1697216771 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1864791772 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1198831780 = messageFormatterFn((function(  ) {
  return function(d) { return "Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a401782800 = messageFormatterFn((function(  ) {
  return function(d) { return "The server is busy."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1705222166 = messageFormatterFn((function(  ) {
  return function(d) { return "Can’t show all results from the query.\n\nTry again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1883550018 = messageFormatterFn((function(  ) {
  return function(d) { return "Timeout limit exceeded"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1529230615 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual connection table (extract)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a641112922 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual connection table (live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1627944963 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Lake Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1073389804 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Lake Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b9902225 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Model Object"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b306892870 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Model Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1885014127 = messageFormatterFn((function(  ) {
  return function(d) { return "Set by " + d.name; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b900966475 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified by " + d.name; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a467037125 = messageFormatterFn((function(  ) {
  return function(d) { return "On this asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1465867724 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1232312098 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.MESSAGE_COUNT_LOC + " data quality warning";}, other: function() { return d.MESSAGE_COUNT_LOC + " data quality warnings";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a138733888 = messageFormatterFn((function(  ) {
  return function(d) { return "On this column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b4275384 = messageFormatterFn((function(  ) {
  return function(d) { return "On this connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b319802779 = messageFormatterFn((function(  ) {
  return function(d) { return "On this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1081538287 = messageFormatterFn((function(  ) {
  return function(d) { return "On this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1673072424 = messageFormatterFn((function(  ) {
  return function(d) { return "On this flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1112679430 = messageFormatterFn((function(  ) {
  return function(d) { return "On this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1295413811 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2144116752 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1913739814 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1804398501 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a221965315 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a393132421 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this metric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1798915631 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a676963258 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b16933809 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b598181539 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1514353427 = messageFormatterFn((function(  ) {
  return function(d) { return "Deprecated"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b263710010 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract refresh failed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b512811859 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow run failed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1578781129 = messageFormatterFn((function(  ) {
  return function(d) { return "Under maintenance"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a735910934 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitive data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1584748273 = messageFormatterFn((function(  ) {
  return function(d) { return "Stale data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1947288174 = messageFormatterFn((function(  ) {
  return function(d) { return "Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1520484820 = messageFormatterFn((function(  ) {
  return function(d) { return "By " + d.displayName + " on " + d.updatedAt; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1503830594 = messageFormatterFn((function(  ) {
  return function(d) { return "Quality Warning…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2075853916 = messageFormatterFn((function(  ) {
  return function(d) { return "All assets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a961723201 = messageFormatterFn((function(  ) {
  return function(d) { return "Assets without warnings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b993355425 = messageFormatterFn((function(  ) {
  return function(d) { return "Assets with warnings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1704179106 = messageFormatterFn((function(  ) {
  return function(d) { return "Quality Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1038432403 = messageFormatterFn((function(  ) {
  return function(d) { return "Warnings"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2032625702 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Streams"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1070793920 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1939453918 = messageFormatterFn((function(  ) {
  return function(d) { return "Category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1788853073 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b365035349 = messageFormatterFn((function(  ) {
  return function(d) { return "Database Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1121038521 = messageFormatterFn((function(  ) {
  return function(d) { return d.databaseName + " (" + d.databaseHostName + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1437836416 = messageFormatterFn((function(  ) {
  return function(d) { return "Database (" + d.type + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1165202953 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1550996727 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b171021514 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases and Files (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a274784310 = messageFormatterFn((function(  ) {
  return function(d) { return "Databases (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a933557514 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1772558626 = messageFormatterFn((function(  ) {
  return function(d) { return "Connects to"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a712387409 = messageFormatterFn((function(  ) {
  return function(d) { return "Last Refreshed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b724552678 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1705235631 = messageFormatterFn((function(  ) {
  return function(d) { return "Live Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b851080350 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source Place Page"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1124412033 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b848648832 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1761924810 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b876711056 = messageFormatterFn((function(  ) {
  return function(d) { return "There are “" + d.NAME + "” labels attached to " + d.ITEM_COUNT + " assets. If you delete the “" + d.NAME + "” label, you’ll also remove the label from those assets. Are you sure you want to delete the label?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1817436664 = messageFormatterFn((function(  ) {
  return function(d) { return "Are you sure you want to delete the label?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a656911661 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b4709902 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (Data Source)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a128967035 = messageFormatterFn((function(  ) {
  return function(d) { return "Description is inherited"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b677705995 = messageFormatterFn((function(  ) {
  return function(d) { return "Description inherited from column " + d.column + " in table " + d.table + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1706959392 = messageFormatterFn((function(  ) {
  return function(d) { return "Description inherited from column " + d.column + " in table " + d.table + " to field " + d.field + " in data source " + d.datasource + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1076657617 = messageFormatterFn((function(  ) {
  return function(d) { return "Description inherited from field " + d.field + " in data source " + d.datasource + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a126735585 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited from column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1758923026 = messageFormatterFn((function(  ) {
  return function(d) { return "in data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a271545113 = messageFormatterFn((function(  ) {
  return function(d) { return "in table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1799508551 = messageFormatterFn((function(  ) {
  return function(d) { return "Description (Workbook)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2145715294 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1146867174 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Dashboards"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a19738873 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Dashboards (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1439704711 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Databases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a860618104 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Databases (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a678772349 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b503088574 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Published Data Sources (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1779879948 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1752023381 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Flows (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a575001203 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Lenses"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b591725812 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Lenses (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b157567182 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1013908179 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metrics (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a291119975 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Owners"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1837137048 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Owners (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2012829381 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753616196 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Sheets (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2027520108 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2071923895 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables and Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a812149494 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables and Objects (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2020144435 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1161206729 = messageFormatterFn((function(  ) {
  return function(d) { return "Users"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1459363907 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Virtual Connection Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1672888578 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Virtual Connection Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1507857391 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b8334546 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Virtual Connections (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1128353240 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a985265911 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Workbooks (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b109624253 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1640856345 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Description…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b868939566 = messageFormatterFn((function(  ) {
  return function(d) { return "Draft with Einstein"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1397874984 = messageFormatterFn((function(  ) {
  return function(d) { return "Asset Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a579279254 = messageFormatterFn((function(  ) {
  return function(d) { return "Describe the asset."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b526141669 = messageFormatterFn((function(  ) {
  return function(d) { return "Describe the asset, or have Einstein draft a description for you."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a274571533 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b809232120 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit tags"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1276257735 = messageFormatterFn((function(  ) {
  return function(d) { return "New Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a137302618 = messageFormatterFn((function(  ) {
  return function(d) { return "Message"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a318871957 = messageFormatterFn((function(  ) {
  return function(d) { return "Subject"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1716158537 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1989383269 = messageFormatterFn((function(  ) {
  return function(d) { return "This table or file is embedded in the published asset on the server, and you can’t create a new workbook from it. Files embedded in workbooks aren’t shared with other Tableau site users."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a854574357 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2107301546 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded Data Sources (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1209783274 = messageFormatterFn((function(  ) {
  return function(d) { return "This column is not used by any fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1425914236 = messageFormatterFn((function(  ) {
  return function(d) { return "This column is not used by any flows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1108991137 = messageFormatterFn((function(  ) {
  return function(d) { return "You’ve filtered out all the content."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1362484755 = messageFormatterFn((function(  ) {
  return function(d) { return "There is nothing here yet."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b663572628 = messageFormatterFn((function(  ) {
  return function(d) { return "There is nothing here yet."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1551727029 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream dashboards."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a418456004 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream databases."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1793215878 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1040111444 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream dashboards."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2135963629 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream databases."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b535829917 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1507383322 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream flows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a547146745 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream lenses."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1535487960 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream metrics."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a933382125 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream owners."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1322221375 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1194872242 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2076576675 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream virtual connection tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2111921641 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream virtual connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a569998670 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream workbooks."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1590803087 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream flows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1007351422 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream lenses."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a590685039 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream metrics."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b621116042 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream owners."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1418247754 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b359625925 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b396267206 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream virtual connection tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1105077728 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream virtual connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1147508955 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream workbooks."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a990958954 = messageFormatterFn((function(  ) {
  return function(d) { return "This field is not used by any columns."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1707302606 = messageFormatterFn((function(  ) {
  return function(d) { return "This field does not reference any fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1489661745 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage can’t be determined until the flow is successfully run."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b981752328 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream data cloud objects."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1982846869 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream databases."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1247128417 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b124684625 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream data cloud Objects."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b194140268 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream databases."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2087713718 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1594477759 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream flows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1121266254 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream lenses."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b473540757 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b78148854 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream virtual connection tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1315512752 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no upstream virtual connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a980465560 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream flows."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1392565307 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream lenses."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2040290804 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1449113695 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream virtual connection tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b323854503 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no upstream virtual connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1869369827 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage isn’t available for virtual connections with no tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1638215116 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage isn’t available for workbooks with no embedded data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2060458287 = messageFormatterFn((function(  ) {
  return function(d) { return "enter search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b576575303 = messageFormatterFn((function(  ) {
  return function(d) { return "Error"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b29485422 = messageFormatterFn((function(  ) {
  return function(d) { return "Still loading lineage information. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a897509643 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Still loading lineage information. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1009613969 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalogue isn’t fully configured. Ask your Tableau administrator to run the “tsm maintenance metadata-services enable” command."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1072704354 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page not available. If you are the content owner, try republishing."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1543481627 = messageFormatterFn((function(  ) {
  return function(d) { return "The server encountered an error. Try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1703752709 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page not found. It may still be loading, or you don’t have permissions to view it."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b599820124 = messageFormatterFn((function(  ) {
  return function(d) { return "Information for this page could not be loaded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b217622999 = messageFormatterFn((function(  ) {
  return function(d) { return "Request size limit exceeded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1498468308 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request size limit exceeded."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1283161236 = messageFormatterFn((function(  ) {
  return function(d) { return "Request rate limit exceeded. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1688439695 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request rate limit exceeded. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1386792836 = messageFormatterFn((function(  ) {
  return function(d) { return "Your session timed out. Reopen the dialog to connect."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b7134722 = messageFormatterFn((function(  ) {
  return function(d) { return "Request time limit exceeded. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1055138079 = messageFormatterFn((function(  ) {
  return function(d) { return "Showing partial results. Request time limit exceeded. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b794852922 = messageFormatterFn((function(  ) {
  return function(d) { return "An unexpected error occurred."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1755650227 = messageFormatterFn((function(  ) {
  return function(d) { return "External Assets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2109328944 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a216350645 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b857786390 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1390728408 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b561863020 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2052143711 = messageFormatterFn((function(  ) {
  return function(d) { return "Datetime"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b175244178 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b157920124 = messageFormatterFn((function(  ) {
  return function(d) { return "Real"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1130807628 = messageFormatterFn((function(  ) {
  return function(d) { return "Spatial"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1219279735 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1060920382 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1646432696 = messageFormatterFn((function(  ) {
  return function(d) { return "Tuple"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a478123130 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1333312163 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a393019271 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b33075864 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a483757650 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b425188534 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date & Time Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1377203380 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date & Time Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a955656661 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Date & Time Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1128619521 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Date & Time Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1118262931 = messageFormatterFn((function(  ) {
  return function(d) { return "Field details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753288880 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a554736787 = messageFormatterFn((function(  ) {
  return function(d) { return "Aggregation param"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1665706062 = messageFormatterFn((function(  ) {
  return function(d) { return "Autogenerated?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1342775946 = messageFormatterFn((function(  ) {
  return function(d) { return "Bin size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a539420471 = messageFormatterFn((function(  ) {
  return function(d) { return "Combination type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1397364784 = messageFormatterFn((function(  ) {
  return function(d) { return "Data category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b984310132 = messageFormatterFn((function(  ) {
  return function(d) { return "Data type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a300050214 = messageFormatterFn((function(  ) {
  return function(d) { return "Default format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1655875925 = messageFormatterFn((function(  ) {
  return function(d) { return "Delimiter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1643472458 = messageFormatterFn((function(  ) {
  return function(d) { return "Folder"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1894334900 = messageFormatterFn((function(  ) {
  return function(d) { return "Formula"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1408253794 = messageFormatterFn((function(  ) {
  return function(d) { return "Has “Other”?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1706255794 = messageFormatterFn((function(  ) {
  return function(d) { return "Has user reference?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a583056370 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1946333385 = messageFormatterFn((function(  ) {
  return function(d) { return "No"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2062628098 = messageFormatterFn((function(  ) {
  return function(d) { return "Role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1912429412 = messageFormatterFn((function(  ) {
  return function(d) { return "Semantic role"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a216729717 = messageFormatterFn((function(  ) {
  return function(d) { return "Yes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a557576538 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter by field name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1089317024 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Geographic Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1988802122 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Geographic Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2006571243 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Geographic Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b309649771 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Geographic Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1654284694 = messageFormatterFn((function(  ) {
  return function(d) { return "Group Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1988919069 = messageFormatterFn((function(  ) {
  return function(d) { return "Geographic Group Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2033709920 = messageFormatterFn((function(  ) {
  return function(d) { return "Hierarchy Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2119940553 = messageFormatterFn((function(  ) {
  return function(d) { return d.FieldName + " (Count)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1011472648 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Number Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b259159070 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Number Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a520434819 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Number Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b288849875 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Number Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1020707444 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Numeric Bin Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b690563490 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Numeric Bin Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a66778652 = messageFormatterFn((function(  ) {
  return function(d) { return "Nominal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b204810639 = messageFormatterFn((function(  ) {
  return function(d) { return "Ordinal"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b170781459 = messageFormatterFn((function(  ) {
  return function(d) { return "Quantitative"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1221375498 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1920793400 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimension"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1152447360 = messageFormatterFn((function(  ) {
  return function(d) { return "Measure"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a209782892 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2100593549 = messageFormatterFn((function(  ) {
  return function(d) { return "Set Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a764001500 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Text Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1834306246 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Text Calculated Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b4760473 = messageFormatterFn((function(  ) {
  return function(d) { return "Continuous Text Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b856993519 = messageFormatterFn((function(  ) {
  return function(d) { return "Discrete Text Field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2000617845 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1275956094 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1421557345 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a617237750 = messageFormatterFn((function(  ) {
  return function(d) { return "This file type can contain multiple tables."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1118882580 = messageFormatterFn((function(  ) {
  return function(d) { return "File Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1061412858 = messageFormatterFn((function(  ) {
  return function(d) { return "File Path"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2121128965 = messageFormatterFn((function(  ) {
  return function(d) { return "This file type can only contain a single table."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b924853797 = messageFormatterFn((function(  ) {
  return function(d) { return "File Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1832355649 = messageFormatterFn((function(  ) {
  return function(d) { return "File (" + d.type + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a47427944 = messageFormatterFn((function(  ) {
  return function(d) { return "Files"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1483777149 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter: " + d.filteredItemName; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1651842031 = messageFormatterFn((function(  ) {
  return function(d) { return "You’ve filtered out all the content"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b17298212 = messageFormatterFn((function(  ) {
  return function(d) { return "Filtered"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1247472532 = messageFormatterFn((function(  ) {
  return function(d) { return "Filters: " + d.count; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1796710605 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b84274315 = messageFormatterFn((function(  ) {
  return function(d) { return "Output column information is not available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a151560081 = messageFormatterFn((function(  ) {
  return function(d) { return "Output field information is not available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a177870143 = messageFormatterFn((function(  ) {
  return function(d) { return "Outputs to column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a827162183 = messageFormatterFn((function(  ) {
  return function(d) { return "Outputs to field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1260112466 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow parameters are not yet supported in the lineage graph. Only the last flow run is reflected."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a136622198 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1032990825 = messageFormatterFn((function(  ) {
  return function(d) { return "Flows (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a584058815 = messageFormatterFn((function(  ) {
  return function(d) { return "Full Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a557488026 = messageFormatterFn((function(  ) {
  return function(d) { return "content item"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a96638508 = messageFormatterFn((function(  ) {
  return function(d) { return " " + d.count + "+"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b869151259 = messageFormatterFn((function(  ) {
  return function(d) { return "Certified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b44011493 = messageFormatterFn((function(  ) {
  return function(d) { return "Columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b439075691 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b914991552 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2073403720 = messageFormatterFn((function(  ) {
  return function(d) { return "Data is"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b66959024 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1911853579 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1956938221 = messageFormatterFn((function(  ) {
  return function(d) { return "Connects To"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1690957726 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b613658498 = messageFormatterFn((function(  ) {
  return function(d) { return "Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1110828794 = messageFormatterFn((function(  ) {
  return function(d) { return "Database name/Path"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a44134915 = messageFormatterFn((function(  ) {
  return function(d) { return "Database name/path"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1638514508 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b875129094 = messageFormatterFn((function(  ) {
  return function(d) { return "Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a803993673 = messageFormatterFn((function(  ) {
  return function(d) { return "Live/Last extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1600798254 = messageFormatterFn((function(  ) {
  return function(d) { return "Live/Last Extract"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2012867507 = messageFormatterFn((function(  ) {
  return function(d) { return "Location"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1940637731 = messageFormatterFn((function(  ) {
  return function(d) { return "Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1439821697 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a820087350 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b34919743 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned virtual connection tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1221512845 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned virtual connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2094781484 = messageFormatterFn((function(  ) {
  return function(d) { return "Owned workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1548571185 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1207256151 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a477080475 = messageFormatterFn((function(  ) {
  return function(d) { return "Server"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b978195869 = messageFormatterFn((function(  ) {
  return function(d) { return "Server/Path"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1542806772 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a844303987 = messageFormatterFn((function(  ) {
  return function(d) { return "Source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1770120422 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2112247345 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2134666514 = messageFormatterFn((function(  ) {
  return function(d) { return "Type"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2118129219 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1662528967 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a268118226 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b278193481 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1217530167 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1239904420 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + " (grouped)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1466999640 = messageFormatterFn((function(  ) {
  return function(d) { return "Grouped fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1543817562 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden User"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1186822136 = messageFormatterFn((function(  ) {
  return function(d) { return "Hostname"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a688771258 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b870419102 = messageFormatterFn((function(  ) {
  return function(d) { return "Add New Category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1988017776 = messageFormatterFn((function(  ) {
  return function(d) { return "Built-in Categories"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a716362307 = messageFormatterFn((function(  ) {
  return function(d) { return "Label category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a553852263 = messageFormatterFn((function(  ) {
  return function(d) { return "Similar category name already exists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1723132182 = messageFormatterFn((function(  ) {
  return function(d) { return "You can’t change the category of a built-in label."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b586929541 = messageFormatterFn((function(  ) {
  return function(d) { return d.Category + " created. There may be a delay before you see your changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1129988254 = messageFormatterFn((function(  ) {
  return function(d) { return "Data labels with custom categories don’t appear on downstream assets. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a667414159 = messageFormatterFn((function(  ) {
  return function(d) { return "Category description (required)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a904298825 = messageFormatterFn((function(  ) {
  return function(d) { return "Category description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1349264730 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1613405742 = messageFormatterFn((function(  ) {
  return function(d) { return "Category name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1472630528 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity labels also appear on downstream assets. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1160471438 = messageFormatterFn((function(  ) {
  return function(d) { return d.Category + " updated. There may be a delay before you see your changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b369862877 = messageFormatterFn((function(  ) {
  return function(d) { return "Data quality warnings also appear on downstream assets. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a833150962 = messageFormatterFn((function(  ) {
  return function(d) { return "Custom Categories"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2062057548 = messageFormatterFn((function(  ) {
  return function(d) { return "Show Less"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2099878664 = messageFormatterFn((function(  ) {
  return function(d) { return "Show More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1604908521 = messageFormatterFn((function(  ) {
  return function(d) { return "+ " + d.MESSAGE_COUNT; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b256129811 = messageFormatterFn((function(  ) {
  return function(d) { return "Label description (required)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b214191618 = messageFormatterFn((function(  ) {
  return function(d) { return "Message (optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1218944275 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit Category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1319289647 = messageFormatterFn((function(  ) {
  return function(d) { return "New Category"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1438358779 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to retrieve data. Lineage information may still be loading. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1963497890 = messageFormatterFn((function(  ) {
  return function(d) { return "Label value"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1104578664 = messageFormatterFn((function(  ) {
  return function(d) { return "Similar label name already exists"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1609005975 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is trusted and recommended."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b813684164 = messageFormatterFn((function(  ) {
  return function(d) { return d.Category + " label " + d.name + " created. There may be a delay before you see your changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a867315613 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is no longer maintained and shouldn’t be used."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b735955690 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset’s most recent extract refresh failed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1208762241 = messageFormatterFn((function(  ) {
  return function(d) { return "This flow’s most recent run failed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1707401003 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is undergoing maintenance."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1630837176 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset contains sensitive information."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1539413595 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is outdated."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a933716815 = messageFormatterFn((function(  ) {
  return function(d) { return d.Category + " label " + d.name + " updated. There may be a delay before you see your changes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b314530622 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset has a general quality issue."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a459058721 = messageFormatterFn((function(  ) {
  return function(d) { return "High visibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1881969661 = messageFormatterFn((function(  ) {
  return function(d) { return "Set visibility level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b689537932 = messageFormatterFn((function(  ) {
  return function(d) { return "Standard visibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1303984458 = messageFormatterFn((function(  ) {
  return function(d) { return "On this asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b911604397 = messageFormatterFn((function(  ) {
  return function(d) { return "On this calculated insight"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1518653522 = messageFormatterFn((function(  ) {
  return function(d) { return "On this column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b166304969 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "On column";}, other: function() { return "On columns";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b760164006 = messageFormatterFn((function(  ) {
  return function(d) { return "On this connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1634097442 = messageFormatterFn((function(  ) {
  return function(d) { return "On this data lake"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2130463920 = messageFormatterFn((function(  ) {
  return function(d) { return "On this data model"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1361928969 = messageFormatterFn((function(  ) {
  return function(d) { return "On this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a325649665 = messageFormatterFn((function(  ) {
  return function(d) { return "On this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b652643222 = messageFormatterFn((function(  ) {
  return function(d) { return "On this flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a455854760 = messageFormatterFn((function(  ) {
  return function(d) { return "On this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1288767153 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1029474484 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this calculated insight"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1046917067 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "Inherited by column";}, other: function() { return "On or inherited by columns";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a724847699 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2001835835 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this data lake"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b645452215 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this data model"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a565871152 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1810661370 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1132290619 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "Inherited by field";}, other: function() { return "Inherited by fields";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1286528547 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236181925 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this metric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a440637455 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1741526490 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1595179409 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited by this workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2008560391 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "Quality Warning";}, other: function() { return "Quality Warning (" + d.MESSAGE_COUNT_LOC + ")";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b196448028 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "Sensitivity";}, other: function() { return "Sensitivity (" + d.MESSAGE_COUNT_LOC + ")";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a2068537119 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.MESSAGE_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.LABEL_TYPE_LOC;}, other: function() { return d.LABEL_TYPE_LOC + " (" + d.MESSAGE_COUNT_LOC + ")";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b410906628 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b103362592 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1924946408 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1046286075 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1284207217 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b567383162 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this field"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a677511032 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a85902266 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this metric"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1259036326 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1132508975 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1087630660 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream from this workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a847308006 = messageFormatterFn((function(  ) {
  return function(d) { return "View Lineage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a277891819 = messageFormatterFn((function(  ) {
  return function(d) { return "Label category description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1131943609 = messageFormatterFn((function(  ) {
  return function(d) { return "Category selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a200728930 = messageFormatterFn((function(  ) {
  return function(d) { return "Clear Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b860884176 = messageFormatterFn((function(  ) {
  return function(d) { return "No labels match your search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1119788283 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification lets users know that an asset is trusted. The label doesn’t appear on downstream assets. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1381375652 = messageFormatterFn((function(  ) {
  return function(d) { return "Labels with custom categories are created by an administrator to match your organisation’s needs. The labels don’t appear on downstream assets. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b843244630 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity labels let users know about assets that need to be treated differently. The labels appear on the asset and any assets downstream from it. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1071450471 = messageFormatterFn((function(  ) {
  return function(d) { return "Quality warnings let users know about assets that may have problems. The labels appear on the asset and any assets downstream from it. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2106972552 = messageFormatterFn((function(  ) {
  return function(d) { return "Label details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1317963471 = messageFormatterFn((function(  ) {
  return function(d) { return d.category + ": " + d.value; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a741062914 = messageFormatterFn((function(  ) {
  return function(d) { return "Add Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2002996400 = messageFormatterFn((function(  ) {
  return function(d) { return "Delete Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1691762341 = messageFormatterFn((function(  ) {
  return function(d) { return "Added"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1104763014 = messageFormatterFn((function(  ) {
  return function(d) { return "Label value description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a761057593 = messageFormatterFn((function(  ) {
  return function(d) { return "Message (optional)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a675205435 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a label to show label details"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b849849672 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1172553698 = messageFormatterFn((function(  ) {
  return function(d) { return "Failed to save labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1740252726 = messageFormatterFn((function(  ) {
  return function(d) { return d.COUNT_LOC + " label(s) updated on " + d.CONTENT_NAME; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b773817819 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.ASSET_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return "Data Labels: (" + d.ASSET_NAME + ")";}, other: function() { return "Data Labels: " + d.ASSET_COUNT_LOC + " Selected Assets";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1292837014 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a887103504 = messageFormatterFn((function(  ) {
  return function(d) { return "Label selection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a120516942 = messageFormatterFn((function(  ) {
  return function(d) { return d.value + ": " + d.description; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b293571756 = messageFormatterFn((function(  ) {
  return function(d) { return "Visibility level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1730240975 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 30 days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a797513705 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 7 days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b697798903 = messageFormatterFn((function(  ) {
  return function(d) { return "Last 90 days"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b102337212 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1816802600 = messageFormatterFn((function(  ) {
  return function(d) { return "Least-Most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b142974415 = messageFormatterFn((function(  ) {
  return function(d) { return "Lenses"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b155631346 = messageFormatterFn((function(  ) {
  return function(d) { return "Lenses (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a152174218 = messageFormatterFn((function(  ) {
  return function(d) { return "Lineage"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a35054426 = messageFormatterFn((function(  ) {
  return function(d) { return d.name + " (" + d.parentName + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a507441007 = messageFormatterFn((function(  ) {
  return function(d) { return "Live"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1032521069 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a32317793 = messageFormatterFn((function(  ) {
  return function(d) { return "Loading data details…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1354638889 = messageFormatterFn((function(  ) {
  return function(d) { return "Retry"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b939974860 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b379881621 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a213992420 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1562586866 = messageFormatterFn((function(  ) {
  return function(d) { return "Modified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b623993449 = messageFormatterFn((function(  ) {
  return function(d) { return "More Filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a87482127 = messageFormatterFn((function(  ) {
  return function(d) { return "All Data Labels…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1804725988 = messageFormatterFn((function(  ) {
  return function(d) { return "Most–Least"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b466415663 = messageFormatterFn((function(  ) {
  return function(d) { return "New"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b579130767 = messageFormatterFn((function(  ) {
  return function(d) { return "New Flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a773826827 = messageFormatterFn((function(  ) {
  return function(d) { return "New Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1209842755 = messageFormatterFn((function(  ) {
  return function(d) { return "New Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1311576339 = messageFormatterFn((function(  ) {
  return function(d) { return "No description available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a591341655 = messageFormatterFn((function(  ) {
  return function(d) { return "No description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1514941472 = messageFormatterFn((function(  ) {
  return function(d) { return "No tags available."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1564953923 = messageFormatterFn((function(  ) {
  return function(d) { return "none"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a358353293 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a406606023 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is not in a project or personal space."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1597922045 = messageFormatterFn((function(  ) {
  return function(d) { return "Not Applicable"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b271278773 = messageFormatterFn((function(  ) {
  return function(d) { return "Embedded assets cannot be in a project or personal space."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b66994657 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.USER_COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.USER_COUNT_LOC + " recipient";}, other: function() { return d.USER_COUNT_LOC + " recipients";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b243747903 = messageFormatterFn((function(  ) {
  return function(d) { return "Other"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a330328407 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Steps"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2084693160 = messageFormatterFn((function(  ) {
  return function(d) { return "Output Steps (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b152319324 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1941903807 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner’s Display Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b348812577 = messageFormatterFn((function(  ) {
  return function(d) { return "Owner’s ID"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b426855643 = messageFormatterFn((function(  ) {
  return function(d) { return "Owners"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2021735782 = messageFormatterFn((function(  ) {
  return function(d) { return "Owners (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1040547594 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.ITEM + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a680133395 = messageFormatterFn((function(  ) {
  return function(d) { return "Permission required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a355214602 = messageFormatterFn((function(  ) {
  return function(d) { return "This warning is on an asset you do not have permissions to see."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b768877132 = messageFormatterFn((function(  ) {
  return function(d) { return "Permissions Required"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1802652222 = messageFormatterFn((function(  ) {
  return function(d) { return "Personal Space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1886423852 = messageFormatterFn((function(  ) {
  return function(d) { return "+ " + d.count; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1157121269 = messageFormatterFn((function(  ) {
  return function(d) { return " +" + d.count; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1871281556 = messageFormatterFn((function(  ) {
  return function(d) { return "Popular Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1260950518 = messageFormatterFn((function(  ) {
  return function(d) { return "Project"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1353778059 = messageFormatterFn((function(  ) {
  return function(d) { return "Project Name"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b719396195 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b826369460 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b529336493 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1015388894 = messageFormatterFn((function(  ) {
  return function(d) { return "Query metadata (GraphiQL)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a858674128 = messageFormatterFn((function(  ) {
  return function(d) { return "read more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1668082839 = messageFormatterFn((function(  ) {
  return function(d) { return "Referenced fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1513188042 = messageFormatterFn((function(  ) {
  return function(d) { return "Relevance"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1148418791 = messageFormatterFn((function(  ) {
  return function(d) { return "Boolean"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a641582579 = messageFormatterFn((function(  ) {
  return function(d) { return "Date"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b77461088 = messageFormatterFn((function(  ) {
  return function(d) { return "Date & Time"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1580575919 = messageFormatterFn((function(  ) {
  return function(d) { return "Integer"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1045525475 = messageFormatterFn((function(  ) {
  return function(d) { return "Real"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1910669546 = messageFormatterFn((function(  ) {
  return function(d) { return "String"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2061024069 = messageFormatterFn((function(  ) {
  return function(d) { return "Unknown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1692122761 = messageFormatterFn((function(  ) {
  return function(d) { return "Remove"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1874278376 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset Filter"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a881801791 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1264305232 = messageFormatterFn((function(  ) {
  return function(d) { return "Reverting will return the built-in label to its defaults and will affect existing instances of the label that are attached to assets. Are you sure you want to revert the label to its defaults?"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b421905937 = messageFormatterFn((function(  ) {
  return function(d) { return "Revert to default label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b185133485 = messageFormatterFn((function(  ) {
  return function(d) { return d.LABEL_CATEGORY + " label " + d.LABEL_VALUE + " reverted to defaults. There might be a delay before you see your changes."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1434499134 = messageFormatterFn((function(  ) {
  return function(d) { return "Save"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1507272806 = messageFormatterFn((function(  ) {
  return function(d) { return "Schema"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a830600358 = messageFormatterFn((function(  ) {
  return function(d) { return "Search for data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1341575005 = messageFormatterFn((function(  ) {
  return function(d) { return "Search"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b446902177 = messageFormatterFn((function(  ) {
  return function(d) { return d.count + " results"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a741068441 = messageFormatterFn((function(  ) {
  return function(d) { return d.count + " results for "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1131840557 = messageFormatterFn((function(  ) {
  return function(d) { return "See All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a536206198 = messageFormatterFn((function(  ) {
  return function(d) { return "Select All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1431044339 = messageFormatterFn((function(  ) {
  return function(d) { return "Send"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1552793179 = messageFormatterFn((function(  ) {
  return function(d) { return "Send Email"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b196783966 = messageFormatterFn((function(  ) {
  return function(d) { return "You don’t have permissions to send email from here."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2022213526 = messageFormatterFn((function(  ) {
  return function(d) { return "Select users to send an email."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1449122393 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity Labels…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2053294274 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1668492528 = messageFormatterFn((function(  ) {
  return function(d) { return "Fields in Use (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1564162297 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1189710662 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1997579157 = messageFormatterFn((function(  ) {
  return function(d) { return "Show All"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2104152379 = messageFormatterFn((function(  ) {
  return function(d) { return "show less"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a197011509 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type (a–z)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1885885027 = messageFormatterFn((function(  ) {
  return function(d) { return "Connection Type (z–a)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b950861909 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact (a–z)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a661547437 = messageFormatterFn((function(  ) {
  return function(d) { return "Contact (z–a)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a380908991 = messageFormatterFn((function(  ) {
  return function(d) { return "Database name/Path (a–z)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1003227623 = messageFormatterFn((function(  ) {
  return function(d) { return "Database name/Path (z–a)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b842475081 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets (least–most)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b273428191 = messageFormatterFn((function(  ) {
  return function(d) { return "Sheets (most–least)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1241446516 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort By:"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b384619769 = messageFormatterFn((function(  ) {
  return function(d) { return "Order"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1701347301 = messageFormatterFn((function(  ) {
  return function(d) { return "Sort"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1507516930 = messageFormatterFn((function(  ) {
  return function(d) { return "Name (a–z)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b438119882 = messageFormatterFn((function(  ) {
  return function(d) { return "Name (z–a)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1326687237 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources (least–most)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1748873069 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Sources (most–least)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1598718150 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks (least–most)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2052840446 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks (most–least)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b577455976 = messageFormatterFn((function(  ) {
  return function(d) { return "Least–Most"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1237412558 = messageFormatterFn((function(  ) {
  return function(d) { return "Most–Least"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1277497425 = messageFormatterFn((function(  ) {
  return function(d) { return "Popularity"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1261812619 = messageFormatterFn((function(  ) {
  return function(d) { return "Relevance"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a767014885 = messageFormatterFn((function(  ) {
  return function(d) { return "Server/Path (a–z)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1918846797 = messageFormatterFn((function(  ) {
  return function(d) { return "Server/Path (z–a)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1194474710 = messageFormatterFn((function(  ) {
  return function(d) { return "Source Data"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1021122150 = messageFormatterFn((function(  ) {
  return function(d) { return "Views over last 12 weeks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a137982237 = messageFormatterFn((function(  ) {
  return function(d) { return "Submit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b650495745 = messageFormatterFn((function(  ) {
  return function(d) { return "Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a488572051 = messageFormatterFn((function(  ) {
  return function(d) { return "Table (" + d.name + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1309544490 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1437897337 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables and Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a395351672 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables and Objects (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1838728395 = messageFormatterFn((function(  ) {
  return function(d) { return "Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b461009077 = messageFormatterFn((function(  ) {
  return function(d) { return "Tag"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1693016097 = messageFormatterFn((function(  ) {
  return function(d) { return "Tag…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1406303394 = messageFormatterFn((function(  ) {
  return function(d) { return "Tags"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1647708096 = messageFormatterFn((function(  ) {
  return function(d) { return "To"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b248149070 = messageFormatterFn((function(  ) {
  return function(d) { return "Today"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a185066347 = messageFormatterFn((function(  ) {
  return function(d) { return "Toggle filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b562490512 = messageFormatterFn((function(  ) {
  return function(d) { return "(" + d.count + " total)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1057033423 = messageFormatterFn((function(  ) {
  return function(d) { return "The URL is not recognised."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a204161838 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Databases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b677827407 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Databases (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1266954908 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Published Data Sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1480474821 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Published Data Sources (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1843218405 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2034109852 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Flows (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1388490964 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Lenses"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b746471821 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Lenses (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a64027941 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1720884418 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables and Objects"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a64706973 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables and Objects (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1865398426 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1105218596 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Virtual Connection Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1201657979 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Virtual Connection Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1248664394 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1041058795 = messageFormatterFn((function(  ) {
  return function(d) { return "Upstream Virtual Connections (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a277554450 = messageFormatterFn((function(  ) {
  return function(d) { return "Used by fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a797152354 = messageFormatterFn((function(  ) {
  return function(d) { return "Used by flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1234553920 = messageFormatterFn((function(  ) {
  return function(d) { return " using this database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1821235907 = messageFormatterFn((function(  ) {
  return function(d) { return " using this table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1341712662 = messageFormatterFn((function(  ) {
  return function(d) { return "View"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1967076115 = messageFormatterFn((function(  ) {
  return function(d) { return "View all"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b87815288 = messageFormatterFn((function(  ) {
  return function(d) { return "View description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b667103725 = messageFormatterFn((function(  ) {
  return function(d) { return "View Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1152932439 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b541076765 = messageFormatterFn((function(  ) {
  return function(d) { return "View less"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b503255649 = messageFormatterFn((function(  ) {
  return function(d) { return "View More"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b179945958 = messageFormatterFn((function(  ) {
  return function(d) { return "Views of this dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a761325477 = messageFormatterFn((function(  ) {
  return function(d) { return "Views of this sheet"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1868656198 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a798752458 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1008401473 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection Tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a846233408 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection Tables (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2093691185 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1119082960 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connections (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b767931500 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1891299409 = messageFormatterFn((function(  ) {
  return function(d) { return "Web Data Connector URL"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1063122815 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1229239678 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b540021510 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook ID"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1402854998 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a399432117 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbooks (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b202934886 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COUNT_LOC + " column selected";}, other: function() { return d.COUNT_LOC + " columns selected";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1810543801 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COUNT_LOC + " data model selected";}, other: function() { return d.COUNT_LOC + " data models selected";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b271308318 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COUNT_LOC + " field selected";}, other: function() { return d.COUNT_LOC + " fields selected";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1929785640 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COUNT_LOC + " item selected";}, other: function() { return d.COUNT_LOC + " items selected";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a1886545074 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + "/" + d.countN; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1807660106 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.COUNT, 0, pluralFuncs["en-GB"], { one: function() { return d.COUNT_LOC + " table selected";}, other: function() { return d.COUNT_LOC + " tables selected";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1278922844 = messageFormatterFn((function(  ) {
  return function(d) { return d.countX + " of " + d.countN; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a699261619 = messageFormatterFn((function(  ) {
  return function(d) { return "Yesterday"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1096410941 = messageFormatterFn((function(  ) {
  return function(d) { return "asset"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1180315286 = messageFormatterFn((function(  ) {
  return function(d) { return "assets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1380257404 = messageFormatterFn((function(  ) {
  return function(d) { return "This asset is certified"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a106417083 = messageFormatterFn((function(  ) {
  return function(d) { return "Certification"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1474412465 = messageFormatterFn((function(  ) {
  return function(d) { return "Certify this asset to let users know it’s trusted. An administrator can customise the certification label description to match your organisation’s needs. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b832130565 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit the description of certification labels. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1215082045 = messageFormatterFn((function(  ) {
  return function(d) { return "column"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1756490544 = messageFormatterFn((function(  ) {
  return function(d) { return "columns"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b217415181 = messageFormatterFn((function(  ) {
  return function(d) { return "Set a warning label to show on this asset and any asset downstream from it. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1650483012 = messageFormatterFn((function(  ) {
  return function(d) { return "Set a warning label to show on this asset and any asset downstream from it. An administrator can customise label values and descriptions to match your organisation’s needs. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b446910397 = messageFormatterFn((function(  ) {
  return function(d) { return "Show warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2009283998 = messageFormatterFn((function(  ) {
  return function(d) { return "Generate a quality warning when an extract refresh fails. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b168962038 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract refresh monitoring"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1750565427 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow run monitoring"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236398485 = messageFormatterFn((function(  ) {
  return function(d) { return "Generate a quality warning when one or more flow outputs fail. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1829223247 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit the default visibility level of data quality warnings triggered by extract refresh monitoring."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a222266382 = messageFormatterFn((function(  ) {
  return function(d) { return "Edit the default visibility level of data quality warnings triggered by flow run monitoring."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1021329434 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Quality Warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1252334366 = messageFormatterFn((function(  ) {
  return function(d) { return "database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1718974165 = messageFormatterFn((function(  ) {
  return function(d) { return "databases"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2065733844 = messageFormatterFn((function(  ) {
  return function(d) { return "data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1164554207 = messageFormatterFn((function(  ) {
  return function(d) { return "data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a758703741 = messageFormatterFn((function(  ) {
  return function(d) { return "The description could not be updated. Verify the description is valid and try again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a658589431 = messageFormatterFn((function(  ) {
  return function(d) { return "About Tableau AI"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a331771854 = messageFormatterFn((function(  ) {
  return function(d) { return "read more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2027094685 = messageFormatterFn((function(  ) {
  return function(d) { return "The description was successfully updated."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a480318808 = messageFormatterFn((function(  ) {
  return function(d) { return "The description was successfully updated. There might be a delay before you can see your change."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a698301535 = messageFormatterFn((function(  ) {
  return function(d) { return "Extract Refresh Monitoring"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1257668272 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow Run Monitoring"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717015403 = messageFormatterFn((function(  ) {
  return function(d) { return "flow"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1991011800 = messageFormatterFn((function(  ) {
  return function(d) { return "flows"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b433908163 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau couldn’t generate a description. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b40813145 = messageFormatterFn((function(  ) {
  return function(d) { return "Inherited Description"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1196752472 = messageFormatterFn((function(  ) {
  return function(d) { return "Dialog info icon"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b232660194 = messageFormatterFn((function(  ) {
  return function(d) { return "Dialog help message popover"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1872633159 = messageFormatterFn((function(  ) {
  return function(d) { return "High visibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a877363930 = messageFormatterFn((function(  ) {
  return function(d) { return "For high-visibility warnings, a notification appears when anyone opens a published view affected by this warning."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b484528894 = messageFormatterFn((function(  ) {
  return function(d) { return "Manage labels"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1288690332 = messageFormatterFn((function(  ) {
  return function(d) { return "Sample"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1275544924 = messageFormatterFn((function(  ) {
  return function(d) { return "Set default visibility level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1926757579 = messageFormatterFn((function(  ) {
  return function(d) { return "Set visibility level"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a921947732 = messageFormatterFn((function(  ) {
  return function(d) { return "Standard visibility"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1757036457 = messageFormatterFn((function(  ) {
  return function(d) { return "High visibility labels show notifications in affected views and emails."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1282734247 = messageFormatterFn((function(  ) {
  return function(d) { return "Set the default visibility level of this label when it’s used on assets. Users with permission can explicitly set the visibility level on individual assets, overriding this default."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a198427693 = messageFormatterFn((function(  ) {
  return function(d) { return "Personal Space"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2027492724 = messageFormatterFn((function(  ) {
  return function(d) { return "Set a sensitivity label to show on this asset and any asset downstream from it. An administrator can customise label values and descriptions to match your organisation’s needs. "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1771402679 = messageFormatterFn((function(  ) {
  return function(d) { return "Set the visibility level of this label when it’s used on assets. The visibility level for a sensitivity label is the same across the entire site, and cannot be set at the asset level."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1788219274 = messageFormatterFn((function(  ) {
  return function(d) { return "Sensitivity Label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1581730819 = messageFormatterFn((function(  ) {
  return function(d) { return "Show label"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a967192791 = messageFormatterFn((function(  ) {
  return function(d) { return "A–Z"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a967913541 = messageFormatterFn((function(  ) {
  return function(d) { return "Z–A"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a45198241 = messageFormatterFn((function(  ) {
  return function(d) { return "table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b150169012 = messageFormatterFn((function(  ) {
  return function(d) { return "tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a114362636 = messageFormatterFn((function(  ) {
  return function(d) { return "view"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1993927233 = messageFormatterFn((function(  ) {
  return function(d) { return "views"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a505133645 = messageFormatterFn((function(  ) {
  return function(d) { return "virtual connection table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a813787704 = messageFormatterFn((function(  ) {
  return function(d) { return "virtual connection tables"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a491396124 = messageFormatterFn((function(  ) {
  return function(d) { return "virtual connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a797063473 = messageFormatterFn((function(  ) {
  return function(d) { return "virtual connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1921754964 = messageFormatterFn((function(  ) {
  return function(d) { return "Back"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1569460574 = messageFormatterFn((function(  ) {
  return function(d) { return "This tool uses generative AI to draft an asset description. Generative AI can produce inaccurate or harmful responses. Check the output before using. " + d.learnMoreLink; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1211104551 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source with high severity warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a646920706 = messageFormatterFn((function(  ) {
  return function(d) { return "Data Source with warning"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1812224342 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metric Definitions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b736430923 = messageFormatterFn((function(  ) {
  return function(d) { return "Downstream Metric Definitions (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b129878746 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau AI is temporarily unavailable. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1413025071 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau Catalog can't find the asset. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b286436539 = messageFormatterFn((function(  ) {
  return function(d) { return "With the current filter applied, there are no downstream metric definitions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1223789028 = messageFormatterFn((function(  ) {
  return function(d) { return "There are no downstream metric definitions."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1905056270 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow Using This Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1997787567 = messageFormatterFn((function(  ) {
  return function(d) { return "Flow Using This Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1366868334 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric Definitions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1401790199 = messageFormatterFn((function(  ) {
  return function(d) { return "Total Followers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1560222601 = messageFormatterFn((function(  ) {
  return function(d) { return "Metrics"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1178197784 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric Definitions"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1153228745 = messageFormatterFn((function(  ) {
  return function(d) { return "Metric Definitions (" + d.count + ")"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b322676484 = messageFormatterFn((function(  ) {
  return function(d) { return "More Filters Applied"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1179860026 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection (Extract)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b670166103 = messageFormatterFn((function(  ) {
  return function(d) { return "Virtual Connection (Live)"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a536473946 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook Using This Database"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1641209315 = messageFormatterFn((function(  ) {
  return function(d) { return "Workbook Using This Table"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1403989396 = messageFormatterFn((function(  ) {
  return function(d) { return "Show template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a794972953 = messageFormatterFn((function(  ) {
  return function(d) { return "Hide template project contributors!"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b532389543 = messageFormatterFn((function(  ) {
  return function(d) { return "Script"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1629983592 = messageFormatterFn((function(  ) {
  return function(d) { return "Enter Custom Script"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1432095837 = messageFormatterFn((function(  ) {
  return function(d) { return "Apply"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1317523572 = messageFormatterFn((function(  ) {
  return function(d) { return "Choose a Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1653819660 = messageFormatterFn((function(  ) {
  return function(d) { return "Current Analytics Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a823128337 = messageFormatterFn((function(  ) {
  return function(d) { return "No Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1834913654 = messageFormatterFn((function(  ) {
  return function(d) { return "No analytics extension configured for this workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a453020871 = messageFormatterFn((function(  ) {
  return function(d) { return "Select a Connection"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a918955119 = messageFormatterFn((function(  ) {
  return function(d) { return d.number + " nulls not shown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1022433214 = messageFormatterFn((function(  ) {
  return function(d) { return "1 null not shown"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b801483517 = messageFormatterFn((function(  ) {
  return function(d) { return "Zoom in"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b283747226 = messageFormatterFn((function(  ) {
  return function(d) { return "Reset axes"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a415483362 = messageFormatterFn((function(  ) {
  return function(d) { return "Colour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a753738562 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1921469474 = messageFormatterFn((function(  ) {
  return function(d) { return "Decimal Places"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a333599611 = messageFormatterFn((function(  ) {
  return function(d) { return "Dotted"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b677053673 = messageFormatterFn((function(  ) {
  return function(d) { return "Uh-oh, something went wrong! Please close the formatting pane and try that again."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b677052712 = messageFormatterFn((function(  ) {
  return function(d) { return "We’ve sent an error report to our engineers."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b113546732 = messageFormatterFn((function(  ) {
  return function(d) { return "Fill"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b20721722 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Family"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a345893705 = messageFormatterFn((function(  ) {
  return function(d) { return "Font Size"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b539573752 = messageFormatterFn((function(  ) {
  return function(d) { return "Format"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1937737024 = messageFormatterFn((function(  ) {
  return function(d) { return "HexColour"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b10789144 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Style"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b531419830 = messageFormatterFn((function(  ) {
  return function(d) { return "Automatic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a716554894 = messageFormatterFn((function(  ) {
  return function(d) { return "Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a23120310 = messageFormatterFn((function(  ) {
  return function(d) { return "On"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2012283597 = messageFormatterFn((function(  ) {
  return function(d) { return "Line Width"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2103431265 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a121080457 = messageFormatterFn((function(  ) {
  return function(d) { return "None"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1944214164 = messageFormatterFn((function(  ) {
  return function(d) { return "Off"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b400588208 = messageFormatterFn((function(  ) {
  return function(d) { return "Solid"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1343361556 = messageFormatterFn((function(  ) {
  return function(d) { return "Units"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1908860581 = messageFormatterFn((function(  ) {
  return function(d) { return "Worksheet Title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b699623424 = messageFormatterFn((function(  ) {
  return function(d) { return "Show title"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b442118182 = messageFormatterFn((function(  ) {
  return function(d) { return "Unable to load microview from " + d.MICROVIEW_NAME + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2047424272 = messageFormatterFn((function(  ) {
  return function(d) { return "Something went wrong, and we couldn’t complete your search. Try again later."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1421562269 = messageFormatterFn((function(  ) {
  return function(d) { return "Close"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b366981050 = messageFormatterFn((function(  ) {
  return function(d) { return "Copy"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1675429136 = messageFormatterFn((function(  ) {
  return function(d) { return "Take action"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1698400194 = messageFormatterFn((function(  ) {
  return function(d) { return "Updating these items to follow best practices won’t impact workbook functionality."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a979791084 = messageFormatterFn((function(  ) {
  return function(d) { return ", "; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a162619298 = messageFormatterFn((function(  ) {
  return function(d) { return "…"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1363833169 = messageFormatterFn((function(  ) {
  return function(d) { return "The rule wasn’t fixed. Try resolving the issue manually."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a401809234 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook does not follow best practices for this guideline."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1264629041 = messageFormatterFn((function(  ) {
  return function(d) { return "Fix the rule"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1679395936 = messageFormatterFn((function(  ) {
  return function(d) { return "Select an item to see the best practices guidelines and information on resolving issues."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1301019288 = messageFormatterFn((function(  ) {
  return function(d) { return "Ignore this rule"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a901082558 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + " won’t be evaluated again for this workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a481744543 = messageFormatterFn((function(  ) {
  return function(d) { return "Ignored Items"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1487905286 = messageFormatterFn((function(  ) {
  return function(d) { return "Last run at " + d.time; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a778280478 = messageFormatterFn((function(  ) {
  return function(d) { return "Learn more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1242427649 = messageFormatterFn((function(  ) {
  return function(d) { return "Passed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1891209764 = messageFormatterFn((function(  ) {
  return function(d) { return "Passed and Ignored"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b121189103 = messageFormatterFn((function(  ) {
  return function(d) { return "Passed items follow best practice guidelines."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1942653781 = messageFormatterFn((function(  ) {
  return function(d) { return "Passed Items"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b714196929 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices for this guideline."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1704577888 = messageFormatterFn((function(  ) {
  return function(d) { return "Check Best Practices"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a81004384 = messageFormatterFn((function(  ) {
  return function(d) { return "+" + d.numExceeding + " more"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2041838476 = messageFormatterFn((function(  ) {
  return function(d) { return "Publish"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1107040274 = messageFormatterFn((function(  ) {
  return function(d) { return "Rerun Optimiser"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a506257308 = messageFormatterFn((function(  ) {
  return function(d) { return "Scanning Workbook"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b284181367 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + " was fixed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a147053045 = messageFormatterFn((function(  ) {
  return function(d) { return "Undo"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b12098961 = messageFormatterFn((function(  ) {
  return function(d) { return "Evaluate this rule"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a138265029 = messageFormatterFn((function(  ) {
  return function(d) { return d.ruleName + " will be evaluated for this workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b579242952 = messageFormatterFn((function(  ) {
  return function(d) { return d.passedRules + "/" + d.totalRules; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b933320767 = messageFormatterFn((function(  ) {
  return function(d) { return "Needs review"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2034523729 = messageFormatterFn((function(  ) {
  return function(d) { return "Updating these items to follow best practices may require a trade-off in the workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a784237551 = messageFormatterFn((function(  ) {
  return function(d) { return "Try clicking here and holding " + d.shortcutHint + "."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1754613893 = messageFormatterFn((function(  ) {
  return function(d) { return "Date logic can be complicated. Minimise the amount of date calculations and conversion you have to do in Tableau. If necessary, use DATEPARSE and MAKEDATE before other methods and try to use built-in functions like DATEDIFF() when possible. If filtering on a date, use relative date filters or a continuous date filter instead of a discrete filter."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a758574328 = messageFormatterFn((function(  ) {
  return function(d) { return "Uses date calculations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b558171569 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "The data source " + d.datasourceName + " contains " + d.numDateCalcs + " date calculation.";}, other: function() { return "The data source " + d.datasourceName + " contains " + d.numDateCalcs + " date calculations.";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1915018113 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources contain date calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a907260223 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and uses minimal date calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1317385616 = messageFormatterFn((function(  ) {
  return function(d) { return "When calculations use fields from multiple data sources, Tableau can’t leverage any optimisations and must compute the calculation locally. Consider using Tableau Prep to create the calculation and using an extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a486819405 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation uses multiple data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a172249242 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "Data source " + d.datasourceName + " has " + d.numCalcs + " calculation using another data source.";}, other: function() { return "Data source " + d.datasourceName + " has " + d.numCalcs + " calculations using another data source.";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b1917124662 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources have calculations with fields from other data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1372069046 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and no calcs in used span data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1913254403 = messageFormatterFn((function(  ) {
  return function(d) { return "Computing the results of complex calculations can impact performance. Consider breaking the calculation apart and moving whatever is possible to the database, or using Tableau Prep to create the calculations prior to analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1340809600 = messageFormatterFn((function(  ) {
  return function(d) { return "Calculation length"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a788545991 = messageFormatterFn((function(  ) {
  return function(d) { return "The calculation " + d.calculationName + " in data source " + d.datasourceName + " is " + d.calculationLength + " characters long."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1140683767 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple calculations are more than 500 characters long."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a619937463 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and does not use long calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b148568086 = messageFormatterFn((function(  ) {
  return function(d) { return "Fixed-sized dashboards can be cached because they are a predictable size. Using automatic dashboard sizing means the results depend on the user’s screen, and therefore the dashboard must be rendered every time. Rendering dashboards more often comes with a performance hit."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b51280589 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboard size not fixed"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a140014708 = messageFormatterFn((function(  ) {
  return function(d) { return "The dashboard " + d.dashboardName + " is not fixed-size."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b717051484 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple dashboards are not fixed-size."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1400126372 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and uses fixed dashboard sizing."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b2066156046 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources that include multiple connections cannot be computed locally. Consider combining the data sources in Tableau Prep and using an extract for analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1554395093 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple connections in a data source"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b121044868 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " uses multiple data connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1686810028 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources use multiple connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1082285652 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and data sources use single connections."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1193898288 = messageFormatterFn((function(  ) {
  return function(d) { return "Dimension filtering can be done in a variety of ways, such as on a list of values, by wildcard matching or using conditional logic. Conditional logic can be slow. Consider changing the filter to not use conditional logic. If necessary, make sure your logic tests for the most frequent outcome first and use ELSEIF or CASE when possible."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a382099117 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter uses conditional logic"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1760011322 = messageFormatterFn((function(  ) {
  return function(d) { return "The filter " + d.filterName + " on sheet " + d.sheetName + " uses conditional logic."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1948300138 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple filters use conditional logic."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b71958806 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and has no conditional logic filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1515562281 = messageFormatterFn((function(  ) {
  return function(d) { return "Nesting calculations can add complications and additional processing, especially with IF statements and other performance intensive functions. Consider pushing the calculations to the data source or materialise them in an extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2134229204 = messageFormatterFn((function(  ) {
  return function(d) { return "Nested calculations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1641463283 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "Data source " + d.datasourceName + " has " + d.numCalcs + " calculation that references another calculation.";}, other: function() { return "Data source " + d.datasourceName + " has " + d.numCalcs + " calculations that refer to another calculation.";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b497351645 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple calculations reference other calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b74503709 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and doesn’t contain nested calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a759197019 = messageFormatterFn((function(  ) {
  return function(d) { return "Data source extracted."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a947047307 = messageFormatterFn((function(  ) {
  return function(d) { return "All data sources extracted."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1413299279 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau extracts are designed to be as efficient as possible for use with analytics. Using extracts is one of the easiest ways to improve performance due to the data source. Extracts also have many native features for optimisation."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1784517812 = messageFormatterFn((function(  ) {
  return function(d) { return "Live data connections"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a209083003 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " is not an extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b168191829 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources are not extracts."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1499021419 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and uses extracts."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1626977822 = messageFormatterFn((function(  ) {
  return function(d) { return "Computing the results of a calculation can impact performance. Consider pushing calculations to the data source when possible. If using an extract, materialise calculations to pre-compute their results."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1036364159 = messageFormatterFn((function(  ) {
  return function(d) { return "Non-materialised calculations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1337615784 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " has not been pre-computed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1240848680 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources have not been pre-computed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1252095448 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices with pre-computed data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b631557246 = messageFormatterFn((function(  ) {
  return function(d) { return "Each data source contributes to the amount of time Tableau spends loading and rendering a workbook. Consider combining data sources if possible, especially when the level of granularity is the same or they support the same analysis."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1521306469 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b156100084 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook contains " + d.numDatasources + " data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a670125884 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices with few data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1736047221 = messageFormatterFn((function(  ) {
  return function(d) { return "Excessive filters on a view create a more complex query. Consider reducing the number of filters and using filter actions wherever possible. Not all types and formats of filters are created equal in terms of performance, so consider optimising necessary filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a956139784 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of filters"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1220874177 = messageFormatterFn((function(  ) {
  return function(d) { return "The sheet " + d.sheetName + " uses " + d.numFilters + " interactive filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b172086673 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple sheets use more than 10 interactive filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1642033967 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices using few interactive filters per view."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b478343672 = messageFormatterFn((function(  ) {
  return function(d) { return "Hidden sheets add to overall workbook complexity. Consider reducing the total number of sheets in the workbook by removing items from dashboards or separating dashboards into multiple workbooks."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a775619797 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of hidden workbook sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1053256466 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook contains " + d.numHiddenWindows + " hidden sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1651196866 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices with limited hidden sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b114158361 = messageFormatterFn((function(  ) {
  return function(d) { return "Data sources with many joins can make it hard to optimise queries. Consider using relationships where possible. Alternatively, multiple data sources with fewer, well-designed joins can perform better than a single, complex data source with many joins. This is especially true when there are many different levels of detail in a single data source."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1280808234 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of joins"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1151977935 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " contains " + d.numJoins + " joins."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1232428641 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources contain more than 5 joins."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1252590687 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and contains a limited number of joins."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a44835498 = messageFormatterFn((function(  ) {
  return function(d) { return "Layout containers can complicate dashboard rendering. Consider removing unnecessary layout containers and simplifying the dashboard design."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1140785779 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of layout containers"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1317265204 = messageFormatterFn((function(  ) {
  return function(d) { return "The dashboard " + d.dashboardName + " contains " + d.numLayoutContainers + " layout containers."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1236751460 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple dashboards contain more than 20 layout containers."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a244618852 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices for the number of layout containers."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1026468155 = messageFormatterFn((function(  ) {
  return function(d) { return "Computing the results of complex calculations can impact performance. Often, LODs are used on the spot to address issues of granularity in the data source that could be handled prior to analysis. Consider tailoring the data source to the analysis to avoid the need for as many LODs."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a967993016 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of LOD calculations"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1708361585 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " contains " + d.numLodCalculations + " LOD calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a134898367 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources contain more than 5 LOD calculations."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1669169023 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and no data sources use excessive LODs."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1383285790 = messageFormatterFn((function(  ) {
  return function(d) { return "A dashboard must load all elements before it can be displayed. The more views a dashboard contains, the longer it will take to load. Consider streamlining the dashboard to be as effective and simple as possible by reducing the number of views, filters and other elements."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b942679169 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of views in a dashboard"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b922192984 = messageFormatterFn((function(  ) {
  return function(d) { return "Dashboard " + d.dashboardName + " contains " + d.numSheets + " views."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1083558696 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple dashboards contain more than 10 views."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1465056296 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices with limited views per dashboard."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1964045322 = messageFormatterFn((function(  ) {
  return function(d) { return "The overall size of a workbook impacts how long it takes to be processed and displayed. Reducing the number of sheets can help speed up load time. Consider reducing the number of sheets in the workbook by closing unneeded sheets or splitting the analysis into multiple workbooks."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1207370477 = messageFormatterFn((function(  ) {
  return function(d) { return "Number of visible workbook sheets"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1158031212 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook contains " + d.numVisibleWindows + " visible sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1430390724 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices with limited visible sheets."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b892670559 = messageFormatterFn((function(  ) {
  return function(d) { return "“Only Relevant Values” turned off for the filter."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1848878545 = messageFormatterFn((function(  ) {
  return function(d) { return "“Only Relevant Values” turned off for all filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b500404105 = messageFormatterFn((function(  ) {
  return function(d) { return "When a filter uses “Only Relevant Values”, the quick filter control only shows options that are applicable given the current state of the view. Every time a change is made to other filters, the list of values to be displayed must be re-queried, which has a performance impact. If the end-user benefit is valuable enough that this feature should be used, consider extracting the data and optimising the extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b537988794 = messageFormatterFn((function(  ) {
  return function(d) { return "Filter uses “Only Relevant Values”"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1328016833 = messageFormatterFn((function(  ) {
  return function(d) { return "The filter " + d.filterName + " on sheet " + d.sheetName + " uses “Only Relevant Values”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b836860431 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple filters use “Only Relevant Values”."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1102788815 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices, avoiding “Only Relevant Values” filters."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a984860286 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused data source closed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a853037486 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused data sources closed."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b999525612 = messageFormatterFn((function(  ) {
  return function(d) { return "Each data source contributes to the amount of time Tableau spends loading and rendering a workbook. Consider closing data sources that aren’t in use."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1641679543 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused data sources"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1586381538 = messageFormatterFn((function(  ) {
  return function(d) { return "The data source " + d.datasourceName + " isn’t used in the workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b100292530 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources aren’t used in the workbook."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b681911090 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and uses all the data sources."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1116909289 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused field hidden."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a2045353753 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused fields hidden."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a559056731 = messageFormatterFn((function(  ) {
  return function(d) { return "Hiding unused fields will prevent them from being unnecessarily queried and reduce the size of extracts. Consider hiding any fields that are not being used, regardless of whether or not the data source is an extract."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1819733278 = messageFormatterFn((function(  ) {
  return function(d) { return "Unused fields"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1562631077 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "The data source " + d.datasourceName + " contains " + d.numUnusedFields + " field not being used.";}, other: function() { return "The data source " + d.datasourceName + " contains " + d.numUnusedFields + " fields not being used.";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.a416305109 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources have unused fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1709685269 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and has no unused fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b350581405 = messageFormatterFn((function(  ) {
  return function(d) { return "Data blending performance is driven by the number of unique members in the linking fields. Consider using relationships when possible. If a blend is required, try to use low-cardinality linking fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b1312274982 = messageFormatterFn((function(  ) {
  return function(d) { return "Uses data blending"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.b721256531 = messageFormatterFn((function(  ) {
  return function(d) { return "The sheet " + d.sheetName + " uses data blending."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1273916381 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple sheets use data blending."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a611137565 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and does not use data blending."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1618474651 = messageFormatterFn((function(  ) {
  return function(d) { return "Tableau’s native grouping functionality loads the entire domain of the field, which can have a performance impact. Using a calculated field with a CASE statement to group instead can have better performance."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1249266594 = messageFormatterFn((function(  ) {
  return function(d) { return "Uses grouping"; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1756003045 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function(d) { return plural(d.itemCount, 0, pluralFuncs["en-GB"], { one: function() { return "The data source " + d.datasourceName + " uses " + d.numGroupFields + " grouped field.";}, other: function() { return "The data source " + d.datasourceName + " uses " + d.numGroupFields + " grouped fields.";} }); }
})(messageFormat.plural, {"en-GB": Globalize("en-GB").pluralGenerator()}), Globalize("en-GB").pluralGenerator({}));
Globalize.b798773483 = messageFormatterFn((function(  ) {
  return function(d) { return "Multiple data sources use grouped fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
Globalize.a1833560405 = messageFormatterFn((function(  ) {
  return function(d) { return "The workbook follows best practices and uses minimal grouped fields."; }
})(), Globalize("en-GB").pluralGenerator({}));
}));
