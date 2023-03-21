// const newsWrapper = document.getElementById("getNews");
// const allNews = newsWrapper.querySelectorAll("div");

const pagenum = document.querySelector(".pagenumbers");
const prevbtn = document.getElementById("previous-btn");
const nextbtn = document.getElementById("next-btn");

let current = 1;

//Get all news
const fetchNews = async () => {
    const response = await fetch(news);

    if(response.status !== 200){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data = await response.json();

    // let maxContent = paginatedNews;
    const maxContent = 3;
    console.log("Maxcontent:", maxContent);
    const totalPages = Math.ceil(data.length / maxContent);

    console.log("total pages:", totalPages);
    console.log("All News:", data);


//Get page numbers
const pagenumbers = (index) =>{
    const gnPageNum = document.createElement("a");
    gnPageNum.innerText = index;
    gnPageNum.setAttribute("href", "#");
    gnPageNum.setAttribute("index", index);

    pagenum.appendChild(gnPageNum);
}

//Generating page numbers
const generatePgNum = () =>{
    for(let a=1; a<=totalPages; a++){
        pagenumbers(a);
    };
}


//Inactive Buttons
const inactiveBtn = (button) =>{
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
}

const activeBtn = (button) =>{
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
}


//Control Buttons
const controlButton = () => {
    if(current == 1){
        inactiveBtn(prevbtn);
    }else{
        activeBtn(prevbtn)
    }
    if(totalPages == current){
        inactiveBtn(nextbtn);
    }else{
        activeBtn(nextbtn);
    }
}


//Control Page Numbers
const controlPageNum = () =>{
    document.querySelectorAll('a').forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("index"));
        if(pageIndex == current){
            button.classList.add("active")
        }
    });
}


//Set Current Page
const setCurrentPage = (PageNum) => {
    current = PageNum;

    controlPageNum();
    controlButton();

    const previousRange = (PageNum - 1) * maxContent;
    const currentRange = PageNum * maxContent;

    data.forEach((item, index) => { //list items
        item.classList.add('hidden');
        if(index >= previousRange && index < currentRange){
            item.classList.remove('hidden');
        }
    });
};


window.addEventListener('load', () => {
    generatePgNum();
    setCurrentPage(1);

    prevbtn.addEventListener('click', () =>{
        setCurrentPage(current - 1);
    });

    nextbtn.addEventListener('click', () =>{
        setCurrentPage(current + 1);
    });

    document.querySelectorAll('a').forEach((button) =>{
        const pageIndex = Number(button.getAttribute('index'));

        if(pageIndex){
            button.addEventListener('click', () => {
                setCurrentPage(pageIndex);
            });
        }
    });
})



return data;
}

fetchNews()