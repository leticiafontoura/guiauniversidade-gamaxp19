function classToggle() {
  const navs = document.querySelectorAll('.navBar-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.navBar-link-toggle')
  .addEventListener('click', classToggle);

const navBars = document.querySelectorAll('.articles-nav');
const navBarEnd = document.querySelector(".go-to-form");

window.onscroll = function() {
    let top = window.scrollY;
    console.log(top);
    navBars.forEach(navBar => {
      if (top >= 500 && top <= navBarEnd.offsetTop - 500) {
     
        navBar.classList.add("active-nav");
    } else {
        navBar.classList.remove("active-nav");
    }
    });
}
  
