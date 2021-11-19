
const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (rest) => {
  const restaurantTitle = document.querySelector('.restaurant-title');
  const ratingTitle = document.querySelector('.rating');
  const priceTitle = document.querySelector('.price');
  const categoryTitle = document.querySelector('.category');

  console.log(rest.kitchen);
  restaurantTitle.textContent = rest.name;
  ratingTitle.textContent = rest.stars;
  priceTitle.textContent = 'От ' + rest.price + ' ₽';
  categoryTitle.textContent = rest.kitchen;

}


const renderItems1 = (data) => {
  data.forEach(({ description, id, image, name, price }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">${name}</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">${description}</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">${price} ₽</strong>
							</div>
						</div>
    `
    cardsMenu.append(card);

  });
};
const x = localStorage.getItem('restourant');

if (localStorage.getItem('restaurants')) {
  const rest = JSON.parse(localStorage.getItem('restaurants'));

  changeTitle(rest);

  fetch(`https://foodcourt-27e26-default-rtdb.firebaseio.com/db/${rest.products}`)
    //fetch(`./db/${localStorage.getItem('restaurants')}`)
    .then((response) => response.json())
    .then((data) => {
      renderItems1(data);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  window.location.href = '/';
}

