const Gfycat = require('gfycat-sdk')

async function trendingTags(cursor) {
    var gfycat = new Gfycat({
        clientId: process.env['GFYCAT_CLIENT_ID'],
        clientSecret: process.env['GFYCAT_SECRET']
    });
    gfycat.authenticate()

    let options = {
        tagCount: 10,
        populated: true,
      }
    if (cursor) {
        options['cursor'] = cursor;
    }
    let result = await gfycat.trendingTags(options)
    console.dir(result)
    const data = {
        tags: result['tags'].slice(1, 10) //chop '_gfycat_all_trending'
    }
    console.dir(data);
    return data;
}

export default trendingTags;