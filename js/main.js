$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        // Make request to Github
        $.ajax({
            url:'https://api.github.com/users/'+username,
            client_id: 'a4b9dfc505bf06331ca9',
            cliend_secret: '31060f6940ee93fea7c9da612f16c60cda27307b',
        }).done(function(user){
            $('#profile').html(`
            <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${user.name}
            </div>
                <img src="${user.avatar_url}" class="card-img-top avatar" alt="...">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a target="_blank" href="${user.html_url}" class="btn btn-primary btn-block">Visit Profile</a>
                </div>
            </div>
            `);
        });

    });
});


