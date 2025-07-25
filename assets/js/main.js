/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
// emailjs.init("service_b1duaht");

// // Add event listener to the form
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent default form submission behavior

//   // Use EmailJS to send form data
//   emailjs.sendForm('service_b1duaht', 'template_gh4o8hm', this)
//       .then(function () {
//           alert('Message sent successfully!');
//       }, function (error) {
//           alert('Failed to send the message. Please try again.');
//           console.error('Error:', error);
//       });
// });

// Dynamically load the EmailJS CDN script
(function () {
    const script = document.createElement('script');
    script.src = "https://cdn.emailjs.com/dist/email.min.js";
    script.type = "text/javascript";
    script.onload = function () {
        // Initialize EmailJS once the script is loaded
        emailjs.init("VOO_p85gMl_ixvXDz"); // Replace with your actual User ID from EmailJS
    };
    document.head.appendChild(script);
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    const message = document.querySelector('textarea[name="message"]').value.trim();
    if (!message) {
        alert("Please write a message.");
        return;
    }

    // Send the email using EmailJS
    emailjs.sendForm('service_b1duaht', 'template_j1gccsl', this)
        .then(function () {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form fields
        }, function (error) {
            alert('Failed to send the message. Please try again.');
            console.error('Error:', error);
        });
});





/*=============== SERVICES MODAL ===============*/
// Get the modal
const badge = document.querySelector(".badge.red");
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
badge.addEventListener("click", () => {
  modal.classList.add("active-modal");  // Show the modal
});
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.articles__cards`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.article__card`, {
  delay: 200,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

sr.reveal(`.projects__cards`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.project__card`, {
  delay: 200,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 150,
});

    // Modal functionality


    const projectModal = document.getElementById('modal2');
    const closeModal = document.getElementById('closeModal');
    const workButtons = document.querySelectorAll('.work__button');
    
    // Sample project data
    const projects = {
        1: {
            title: "Web Design Project 1",
            description: "Details about the Web Design project."
        },
        2: {
            title: "Mobile App Project",
            description: "Details about the Mobile App project."
        },
        3: {
            title: "Brand Design Project",
            description: "Details about the Brand Design project."
        },
        4: {
            title: "Web Design Project 2",
            description: "Details about the second Web Design project."
        }
    };
    
    workButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.dataset.id;
            const project = projects[projectId];
    
            // Populate modal with project details
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalDescription').textContent = project.description;
    
            // Show the modal
            projectModal.style.display = 'flex';
            mainContent.classList.add('blur-background');
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        projectModal.style.display = 'none';
        mainContent.classList.remove('blur-background');
    });
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            mainContent.classList.remove('blur-background');
        }
    });
