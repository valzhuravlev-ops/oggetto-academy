t_onReady(function () {
  t_onFuncLoad("t396_init", function () {
    t396_init("448159724");
  });
});

function checkSize_448159726() {
  var rec = document.querySelector("#footer_448159726");
  if (!rec) return;
  var textContentEl = rec.querySelector(".t345-text");
  var iconsContentEl = rec.querySelector(".t345-socials");
  if (!textContentEl || !iconsContentEl) return;
  var contentWidth = textContentEl.offsetWidth + iconsContentEl.offsetWidth;
  var container = rec.querySelector(".t345-container");
  var containerWidth = container.offsetWidth - 30;
  if (contentWidth > containerWidth && containerWidth > 0) {
    container.classList.add("t345-socials_block");
  } else {
    container.classList.remove("t345-socials_block");
  }
}
t_onReady(function () {
  t_onFuncLoad("checkSize_448159726", function () {
    checkSize_448159726();
    window.addEventListener(
      "resize",
      t_throttle(function () {
        checkSize_448159726();
      }),
    );
    if (typeof jQuery !== "undefined") {
      $("#rec448159726").bind("displayChanged", function () {
        checkSize_448159726();
      });
    } else {
      var rec = document.querySelector("#rec448159726");
      if (!rec) return;
      rec.addEventListener("displayChanged", function () {
        checkSize_448159726();
      });
    }
  });
});

t_onReady(function () {
  var hash = window.location.hash;
  t_onFuncLoad("t270_scroll", function () {
    t270_scroll(hash, -3);
  });
  setTimeout(function () {
    var curPath = window.location.pathname;
    var curFullPath = window.location.origin + curPath;
    var recs = document.querySelectorAll(".r");
    Array.prototype.forEach.call(recs, function (rec) {
      var selects =
        'a[href^="#"]:not([href="#"]):not(.carousel-control):not(.t-carousel__control):not([href^="#price"]):not([href^="#submenu"]):not([href^="#popup"]):not([href*="#zeropopup"]):not([href*="#closepopup"]):not([href*="#closeallpopup"]):not([href^="#prodpopup"]):not([href^="#order"]):not([href^="#!"]):not([target="_blank"]),' +
        'a[href^="' +
        curPath +
        '#"]:not([href*="#!/tfeeds/"]):not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]):not([href*="#zeropopup"]):not([href*="#closepopup"]):not([href*="#closeallpopup"]):not([target="_blank"]),' +
        'a[href^="' +
        curFullPath +
        '#"]:not([href*="#!/tfeeds/"]):not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]):not([href*="#zeropopup"]):not([href*="#closepopup"]):not([href*="#closeallpopup"]):not([target="_blank"])';
      var elements = rec.querySelectorAll(selects);
      Array.prototype.forEach.call(elements, function (element) {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          var hash = this.hash.trim();
          t_onFuncLoad("t270_scroll", function () {
            t270_scroll(hash, -3);
          });
        });
      });
    });
    if (
      document.querySelectorAll(".js-store").length > 0 ||
      document.querySelectorAll(".js-feed").length > 0
    ) {
      t_onFuncLoad("t270_scroll", function () {
        t270_scroll(hash, -3, 1);
      });
    }
  }, 500);
  setTimeout(function () {
    var hash = window.location.hash;
    if (
      hash &&
      document.querySelectorAll(
        'a[name="' + hash.slice(1) + '"], div[id="' + hash.slice(1) + '"]',
      ).length > 0
    ) {
      if (window.isMobile) {
        t_onFuncLoad("t270_scroll", function () {
          t270_scroll(hash, 0);
        });
      } else {
        t_onFuncLoad("t270_scroll", function () {
          t270_scroll(hash, 0);
        });
      }
    }
  }, 1000);
  window.addEventListener("popstate", function () {
    var hash = window.location.hash;
    if (
      hash &&
      document.querySelectorAll(
        'a[name="' + hash.slice(1) + '"], div[id="' + hash.slice(1) + '"]',
      ).length > 0
    ) {
      if (window.isMobile) {
        t_onFuncLoad("t270_scroll", function () {
          t270_scroll(hash, 0);
        });
      } else {
        t_onFuncLoad("t270_scroll", function () {
          t270_scroll(hash, 0);
        });
      }
    }
  });
});
