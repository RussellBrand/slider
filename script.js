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
};

window.onmousemove = (e) => {
  const foo = document.getElementById("foo");
  // foo.style.color = "orange";
  foo.textContent = `${track.dataset.mouseDownAt} moving ${e.clientX}  `;
  // console.log("mouse move", track.dataset.mouseDownAt);
  // console.log("foo");
  // if (track.dataset.mouseDownAt === "0") {
  // return;
  //  }
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * 100;

  const bar = document.getElementById("bar");
  // bar.textContent = `${percentage}`;

  // console.log(percentage);
  // track.style.transform = `translateX(${percentage}%)`;

  track.style.transform = `translate(${percentage}%, 50%)`;
};
