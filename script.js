const baseMatrix = "-0 -0 -0 -0 1 -0 -0 -0 -0";
let resultMatrix = baseMatrix;

const clearFilters = () => {
  document.getElementById("image-container").style.webkitFilter =
    "url(#convolve4) contrast(100%) brightness(100%) saturate(100%)";
  document.getElementById("image-container").style.filter =
    "url(#convolve4) contrast(100%) brightness(100%) saturate(100%)";
  document.getElementById("br").value = 100;
  document.getElementById("br-text").value = 100;
  document.getElementById("ct").value = 100;
  document.getElementById("ct-text").value = 100;
  document.getElementById("st").value = 100;
  document.getElementById("st-text").value = 100;
  document.getElementById("sh").value = 0;
  document.getElementById("sh-text").value = 0;
  document.getElementById("cm").setAttribute("kernelMatrix", baseMatrix);
};

const changeFilter = (isRange = true) => {
  let ifx = document.getElementById("image-container");
  let br = document.getElementById("br");
  let brText = document.getElementById("br-text");
  let ct = document.getElementById("ct");
  let ctText = document.getElementById("ct-text");
  let st = document.getElementById("st");
  let stText = document.getElementById("st-text");
  let sh = document.getElementById("sh");
  let shText = document.getElementById("sh-text");
  let cm = document.getElementById("cm");

  if (isRange === true) {
    brText.value = br.value;
    ctText.value = ct.value;
    stText.value = st.value;
    shText.value = sh.value;
  } else {
    br.value = brText.value;
    ct.value = ctText.value;
    st.value = stText.value;
    sh.value = shText.value;
  }

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
  cm.setAttribute("kernelMatrix", resultMatrix);
};

const incrementValue = (location, isInc = true) => {
  let locationValue = document.getElementById(location).value;
  let locationTextValue = document.getElementById(location + "-text").value;

  if (isInc === true) {
    document.getElementById(location).value = Number(locationValue) + 1;
    document.getElementById(location + "-text").value =
      Number(locationTextValue) + 1;
  } else {
    document.getElementById(location).value = Number(locationValue) - 1;
    document.getElementById(location + "-text").value =
      Number(locationTextValue) - 1;
  }
  changeFilter();
};
