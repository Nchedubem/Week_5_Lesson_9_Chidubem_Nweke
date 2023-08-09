function userBio(user) {
    let { gender, occupation } = user;
  
    let statement = `This user is ${gender} and their occupation is ${occupation}.`;

    return statement;
  }
  
    let user1 = {
        occupation: "software engineer",
        height: 175,
        gender: "male",
        nationality: "Nigeria"
    };
    let user2 = {
        occupation: "Graphic Designer",
        height: 165,
        gender: "female",
        nationality: "Nigeria"
    };
    let user3 = {
        occupation: "teacher",
        height: 180,
        gender: "female",
        nationality: "Nigeria"
    };

    console.log(userBio(user1));
    console.log(userBio(user2));
    console.log(userBio(user3));