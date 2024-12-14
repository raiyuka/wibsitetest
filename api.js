import PocketBase from './pocketbase.es.mjs';

const url = 'https://wibsitetest.pockethost.io/'
const client = new PocketBase(url)

async function getAllposts() {
    const records = await client.collection('posts').getFullList();
    return records
    
}

export{
    getAllposts
}