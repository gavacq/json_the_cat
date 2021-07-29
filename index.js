const fetchBreedInfo = require("./breedFetcher");
const breed = process.argv[2];

fetchBreedInfo(breed, (err, desc) => {
  if (err) {
    console.log("Fetch error: ", err);
  } else {
    console.log("Cat description: ", desc);
  }
});
