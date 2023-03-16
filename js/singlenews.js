//news holder wrapper
const wrapAll = document.querySelector(".center-main");

//Fetch Id:
fetchId = localStorage.getItem('newsId');
console.log("The fetched id:", fetchId);

//Get all news, limit 12
const getNewsSingle = async () => {
    const response = await fetch(`${news}/${fetchId}`);
    if(!response.ok){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data = await response.json();

    const { title, author, avatar } = data;

    wrapAll.appendChild(singleNewstemplate(title, author, avatar));

    return data;
}

getNewsSingle()
    .then(data => console.log("successful", data))
    .catch(err => console.log("failed", err));






function singleNewstemplate(title, author, avatar){
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
        <span class="news-comment">
            4 Comments
        </span>
    </div>
    
    <div class="singlenews-wrapper">
        <div class="image-slide">
            <img src="assets/law-love.jpg" alt="">
            <span class="news-title"></span>
        </div>
        <div class="image-slide">
            <div class="image-slide">
                <img src="assets/world-disaster.jpg" alt="">
                <span class="news-title"></span>
            </div>
        </div>
        <div class="image-slide">
            <div class="image-slide">
                <img src="assets/mars-2.jpg" alt="">
                <span class="news-title"></span>
            </div>
        </div>
    </div>

    <p>
        Here is an example that will limit the number of buttons (excluding prev / next, including ... buttons) to 7. You can reduce that parameter to 5 if you like: // Returns an array of maxLength (or less) page numbers // where a 0 in the returned array denotes a gap in the series.Here is an example that will limit the number of buttons (excluding prev / next, including ... buttons) to 7. You can reduce that parameter to 5 if you like: // Returns an array of maxLength (or less) page numbers // where a 0 in the returned array denotes a gap in the series.Here is an example that will limit the number of buttons (excluding prev / next, including ... buttons) to 7. You can reduce that parameter to 5 if you like: // Returns an array of maxLength (or less) page numbers // where a 0 in the returned array denotes a gap in the series. Here is an example that will limit the number of buttons (excluding prev / next, including ... buttons) to 7. You can reduce that parameter to 5 if you like: // Returns an array of maxLength (or less) page numbers // where a 0 in the returned array denotes a gap in the series.
    </p>
        
        `;

    return singleNewstemplate;

}