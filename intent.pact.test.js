const { Verifier } = require('@pact-foundation/pact');
const path = require('path');

const app = require('express')();
const routes = require('./index.routes');
app.use(routes);
const server = app.listen("8001");

describe("Pact Verification", () => {
  it("validates the expectations of consumer", () => {
    const opts = {
      logLevel: "INFO",
      providerBaseUrl: "http://localhost:8001",
      provider: "Provider",
      providerVersion: "1.0.0",
      pactUrls: [
        path.resolve(__dirname, './pacts/pablo-alfred.json')
      ]
    };

    return new Verifier(opts).verifyProvider().then(output => {
      console.log(output);
    }).finally(() => {
      server.close();
    });
  })
});
