const pagination = document.querySelector(".pagination");
const prevbtn = document.getElementById("previous-btn");
const nextbtn = document.getElementById("next-btn");
//news holder wrapper
const newswrapper = document.querySelector(".allnews-wrapper");


//Get all news
const getAllNews = async () => {
    pagination.style.display = "none";
    const response1 = await fetch(news);
    const response2 = await fetch(paginatedNews);

    if(!response1.ok || !response2.ok){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data1 = await response1.json();
    const data = await response2.json();

    pagination.style.display = "block";

    const totalPages = Math.ceil(data1.length / data.length);
    console.log("Total Page Count: ", totalPages);

    if(currentPage == 1){
        prevbtn.style.display = "none";
    }else if(currentPage == totalPages){
        nextbtn.style.display = "none";
    }else{
        prevbtn.style.display = "block";
        nextbtn.style.display = "block";
    }
    
    prevbtn.addEventListener('click', ()=>{
        if(currentPage == 1){
            currentPage = 1;
            return;
        }
        currentPage -= 1;
        
        paginatedNews = baseUrl + `/news?page=${currentPage}&limit=10`;
        console.log("current page from main.js:", currentPage);
        console.log("paginated news from main.js:", paginatedNews);
        // return data;
    });
    nextbtn.addEventListener('click', ()=>{
        if(currentPage == totalPages){
            return;
        }
        currentPage += 1;
        
        paginatedNews = baseUrl + `/news?page=${currentPage}&limit=10`;
        console.log("current page from main.js:", currentPage);
        console.log("paginated news from main.js:", paginatedNews);
        // return data;
    });


    newswrapper.innerHTML = '';
    
    data.map((item) => {
        const { author, avatar, id, title, url } = item;

        newswrapper.appendChild(newstemplate(author, avatar, id, title, url));

    });

    return data;

}

getAllNews();







function getId(id){
    // console.log("The id:", id);
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
        <a href="news.html" class="news-author" onClick="getId(${id})">Read Post</a>
        </span>
    </div>
    
    `;

    return newstemplate;

}

