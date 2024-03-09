document.addEventListener('DOMContentLoaded', function() {
    const albumPage = document.querySelector('.icon');
    const topButton1 = document.querySelector('.top-button-1');
    const topButton2 = document.querySelectorAll('.top-button-2');
    const moreDiv = document.querySelector('.more');
    const pdfButton = document.querySelector('.pdf-button');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const downloadOptions = document.querySelectorAll('.individual-pdf');

    albumPage.addEventListener('click', function() {
        window.location.href = 'pages/albums.html'; 
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

    moreDiv.addEventListener('click', function() {
        window.location.href = 'pages/questions.html'; 
    });

    pdfButton.addEventListener('click', function() {
        window.location.href = 'pages/pdfs.html';
    });

    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    downloadOptions.forEach(div => {
        div.addEventListener('click', function() {
            const textInsideDiv = this.querySelector('.pdf-metadata').textContent;
            downloadFile(textInsideDiv);
        });
    });

    function redirectToPage(buttonText) {
        switch(buttonText) {
            case 'PDFs':
                window.location.href = 'pages/pdfs.html';
                break;
            case 'Questions':
                window.location.href = 'pages/questions.html';
                break;
            case 'Solutions':
                window.location.href = 'pages/solutions.html';
                break;
            case 'Resources':
                window.location.href = 'pages/resources.html';
                break;
            case 'Report':
                window.location.href = 'pages/report.html';
                break;
            default:
                break;
        }
    }

    function downloadFile(downloadText) {
        switch(downloadText) {
            case 'Assignment Questions and Solutions (XII)':
                var fileUrl = './data/local/pdf/solutions/Computer Assignment XII.pdf'; 
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Computer Assignment XII.pdf'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'Second Semester Questions and Solutions':
                var fileUrl = './data/local/pdf/solutions/Second Semester Theory Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = '868A Computer Science-1.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'First Semester Questions and Solutions':
                var fileUrl = './data/local/pdf/solutions/First Semester Theory Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'First Semester Theory Solutions [Computer].pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                break;

            case 'Practical Questions and Solutions':
                var fileUrl = './data/local/pdf/solutions/Practical Solutions.pdf';
                var link = document.createElement('a');
                link.href = fileUrl;
                link.download = 'Practical Solutions [Computer].pdf';
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
