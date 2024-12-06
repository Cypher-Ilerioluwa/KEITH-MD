/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09OMHZncjQrY0lLNkh1N1BkVkVoQWpCMXpmMzN1eTBpMENrNjBvS1RHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjR2YWVWTzNINDZ2UjdpVFpsZk53ZC9JVnphTXE5aTFYSUZKbjI4K21TST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SGxCeGJHdzhzRTMrMUNZYkZUcmEwNDQ2cUtTV04vTk4zV05zQ1pnK0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJb1BIMi8yK3ZGY1d2ZXhndmxSUWt3dU5PNFRhVHNPSXhtZXRleGZXYVFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQdHQ3Z1hYY1lLTmx5OW1ubktkK1dQbG5taUgvTlZrYXI2azlPNjlyVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims4bUhiQVl3N0F3ZDlROEpRS2d3Z0tJTmVkSG4ybWV6WkpYY2lWWDFnRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBJNXZkNzg4RmJMVHY3Qy9qckJMTVNkZFlncXBoVTg3bG9DRGNQakMyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0RzUUp2ck5KbmtBclpnTURxNGcweFJLV2NsQlkyd2EwcnBRWHY1YkNSRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFiYzBDa2pLamxnU1NadmlYc2FjYU9pc2JJUTZCNkNzZ243bkNENzNmUFVVeUoxYjEvSVdPNDlmTGphL1RkK0VJN3lZaUdjTWpETXJ0SEhUZEVLQ0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJoaDBNZXRLMmYvcEVKek51M015b1R0UzhtWW5EZnlzTzVTclBhVDRNTXc4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0bE1TeENDVlJoMmFRVWxCV3NlcW9nIiwicGhvbmVJZCI6IjM3ZDAyYjU0LWM1ZTAtNDdjYi1iMjMzLTJmYjk4YzYxNjA1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvYnlVaC9MU0hmU3ZyaTEvckdnbmFVZDRKQ2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVhxK2wwcGlwSXkxVEl1cFRDMkVuUWNRS3lJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxCMkJWNzhHIiwibWUiOnsiaWQiOiIyMzQ5MTIxODgxMzQzOjU3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkN5cGhlciDDjGzDqXLDrW9sw7p3YSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHF4MHBVRkVQRFd6TG9HR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMWk2L2tUNmRWTnBqSHNoY04yL3lacDRqcjAvM3J3VlFLWGhjUEJIMXVSdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicVhSc0xEMXd1MGJpZXdTL3Y2endLR29IWjhDMmkybTNQajhoN0NzcjRUTjZ2WThvMU5PcTN0emNQU1kxTkd0N1VjTjEyUkE1NTVVTTZ3QkVCUEE3Qnc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9Yd2Z1VVNsNjNrV0l2ek5mUjB5ckNmMXQ5aU5CT1p2R0tjbkM3NENMdkF3bHo3Y0c2RzFpU01ZdnRKR1cwdGI5d2Qwc3pEbnZocHJpVUFrQklEQUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEyMTg4MTM0Mzo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkWXV2NUUrblZUYVl4N0lYRGR2OG1hZUk2OVA5NjhGVUNsNFhEd1I5YmtjIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNTAzODY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZzdSJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'Cypher';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '2349121881343';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'ÀKÀNDÉ-MIDÉ-BOT🤖🌹🍀';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'typing';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
