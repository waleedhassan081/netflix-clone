const API_KEY = "7d9ee2951a2717d97115a1cf3be8f0e8";
const requests = [
    {
        id: 1,
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        title: "TRENDING",
    },
    {
        id: 2,
        url: `/discover/tv?api_key=${API_KEY}&with_networks=100`,
        title: "NETFLIX ORIGINALS",
    },
    {
        id: 3,
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        title: "TOP RATED",
    },
    {
        id: 4,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        title: "ACTION MOVIES",
    },
    {
        id: 5,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        title: "COMEDY MOVIES",
    },
    {
        id: 6,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        title: "HORROR MOVIES",
    },
    {
        id: 7,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        title: "ROMANCE MOVIES",
    },
    {
        id: 8,
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        title: "DOCUMENTARIES",
    },
];

export default requests;
