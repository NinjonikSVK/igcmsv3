/*!

 =========================================================
 * Black Kit Pro - v1.0.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/blk-design-system-pro
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
var big_image,
  navbar_initialized,
  didScroll,
  transparent = !0,
  transparentDemo = !0,
  fixedTop = !1,
  backgroundOrange = !1,
  toggle_initialized = !1,
  $datepicker = $(".datepicker"),
  $collapse = $(".navbar .collapse"),
  $html = $("html"),
  $tagsinput = $(".tagsinput");
function up(e) {
  (document.getElementById("myNumber").value =
    parseInt(document.getElementById("myNumber").value) + 1),
    document.getElementById("myNumber").value >= parseInt(e) &&
      (document.getElementById("myNumber").value = e);
}
function down(e) {
  (document.getElementById("myNumber").value =
    parseInt(document.getElementById("myNumber").value) - 1),
    document.getElementById("myNumber").value <= parseInt(e) &&
      (document.getElementById("myNumber").value = e);
}
-1 < navigator.platform.indexOf("Win")
  ? (0 != $(".tab-content .table-responsive").length &&
      $(".table-responsive").each(function () {
        new PerfectScrollbar($(this)[0]);
      }),
    $html.addClass("perfect-scrollbar-on"))
  : $html.addClass("perfect-scrollbar-off"),
  $(document).ready(function () {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      var t = $(this),
        a = $(this).offsetParent(".dropdown-menu");
      return (
        $(this).next().hasClass("show") ||
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show"),
        $(this).next(".dropdown-menu").toggleClass("show"),
        $(this).closest("a").toggleClass("open"),
        $(this)
          .parents("a.dropdown-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-menu .show").removeClass("show");
          }),
        a.parent().hasClass("navbar-nav") ||
          t.next().css({ top: t[0].offsetTop, left: a.outerWidth() - 4 }),
        !1
      );
    }),
      $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();
    var e = $tagsinput.data("color");
    0 != $tagsinput.length && $tagsinput.tagsinput(),
      $(".bootstrap-tagsinput")
        .find(".tag")
        .addClass("badge-" + e),
      0 != $(".selectpicker").length &&
        $(".selectpicker").selectpicker({
          iconBase: "tim-icons",
          tickIcon: "icon-check-2",
        }),
      768 <= $(window).width() &&
        0 != (big_image = $('.header[data-parallax="true"]')).length &&
        $(window).on("scroll", blackKit.checkScrollForParallax),
      $('[data-toggle="popover"]').each(function () {
        (color_class = $(this).data("color")),
          $(this).popover({
            template:
              '<div class="popover popover-' +
              color_class +
              '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          });
      });
    var t = document.getElementById("square1"),
      a = document.getElementById("square2"),
      o = document.getElementById("square3"),
      r = document.getElementById("square4"),
      l = document.getElementById("square5"),
      n = document.getElementById("square6"),
      s = document.getElementById("square7"),
      i = document.getElementById("square8");
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      (0 != $(".square").length &&
        $(document).mousemove(function (e) {
          (posX = event.clientX - window.innerWidth / 2),
            (posY = event.clientY - window.innerWidth / 6),
            (t.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (a.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (o.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (r.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (l.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (n.style.transform =
              "perspective(500px) rotateY(" +
              0.05 * posX +
              "deg) rotateX(" +
              -0.05 * posY +
              "deg)"),
            (s.style.transform =
              "perspective(500px) rotateY(" +
              0.02 * posX +
              "deg) rotateX(" +
              -0.02 * posY +
              "deg)"),
            (i.style.transform =
              "perspective(500px) rotateY(" +
              0.02 * posX +
              "deg) rotateX(" +
              -0.02 * posY +
              "deg)");
        })),
      blackKit.initNavbarImage(),
      ($navbar = $(".navbar[color-on-scroll]")),
      (scroll_distance = $navbar.attr("color-on-scroll") || 500),
      0 != $(".navbar[color-on-scroll]").length &&
        (blackKit.checkScrollForTransparentNavbar(),
        $(window).on("scroll", blackKit.checkScrollForTransparentNavbar)),
      $(".form-control")
        .on("focus", function () {
          $(this).parent(".input-group").addClass("input-group-focus");
        })
        .on("blur", function () {
          $(this).parent(".input-group").removeClass("input-group-focus");
        }),
      $(".bootstrap-switch").each(function () {
        ($this = $(this)),
          (data_on_label = $this.data("on-label") || ""),
          (data_off_label = $this.data("off-label") || ""),
          $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label,
          });
      }),
      992 <= $(window).width() &&
        ((big_image = $('.page-header-image[data-parallax="true"]')),
        $(window).on("scroll", blackKit.checkScrollForParallax)),
      $(".carousel").carousel({ interval: 4e3 }),
      0 != $(".datetimepicker").length &&
        $(".datetimepicker").datetimepicker({
          icons: {
            time: "tim-icons icon-watch-time",
            date: "tim-icons icon-calendar-60",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: "tim-icons icon-minimal-left",
            next: "tim-icons icon-minimal-right",
            today: "fa fa-screenshot",
            clear: "fa fa-trash",
            close: "fa fa-remove",
          },
        }),
      0 != $(".datepicker").length &&
        $(".datepicker").datetimepicker({
          format: "MM/DD/YYYY",
          icons: {
            time: "tim-icons icon-watch-time",
            date: "tim-icons icon-calendar-60",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: "tim-icons icon-minimal-left",
            next: "tim-icons icon-minimal-right",
            today: "fa fa-screenshot",
            clear: "fa fa-trash",
            close: "fa fa-remove",
          },
        }),
      0 != $(".timepicker").length &&
        $(".timepicker").datetimepicker({
          format: "h:mm A",
          icons: {
            time: "tim-icons icon-watch-time",
            date: "tim-icons icon-calendar-60",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: "tim-icons icon-minimal-left",
            next: "tim-icons icon-minimal-right",
            today: "fa fa-screenshot",
            clear: "fa fa-trash",
            close: "fa fa-remove",
          },
        });
  });
var lastScrollTop = 0,
  delta = 5,
  navbarHeight = 0;
function hasScrolled() {
  var e = $(this).scrollTop();
  Math.abs(lastScrollTop - e) <= delta ||
    (lastScrollTop < e && navbarHeight < e
      ? $(".navbar.nav-down").removeClass("nav-down").addClass("nav-up")
      : e + $(window).height() < $(document).height() &&
        $(".navbar.nav-up").removeClass("nav-up").addClass("nav-down"),
    (lastScrollTop = e));
}
function debounce(a, o, r) {
  var l;
  return function () {
    var e = this,
      t = arguments;
    clearTimeout(l),
      (l = setTimeout(function () {
        (l = null), r || a.apply(e, t);
      }, o)),
      r && !l && a.apply(e, t);
  };
}
$(window).on("resize", function () {
  blackKit.initNavbarImage();
}),
  (blackKit = {
    misc: { navbar_menu_visible: 0 },
    checkScrollForTransparentNavbar: debounce(function () {
      $(document).scrollTop() > scroll_distance
        ? transparent &&
          ((transparent = !1),
          $(".navbar[color-on-scroll]").removeClass("navbar-transparent"))
        : transparent ||
          ((transparent = !0),
          $(".navbar[color-on-scroll]").addClass("navbar-transparent"));
    }, 17),
    initDatePicker: function () {
      0 != $datepicker.length &&
        $datepicker.datetimepicker({
          icons: {
            time: "tim-icons icon-watch-time",
            date: "tim-icons icon-calendar-60",
            up: "fa fa-chevron-up",
            down: "fa fa-chevron-down",
            previous: "tim-icons icon-minimal-left",
            next: "tim-icons icon-minimal-right",
            today: "fa fa-screenshot",
            clear: "fa fa-trash",
            close: "fa fa-remove",
          },
        });
    },
    initNavbarImage: function () {
      var e = $(".navbar")
          .find(".navbar-translate")
          .siblings(".navbar-collapse"),
        t = e.data("nav-image");
      $(window).width() < 991 || $("body").hasClass("burger-menu")
        ? null != t &&
          e
            .css("background", "url('" + t + "')")
            .removeAttr("data-nav-image")
            .css("background-size", "cover")
            .addClass("has-image")
        : null != t &&
          e
            .css("background", "")
            .attr("data-nav-image", "" + t)
            .css("background-size", "")
            .removeClass("has-image");
    },
    initSliders: function () {
      var e = document.getElementById("sliderRegular");
      noUiSlider.create(e, {
        start: 40,
        connect: [!0, !1],
        range: { min: 0, max: 100 },
      });
      var t = document.getElementById("sliderDouble");
      noUiSlider.create(t, {
        start: [20, 60],
        connect: !0,
        range: { min: 0, max: 100 },
      });
    },
    checkScrollForMovingNavbar: function () {
      (navbarHeight = $(".navbar").outerHeight()),
        $(window).scroll(function (e) {
          didScroll = !0;
        }),
        setInterval(function () {
          didScroll && (hasScrolled(), (didScroll = !1));
        }, 250);
    },
    checkScrollForParallax: debounce(function () {
      (oVal = $(window).scrollTop() / 3),
        big_image.css({
          transform: "translate3d(0," + oVal + "px,0)",
          "-webkit-transform": "translate3d(0," + oVal + "px,0)",
          "-ms-transform": "translate3d(0," + oVal + "px,0)",
          "-o-transform": "translate3d(0," + oVal + "px,0)",
        });
    }, 6),
    initVideoBackground: function () {
      $('[data-toggle="video"]').click(function () {
        (id_video = $(this).data("video")),
          (video = $("#" + id_video).get(0)),
          (parent = $(this).parent("div").parent("div")),
          video.paused
            ? (video.play(),
              $(this).html('<i class="fa fa-pause"></i> Pause Video'),
              parent.addClass("state-play"))
            : (video.pause(),
              $(this).html('<i class="fa fa-play"></i> Play Video'),
              parent.removeClass("state-play"));
      });
    },
    initContactUsMap: function () {
      var e = new google.maps.LatLng(40.748817, -73.985428),
        t = {
          zoom: 13,
          center: e,
          scrollwheel: !1,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#8ec3b9" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1a3646" }],
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [{ color: "#4b6878" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#64779e" }],
            },
            {
              featureType: "administrative.province",
              elementType: "geometry.stroke",
              stylers: [{ color: "#4b6878" }],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.stroke",
              stylers: [{ color: "#334e87" }],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#283d6a" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6f9ba5" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#3C7680" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#304a7d" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#98a5be" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#2c6675" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#9d2a80" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#9d2a80" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#b0d5ce" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [{ color: "#98a5be" }],
            },
            {
              featureType: "transit",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "transit.line",
              elementType: "geometry.fill",
              stylers: [{ color: "#283d6a" }],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [{ color: "#3a4762" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#0e1626" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#4e6d70" }],
            },
          ],
        },
        a = new google.maps.Map(document.getElementById("contactUsMap"), t);
      new google.maps.Marker({ position: e, title: "Hello World!" }).setMap(a);
    },
    initContactUs2Map: function () {
      var e = new google.maps.LatLng(40.748817, -73.985428),
        t = {
          zoom: 13,
          center: e,
          scrollwheel: !1,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#1d2c4d" }] },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#8ec3b9" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1a3646" }],
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [{ color: "#4b6878" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#64779e" }],
            },
            {
              featureType: "administrative.province",
              elementType: "geometry.stroke",
              stylers: [{ color: "#4b6878" }],
            },
            {
              featureType: "landscape.man_made",
              elementType: "geometry.stroke",
              stylers: [{ color: "#334e87" }],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#283d6a" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6f9ba5" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#3C7680" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#304a7d" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#98a5be" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#2c6675" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [{ color: "#9d2a80" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#9d2a80" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#b0d5ce" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#023e58" }],
            },
            {
              featureType: "transit",
              elementType: "labels.text.fill",
              stylers: [{ color: "#98a5be" }],
            },
            {
              featureType: "transit",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#1d2c4d" }],
            },
            {
              featureType: "transit.line",
              elementType: "geometry.fill",
              stylers: [{ color: "#283d6a" }],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [{ color: "#3a4762" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#0e1626" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#4e6d70" }],
            },
          ],
        },
        a = new google.maps.Map(document.getElementById("contactUs2Map"), t);
      new google.maps.Marker({ position: e, title: "Hello World!" }).setMap(a);
    },
  });
//# sourceMappingURL=_site_kit_pro/assets/js/kit-pro.js.map
