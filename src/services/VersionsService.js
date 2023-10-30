import {api_creds} from "../config"


// get all versions of the Bible
export async function getVersions() {
    let data;
    try {
        const endpoint = '/versions';
        const response = await fetch(`${api_creds.base_url}${endpoint}?apikey=${api_creds.api_key}`);
        console.log(`${api_creds.base_url}${endpoint}?apikey=${api_creds.api_key}`);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return data.results;
}

// get a specific version of the Bible by id
export async function getVersionById(id) {
    let data;
    try {
        const endpoint = `/versions/id=${id}`;
        const response = await fetch(`${api_creds.base_url}${endpoint}?apikey=${api_creds.api_key}`);
        data = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return data.results;
}

