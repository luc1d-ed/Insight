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
            case 'Resources':
                window.location.href = 'resources.html';
                break;
            case 'Report':
                window.location.href = 'report.html';
                break;
            default:
                break;
        }
    }

    function renderAssignmentXII() {
        fetch('../data/local/md/solutions/assignment-xii-solutions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('assignment-solutions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    renderAssignmentXII();
});
