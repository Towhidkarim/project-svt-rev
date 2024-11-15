'use server';
import { google } from 'googleapis';

export default async function SendContactInfoAction({
  subject,
  message,
  firstName,
  lastName,
  email,
}: {
  subject: string;
  message: string;
  firstName: string;
  lastName: string;
  email: string;
}) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheet = google.sheets({
      version: 'v4',
      auth,
    });

    const append = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      valueInputOption: 'USER_ENTERED',
      range: 'A1:E1',
      requestBody: {
        values: [[firstName, lastName, email, subject, message]],
      },
    });
    return { ok: true, message: append.data };
  } catch (error) {
    console.log(error);
    return { ok: false, message: 'Something went wrong' };
  }
}
