let currentPage = 1
const baseUrl = 'https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1';
const news = baseUrl + '/news';
let paginatedNews = baseUrl + `/news?page=${currentPage}&limit=10`;


//Blog title
const addTitle = document.querySelector("a.logo-title");

// const mytitle = document.createElement('img');
addTitle.innerHTML = `
<img src="assets/favicon.png" alt="Logo" width="50" height="50">
`;

{/* addTitle.appendChild(mytitle); */}