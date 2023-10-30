import {api_creds} from "../config"


// get all verses of a book and chapter
export async function getVerses(versionId, bookId, chapter) {
    let data;
    try {
        const endpoint = `/version=${versionId}/book=${bookId}/chapter=${chapter}`;
        const response = await fetch(`${api_creds.base_url}${endpoint}?apikey=${api_creds.api_key}`);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return data.results.verses;
}