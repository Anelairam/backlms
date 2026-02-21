import { User } from "../models/User.js";

export const userValidation = async (req, res) => {
  const accessData = req.auth.payload["https://api.myapp.com/user"];
  const user = await User.findOne({ auth0Id: req.auth.payload.sub });

  if (!user) {
    const newUser = await User.create({
      auth0Id: req.auth.payload.sub,
      email: accessData.email,
      first_name: accessData.given_name,
      last_name: accessData.family_name,
      role: "student",
      validatedData: accessData.email_verified,
      classroom: undefined,
      notes: undefined,
    });


    res.status(201).json({
      email: newUser.email,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      role: newUser.role,
    });
  } else {
    const returnedUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      classroom: user.classroom,
      notes: user.notes,
    };
    res.status(200).json(returnedUser);
  }
  console.log("user ", user);
};

export const getUserClassroom = async (req, res) => {
  const user = await User.findOne({ auth0Id: req.auth.payload.sub });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  } else {
    if (user.role === "admin"){
        // get all classrooms
        const userClassroom = user.classroom;
        res.status(200).json({ classroom: userClassroom });
    } else if (user.role === "instructor"){
        // get instructor's classrooms
    } else {
        const userClassroom = user.classroom;
        res.status(200).json({ classroom: userClassroom });
    }
  }
};
