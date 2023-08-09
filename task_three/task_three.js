const users = [
    {
      firstName: "John",
      lastName: "obinma",
      complexion: "Fair",
      occupation: "Software Engineer",
    },
    {
      firstName: "Jane",
      lastName: "orakwelu",
      complexion: "Medium",
      occupation: "Doctor",
    },
    {
      firstName: "Peter",
      lastName: "Smith",
      complexion: "Dark",
      occupation: "Teacher",
    },
    {
      firstName: "Mary",
      lastName: "Nwaiwu",
      complexion: "light Dark",
      occupation: "Nurse",
    },
  ];
  
  for (const user of users) {
    const big = document.getElementById('big')
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p>Complexion: ${user.complexion}</p>
      <p>Occupation: ${user.occupation}</p>
    `;
    big.appendChild(div);
  }