const mongoose = require("mongoose");
const GarbagePlace = require("../models/GarbagePlace.model.js");
require("./../db/index");

const garbagePlaceData = [
  {
    name: "plaaastic",
    creator: "66216e551e95cd67f6f1ef20",
    description: "mmmh",
    position: { lat: Number(48.9820233), long: Number(1.9734699) },
  },
  {
    name: "plastic2",
    creator: "66216e551e95cd67f6f1ef20",
    description: "ooooh",
    position: { lat: Number(48.9821233), long: Number(1.9735699) },
  },
  {
    name: "plastic1",
    creator: "66216e551e95cd67f6f1ef20",
    description: "iiih",
    position: { lat: Number(48.9820233), long: Number(1.9734699) },
  },

  {
    name: "plastic3",
    creator: "66216e551e95cd67f6f1ef20",
    description: "beurk",
    position: { lat: Number(48.9822233), long: Number(1.9736699) },
  },

  {
    name: "plastic4",
    creator: "66216e551e95cd67f6f1ef20",
    description: "hehe",
    position: { lat: Number(489823233), long: Number(1.9737699) },
  },
];

GarbagePlace.insertMany(garbagePlaceData)
  .then(() => {
    console.log("Data seeding complete");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  });
