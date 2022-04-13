const gapi = require('googleapis')
const { google } = gapi

const auth = google.auth
    .getClient({
        keyFile: './content-api-key.json',
        scopes: ['https://www.googleapis.com/auth/content'],
    })
    .then((authClient) => {
        const content = google.content({
            version: 'v2.1',
            auth: authClient,
        })
        return content.products.list({
            merchantId: '1234145',
        })
    })
    .then((products) => {
        console.log(products)
    })
