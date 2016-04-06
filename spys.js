// Generated by IcedCoffeeScript 108.0.9
(function() {
  var exit, page, submitted, system;

  page = require('webpage').create();

  system = require('system');

  submitted = false;

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
  }), 120000);

  page.onInitialized = function() {
    page.onCallback = function(data) {
      var arr;
      if (submitted) {
        arr = page.evaluate(function() {
          return [].slice.call(document.getElementsByClassName('spy14')).map(function(el) {
            return el.textContent.match(/^(\d+\.\d+\.\d+\.\d+).+(\:\d+)$/);
          }).filter(function(el) {
            return el;
          }).map(function(el) {
            return el[1] + el[2];
          });
        });
        console.log(JSON.stringify(arr));
        return exit(0);
      } else {
        page.evaluate(function() {
          document.getElementById('xpp').selectedIndex = 3;
          document.getElementById('xf2').selectedIndex = 1;
          return document.forms[0].submit();
        });
        return submitted = true;
      }
    };
    return page.evaluate(function() {
      return document.addEventListener('DOMContentLoaded', (function() {
        return window.callPhantom();
      }), false);
    });
  };

  page.open((system.args[1] ? 'http://spys.ru/proxys/' + system.args[1] : 'http://spys.ru/proxies/'), (function() {
    return null;
  }));

}).call(this);
