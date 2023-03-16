const baseUrl = 'https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1';
const news = baseUrl + '/news';
const paginatedNews = baseUrl + '/news?page=1&limit=6';


//Blog title
const addTitle = document.querySelector("a.logo-title");

const mytitle = document.createElement('h3');
mytitle.innerHTML = `
<h3>News Home</h3>
`;

addTitle.appendChild(mytitle);