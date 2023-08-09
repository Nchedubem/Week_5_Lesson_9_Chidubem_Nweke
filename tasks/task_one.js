let DOB = 2001;
let year = 2023;
let name = 'chidubem';
let location = 'anambra'
const calculateAge = (DOB, year, name, location) => {
    let age = `${year - DOB}`;
    let message = `Hello ${name} from ${location}, your current age is ${age}`;
    console.log(message);
    return age;
  };
  
  const ageDate = calculateAge(DOB, year, name, location);
  console.log(ageDate); 