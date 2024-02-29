// Fetch the header content
fetch('header.html')
  .then(response => response.text()) // Parse the response as text
  .then(data => {
    // Set the inner HTML of the header div to the fetched content
    document.getElementById("header").innerHTML = data;
  })
  .catch(error => console.error('Error fetching header:', error)); // Log any errors

// JavaScript to handle setting the active class based on current URL
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.href;
  const links = document.querySelectorAll('header ul li a');
  links.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
  });
});
