const routes = require("next-routes");

module.exports = routes().add({
  name: "home",
  pattern: "/",
  page: "home/homepage",
});
