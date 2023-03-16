//news holder wrapper
const newswrapper = document.querySelector(".allnews-wrapper");


//Get all news, limit 12
const getAllNews = async () => {
    const response = await fetch(paginatedNews);

    if(response.status !== 200){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data = await response.json();
    console.log("The Data;", data);

    newswrapper.innerHTML = '';
    
    data.map((item) => {
        const { author, avatar, id, title, url } = item;

        newswrapper.appendChild(newstemplate(author, avatar, id, title, url));

    })

    return data;
}

getAllNews()



function getId(id){
    console.log("The id:", id);
    storeId = localStorage.setItem('newsId', id);
}




function newstemplate(author, avatar, id, title, url){
    //creating news elements
const newstemplate = document.createElement('div');
newstemplate.classList.add("newstemplate");

    newstemplate.innerHTML = `
        
        <a href="news.html" target="_blanc" class="news-title" onClick="getId(${id})">${title}</a>
        
        <div class="news-details">
            <span class="author-image"><img src="${avatar}" alt="${author}"></span>
            <span class="news-author">
                <a href="${url}" class="news-author">${author}</a>
            </span>
        </div>
        <div class="news-details">
            
            <span class="news-comment">
                4 Comments
            </span>
        </div>
        
        `;

    return newstemplate;

}