$(document).ready(async function () {
    let fetchURL = 'https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json'
    let response = await fetch(fetchURL)
    let data = await response.json()
    data.guests.forEach(e => {
        $(".content").append(`
        <div class='page'>
        <h1>${e.name}</h1>
         <p>Description: ${e.about}</p>
         <img src="${e.photo_url}" alt="Photo about ${e.name}" width="300px">
         </div>`);
    });
});