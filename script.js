// select the first element with a class of .article__header
const articleHeader = document.querySelector('.article__header');

//Change it's text content to Welcome to the Will Wilkinson blog
articleHeader.textContent = 'Welcome to the Will Wilkinson blog';

//select all elements with the class name .article header and return a list
const articleHeaderList = document.querySelectorAll(".article__header");

//loop through the articleHeaderList array
for(let i = 0; i < articleHeaderList.length; i++){
    // add the class important to each item
    articleHeaderList[i].classList.add('important');
}

// Select the element with the dashed class
const dashedElement = document.querySelector('.dashed');

// remove the dashed class
dashedElement.classList.remove('dashed');

//  select the element with a class name of .article__footer
const articleFooter = document.querySelector('.article__footer');

// add the class goldenrod to articleFooter
articleFooter.classList.add('goldenrod');