const request = require("request");
const breed = process.argv[2];

const getBreedInfo = (breed = "bengal") => {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  // console.log(url);
  
  request(url, (err, rsp, body) => {
    if (err) {
      console.log('error:', err);
      
      return;
    }

    if (rsp && rsp.statusCode !== 200) {
      console.log('statusCode:', rsp && rsp.statusCode);
    }

    const bodyJSON = JSON.parse(body);

    if (bodyJSON.length === 0) {
      console.log("Cat not found!");
    }

    const description = bodyJSON[0].description;

    console.log(description);
  });
};

getBreedInfo(breed);
