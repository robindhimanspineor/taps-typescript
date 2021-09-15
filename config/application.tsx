/**
 * Basic settings for running the app are in here.
 * Do not put anything sensitive (API Keys, Passwords, etc)
 * in this file.
 */
const config = require('../config.json');

const {
  SERVER_PORT,
  GAPI_PATH,
  PASS_PHRASE,
  CRAWLING,
  ETAG,
  ANALYTIC_ID,
  GTM_ID,
  DOMAIN_PATH,
  ENV,
  NEVERBOUNCE_KEY,
  CLOUDFRONT_PATH,
  PAYPAL_CLIENT_ID,
  REVERSE_PHONE_KEY,
} = config;
module.exports = {
  SERVER_PORT,
  GAPI_PATH,
  PASS_PHRASE,
  CRAWLING,
  ETAG,
  ANALYTIC_ID,
  GTM_ID,
  DOMAIN_PATH,
  ENV,
  NEVERBOUNCE_KEY,
  CLOUDFRONT_PATH,
  PAYPAL_CLIENT_ID,
  REVERSE_PHONE_KEY,
};
