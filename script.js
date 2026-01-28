const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");

const maxLength = 150;

textInput.addEventListener("input", () => {
  const currentLength = textInput.value.length;
  counter.textContent = `${currentLength}/${maxLength}`;

  if (currentLength === maxLength) {
    counter.classList.add("limit");
  } else {
    counter.classList.remove("limit");
  }
});
