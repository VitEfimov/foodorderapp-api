const fooditemRepository = require("../database/repositories/fooditemRepository");
const expressAsyncHandler = require("express-async-handler");
const cuisineRepository = require("../database/repositories/cuisineRepository");
const categoryRepository = require("../database/repositories/categoryRepository");
// const fooditemRepository = require("../database/repositories/fooditemRepository");

const createFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.a HERE */

  try {
    const {
      name,
      description,
      image,
      categoryId,
      cuisineId,
      isVeg
    } = req.body;

    const result = await fooditemRepository.createFooditem(name, description, image, categoryId, cuisineId, isVeg);
    if (result) {
      res.status(200).json({
        message: "Food item created successfully"
      });
    } else {
      res.status(404);
      throw new Error(`Food item creation failed`)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error creating fooditem: ${name}`,
      error: error.message
    });
  }

});

const editFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.b HERE */

  try {
    const fooditemId = req.params.id;
    const result = await fooditemRepository.editFooditem(fooditemId, req.body);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully edited",
      });
    } else {
      res.status(400);
      throw new Error(`Food item editing failed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error editing Food item details",
      error: error.message,
    });
  }

});

const deleteFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.c HERE */

  try {
    const fooditemId = req.params.id;
    const result = await fooditemRepository.deleteFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        message: "Food item is successfully deleted",
      });
    } else {
      res.status(400);
      throw new Error(`Food item deletion failed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error deleting Food item",
      error: error.message,
    });
  }

});


const getFooditem = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.d HERE */

  try {
    const fooditemId = req.params.id;
    const result = await fooditemRepository.getFooditem(fooditemId);

    if (result) {
      res.status(200).json({
        data: result,
        message: "Sucessfully fetched cuisFood itemine details.",
      });
    } else {
      res.status(204);
      throw new Error(
        `Not able to find the Food item based on the Food item id: ${cuisineId}`
      );
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching Food item details",
      error: error.message,
    });
  }

});

const getAllFooditems = expressAsyncHandler(async (req, res) => {
  /* COMPLETE TASK 1.e HERE */

  try {
    const result = await fooditemRepository.getAllFooditems();
    res.status(200).json({
      data: result,
      message: "Successfully fetched all Food item.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching Food item",
      error: error.message,
    });
  }

});

module.exports = {
  createFooditem,
  editFooditem,
  deleteFooditem,
  getFooditem,
  getAllFooditems,
};
