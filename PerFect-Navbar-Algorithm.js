// *********************************************
// * Welcome to the PerFect Navbar Algorihtm   *
// * For Any issues pls email me at --\/       *
// *            leonardosforza108@gmail.com    *
// * Thank you for using this feature.         *
// *********************************************

const struct = {};

// ********************Insert into the () the ID of your <ul> element from your HTML
const navList = document.getElementById("nav-list");

const children = navList.children;

for (let i = 0; i < children.length; i++) {
  const child = children[i].children;
  const ele = child[0];
  let href = ele.getAttribute("href");
  hrefString = href.substring(1);
  const y = document.getElementById(hrefString).getBoundingClientRect().top;
  struct[`${i}`] = [hrefString, y, ele];
}

document.addEventListener("scroll", (e) => {
  let activeKey;
  for (const [key, value] of Object.entries(struct)) {
    if (window.scrollY < value[1]) {
      activeKey = key - 1;
      break;
    } else if (window.scrollY == value[1]) {
      activeKey = key;
    }
  }
  struct[activeKey][2].classList.add("active");
  for (const [inkey, invalue] of Object.entries(struct)) {
    if (activeKey != inkey) {
      struct[inkey][2].classList.remove("active");
    }
  }
});

// Make website start from Top when refresh
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
