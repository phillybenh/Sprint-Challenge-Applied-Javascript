// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        // console.log(response.data.articles.bootstrap);
        Object.entries(response.data.articles).forEach(entry => {
            console.log(entry);
            // entry.forEach(topic => {
            //     console.log(topic);
            //     // Object.values(topic).forEach(article => {
            //     //     console.log(article.headline);
            //     //     console.log(article.authorName);
            //     // })
            // });

            cardContainer.append(cardCreator(entry));
        });
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function cardCreator(data) {
    const newCard = document.createElement('div'),
        headline = document.createElement('div'),
        authorContainer = document.createElement('div'),
        imageContainer = document.createElement('div'),
        image = document.createElement('img'),
        authorName = document.createElement('span');

    headline.textContent = 'test';
    image.src = '../Sprint-Challenge-Applied-Javascript/assets/bones.jpg';
    image.alt = 'image of author';
    authorName.textContent = 'test name';

    newCard.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imageContainer.classList.add('img-container');

    newCard.append(headline, authorContainer);
    authorContainer.append(imageContainer, authorName);
    imageContainer.append(image);


    return newCard;
};