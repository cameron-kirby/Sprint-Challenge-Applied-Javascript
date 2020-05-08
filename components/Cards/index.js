// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response)
        // cardsContainer.appendChild(createCard(response.data.articles.javascript[0]));
        // javascript
        response.data.articles.javascript.forEach(function(item){
            cardsContainer.appendChild(createCard(item))
        })
        // bootstrap
        response.data.articles.bootstrap.forEach(function(item){
            cardsContainer.appendChild(createCard(item))
        })
        // technology
        response.data.articles.technology.forEach(function(item){
            cardsContainer.appendChild(createCard(item))
        })
        // jquery
        response.data.articles.jquery.forEach(function(item){
            cardsContainer.appendChild(createCard(item))
        })
        // node
        response.data.articles.node.forEach(function(item){
            cardsContainer.appendChild(createCard(item))
        })

    })
    .catch()

function createCard(cardObj){
    // Create Elements
    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardAuthorImgContainer = document.createElement('div');
    const cardAuthorImg = document.createElement('img');
    const cardAuthorName = document.createElement('span');
    // Setup Structure
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardAuthorImgContainer);
    cardAuthorImgContainer.appendChild(cardAuthorImg);
    cardAuthor.appendChild(cardAuthorName);
    // Add Styles
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardAuthorImgContainer.classList.add('img-container');
    // Fill Content
    cardHeadline.textContent = `${cardObj.headline}`;
    cardAuthorImg.src = `${cardObj.authorPhoto}`;
    cardAuthorName.textContent = `${cardObj.authorName}`;
    // Return Component
    return card;
}