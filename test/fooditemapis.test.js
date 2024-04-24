const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;
const { app } = require("../server");
const FooditemModel = require("../app/models/fooditemModel");
const CategoryModel = require("../app/models/categoryModel");
const CuisineModel = require("../app/models/cuisineModel");

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

describe("Fooditem APIs Tests", function () {
  var sessionToken;
  var category;
  var cuisine;
  var testFooditem;
  before(async () => {
    console.log = function () { };
    console.error = function () { };

    FooditemModel.deleteMany();

    let credentials = {
      username: "testuser",
      password: "testpassword",
    };

    const res = await request(app).post("/api/v1/users/login").send(credentials);

    sessionToken = res.body.data.sessionToken;
    console.log("Token Generated", sessionToken);

    category = await CategoryModel.findOne({ isActive: true });
    cuisine = await CuisineModel.findOne({ isActive: true });
  });

  after(async () => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  testFooditem = {
    name: "test fooditem",
    description: "test fooditem description",
    image: "test fooditem image",
    categoryId: "test categoryId",
    cuisineId: "test cuisineId",
    isVeg: "test true"
  }

  describe("POST /api/v1/fooditems/", () => {
    it("should add a new fooditem", async () => {
      /* COMPLETE TASK 2.a HERE */

      it("should add a new fooditem", async () => {
        const result = await request(app)
          .post("/api/v1/fooditems")
          .set("Authorization", `Bearer ${sessionToken}`)
          .send(testFooditem);
        expect(result.status).to.equal(200);
        expect(result.body.message).to.equal("Food item created successfully");
      })

      it("should return 401 incase token is not provided in request", async () => {
        /* COMPLETE TASK 2.b HERE */

        const res = await request(app)
          .post("/api/v1/fooditems/")
          .send(testFooditem);

        expect(res.status).to.equal(401);
      });

    });
  });
});
describe("GET /api/v1/fooditems", () => {
  it("should return 200 OK with fooditems", async function () {
    /* COMPLETE TASK 2.c HERE */

      const response = await request(app)
        .get("/api/v1/fooditems")
        .expect(200)
        .expect("Content-Type", /json/);

      const fooditems = response.body.data;
      expect(fooditems).to.be.an("array");
      expect(fooditems).length.greaterThanOrEqual(0);

      fooditems.forEach((fooditem) => {
        expect(fooditem.name).to.be.an("string");
        expect(fooditem.description).to.be.an("string");
        expect(fooditem.image).to.be.an("string");
        expect(fooditem.categoryId).to.be.an("string");//(objectid)
        expect(fooditem.cuisineId).to.be.an("string");
        expect(fooditem.isVeg).to.be.an("boolean");
      });
    });


  
});

