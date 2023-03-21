const commentBox = document.querySelector("#commentBox");


const newsComments = async () =>{
    const res = await fetch(`${news}/${fetchId}/comments`);

    if(!res.ok){
        throw new Error("Unsuccessful");
    }

    const data = await res.json();
    data.map((comments) => {
        const { avatar, name, comment } = comments;

        commentBox.appendChild(loadComments(avatar, name, comment));

        console.log(`This author has ${data.length} comments on this news`);
        storeComment = localStorage.setItem('comment', data.length);
    });
    console.log(data);

    return data;
}

newsComments();


function loadComments(avatar, name, comment){

    const createComment = document.createElement('div');
    createComment.classList.add("comments-box");

    createComment.innerHTML = `
    <div class="avatar--author">
        <span class="author-image"><img src="${avatar}" alt="${name}"></span> 
        <span class="news-author">
            ${name}
        </span>
    </div>
    <p>${comment}</p>

    `;

    return createComment;
}