﻿/*
 Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add("about", function (a) {
  a = a.lang.about;
  var b = CKEDITOR.getUrl(
    CKEDITOR.plugins.get("about").path +
      "dialogs/" +
      (CKEDITOR.env.hidpi ? "hidpi/" : "") +
      "logo_ckeditor.png"
  );
  return {
    title: a.dlgTitle,
    minWidth: 390,
    minHeight: 210,
    contents: [
      {
        id: "tab1",
        label: "",
        title: "",
        expand: !0,
        padding: 0,
        elements: [
          {
            type: "html",
            html:
              '\x3cstyle type\x3d"text/css"\x3e.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:81px;background-color:#fff;background-image:url(' +
              b +
              ");" +
              (CKEDITOR.env.hidpi ? "background-size:194px 58px;" : "") +
              'background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}.cke_about_container \x3e p,.cke_rtl .cke_about_container \x3e p{text-align:center;}\x3c/style\x3e\x3cdiv class\x3d"cke_about_container"\x3e\x3cdiv class\x3d"cke_about_logo"\x3e\x3c/div\x3e\x3cp\x3eCKEditor ' +
              CKEDITOR.version +
              " (revision " +
              CKEDITOR.revision +
              ')\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/"\x3ehttps://ckeditor.com\x3c/a\x3e\x3c/p\x3e\x3cp\x3e' +
              a.moreInfo +
              '\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://ckeditor.com/legal/ckeditor-oss-license/"\x3ehttps://ckeditor.com/legal/ckeditor-oss-license/\x3c/a\x3e\x3c/p\x3e\x3cp\x3e' +
              a.copy.replace(
                "$1",
                '\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"https://cksource.com/"\x3eCKSource\x3c/a\x3e - Frederico Knabben'
              ) +
              "\x3c/p\x3e\x3c/div\x3e",
          },
        ],
      },
    ],
    buttons: [CKEDITOR.dialog.cancelButton],
  };
});
