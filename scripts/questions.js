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
            case 'Solutions':
                window.location.href = 'solutions.html';
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
        fetch('../data/local/md/questions/assignment-xii-questions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('assignment-questions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    function renderFirstSemesterTheoryQuestions() {
        fetch('../data/local/md/questions/first-semester-theory-questions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('first-semester-theory-questions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    function renderFirstSemesterPracticalQuestions() {
        fetch('../data/local/md/questions/first-semester-practical-questions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('first-semester-practical-questions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    function renderSecondSemesterTheoryQuestions() {
        fetch('../data/local/md/questions/second-semester-theory-questions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('second-semester-theory-questions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    function renderSecondSemesterPracticalQuestions() {
        fetch('../data/local/md/questions/second-semester-practical-questions.md')
            .then(response => response.text())
            .then(markdown => {
                var html = marked.parse(markdown);

                document.getElementById('second-semester-practical-questions').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching Markdown file:', error);
            });
    }

    renderAssignmentXII();
    renderFirstSemesterTheoryQuestions();
    renderFirstSemesterPracticalQuestions();
    renderSecondSemesterTheoryQuestions();
    renderSecondSemesterPracticalQuestions();
});
