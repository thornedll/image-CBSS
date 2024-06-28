const baseMatrix = "-0 -0 -0 -0 1 -0 -0 -0 -0";
let resultMatrix = baseMatrix;

const clearFilters = () => {
  document.getElementById("image-container").style.webkitFilter =
    "url(#convolve4) contrast(100%) brightness(100%) saturate(100%)";
  document.getElementById("image-container").style.filter =
    "url(#convolve4) contrast(100%) brightness(100%) saturate(100%)";
  document.getElementById("br").value = 100;
  document.getElementById("ct").value = 100;
  document.getElementById("st").value = 100;
  document.getElementById("sh").value = 0;
  document.getElementById("cm").setAttribute("kernelMatrix", baseMatrix);
};

const changeFilter = () => {
  let ifx = document.getElementById("image-container");
  let br = document.getElementById("br");
  let ct = document.getElementById("ct");
  let st = document.getElementById("st");
  let sh = document.getElementById("sh");
  let cm = document.getElementById("cm");
  ifx.style.webkitFilter =
    "url(#convolve4) brightness(" +
    br.value +
    "%) contrast(" +
    ct.value +
    "%) saturate(" +
    st.value +
    "%)";
  ifx.style.filter =
    "url(#convolve4) brightness(" +
    br.value +
    "%) contrast(" +
    ct.value +
    "%) saturate(" +
    st.value +
    "%)";
  resultMatrix = resultMatrix
    .split(" ")
    .map((num) => (num > 0 ? (sh.value / 100) * 8 + 1 : -sh.value / 100))
    .join(" ");
  console.log(resultMatrix);
  cm.setAttribute("kernelMatrix", resultMatrix);
};
