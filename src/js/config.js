var CONFIG = {
  // your website's title
  document_title: "我的文档",

  // index page
  index: "./docs/es6/README.md",

  // sidebar file
  sidebar_file_prefix: "./sidebars/sidebar",

  // where the docs are actually stored on github - so you can edit
  base_url: "https://github.com/ruanyf/es6tutorial/edit/gh-pages",
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}

ditto.run();
