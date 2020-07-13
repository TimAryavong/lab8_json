var xhRequest = new XMLHttpRequest(); // create an instance of the preinstalled module
var url = 'https://timaryavong.github.io/jsonexample/products.json';

// get the page
xhRequest.open('GET', url);

// request a response of JSON object
xhRequest.responseType = 'json';

// send the request (out into the void that is the internet)
xhRequest.send();

let body = document.querySelector('body');
body.setAttribute('class', 'text-align-center');
// when the request returns load it according to this function
xhRequest.onload = function() {
    // declare an object to hold the incoming response
    let weirdProducts = xhRequest.response;
    console.log(weirdProducts);
    header(weirdProducts);
    products(weirdProducts);
};

function header(jsonObj) {
    let articleHead = document.createElement('h1');
    articleHead.setAttribute('class','display-1 text-center');
    let articleHead2 = document.createElement('h2');
    articleHead2.setAttribute('class','display-4 text-center');
    let articleHead3 = document.createElement('h2');
    articleHead3.setAttribute('class','display-4 text-center');
    let articleContainer = document.createElement('div');
    articleContainer.setAttribute('class', 'container');
    articleHead.innerHTML = jsonObj.companyName;
    articleHead2.innerHTML = 'Head Office in ' + jsonObj.headOffice;
    articleHead3.innerHTML = 'Established in ' + jsonObj.established;

    articleContainer.appendChild(articleHead);
    articleContainer.appendChild(articleHead2);
    articleContainer.appendChild(articleHead3);
    body.appendChild(articleContainer);
}

function products(jsonObj) {
    let topDeals = jsonObj.topDeals;
    let dealContainer = document.createElement('div');
    let dealContainerRow = document.createElement('div');
    dealContainer.setAttribute('class', 'container');
    dealContainerRow.setAttribute('class', 'row ');
    for(let i = 0; i < topDeals.length; i++){
        let deal = document.createElement('article');
        deal.setAttribute('class', 'col-md border rounded text-center font-weight-light text-white bg-dark');
        let image = document.createElement('img');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let description = document.createElement('p');
        let features = document.createElement('p');

        name.innerHTML = 'Name: ' + topDeals[i].name;
        price.innerHTML = 'Price: $' + topDeals[i].price;
        description.innerHTML = 'Description: ' + topDeals[i].description;
        image.setAttribute('src', '/images/'+topDeals[i].image);
        image.setAttribute('class', 'p-2');
        features.innerHTML = 'Features';
        features.setAttribute('class','text-white');

        let featurelist = document.createElement('ul');
        featurelist.setAttribute('class','list-group text-dark');
        for(let j = 0; j < topDeals[i].features.length; j++){
            let feature = document.createElement('li');
            feature.setAttribute('class','list-group-item');
            feature.innerHTML = topDeals[i].features[j];
            featurelist.appendChild(feature);
        }

        features.appendChild(featurelist);

        deal.appendChild(name);
        deal.appendChild(price);
        deal.appendChild(description);
        deal.appendChild(features);
        deal.appendChild(image);
        dealContainerRow.appendChild(deal);
        dealContainer.appendChild(dealContainerRow);
    }
    body.appendChild(dealContainer);
}    