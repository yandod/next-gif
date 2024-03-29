const Gfycat = require('gfycat-sdk')

async function trending(cursor, tag) {
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

    if (tag) {
        options['tagName'] = tag
    }
    let result = await gfycat.getTrendingCategories(options)

    const data = {
        cursor: result.cursor,
        gfycats: result.gfycats
    }
    return data;
}

export default trending;