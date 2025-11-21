import { User } from "../models/User.js";

export const userValidate = async (req, res) => {
  const user = req.body.user;
  if (user) {
    try {
      let existingUser = await User.findOne({ auth0Id: user.sub });
      if (existingUser) {
        const userData = {
          given_name: existingUser.given_name,
          family_name: existingUser.family_name,
          nickname: existingUser.nickname,
          name: existingUser.name,
          email: existingUser.email,
          picture: existingUser.picture,
          role: existingUser.role,
          classroom: existingUser.classroom,
        };
        res
          .status(200)
          .json({ success: true, message: "User exists", user: userData });
      } else {
        try {
          const newUser = await User.create({
            auth0Id: user.sub,
            given_name: user.given_name,
            family_name: user.family_name,
            nickname: user.nickname,
            name: user.name,
            email: user.email,
            picture: user.picture,
            updated_at: user.updated_at,
            email_verified: user.email_verified,
            classroom: "N/A",
          });
          if (newUser) {
            console.log("New user created:", newUser);
            const userData = {
              given_name: newUser.given_name,
              family_name: newUser.family_name,
              nickname: newUser.nickname,
              name: newUser.name,
              email: newUser.email,
              picture: newUser.picture,
              role: newUser.role,
              classroom: newUser.classroom,
            };
            res.status(201).json({
              success: true,
              message: "New user created",
              user: userData,
            });
          } else {
            console.log("User creation failed");
            res
              .status(500)
              .json({ success: false, message: "User creation failed" });
          }
        } catch (e) {
          console.error("Error creating new user:", e);
          res.status(500).json({
            success: false,
            message: "Server Error during user creation",
          });
        }
      }
    } catch (e) {
      console.error("Error during user validation:", e);
      res.status(500).json({
        success: false,
        message: "Server Error during user validation",
      });
    }
  }
};
