const User = require("../models/model");

exports.create = (req, res) => {
  // console.log(req.body);
  const { fullName, pinCode, mobileNo, dob, email, jobType, location } =
    req.body;

  User.create(
    { fullName, pinCode, mobileNo, dob, email, jobType, location },
    (err, post) => {
      if (err) {
        console.log(err);
        res.status(400).json({ error: "Duplicate post. Try another title" });
      }
      res.json(post);
    }
  );
};

// @desc    Fetch single

exports.getDataById = async (req, res) => {
  const data = await User.findById(req.params.id);

  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "data not found" });
  }
};

// @desc    Get all

exports.getData = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// @desc    Delete

exports.deleteData = async (req, res) => {
  const data = await User.findById(req.params.id);

  if (data) {
    res.json(data);
    await data.remove();
  } else {
    res.status(404).json({ error: "data not found" });
  }
};

// @desc    Update
exports.updateData = async (req, res) => {
  const data = await User.findById(req.params.id);

  if (data) {
    data.name = req.body.name || data.fullName;
    data.email = req.body.email || data.email;

    const updatedData = await data.save();

    res.json({
      _id: updatedData._id,
      fullName: updatedData.fullName,
      email: updatedData.email,
    });
  } else {
    res.status(404).json({ error: "data not found" });
  }
};
