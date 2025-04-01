// script.js

let pdfDoc = null;
let currentPage = 1;
const canvasLeft = document.getElementById("canvas-left");
const canvasRight = document.getElementById("canvas-right");
const ctxLeft = canvasLeft.getContext("2d");
const ctxRight = canvasRight.getContext("2d");

const leftPage = document.getElementById("left-page");
const rightPage = document.getElementById("right-page");
const leftPageNum = document.getElementById("left-page-num");
const rightPageNum = document.getElementById("right-page-num");

// Load PDF
pdfjsLib.getDocument("./Second.pdf").promise.then(pdf => {
    pdfDoc = pdf;
    renderPages();
});

// Render Two Pages
function renderPages() {
    renderPage(currentPage, ctxLeft, canvasLeft);
    renderPage(currentPage + 1, ctxRight, canvasRight);
    updatePageNumbers();
}

// Render Single Page
function renderPage(num, ctx, canvas) {
    if (num > pdfDoc.numPages) return;

    pdfDoc.getPage(num).then(page => {
        let viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        let renderContext = { canvasContext: ctx, viewport: viewport };
        page.render(renderContext);
    });
}

// Update the page numbers
function updatePageNumbers() {
    leftPageNum.textContent = currentPage;
    rightPageNum.textContent = currentPage + 1 <= pdfDoc.numPages ? currentPage + 1 : " ";
}

// Handle Next Page Flip (Right to Left)
document.getElementById("next").addEventListener("click", () => {
    if (currentPage + 2 <= pdfDoc.numPages) {
        rightPage.classList.add("turning-left"); // Use the left flip animation for right page

        setTimeout(() => {
            currentPage += 2;
            renderPages();
            rightPage.classList.remove("turning-left");
        }, 1000); // Duration of page flip animation
    }
});

// Handle Previous Page Flip (Left to Right)
document.getElementById("prev").addEventListener("click", () => {
    if (currentPage - 2 >= 1) {
        leftPage.classList.add("turning-right"); // Use the right flip animation for left page

        setTimeout(() => {
            currentPage -= 2;
            renderPages();
            leftPage.classList.remove("turning-right");
        }, 1000); // Duration of page flip animation
    }
});
