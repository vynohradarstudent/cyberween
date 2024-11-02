
$(document).ready(function() {
    $.ajax({
        url: 'https://raw.githubusercontent.com/MamboDancer/WebMiddleCyberween/main/task.json', 
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            const guestsContainer = $('#guests-container');
            response.guests.forEach(guest => {
                const html = `
                    <div class="guest">
                        <h2>${guest.name}</h2>
                        <p>${guest.about}</p>
                        <img src="${guest.photo_url}" alt="${guest.name}">
                    </div>
                `;
                guestsContainer.append(html);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Помилка:', textStatus, errorThrown);
        }
    });
});
