//Getting News Comment Data
const formComment = document.querySelector(".form-comment");
fetchAvatar = localStorage.getItem('storedavatar');
fetchId = localStorage.getItem('newsId');
console.log("ID:", fetchId);


//Selecting author avatar
const getavatar = document.querySelector(".avatar");


const avatars = async () => {
    const response = await fetch('endpoints/avatars.json');
    if(!response.ok){
        throw new Error("Problem getting avatars");
    }
    const data = await response.json();
    data.map((each) => {
        const { avatar } = each;
        getavatar.appendChild(eachAvatar(avatar));
    })
    return data;

    // avatar.appendChild(each);
    function eachAvatar(avatar){
        const eachAvatar = document.createElement('span');
        eachAvatar.classList.add("author-image");
        eachAvatar.classList.add("author--avatar");
        eachAvatar.innerHTML = `
        <img src="${avatar}" alt="" onClick="getAvatar('${avatar}')">
        `;
        
        return eachAvatar;
    }    
}
avatars();


//Get avatar function
 function getAvatar(avatar) {
    document.getElementById('set-avatar').src = avatar;
    storeAvatar = localStorage.setItem('storedavatar', avatar);
    if(!fetchAvatar){
        return;
    }
    
}


//get form data
formComment.addEventListener('submit', (e) => {
    e.preventDefault();

    const getData = new FormData(formComment);
    const formdata = Object.fromEntries(getData);

    getData.set("avatar", fetchAvatar);
    console.log("Form data avatar", fetchAvatar);
    console.log("Form data", formdata);
    

    //POST News to JSON Server
    fetch(`${news}/${fetchId}/comments`, {
        method: 'POST',
        body: JSON.stringify({
            newsId: fetchId,
            name: formdata.name,
            avatar: fetchAvatar,
            comment: formdata.comment
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
     .then(response => response.json())
     .then(formdata => console.log("Comment added!...", formdata))
     .catch(err => ("Failed to add news", err));
});


const removeAvatarFromStorage = localStorage.removeItem('storedavatar');