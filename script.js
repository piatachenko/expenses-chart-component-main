let maxAmount = -Infinity;
const columnElements = document.querySelectorAll("h1 + article div div");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const currentColumnElement = document.querySelector(
        `[id='${item.day}'] + div`
      );
      currentColumnElement.style.height =
        Math.floor(item.amount) / 7 + 1 + "rem";
      const hiddenElement = document.querySelector(`[id='${item.day}']`);
      hiddenElement.innerHTML = "$" + item.amount;
      currentColumnElement.addEventListener("mouseover", () => {
        hiddenElement.className =
          "absolute -top-10 z-10 mb-1 rounded-md bg-[#382314] p-1.5 text-sm text-[#fffaf5]";
      });
      currentColumnElement.addEventListener("mouseout", () => {
        hiddenElement.className = "hidden";
      });

      if (item.amount > maxAmount) {
        maxAmount = item.amount;
        for (let i = 0; i < columnElements.length; i++) {
          const columnElement = columnElements[i];
          columnElement.style.backgroundColor = "#ec775f";
        }
        currentColumnElement.style.backgroundColor = "#76b5bc";
      }
    });
  });
