const request = require("supertest");
const app = require("../src/app");

describe("GET /users", () => {
  test("/ health responds with 200", async () => {
    const res = await request(app).get("/users/health");
    expect(res.statusCode).toBe(200);
  });

  test("'/' should respond with 200", async () => {
    const res = await request(app).get("/users/");
    expect(res.statusCode).toBe(200);
  });
});
