/**
 * One-time helper to get a Google OAuth refresh token.
 * Run locally: node scripts/get-google-token.js
 * Then copy the refresh_token value into GitHub Secrets as GOOGLE_REFRESH_TOKEN.
 *
 * Required scopes:
 *   https://www.googleapis.com/auth/gmail.readonly
 *   https://www.googleapis.com/auth/calendar.readonly
 */

import { google } from 'googleapis';
import http from 'http';
import { URL } from 'url';

const CLIENT_ID     = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI  = 'http://localhost:3000/oauth2callback';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars first.');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/calendar.readonly'
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  prompt: 'consent',
  scope: SCOPES
});

console.log('\n1. Open this URL in your browser:\n');
console.log(authUrl);
console.log('\n2. After authorizing, you will be redirected to localhost:3000. Waiting...\n');

const server = http.createServer(async (req, res) => {
  if (!req.url?.startsWith('/oauth2callback')) return;
  const code = new URL(req.url, 'http://localhost:3000').searchParams.get('code');
  res.end('<h2>Done — check your terminal for the refresh token.</h2>');
  server.close();

  const { tokens } = await oauth2Client.getToken(code);
  console.log('\n✅ Tokens received:\n');
  console.log(JSON.stringify(tokens, null, 2));
  console.log('\n→ Copy "refresh_token" into GitHub Secret GOOGLE_REFRESH_TOKEN');
});

server.listen(3000);
