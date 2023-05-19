// https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
(function (window) {
  window.__env = window.__env || {};

  // environment-dependent settings
  window.__env.apiUrl = "http://localhost:5123/api/";
  window.__env.version = "2.0.0";
  window.__env.mapbox_token = "pk.eyJ1IjoibGl2aWF0YWdsaWFwaWV0cmEiLCJhIjoiY2xkdmRsOThpMGV2ZTNxcG5lb2FmdTFmciJ9.TqJXUUanoiGwo3d8b3nVMw";
})(this);
