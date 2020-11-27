const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server/server");

const User = require("../../server/models/userModel");
const { expect } = require("chai");

chai.use(chaiHttp);

chai.should();
// TODO: make sure its reading from a test database

// Clear database after each test
afterEach(function (done) {
    User.deleteMany({}).then(function () {
        done();
    });
});

// Function to create a user
async function createUser() {
    const user = await User.create({
        username: "test",
        password: "password",
    });
    return user;
}

describe("Authentication Route: /api/auth/login", function () {
    it("Should return 401 when wrong password/username", async function () {
        return new Promise(async function (resolve, reject) {
            try {
                const user = await createUser();
                const res = await chai
                    .request(server)
                    .post("/api/auth/login")
                    .send({
                        username: user.username,
                        password: "wrongpassword",
                    });
                expect(res.status).to.equal(401);
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    });
});
