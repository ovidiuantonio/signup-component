const error = document.querySelector(".error");
const input = document.querySelector(".email");

input.addEventListener("change", (e) => {
  e.preventDefault();

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(input.value).toLowerCase())) {
    error.style.opacity = "1";
  } else {
    error.style.opacity = "0";
  }
});
