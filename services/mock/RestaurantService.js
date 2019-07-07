import RESTAURANTS_LIST from "./restaurants";

export const getAllRestaurants = async () =>{
    return RESTAURANTS_LIST;

}
export const getAllRestaurantByCuisine = async(cuisineName) => {
let filteredRestaurants = [];
let restaurants = RESTAURANTS_LIST;
for(let i = 0;i<restaurants.length;i++){
    let restaurant = restaurants[i];
    if(restaurant.cuisines.toUpperCase().includes(cuisineName.toUpperCase())){
        filteredRestaurants.push(restaurant);
    }
}
return filteredRestaurants;

}
