var express = require("express");
const Drink = require("../database/drinks");
const User = require("../database/users");
const {
  getAllUsers,
  findUserById,
  insertData,
  deleteData,
  updateData,
  updateOneField,
} = require("../database/users");
var router = express.Router();



router.get("/", async function (req, res) {
  const user = await User.findAll({ include: Drink });
  res.send(user);
});

router.post("/", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  const user = await User.create({
    firstName,
    lastName,
    emailAddress,
    phone,
    password,
    apiKey: Date.now(),
  });
  res.send(user);
});

router.get("/:id", async function (req, res) {
  const user = await User.findByPk(req.params.id);
  res.send(user);
});

router.put("/:id", async function (req, res) {
  const { firstName, lastName, email, phone, password } = req.body;
  if (firstName && lastName && email && phone && password) {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id)
    res.send(user)
  }
  res.send({message: "validation Error: Field Missing"})
})

router.patch("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  await User.update(req.body, { where: { id: req.params.id }})
  const user = await User.findByPk(req.params.id)
  res.send(user)
})

router.delete("/:id", async function (req, res) {
  const user = await User.destroy({
    where: {
      id: req.params.id
    },
  });
  res.send("Success");
});

module.exports = router;


// /* GET users listing. */
// router.get('/', async function(req, res) {
//   const users = await getAllUsers()
//   res.send(users);
// });

// router.post('/', async function (req, res) {
//   const newUser = await insertData(req.body)
//   res.send(newUser)
// });

// router.get('/:id', async function (req, res) {
// const user = await findUserById(req.params.id)
//   res.send(user)
// });

// router.put('/:id', async function (req, res) {
//   const user = await updateData(req.body, req.params.id)
//   res.send(user);
// });

// router.patch('/:id', async function (req, res) {
//   const user = await updateOneField(req.body, req.params.id)
//   res.send(user);
// });

// router.delete('/:id', async function (req, res) {
//   const user = await deleteData(req.params.id);
//   res.send(user);
// });
