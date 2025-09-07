/**-all buttn js **/
 
function toggleDropdown() {
      const dropdown = document.getElementById("dropdownMenu");
      const overlay = document.getElementById("overlay");
      dropdown.classList.toggle("show");
      overlay.classList.toggle("show");
    }

    // Close dropdown and overlay if clicked outside
    window.onclick = function(event) {
      const dropdown = document.getElementById("dropdownMenu");
      const overlay = document.getElementById("overlay");
      const button = document.querySelector('.dropbtn');

      if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          overlay.classList.remove('show');
        }
      }
    };

    // Optional: close dropdown when clicking on overlay
    document.getElementById("overlay").addEventListener("click", function() {
      document.getElementById("dropdownMenu").classList.remove("show");
      this.classList.remove("show");
    });
    /**form-1-main-submit js */

function redirectToPage(event) {
    event.preventDefault(); // Prevent actual form submission
    // You can add validation or data handling here if needed
    window.location.href = "subselect.html"; // Replace ### with your target page
}
