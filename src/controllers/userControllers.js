import User from "../models/userModels.js";

const createUser = async () => {
  //   await User.create({
  //     fullname: "Amaka Nwosu",
  //     age: 22,
  //     favouriteFoods: ["rice", "beans", "garri", "yam"],
  //   });
  //   await User.create({
  //     fullname: "Saint Emeka",
  //     age: 25,
  //     favouriteFoods: ["rice", "beans", "garri", "yam"],
  //   });
  //   await User.create({
  //     fullname: "Gabriel Akinola",
  //     age: 27,
  //     favouriteFoods: ["rice", "beans", "garri", "yam"],
  //   });

  //   await User.create({
  //     fullname: "Mary Nwosu",
  //     age: 22,
  //     favouriteDrinks: "burittos",
  //   });
  //   await User.create({
  //     fullname: "emma bright",
  //     age: 22,
  //     favouriteDrinks: "burritos",
  //   });

  console.log("users created ");
};
const findUser = async () => {
  const user = await User.find({});
  console.log(user);
};
const findOneUserById = async () => {
  const user = await User.findById("65e07298e3ca36bf7248017b");
  console.log(user);
};
const findOneUser = async () => {
  const user = await User.findOne({ fullname: "" });
  console.log(user);
};
const updateUser = async () => {
  const user = await User.findById("65e0729ae3ca36bf7248017e");
  user.fullname = "chidinma sanusi";
  user.favouriteFoods.push("ogbono");

  const savedUser = await user.save();
  console.log(savedUser);
};
const findOneUserAndUpdate = async () => {
  const user = await User.findOneAndUpdate(
    { fullname: "chidinma sanusi" },
    { age: 20 },
    { new: true }
  );
  console.log(user);
};
const findOneUserByTheIdToDelete = async () => {
  const user = await User.findByIdAndDelete("65e07298e3ca36bf7248017b");
  console.log(user);
};
const findOneUserAndRemove = async () => {
  const user = await User.findOne({ fullname: "Mary Nwosu" });
  const removedUser = await user.deleteOne();
  console.log(removedUser);
};
const findUserChain = async () => {
  const user = await User.find({})
    .sort({ fullname: 1 })
    .collation({ locale: "en", strength: 2 })
    .limit(2)
    .select("-age");
  console.log(user);
};

export {
  createUser,
  findUserChain,
  findUser,
  findOneUser,
  findOneUserById,
  updateUser,
  findOneUserByTheIdToDelete,
  findOneUserAndRemove,
  findOneUserAndUpdate,
};
