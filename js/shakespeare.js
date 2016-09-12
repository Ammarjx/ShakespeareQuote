var NASA_API_KEY = 'EQzgRUB1sMiKLrZo4kd6KPNbIgKB95FV9jaGtVQA'

function getRoverImage(day) {
    return fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + day + '&api_key=' + NASA_API_KEY)
        .then(function (response) {
                return response.json()
            }
        )
}

function getShakespeareQuote(quoteName, successFunction, failureFunction) {
    if (!quoteName) {
        quoteName = 'shakespeare';
    }
    WikiquoteApi.getRandomQuote(quoteName, successFunction, failureFunction)
}


$(document).ready(function () {
    getShakespeareQuote(null, function (quote) {
        
        $("div.quote p").text(quote.quote);
    }, function (error) {
        console.log(error)
    });

    getRoverImage(1000).then(function (response) {

        var img_url = response.photos[0].img_src ;

        var img_string = '<image src="' + img_url + '">';




        $("div.img").append($(img_string))

        console.log(response.photos [0] .img_src);



    })

});

