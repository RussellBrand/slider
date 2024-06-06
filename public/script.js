window.onmousedown = (e) => {
  // const foo = document.getElementById("foo");
  // foo.textContent = "Mouse Down";
  track.dataset.mouseDownAt = e.clientX;
  // foo.textContent = `Mouse Down ${track.dataset.mouseDownAt}`;
};

window.onmouseup = (e) => {
  // const foo = document.getElementById("foo");
  // const prior = track.dataset.percentage;
  // foo.textContent = "Mouse Up";
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
  // foo.textContent = `Mouse UP prior:${prior}  mouseDownAt:${track.dataset.mouseDownAt}`;
};

window.onmousemove = (e) => {
  // alert("Mouse Move");
  // const foo = document.getElementById("foo");
  // foo.textContent = `MOVING  moustDownAt${track.dataset.mouseDownAt} ClientX:${e.clientX}  `;
  // foo.textContent = "moving";

  if (track.dataset.mouseDownAt === "0") {
    return;
  }

  const yyy = (100 * e.clientY) / window.innerHeight;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  let tmp = nextPercentage;
  nextPercentage = Math.min(0, nextPercentage);
  nextPercentage = Math.max(-100, nextPercentage);

  // const bar = document.getElementById("bar");
  // bar.textContent = `${percentage} -- ${nextPercentage} -- ${track.dataset.percentage}`;
  // bar.textContent = `[nextPercentage:${tmp}]  ClientX"${e.clientX} -- Percentage:${percentage} -- prevPercentage:${track.dataset.prevPercentage}`;

  // console.log(percentage);
  // track.style.transform = `translateX(${percentage}%)`;

  track.dataset.percentage = nextPercentage;
  // track.style.transform = `translate(${nextPercentage}%, -50%)`;
  track.animate(
    { transform: `translate(${nextPercentage}%, -50%)` },
    { duration: 1000, fill: "forwards" }
  );

  let x = 0;
  for (const image of track.getElementsByClassName("image")) {
    x = x + 1;
    // bar.textContent = `[${x}] Image (${image.id})  nextPercentage:${nextPercentage}`;
    // image.style.objectPosition = `${nextPercentage}% ${nextPercentage}%`;

    // image.style.objectPosition = `${nextPercentage + 100}% ${      nextPercentage + 100    }%`;

    image.animate(
      { objectPosition: `${nextPercentage + 100}% ${yyy}%` },
      { duration: 1000, fill: "forwards" }
    );

    // bar.textContent = image.style.objectPosition;
  }
};
