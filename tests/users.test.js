const request = require("supertest");
const app = require("../src/app");
const seed = require("../src/db/seed");

describe("GET /users", () => {
  beforeEach(async () => {
    await seed();
  });
  test("'/health' responds with 200", async () => {
    const res = await request(app).get("/users/health");
    expect(res.statusCode).toBe(200);
  });

  test("'/' should respond with 200", async () => {
    const res = await request(app).get("/users/");
    expect(res.statusCode).toBe(200);
  });

  test("'/' should respond with array of users", async () => {
    const res = await request(app).get("/users/");
    expect(res.body.users[0]).toMatchObject({
      id: 1,
      username: "testUser@gmail.com",
      password: "ThisIsA",
    });
  });

  test("'/1/user' should respond with user 2", async () => {
    const res = await request(app).get("/users/2");
    expect(res.body).toMatchObject({
      id: 2,
      username: "someone@gmail.com",
      password: "asdfsAS2@1",
    });
  });
  test("'/1/shows' should respond with shows watched by user 1", async () => {
    const res = await request(app).get("/users/1/shows");
    expect(res.body).toHaveProperty("shows");
  });

  test("'/users/1/shows/9 should add Demon Slayer to users watched shows", async () => {
    await request(app).put("/users/1/shows/9");
    const res = await request(app).get("/users/1/shows");
    const showsTitle = res.body.shows.map((showObj) => showObj.title);
    expect(showsTitle).toContain("Demon Slayer");
  });
});
