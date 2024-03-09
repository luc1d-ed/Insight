document.addEventListener('DOMContentLoaded', function() {
    const albumPage = document.querySelector('.icon');
    const topButton1 = document.querySelector('.top-button-1');
    const topButton2 = document.querySelectorAll('.top-button-2');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const downloadOptions = document.querySelectorAll('.card');

    albumPage.addEventListener('click', function() {
        window.location.href = 'albums.html'; 
    });

    topButton1.addEventListener('click', function() {
        window.location.href = '#'; 
    });

    topButton2.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent.trim();
            redirectToPage(buttonText);
        });
    });

    downloadOptions.forEach(option => {
        option.addEventListener('click', function() {
            const downloadText = option.querySelector('p').textContent.trim();
            downloadFile(downloadText);
        });
    });

    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    function redirectToPage(buttonText) {
        switch(buttonText) {
            case 'Home':
                window.location.href = '../index.html';
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
            case 'Report':
                window.location.href = 'report.html';
                break;
            default:
                break;
        }
    }

    function downloadFile(downloadText) {
        switch(downloadText) {
            case 'Assignment (XII)':
                var fileUrl = '../data/local/pdf/solutions/Computer Assignment XII.pdf'; 
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Computer Assignment XII.pdf'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'Theory Examination (First Semester)':
                var fileUrl = '../data/local/pdf/solutions/First Semester Theory Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'First Semester Theory Solutions [Computer].pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'Theory Examination (Second Semester)':
                var fileUrl = '../data/local/pdf/solutions/Second Semester Theory Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Second Semester Theory Solutions [Computer].pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'Practical (Both Semesters)':
                var fileUrl = '../data/local/pdf/solutions/Practical Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Practical Solutions [Computer].pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2017 (Paper 1)':
                var fileUrl = '../data/boards/ISC-2017/868A Computer Science-1.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868A Computer Science-1.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2017 (Paper 2)':
                var fileUrl = '../data/boards/ISC-2017/868B Computer Science-2.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868B Computer Science-2.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2019 (Paper 1)':
                var fileUrl = '../data/boards/ISC-2019/868A COMPUTER SC-1- QP.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868A COMPUTER SC-1- QP.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2019 (Paper 2)':
                var fileUrl = '../data/boards/ISC-2019/868B COMPUTER SC-2-QP.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868B COMPUTER SC-2-QP.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2020 (Paper 1)':
                var fileUrl = '../data/boards/ISC-2020/868A COMPUTER SCIENCE Paper 1 QP.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868A COMPUTER SCIENCE Paper 1 QP.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2020 (Paper 2)':
                var fileUrl = '../data/boards/ISC-2020/868B COMPUTER SCIENCE Paper 2 QP.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868B COMPUTER SCIENCE Paper 2 QP.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'ISC 2023 (Paper 1)':
                var fileUrl = '../data/boards/ISC-2023/868 COMPUTER SCIENCE PAPER 1.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868 COMPUTER SCIENCE PAPER 1.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            default:
                console.error('Unsupported file:', downloadText);
                openPopup(downloadText+' is not available.');
                break;
        }
    }
});

function openPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

