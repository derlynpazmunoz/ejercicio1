let elementos =''

fetch("https://rickandmortyapi.com/api/character")
  .then(response => {
    // console.log(response.json());
    return response.json();
  })
  .then(data => {
    // console.log(data);
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i])
        elementos += `<li>${data.results[i].id}-
        <img src="${data.results[i].image}">
        ${data.results[i].name}

    </li>`;
 console.log(data.results[i].name);
    }

   
    document.getElementById('posts').innerHTML = elementos;
  })