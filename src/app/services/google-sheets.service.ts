import { Injectable } from '@angular/core';
import { gapi, loadGapiInsideDOM } from 'gapi-script';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  private CLIENT_ID =
    '841505278890-4t5vdvdgcf3jgdgb029ano2b8vvstg2c.apps.googleusercontent.com';
  private API_KEY = 'AIzaSyAXG4mu_cHIgMsOfZfVZQ4tgNOUbPQivjA';
  private SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
  private DISCOVERY_DOCS = [
    'https://sheets.googleapis.com/$discovery/rest?version=v4',
  ];

  constructor() {
    this.initClient();
  }

  private async initClient() {
    await loadGapiInsideDOM();
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: this.API_KEY,
        clientId: this.CLIENT_ID,
        discoveryDocs: this.DISCOVERY_DOCS,
        scope: this.SCOPES,
      });
    });
  }

  async signIn() {
    await gapi.auth2.getAuthInstance().signIn();
  }

  async addRow(spreadsheetId: string, range: string, values: any[]) {
    const params = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
    };

    const valueRangeBody = {
      range,
      majorDimension: 'ROWS',
      values: [values],
    };

    return await gapi.client.sheets.spreadsheets.values.append({
      ...params,
      resource: valueRangeBody,
    });
  }
}
