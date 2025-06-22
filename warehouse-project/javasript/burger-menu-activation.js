 const burger = document.getElementById("burger");
        const navLinks = document.getElementById("nav-ul");

        burger.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });