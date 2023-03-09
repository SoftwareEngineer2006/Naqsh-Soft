let header = document.querySelector("header"),
  sotib_olish = document.querySelector(".sotib_olish"),
  sinab_korish = document.querySelector(".sinab_korish"),
  boglanish = document.querySelector(".boglanish");

window.addEventListener("load", () => {
  let loader = document.querySelector(".loader")
  loader.classList.toggle("loaded")
  time = setTimeout(displayNoneLoader, 500)

  function displayNoneLoader() {
    loader.classList.toggle("closed")
    loader.classList.toggle("loaded")
  }
})

let lang_opener = document.querySelector(".lang_opener"),
  lang_list = document.querySelector(".header_lang_list");


let form_opener = document.querySelectorAll(".form_opener"),
  form = document.querySelector(".form"),
  closers = document.querySelector(".closers"),
  up = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 0);
  up.classList.toggle("opened", window.scrollY > 500);
});

let burger = document.querySelector(".burger"),
  lines = document.querySelectorAll(".line"),
  navbar = document.querySelector(".header_inner_list"),
  closer = document.querySelector(".closer"),
  header_inner_item = document.querySelectorAll(".header_inner_item");

burger.addEventListener("click", () => {
  lines.forEach((item) => {
    item.classList.toggle("changed");
  });
  navbar.classList.toggle("opened");
  burger.classList.remove("closed");
  form.classList.remove("opened");
  closer.classList.toggle("changed");
  lang_list.style.maxHeight = null;
});

closer.addEventListener("click", () => {
  lines.forEach((item) => {
    item.classList.remove("changed");
  });
  navbar.classList.remove("opened");
  form.classList.remove("opened");
  closer.classList.remove("changed");
  lang_list.style.maxHeight = null;
});

header_inner_item.forEach((item) => {
  item.addEventListener("click", () => {
    lines.forEach((item) => {
      item.classList.remove("changed");
    });
    navbar.classList.remove("opened");
    closer.classList.remove("changed");
    if (form.className == "opened") {
      closer.classList.add("changed");
    }
  });
});

let btns = document.querySelectorAll(".price_btns button");
btns.forEach((item) => {
  item.addEventListener("click", () => {
    btns.forEach((el) => {
      el.classList.remove("selected");
    });
    item.classList.add("selected");
  });
});

form_opener.forEach((item) => {
  item.addEventListener("click", () => {
    form.classList.add("opened");
    closer.classList.add("changed");
  });
});

closers.addEventListener("click", () => {
  form.classList.remove("opened");
  closer.classList.remove("changed");
});

sotib_olish.addEventListener("click", () => {
  closer.classList.add("changed");
  burger.classList.add("closed");
});

sinab_korish.addEventListener("click", () => {

  burger.classList.add("closed");
});

let success = document.querySelector(".success"),
  error = document.querySelector(".error");

window.addEventListener("load", () => {
  timeID = setTimeout(opened, 5000);
  success.classList.add("opened");
  error.classList.add("opened");

  function opened() {
    success.classList.remove("opened");
    error.classList.remove("opened");
  }
});

let message_closer = document.querySelectorAll(".message_closer");
message_closer.forEach((item) => {
  item.addEventListener("click", () => {
    parent = item.parentElement;
    parent.classList.remove("opened");
  });
});

boglanish.addEventListener("click", () => {
  burger.classList.add("closed");
  closer.classList.add("changed");
});

lang_opener.addEventListener("click", () => {
  if (lang_list.style.maxHeight) {
    lang_list.style.maxHeight = null;
    lang_list.style.top = `${lang_opener.getBoundingClientRect().bottom + 5}px`;
    lang_list.style.left = `${lang_opener.getBoundingClientRect().left}px`;
  } else {
    lang_list.style.maxHeight = `${lang_list.scrollHeight}px`;
    lang_list.style.top = `${lang_opener.getBoundingClientRect().bottom + 5}px`;
    lang_list.style.left = `${lang_opener.getBoundingClientRect().left}px`;
  }
  burger.classList.add("closed")
  closer.classList.toggle("changed");
});

window.addEventListener("load", () => {
  lang_list.style.top = `${lang_opener.getBoundingClientRect().bottom + 5}px`;
  lang_list.style.left = `${lang_opener.getBoundingClientRect().left}px`;
});

let header_lang_item = document.querySelectorAll(".header_lang_item")
header_lang_item.forEach((el) => {
  el.addEventListener("click", () => {
    closer.classList.remove("changed");
    lang_list.style.maxHeight = null;
  })
});