// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // Create Elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');
    // Setup structure
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);
    // Add styles
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');
    // Fill content
    headerDate.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';
    // return component
    return header
}

const target = document.querySelector('.header-container');
target.appendChild(Header());