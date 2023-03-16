//Add news
const addNews = async () => {
    const response = await fetch(news, {
        method: 'DELETE',
        body: JSON.stringify({
            author: "Jasmine Roe",
            avatar: "https://randomuser.me/api/portraits/women/47.jpg",
            title: "Words are more than one word like 'Lil' Bobby Tables'.",
            body: "So what had happened was... I was building a dumb web app to teach people how to make it faster, but none of the existing ipsums really felt right for a workshop for developers. I got together with some friends and brainstormed computer science thought-leadership synergistic words, and this is what came out.",
            url: "lajfepkael.xyz",
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    });
    if(response.status !== 200){
        throw new Error("Problem posting this news");
    }
    const data = await response.json();
    // return data;
}