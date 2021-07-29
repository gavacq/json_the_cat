const request = require("request");

const fetchBreedInfo = (breed = "bengal", cb) => {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  
  request(url, (err, rsp, body) => {
    if (err) {
      cb(err);
      
      return;
    }

    const bodyJSON = JSON.parse(body);

    if (bodyJSON.length === 0) {
      cb("Cat not found!", null);
    } else {
      cb(err, bodyJSON[0].description);
    }
  });
};

module.exports = fetchBreedInfo;
