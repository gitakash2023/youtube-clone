import { API_KEY, BASE_URL } from './constants'

//https://developers.google.com/youtube/v3/docs/search/list
const searchByKeyword = (keyword: string): any => {
        fetch(`${BASE_URL}/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`)
}

export {
    searchByKeyword
}

