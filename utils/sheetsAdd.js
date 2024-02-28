// Google sheet npm package
const { GoogleSpreadsheet } = require('google-spreadsheet');

// File handling package
const fs = require('fs');


// spreadsheet key is the long id in the sheets URL
const RESPONSES_SHEET_ID = '1Q_bORq71XQWMQ9jhuKvN9Tb21TTds8EA6D854apJSIU';

// Create a new document
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

// Credentials for the service account
// const CREDENTIALS = JSON.parse(fs.readFileSync('fragrensFiles.json'));
const CREDENTIALS = require('./fragrensFile.json');

// console.log(CREDENTIALS.client_email)


const sheetAdd = async (row) => {

  // use service account creds
  await doc.useServiceAccountAuth({
    client_email: CREDENTIALS.client_email,
    private_key: CREDENTIALS.private_key
  });

  await doc.loadInfo();
  let sheet = doc.sheetsByIndex[0];

  await sheet.addRow(row);

}
module.exports = sheetAdd
