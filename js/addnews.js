const formelement = document.querySelector('.form');
fetchAvatar = localStorage.getItem('storedavatar');


//Selecting author avatar
const getavatar = document.querySelector(".avatar");


const avatars = async () => {
    const response = await fetch('endpoints/avatars.json');
    if(!response.ok){
        throw new Error("Problem getting avatars");
    }
    const data = await response.json();
    data.map((each) => {
        const { avatar, id } = each;
        getavatar.appendChild(eachAvatar(avatar, id));
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
formelement.addEventListener('submit', (e) => {
    e.preventDefault();

    const getData = new FormData(formelement);
    const formdata = Object.fromEntries(getData);

    console.log("Consoling...", formdata.author);
    // getData.set('avatar', fetchAvatar);
    // console.log("The Fetched data", fetchAvatar);
    console.log("Form data", formdata);
    

    //POST News to JSON Server
    fetch(news, {
        method: 'POST',
        body: JSON.stringify({
            author: formdata.author,
            avatar: "https://randomuser.me/api/portraits/women/42.jpg", //formdata.avatar,
            title: formdata.title,
            url: formdata.url
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
     .then(response => response.json())
     .then(formdata => console.log(formdata))
     .catch(err => ("Failed to add news", err));
});


const removeAvatarFromStorage = localStorage.removeItem('storedavatar');