// Show only three articles at a time for Carousel functionality

// array of content for articles
let articleContentArray = [{   
    title: 'DnD Character Creator',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Mattis enim ut tellus elementum sagittis vitae et. Volutpat diam ut venenatis tellus in metus vulputate eu. In dictum non consectetur a erat. Ultricies mi eget mauris pharetra et ultrices. Vestibulum morbi blandit cursus risus at. Lacinia at quis risus sed vulputate odio ut. Sit amet luctus venenatis lectus. Lectus arcu bibendum at varius. Amet venenatis urna cursus eget nunc. Blandit aliquam etiam erat velit scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada.',
    id: 'DnD',
    link: ''
},
{
    title: 'NASA Photo of the Day',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Mattis enim ut tellus elementum sagittis vitae et. Volutpat diam ut venenatis tellus in metus vulputate eu. In dictum non consectetur a erat. Ultricies mi eget mauris pharetra et ultrices. Vestibulum morbi blandit cursus risus at. Lacinia at quis risus sed vulputate odio ut. Sit amet luctus venenatis lectus. Lectus arcu bibendum at varius. Amet venenatis urna cursus eget nunc. Blandit aliquam etiam erat velit scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada.',
    id: 'NASA',
    link: ''
},
{
    title: 'Calculator',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Mattis enim ut tellus elementum sagittis vitae et. Volutpat diam ut venenatis tellus in metus vulputate eu. In dictum non consectetur a erat. Ultricies mi eget mauris pharetra et ultrices. Vestibulum morbi blandit cursus risus at. Lacinia at quis risus sed vulputate odio ut. Sit amet luctus venenatis lectus. Lectus arcu bibendum at varius. Amet venenatis urna cursus eget nunc. Blandit aliquam etiam erat velit scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada.',
    id: 'Calculator',
    link: ''
},
{
    title: 'Music Streamer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Mattis enim ut tellus elementum sagittis vitae et. Volutpat diam ut venenatis tellus in metus vulputate eu. In dictum non consectetur a erat. Ultricies mi eget mauris pharetra et ultrices. Vestibulum morbi blandit cursus risus at. Lacinia at quis risus sed vulputate odio ut. Sit amet luctus venenatis lectus. Lectus arcu bibendum at varius. Amet venenatis urna cursus eget nunc. Blandit aliquam etiam erat velit scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada.',
    id: 'Music',
    link: ''
},
{
    title: 'Word Cloud',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget. Mattis enim ut tellus elementum sagittis vitae et. Volutpat diam ut venenatis tellus in metus vulputate eu. In dictum non consectetur a erat. Ultricies mi eget mauris pharetra et ultrices. Vestibulum morbi blandit cursus risus at. Lacinia at quis risus sed vulputate odio ut. Sit amet luctus venenatis lectus. Lectus arcu bibendum at varius. Amet venenatis urna cursus eget nunc. Blandit aliquam etiam erat velit scelerisque. Donec pretium vulputate sapien nec sagittis aliquam malesuada.',
    id: 'WordCloud',
    link: ''
}];

// select articles to populate with content
const articlesArray = document.querySelectorAll('.article');

function visibleArticles() {
     for (let i = 0; i < 3; i++) {
        articlesArray[i].classList.remove('invis');
        articlesArray[i].querySelector('h3').textContent = articleContentArray[i].title;
        articlesArray[i].querySelector('article').textContent = articleContentArray[i].content;
        articlesArray[i].querySelector('a').href = articleContentArray.link;
    };
};

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
      let r = articleContentArray.pop();
      articleContentArray.unshift(r);
    } else {
     let l = articleContentArray.shift();
     articleContentArray.push(l);
    }
    visibleArticles();
};


