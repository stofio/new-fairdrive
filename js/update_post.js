const db = firebase.database();

$('#article-form').hide();

function listPosts(titleKey) {
    var post = `
    <li id="${titleKey}" class="post-t">${titleKey}</li>
   `;

    $(post).appendTo(".list-posts");
}

function getPosts(callback) {
    db.ref("posts")
        .once("value")
        .then(snapshot => {
            snapshot.forEach(post => {
                var key = post.key;
                listPosts(key);
            });
        })
        .then(() => {
            callback();
        })
        .catch((error) => {
            console.log(error);
        });
}
getPosts(attachListener);

function attachListener() {
    $('li.post-t').on('click', e => {
        var titlePar = e.target.id;
        console.log(titlePar);
        console.log('aa')
    })
}


$('h2').on('click', () => {
    console.log('h2');
})