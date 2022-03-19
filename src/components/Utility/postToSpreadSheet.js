export const postToSpreadSheet = async () => {
  const creds = require("./api_credentials.json");
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const doc = new GoogleSpreadsheet(
    "1k-9XYcdqz1TMVqoq-J1FBcNXMij8swFIjINcvGKPFEA"
  );
  await doc.useApiKey("AIzaSyC56DAG2ORrEQ1RN5jjY6j_zVTaICvCGjs");
  await doc.useServiceAccountAuth(creds, "dikshitkumarn@gmail.com");
  // spreadsheet key is the long id in the sheets URL

  const sheet = await doc.addSheet({ headerValues: ["name", "email"] });

  await sheet.addRow({ name: "Larry Page", email: "larry@google.com" });
};

// use service account creds

// // OR load directly from json file if not in secure environment
// await doc.useServiceAccountAuth(require('./creds-from-google.json'));
// // OR use service account to impersonate a user (see https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority)
// await doc.useServiceAccountAuth(require('./creds-from-google.json'), 'some-user@my-domain.com');
// // OR use API key -- only for read-only access to public sheets
