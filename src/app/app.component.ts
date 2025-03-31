import { AfterViewInit, Component, Input } from '@angular/core';

declare const SwaggerEditorBundle: any;
declare const SwaggerEditorStandalonePreset: any;

@Component({
 selector: 'my-app',
 templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @Input() swagger: string;

  private editor: any;
  
  constructor(){
    console.log("I am Angular!");
    this.swagger = "{\"swagger\":\"2.0\",\"info\":{\"title\":\"Google Sheets API get\",\"version\":\"v4\",\"description\":\"API for creating, updating, and retrieving Google Sheets with filters.\"},\"x-ntx-render-version\":2,\"x-ntx-generated-by-ai\":true,\"x-ntx-contract-id\":\"b5ae86af-76c9-499d-bdc9-c5aa081f2e8c\",\"host\":\"sheets.googleapis.com\",\"schemes\":[\"https\"],\"basePath\":\"\/v4\",\"paths\":{\"\/spreadsheets\/{spreadsheetId}\":{\"get\":{\"summary\":\"Get spreadsheet with filter\",\"description\":\"Retrieves a spreadsheet with optional filters applied.\",\"operationId\":\"getSpreadsheetWithFilter\",\"parameters\":[{\"name\":\"spreadsheetId\",\"in\":\"path\",\"required\":true,\"type\":\"string\",\"description\":\"The ID of the spreadsheet to retrieve.\"},{\"name\":\"ranges\",\"in\":\"query\",\"type\":\"array\",\"items\":{\"type\":\"string\"},\"collectionFormat\":\"multi\",\"description\":\"The ranges to retrieve from the spreadsheet.\"},{\"name\":\"includeGridData\",\"in\":\"query\",\"type\":\"boolean\",\"description\":\"Whether to include grid data in the response.\"}],\"responses\":{\"200\":{\"description\":\"Spreadsheet retrieved successfully\",\"schema\":{\"type\":\"object\",\"properties\":{\"spreadsheetId\":{\"type\":\"string\",\"description\":\"The spreadsheet ID.\"},\"properties\":{\"type\":\"object\",\"description\":\"Spreadsheet properties.\"},\"sheets\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"properties\":{\"type\":\"object\",\"description\":\"Sheet properties.\"}}}}}}},\"400\":{\"description\":\"Invalid request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Spreadsheet not found\"}},\"security\":[{\"oauth2\":[\"https:\/\/www.googleapis.com\/auth\/spreadsheets.readonly\"]}]}}},\"securityDefinitions\":{\"oauth2\":{\"type\":\"oauth2\",\"authorizationUrl\":\"https:\/\/accounts.google.com\/o\/oauth2\/auth\",\"flow\":\"implicit\",\"scopes\":{\"https:\/\/www.googleapis.com\/auth\/spreadsheets\":\"Read and write access to Google Sheets\",\"https:\/\/www.googleapis.com\/auth\/spreadsheets.readonly\":\"Read-only access to Google Sheets\"}}}}";
  }

  ngAfterViewInit() {
    this.initializeSwaggerEditor();
  }

  private async initializeSwaggerEditor() {
    this.editor = SwaggerEditorBundle({
      dom_id: '#swagger-editor',
      // layout: this.getCustomLayout(),
      spec: this.beautifySwagger(this.swagger) || '', // Load initial Swagger spec
      presets: [
        SwaggerEditorStandalonePreset
      ],
      plugins: [
        SwaggerEditorStandalonePreset.plugins.EditorLayout
      ],
      //presets: [
      //  SwaggerEditorStandalonePreset
      //]
    });
  }

  private beautifySwagger(swaggerString: string) {
    if (swaggerString) {
      const swaggerObject = JSON.parse(swaggerString);
      return JSON.stringify(swaggerObject, null, '\t');
    }

    return swaggerString;
  }
}