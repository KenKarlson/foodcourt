const renderItems = (data) => {
  console.log(data);
}

fetch('https://foodcourt-27e26-default-rtdb.firebaseio.com/db/partners.json')
  .then((response) => response.json())
  .then((data) => {
    renderItems(data)
  })
  .catch((error) => {
    console.log(error);
  })



// const array = [11, 22, 333, 22, 111122, 01];

// array.forEach((elem, index) => {
//   if (index === 3) {
//     console.log(elem);
//   }
  
// })