document.getElementsByClassName('imgclass').addEventListener('click', function() {
    var navbar = document.getElementsByClassName('navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});
