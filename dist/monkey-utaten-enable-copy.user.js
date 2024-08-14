// ==UserScript==
// @name       monkey-utaten-enable-copy
// @namespace  npm/vite-plugin-monkey
// @version    0.0.0
// @author     monkey
// @icon       https://utaten.com/apple-touch-icon-precomposed.png
// @match      https://utaten.com/*
// ==/UserScript==

(function () {
  'use strict';

  (() => {
    const lyricBody = document.querySelectorAll(".lyricBody");
    for (let i = 0; i < lyricBody.length; ++i) {
      const elem = lyricBody[i];
      elem.style.userSelect = "auto";
      elem.style.oUserSelect = "auto";
      elem.style.msUserSelect = "auto";
      elem.style.mozUserSelect = "auto";
      elem.style.webkitUserSelect = "auto";
      elem.onselectstart = null;
      elem.oncontextmenu = null;
    }
  })();

})();