import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    // bad approch!!!!
    const responce = await jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POST',
        payload: responce
    };
};