const btnopen = document.querySelector(".btn__open");
const navList = document.querySelector(".nav__list");
const btnfaq = document.querySelectorAll(".btn__faq");
const dropdownInfos = document.querySelectorAll(".faq__content");


btnopen.addEventListener("click", () => {

    if (navList.classList.contains('show__menu')) {
        navList.classList.remove("show__menu");
        btnopen.innerHTML = `<box-icon name='menu-alt-right' animation='tada-hover'></box-icon>`
    } else {
        navList.classList.add("show__menu");
        btnopen.innerHTML = `<box-icon name='exit' animation='fade-right-hover'></box-icon>`
    }
})


btnfaq.forEach((button, index) => {
  button.addEventListener("click", () => {
    // abrimos o cerramos el dropdown correspondiente
    dropdownInfos[index].classList.toggle("show__faq");

    //cerramos todos los dropdowns
    dropdownInfos.forEach((dropdown, dropdownIndex) => {
      if (dropdownIndex !== index) {
        dropdown.classList.remove("show__faq");
      }
    });

  });
});