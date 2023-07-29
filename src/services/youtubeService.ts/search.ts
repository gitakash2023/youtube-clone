import { API_KEY, BASE_URL } from "./constants";

// things to implement
// 1. Search
// 2. Debounced Search
// 3. Fetching next page with token
// 4. Infinite Scroll
// 5. order
// 6. filters
const searchByKeyword = async(keyword: string) => {
  //Resource: https://developers.google.com/youtube/v3/docs/search/list
  try {
    const response = await fetch(
      `${BASE_URL}/search?part=snippet&maxResults=50&q=${keyword}&key=${API_KEY}`
    );
    const data = await response.json();
  
   return data.items

  } catch (error) {error}
};
// http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&q=${term}
const getSuggestionList = async(keyword: string) => {
  //Resource: https://developers.google.com/youtube/v3/docs/search/list
  try {
    const response = await fetch(
     `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${keyword}`
    );
    const data = await response.json();
  
   return data.items

  } catch (error) {error}
};


export { searchByKeyword ,getSuggestionList};

