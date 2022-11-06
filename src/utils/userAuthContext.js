import { useState } from "react";

export default function userAuthContext() {
  const [user, setUser] = useState("");

  function validateUser(user) {
    console.log("useruseruseruseruser: ", user);
    if (user && user.username && user.password) {
      setUser(user);
      return true;
    } else {
      return false;
    }
  }
  return [user, validateUser];
}