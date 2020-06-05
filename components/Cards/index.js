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

function cardMaker(data){
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = data.headline

    const authorDiv = document.createElement('div')
    authorDiv.classList.add('author')

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const authorImg = document.createElement('img')
    authorImg.src = data.authorPhoto

    const authorName = document.createElement('span')
    authorName.textContent = data.authorName
    
    card.appendChild(headline)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgContainer)
    imgContainer.appendChild(authorImg)
    authorDiv.appendChild(authorName)

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('all gravy, davey', response.data.articles)
    // returns object of arrays
    // need to access value inside of objects keys
    const arrData = Object.values(response.data.articles)
    arrData.forEach(item => {
        item.forEach(article => {
            const entryPoint = document.querySelector('.cards-container')
            entryPoint.appendChild(cardMaker(article))
        })
    })
})
.catch(error => {
  console.log('no bueno', error)
},[]);