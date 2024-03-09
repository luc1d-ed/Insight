document.addEventListener('DOMContentLoaded', function() {
    const albumPage = document.querySelector('.icon');
    const topButton1 = document.querySelector('.top-button-1');
    const topButton2 = document.querySelectorAll('.top-button-2');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const resourceOptions = document.querySelectorAll('.individual-card');

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

    resourceOptions.forEach(div => {
        div.addEventListener('click', function() {
            const textInsideDiv = this.querySelector('.metadata').textContent;
            resourceRedirect(textInsideDiv);
        });
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
            case 'Report':
                window.location.href = 'report.html';
                break;
            default:
                break;
        }
    }

    function resourceRedirect(resourceSwitch) {
        switch (resourceSwitch) {
            case 'Programiz Java':
                window.open('https://www.programiz.com/java-programming/online-compiler/', '_blank');
                break;
            case 'W3Schools Java':
                window.open('https://www.w3schools.com/java/tryjava.asp?filename=demo_compiler', '_blank');
                break;
            case 'Java Tutorial':
                window.open('https://www.javatpoint.com/java-tutorial', '_blank');
                break;
            case 'Geeks For Geeks':
                window.open('https://www.geeksforgeeks.org/java/?ref=shm', '_blank');
                break;
            case 'Code with Harry':
                window.open('https://www.codewithharry.com/tutorial/java/', '_blank');
                break;
            case 'W3Schools':
                window.open('https://www.w3schools.com/java/', '_blank');
                break;
        }
    }

});
