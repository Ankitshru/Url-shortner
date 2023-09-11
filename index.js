const inputBox = document.querySelector('.input');
const submitButton = document.querySelector('.url-short-btn');

// How it going to work-
// 1) first of all we will need a link to shorten it.
// 2) then with help of url shortner api we will shorten it.
// 3) for to work the api we need to post the url to api and need to wait 
//    till the api shorten, once the api done its job we will retrieve the
//    shorten url.
// 4) and add it to the history box with original url and shorten url.
// 5) there will be an option to copy the url

const apiUrl = 'https://api.shrtco.de/v2/';

const data = {
    url : "https://ankitshru.github.io/Url-shortner/"
}

// create a request configuration object
const requestOption = {
    method : 'POST',
    headers: {
        "Content-Type" : "application/json",
    },
    body: JSON.stringify(data)
};

// make the post request
fetch(apiUrl, requestOption)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // handle the data returned from the server
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error)
    })
