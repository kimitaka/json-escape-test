fetch('http://localhost:3000/escaped')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log("escaped: " + json.data);
    })
    .catch(function () {
        console.log("An error occurred while fetching the JSON data.");
    });

fetch('http://localhost:3000/non-escaped')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log("non-escaped: " + json.data);
    })
    .catch(function () {
        console.log("An error occurred while fetching the JSON data.");
    });