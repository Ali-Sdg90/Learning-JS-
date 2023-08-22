fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

    