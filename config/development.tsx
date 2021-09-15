/**
 * Rename this file to `development.js`
 * Then place custom settings for local dev in here
 */

const application = require('./application');

const APP_SECRET = '8FkWJamYmNgHLYDfEs,VjxUp';

module.exports = Object.assign({}, application, {
  APP_SECRET,
});
