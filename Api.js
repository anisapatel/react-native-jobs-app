const base64 = require("base-64");
import { config } from "./config";

// let url =
//   `https://www.reed.co.uk/api/1.0/search?keywords=${keyword}&locationName=${location}&resultsToTake=4`;
let username = config.REED_API_KEY;
let password = "";
let headers = {
  Authorization: "Basic " + base64.encode(username + ":" + password),
};
let options = {
  method: "GET",
  headers: headers,
};

export const getJobs = (keyword, location) => {
  return fetch(
    `https://www.reed.co.uk/api/1.0/search?keywords=${keyword}&locationName=${location}&resultsToTake=4`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
