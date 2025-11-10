// function toggleMenu() {
//     const nav = document.querySelector("nav ul");
//     nav.style.display = nav.style.display === "flex" ? "none" : "flex";
// }

// // Scroll reveal
// window.addEventListener("scroll", reveal);
// function reveal() {
//     const reveals = document.querySelectorAll(".reveal");
//     for (let i = 0; i < reveals.length; i++) {
//         const windowHeight = window.innerHeight;
//         const revealTop = reveals[i].getBoundingClientRect().top;
//         const revealPoint = 100;
//         if (revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add("active");
//         }
//     }
// }


// function toggleMenu() {
//   const nav = document.querySelector("nav ul");
//   nav.classList.toggle("show");
// }

// // Close when clicking outside or on a menu item
// document.addEventListener("click", (e) => {
//   const nav = document.querySelector("nav ul");
//   const menuIcon = document.querySelector(".menu-icon");

//   // if click outside both menu and icon
//   if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
//     nav.classList.remove("show");
//   }
// });

// // Close menu when clicking on nav link
// document.querySelectorAll("nav ul li a").forEach((link) => {
//   link.addEventListener("click", () => {
//     document.querySelector("nav ul").classList.remove("show");
//   });
// });

const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav ul");

// 1 Toggle menu on icon click
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent triggering document click
  nav.classList.toggle("show");
});

// 2 Close when clicking outside menu
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
    nav.classList.remove("show");
  }
});

// 3 Close when clicking a nav item
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Keep your scroll reveal if needed
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}


// Scroll reveal (unchanged)
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}



// function toggleMenu() {
//   const nav = document.querySelector("nav ul");
//   nav.classList.toggle("show"); // use class for visibility toggle
// }

// // Close menu when clicking outside or on link
// document.addEventListener("click", (e) => {
//   const nav = document.querySelector("nav ul");
//   const menuIcon = document.querySelector(".menu-icon"); // your hamburger icon class
//   if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
//     nav.classList.remove("show");
//   }
// });

// // Close menu when clicking a nav item
// document.querySelectorAll("nav ul li a").forEach((link) => {
//   link.addEventListener("click", () => {
//     const nav = document.querySelector("nav ul");
//     nav.classList.remove("show");
//   });
// });




const certThumbs = document.querySelectorAll(".cert-thumb");
const certModal = document.getElementById("certModal");
const certZoom = document.getElementById("certZoom");
const certClose = document.querySelector(".cert-close");

certThumbs.forEach(img => {
  img.addEventListener("click", () => {
    certModal.style.display = "block";
    certZoom.src = img.src;
  });
});

certClose.onclick = function() {
  certModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == certModal) {
    certModal.style.display = "none";
  }
}


const modal = document.getElementById("resumeModal");
const openBtn = document.getElementById("openResumeBtn");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});






