const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  // console.log("mouse down", e.clientX);
  // alert("mouse down");
  const foo = document.getElementById("foo");
  // foo.style.color = "white";
  foo.textContent = "Mouse Down";
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  const foo = document.getElementById("foo");
  // foo.style.color = "green";
  foo.textContent = "Up";

  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = (e) => {
  const foo = document.getElementById("foo");
  // foo.style.color = "orange";
  foo.textContent = `${track.dataset.mouseDownAt} moving ${e.clientX}  `;
  // console.log("mouse move", track.dataset.mouseDownAt);
  // console.log("foo");
  if (track.dataset.mouseDownAt === "0") {
    return;
  }
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  const bar = document.getElementById("bar");
  // bar.textContent = `${percentage} -- ${nextPercentage} -- ${track.dataset.percentage}`;
  bar.textContent = `${e.clientX} -- ${percentage} -- ${nextPercentage} == ${track.dataset.prevPercentage}`;

  // console.log(percentage);
  // track.style.transform = `translateX(${percentage}%)`;

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${nextPercentage}%, 50%)`;
};
