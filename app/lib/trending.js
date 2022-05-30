const Gfycat = require('gfycat-sdk')

async function trending(cursor) {
    var gfycat = new Gfycat({
        clientId: process.env['GFYCAT_CLIENT_ID'],
        clientSecret: process.env['GFYCAT_SECRET']
    });
    gfycat.authenticate()

    let options = {
        gfyCount: 6,
      }
    if (cursor) {
        options['cursor'] = cursor;
    }
    let result = await gfycat.getTrendingCategories(options)

    const data = {
        cursor: result.cursor,
        gfycats: result.gfycats
    }
    console.log(data);
    return data;
}

export default trending;