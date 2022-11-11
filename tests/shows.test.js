const request = require("supertest");
const app = require("../src/app");
const seed = require("../src/db/seed");

describe("GET /shows", () => {
  beforeEach(async () => {
    await seed();
  });
  test("'/health' responds with 200", async () => {
    const res = await request(app).get("/users/health");
    expect(res.statusCode).toBe(200);
  });

  test("'/' should respond with 200", async () => {
    const res = await request(app).get("/shows/");
    expect(res.statusCode).toBe(200);
  });

  test("'/' should respond with array of shows", async () => {
    const res = await request(app).get("/shows/");
    expect(res.body.shows[0]).toMatchObject({
      id: 1,
      title: "King of Queens",
      genre: "Drama",
    });
  });

  test("'/shows/2 should respond with show 2", async () => {
    const res = await request(app).get("/shows/2");
    expect(res.body).toMatchObject({
      id: 2,
      title: "X-Files",
      genre: "Sitcom",
    });
  });

  //   test("'/genres/Comedy should add Demon Slayer to users watched shows", async () => {
  //     const res = await request(app).get("/shows/genres/Comedy");
  //     const genres = res.body.shows.map((showObj) => showObj.genre);
  //     expect(genres).toContain("Comedy");
  //   });

  //   test("'/1/shows' should respond with shows watched by user 1", async () => {
  //     const res = await request(app).get("/users/1/shows");
  //     expect(res.body).toHaveProperty("shows");
  //   });
});
