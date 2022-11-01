const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener('click', getQuote);


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    //console.log(json_response);
    //console.log(json_response['message']);
    //console.log(response);

    displayQuote(json_response['message']);
}

function displayQuote(quote) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //const textMessage = document.createTextNode(quote);

    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = quote;
}

getQuote();