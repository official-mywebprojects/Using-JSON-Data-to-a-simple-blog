//news holder wrapper
const wrapAll = document.querySelector(".center-main");

//Fetch Id:
fetchId = localStorage.getItem('newsId');
fetchComment = localStorage.getItem('comment');
fetchUpdateId = localStorage.getItem('update');
console.log("The fetched id:", fetchId);

//Get all news, limit 12
const getNewsSingle = async () => {
    const response = await fetch(`${news}/${fetchId}`);
    if(!response.ok){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data = await response.json();

    const { title, author, avatar, id } = data;

    wrapAll.appendChild(singleNewstemplate(title, author, avatar, id));

    return data;
}

getNewsSingle()
    .then(data => console.log("successful", data))
    .catch(err => console.log("failed", err));



function updateNews(id){
    storeUpdateId = localStorage.setItem('update', id);
    const updateForm = document.getElementsByClassName("form-update");
    updateForm.style.display = "visible";

}


async function deleteNews(id){
    const res = await fetch(`${news}/${id}`, {
        method: 'DELETE',
    });
    if(res.ok){
        console.log(`news with id: ${id} deleted`);

    }else{
        console.log(`could not delete the news with id: ${id}`);
    }
    window.location.href="newshome.html";
    
}


function singleNewstemplate(title, author, avatar, id){
//creating news elements
const singleNewstemplate = document.createElement('div');
singleNewstemplate.classList.add("inner-container");

    singleNewstemplate.innerHTML = `
    <h1 id="get-title">${title}</h1>
    <div class="news-details">
        <span class="author-image"><img src="${avatar}" alt="${author}"></span>
        <span class="news-author">
            ${author}
        </span>
        <span style="color: hsl(var(--text))">
        ${newsComments()} comment
        </span>
    </div>
    <h3>News Actions</h4>
    <div class="news-actions">
        <button class="style--btn" onclick="updateNews(${id})">Update news</button>
        <button class="style--btn">Add image(s) to news</buton>
        <button class="style--btn" onclick="deleteNews(${id})">Delete news</button>
    </div>
    
    <div class="singlenews-wrapper">
        <div class="image-slide">
            <img src="" alt="">
            <span class="news-title"></span>
        </div>
        <div class="image-slide">
            <div class="image-slide">
                <img src="" alt="">
                <span class="news-title"></span>
            </div>
        </div>
        <div class="image-slide">
            <div class="image-slide">
                <img src="" alt="">
                <span class="news-title"></span>
            </div>
        </div>
    </div>

    <!-- Add News Form -->
        <form class="form-update">
            <label for="author">
                <input type="text" placeholder="Your name" aria-label="given-names" autocomplete="off" class="news-author" name="author" required/>    
            </label>
            <img src="" name="avatar" alt="author avatar" class="author-image" id="set-avatar">
            <label for="title">
                <input type="text" placeholder="Enter news title" class="news-title" name="title" required/>
            </label>
            <label for="url">
                <input type="text" placeholder="Your website" autocomplete="off" class="news-author" name="url"/>
            </label>
            <span class="choose--avatar">Choose Avatar</span>
            <div class="avatar"></div>
            

            <!-- <script>
                
            </script> -->
            <button type="submit" class="addnews-btn">Post News</button>
        </form>
        <!-- Form End Here-->

    
        
        `;

    return singleNewstemplate;

}


window.onload = removeComment = localStorage.removeItem('comment');