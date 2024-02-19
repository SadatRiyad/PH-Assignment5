let count = 1;
let totalSeat = 40;
let selectedSeat = 0;
let seatLeft = totalSeat - 1;
const seatPrice = 550;
const seatClass = "Economy";
let totalPrice = 0;
let grandTotal = 0;
let discountPrice = 0;
let isDiscounted = false;
let isSeatSelected = false;
let isNumber = false;

//for seat selection
const seat = document.querySelectorAll(".seats");

for (let i = 0; i < seat.length; i++) {
  const seatSelect = seat[i];

  seatSelect.addEventListener("click", function () {
    if (!this.classList.contains("selected") && count <= 4) {
      const seatNumber = seatSelect.querySelector("h1").innerText;
      //   console.log(seatNumber);
      this.classList.add("selected");
      this.classList.toggle("active");

      //   for seatNumber .innerText = "0" + count + ". " + seatNumber
      const seatNo = document.getElementById("seat-no");
      const h5 = document.createElement("h5");
      h5.innerText = "0" + count + ". " + " " + seatNumber;
      seatNo.appendChild(h5);
      //   for seatClass
      const seatClasses = document.getElementById("seat-class");
      const h4 = document.createElement("h4");
      h4.innerText = seatClass;
      seatClasses.appendChild(h4);

      const seatPrices = document.getElementById("seat-price");
      const h3 = document.createElement("h3");
      h3.innerText = seatPrice;
      seatPrices.appendChild(h3);

      const counts = (document.getElementById("count").innerText = count);
      const seatLefts = (document.getElementById("seatLeft").innerText =
        seatLeft);

      totalPrice += seatPrice;
      const totalPrices = (document.getElementById("total-price").innerText =
        totalPrice);

      grandTotal = totalPrice - discountPrice;
      const grandTotals = (document.getElementById("grand-total").innerText =
        grandTotal);

      count++;
      selectedSeat++;
      seatLeft--;
    } else {
      alert(
        "you'r trying buy same ticket twice or You can select maximum 4 seats at a time. Please refresh the page and try again. Thank you!"
      );
    }
  });
}

// setBackgroundColorById("seat-select");
const seatBg = document.getElementById("seat-select");
function setBackgroundColorById(id, color) {
  const element = document.getElementById(id);
  element.style.backgroundColor = color;
}

let isMouseDown = false;
let startX, endX;

seatBg.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.clientX;
  console.log("mouse down");
});

seatBg.addEventListener("mouseup", (e) => {
  isMouseDown = false;
  endX = e.clientX;
  console.log("mouse up");
});

window.onload = function () {
  const seatBg = document.getElementById("seat-select");
  seatBg.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      const seatBg = document.getElementById("seat-select");
      seatBg.scrollLeft += startX - e.clientX;
      startX = e.clientX;
    }
  });
};

// for number input
if (document.getElementById("number")) {
  document.getElementById("number").addEventListener("input", function (e) {
    if (e.target.value.length > 0) {
      isNumber = true;

      if (isNumber == true && isSeatSelected == true) {
        btnSubmit.removeAttribute("disabled");
        btnSubmit.classList.add("active");
      } else {
        btnSubmit.classList.remove("active");
        btnSubmit.setAttribute("disabled", "true");
      }
    } else {
      isNumber = false;
    }
  });
}
// isSeatSelected
const seatSelected = document.querySelectorAll(".seats");
for (let i = 0; i < seat.length; i++) {
  const seatSelect = seat[i];
  seatSelect.addEventListener("click", function () {
    isSeatSelected = true;

    if (isNumber == true && isSeatSelected == true) {
      btnSubmit.removeAttribute("disabled");
      btnSubmit.classList.add("active");
    } else {
      btnSubmit.classList.remove("active");
      btnSubmit.setAttribute("disabled", "true");
    }
  });
}

// for submit button active
const btnSubmit = document.querySelector("#btn-next");

for (let i = 0; i < 1; i++) {
  // check all the conditions to enable the button
  if (isNumber == true && isSeatSelected == true) {
    btnSubmit.removeAttribute("disabled");
    btnSubmit.classList.add("active");
  } else {
    btnSubmit.classList.remove("active");
    btnSubmit.setAttribute("disabled", "true");
  }
}

// // btn-apply for discount
const seated = document.querySelectorAll(".seats");

for (let j = 0; j < seated.length; j++) {
  const seatSelector = seated[j];
  seatSelector.addEventListener("click", function () {
    if (count == 5 && isSeatSelected == true) {
      const btnApply = document.querySelector("#btn-apply");
      btnApply.removeAttribute("disabled");
      btnApply.classList.add("active");

      btnApply.addEventListener("click", function () {
        // get the value from input field
        const inputValue = document.getElementById("input-code").value;
        const cuponCode = inputValue.split(" ").join("").toUpperCase();

        if (inputValue === "") {
          alert("Please enter your code!");
        } else if (cuponCode === "NEW15" && isDiscounted == false) {
          isDiscounted = true;
          const discountElement = document.getElementById("discount-price");
          const discountPrice = totalPrice * 0.15;
          discountElement.innerText = discountPrice.toFixed(2);
          grandTotal = totalPrice - discountPrice;
          const grandTotals = (document.getElementById(
            "grand-total"
          ).innerText = grandTotal);

          function hideBtn() {
            const btnApply = document.querySelector("#btn-apply").parentNode;
            btnApply.setAttribute("hidden", "true");
            btnApply.classList.remove("active");
          }
          setTimeout(hideBtn, 100);

        } else if (cuponCode === "COUPLE20" && isDiscounted == false) {
          isDiscounted = true;
          const discountElement = document.getElementById("discount-price");
          const discountPrice = totalPrice * 0.2;
          discountElement.innerText = discountPrice.toFixed(2);
          grandTotal = totalPrice - discountPrice;
          const grandTotals = (document.getElementById(
            "grand-total"
          ).innerText = grandTotal);

          function hideBtn() {
            const btnApply = document.querySelector("#btn-apply").parentNode;
            btnApply.setAttribute("hidden", "true");
            btnApply.classList.remove("active");
          }
          setTimeout (hideBtn, 100);

        } else {
          alert("Invalid Code, Please enter a valid code.");
        }
      });
    }
  });
}

// btn-apply hidden after successful apply of coupon code
function hideBtn() {
  const btnApply = document.querySelector("#btn-apply");
  btnApply.setAttribute("disabled", "true");
  btnApply.classList.remove("active");
}