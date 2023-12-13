function getRandomUser() {
  fetch('https://randomuser.me/api/?results=16')
    .then(response => response.json())
    .then(data => {
      let usersInfo = '';
      data.results.forEach(user => {
        usersInfo += `
          <div class="user">
            <img src="${user.picture.large}" alt="User Picture">
            <p>Voornaam: ${user.name.first}</p>
            <p>Achternaam: ${user.name.last}</p>
            <p>Land: ${user.location.country}</p>
          </div>
        `;
      });
      document.getElementById('customer-info').innerHTML = usersInfo;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

getRandomUser();
