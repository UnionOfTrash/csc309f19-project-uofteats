const { UserAuth } = require("../models/userAuth");

for (let model of [UserAuth]) {
  try {
    model.collection.drop();
  } catch (e) {
    if (e.code === 26) {
      console.log("namespace %s not found", model.collection.name);
    } else {
      throw e;
    }
  }
}
