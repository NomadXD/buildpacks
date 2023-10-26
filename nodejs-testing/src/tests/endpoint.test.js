const chai = require("chai");
const axios = require("axios");

const expect = chai.expect;

describe("Public Endpoint Testing", () => {
  it("should return status 200 when accessing a public endpoint", async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    expect(response.status).to.equal(200);
  });
});
