const BEARER_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAPY4hwEAAAAAKmKJtHV4DoJiPfgdS6JKL2HpgtE%3DZ9gapDz1Wl2Zct37h1XjEVL1gwNtyWbxXb96zdSpn0p1ze0TLc';
const axios = require('axios')

const getTweets = async(id) => {
    try
    {

    const params = {
        'query': 'from:'+id+' -is:retweet',
        'tweet.fields': 'created_at',
        'media.fields': 'preview_image_url',
        'expansions': 'author_id',
        'user.fields': 'profile_image_url'


    }
    const response = await axios.get("https://api.twitter.com/2/tweets/search/recent", {
        params,
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${BEARER_TOKEN}`
        }
    })
		
    if (response.data)
        return response.data;
    else
        throw new Error("Unsuccessful Request");   
}
   catch(error)
   {
    console.log(error);

   }
}

module.exports = {
    getTweets,
    BEARER_TOKEN
}