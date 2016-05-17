// Generated by IcedCoffeeScript 108.0.11
(function() {
  var exit, page;

  page = require('webpage').create();

  exit = function(code) {
    phantom.onError = function() {
      return null;
    };
    setTimeout((function() {
      return phantom.exit(code);
    }), 5000);
    if (page) {
      return page.close();
    }
  };

  setTimeout((function() {
    return exit(1);
  }), 100000);

  page.onInitialized = function() {
    page.onCallback = function() {
      var arr;
      arr = page.evaluate(function() {
        return [].slice.call(document.getElementsByClassName('spy4')).map(function(a) {
          return a.textContent;
        }).filter(function(a) {
          return a;
        }).filter((function(_this) {
          return function(a) {
            return a.match(/^[A-Z][A-Z]$/);
          };
        })(this));
      });
      console.log(JSON.stringify(arr));
      return exit(0);
    };
    return page.evaluate(function() {
      return document.addEventListener('DOMContentLoaded', (function() {
        return window.callPhantom();
      }), false);
    });
  };

  page.open('http://spys.ru/proxys/');

}).call(this);
