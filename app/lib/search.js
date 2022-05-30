const Gfycat = require('gfycat-sdk')

async function search(keyword, cursor) {
    var gfycat = new Gfycat({
        clientId: process.env['GFYCAT_CLIENT_ID'],
        clientSecret: process.env['GFYCAT_SECRET']
    });
    gfycat.authenticate()

    let options = {
        count: 6,
        search_text: keyword
      }
    if (cursor) {
        options['cursor'] = cursor;
    }
    let result = await gfycat.search(options)

    const data = {
        cursor: result.cursor,
        gfycats: result.gfycats
    }
    console.log(data);
    return data;
}

export default search;