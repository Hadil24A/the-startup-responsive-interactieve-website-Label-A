let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("show-nav-menu");
    navMenu.classList.toggle("show-nav-menu");
})


let linkjes = document.querySelectorAll('.employee-link')

linkjes.forEach(function(link) {
    link.addEventListener('click', function(event) {

        // Pak de href van het linkje waarop ik klikte
        let id = this.getAttribute('href');

        // Zoek het element met dat id
        let infoElement = document.querySelector(id);

        // Toggle de class van Dat element
        infoElement.classList.toggle('employee-info-visible');
        event.preventDefault();
    })
})


document.getElementById('functieselect').addEventListener('change', function () {
    let selectedfunctie = this.value;
    let ourteam = document.querySelectorAll('.employee');
  
    ourteam.forEach(function (employee) {
      employee.style.display = 'none';
    });
  
    if (selectedfunctie === 'all-teams') {
      ourteam.forEach(function (employee) {
        employee.style.display = 'flex';
      });
    } else {
      let selectedEmployees = document.querySelectorAll('.employee[functie="' + selectedfunctie + '"]');
      
      selectedEmployees.forEach(function (employee) {
        employee.style.display = 'flex';
      });
    }
  });