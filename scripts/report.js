document.addEventListener('DOMContentLoaded', function() {
    const albumPage = document.querySelector('.icon');
    const topButton1 = document.querySelector('.top-button-1');
    const topButton2 = document.querySelectorAll('.top-button-2');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    albumPage.addEventListener('click', function() {
        window.location.href = 'albums.html'; 
    });

    topButton1.addEventListener('click', function() {
        window.location.href = '#'; 
    });

    topButton2.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.querySelector('p').textContent;
            redirectToPage(buttonText);
        });
    });

    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    function redirectToPage(buttonText) {
        switch(buttonText) {
            case 'Home':
                window.location.href = '../index.html'
                break;
            case 'PDFs':
                window.location.href = 'pdfs.html';
                break;
            case 'Questions':
                window.location.href = 'questions.html';
                break;
            case 'Solutions':
                window.location.href = 'solutions.html';
                break;
            case 'Resources':
                window.location.href = 'resources.html';
                break;
            default:
                break;
        }
    }
});

document.getElementById('email-form').onsubmit = function() {
    var subject = document.getElementById('subject').value;
    if (subject === "") {
        alert("Please select a subject.");
        return false; 
    }
};
