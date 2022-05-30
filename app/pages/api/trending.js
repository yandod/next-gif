
const Gfycat = require('gfycat-sdk')
export default async function handler(req, res) {
    var gfycat = new Gfycat({
        clientId: process.env['GFYCAT_CLIENT_ID'],
        clientSecret: process.env['GFYCAT_SECRET']
    });
    gfycat.authenticate()


    let options = {
        gfyCount: 20,
      }
    let result = await gfycat.getTrendingCategories(options)


    // let options = {
    //     search_text: 'hello',
    //     count: 20,
    //     first: 30
    //   };
       
    //   gfycat.search(options).then(data => {
    //     console.log('gfycats', data);
    //   });
    console.dir(result);
    res.status(200).json(result);
}