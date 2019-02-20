const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0

  const body = document.querySelector("body")
  body.addEventListener('keydown', function(e){
    const key = e.key

    index = (codes[index] === key) ? ++index : 0

    if (index === codes.length) {
      window.alert("Hurray!");
      index = 0
    }
  })
}
