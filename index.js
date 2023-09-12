// Show only three articles at a time for Carousel functionality

// select articles on home page
const articlesArray = document.querySelectorAll('.article');

// create array to house the four articles to be visible at one time
let visibleArticlesArray = [];

// add first three in articlesArray to visibleArticles array
for (let i = 0; i < 3; i++) {
    visibleArticlesArray.push(articlesArray[i]);
}

function visibleArticles() {
    articlesArray.forEach((article) => {
        if (visibleArticlesArray.includes(article)) {
            article.classList.remove('invis');
        } else {
            article.classList.add('invis')
        }
    });
}

window.addEventListener('load', (e) => {
    visibleArticles();
});

// Arrow buttons changing which articles show

// Select arrow buttons
const arrows = document.querySelectorAll('.fa-solid');

// Separate arrows and add event listener
arrows.forEach((arrow) => {
    arrow.addEventListener('click', rotateArticles);
});

// function for arrow click
function rotateArticles(e) {
    if (e.target.classList.contains('fa-chevron-right')) {
        visibleArticlesArray.pop();
        visibleArticles();
    } else {
        visibleArticlesArray.shift();
        visibleArticles();
    }
};


