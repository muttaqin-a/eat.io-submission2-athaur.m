import CONFIG from '../../globals/config'

const createRestaurantItemTemplate = (restaurant) => `
  <article class="resto-item">
    <img class="resto-item-thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="Gambar ${restaurant.name}"" />
    <div class="city">${restaurant.city}</div>
    <div class="resto-item-content">
      <p class="rating">
      <i class="fa fa-star fa-lg"></i>
      <span href="#" class="rating">${restaurant.rating}</span>
      </p>
      <h1 class="resto-item-title"><a href="#">${restaurant.name}</a></h1>
      <p class="resto-item-description">${restaurant.description.slice(0, 170)}...</p>
    </div>
  </article>
`
export {
  createRestaurantItemTemplate
}
