import { API_KEY, BASE_URL } from './constants'

const searchByKeyword = (keyword: string): any => {
        fetch(`${BASE_URL}/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`)
}

export {
    searchByKeyword
}

