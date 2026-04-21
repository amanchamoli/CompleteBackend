const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env['private_T+CFnrvRPQs6N3UCjC+4aQ6wJ80='],
})

async function uploadFile(buffer){
    const result = await imagekit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })
}

module.exports = uploadFile;