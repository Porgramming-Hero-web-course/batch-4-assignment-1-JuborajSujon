{
  //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  // define object interface type
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // create a function
  function updateProfile(
    profile: Profile,
    updateData: Partial<Profile>
  ): Profile {
    // update the profile
    const updataProfile = { ...profile, ...updateData };

    return updataProfile;
  }

  // create an object
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };

  // call the function with console log
  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
