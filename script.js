// api -> https://dummyjson.com/quotes

$("#btn").click(function () {

    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {

            $("#quoteBox").html(`
                <h3>"${data.quote}"</h3>
                <p>— ${data.author}</p>
            `);

        })
        .catch(error => {
            console.log(error);
        });

});