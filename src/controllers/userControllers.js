import { User } from "../models/User.js";

export const userValidate = async (req, res) => {
  console.log("User validation endpoint hit");
  const user = req.body.user;
  if (user) {
    try {
      let existingUser = await User.findOne({ auth0Id: user.sub });
      if (existingUser) {
        console.log("User found:", existingUser);
      } else {
        console.log("No user found, creating new user...");
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
          });
          console.log("New user created:", newUser);
        } catch (e) {
          console.error("Error creating new user:", e);
        }
      }
    } catch (e) {
      console.error("Error during user validation:", e);
    }
    
  }
};
