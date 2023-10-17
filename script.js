function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function alert() {
  (message) => {
    if (message == "OK") {
      swal("Good job!", "You clicked the button!", "success");
    } else {
      swal("Ups, this went bad!", "You clicked the button!", "error");
    }
  };
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function openPopupAtaja() {
  document.getElementById("popupAtaja").style.display = "block";
}

function openPopupAlivi() {
  document.getElementById("popupAlivi").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function closePopupAtaja() {
  document.getElementById("popupAtaja").style.display = "none";
}

function closePopupAlivi() {
  document.getElementById("popupAlivi").style.display = "none";
}
