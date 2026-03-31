const request = require("supertest");
const { app, server } = require("../app");

describe("GET /", () => {
    it("should return 200 OK message",  async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Welcome to Dev2Guru Enterprise!");
    });
});

afterAll(() => {
    server.close();
});

