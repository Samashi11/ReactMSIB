import React, { createContext, useContext } from "react";
const UserContext = createContext();
function ProfileApp() {
  return (
    <UserContext.Provider value={{ name: "John Doe" }}>
      <UserProfile />
    </UserContext.Provider>
  );
}
function UserProfile() {
  const user = useContext(UserContext);
  return <p>Welcome, {user.name}!</p>;
}

export default ProfileApp;
