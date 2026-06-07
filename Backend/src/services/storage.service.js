const ImageKit = require("@imagekit/nodejs");
require("dotenv").config();

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadfile(buffer, filename) {
  try {
    const response = await client.files.upload({
      file: buffer.toString("base64") ,
      fileName: filename
    });

    return response ;

  } catch (error) {

    console.log(error)

  }
}

module.exports = uploadfile