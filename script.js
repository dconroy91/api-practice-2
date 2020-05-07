fetch("http://localhost:8088/restaurants")
    .then(restaurants => restaurants.json())
    .then(parsedRestaurants => {

        parsedRestaurants.forEach(restaurantLoop => {
            console.log(restaurantLoop.restaurant.name)
            // document.querySelector("#printer").innerHTML += ` <ul>
            // <li>  ${restaurantLoop.restaurant.name} </li></ul>`
            document.querySelector("#enterBtn").addEventListener("click", function(){
document.querySelector("#printer").innerHTML += `<section class = "foodCard"><ul><h2 style="text-decoration: underline;">Restaurant Name</h2><li>${restaurantLoop.restaurant.name}<h3 style="text-decoration: underline;">Address</h3><li>${restaurantLoop.restaurant.location.address}</li><h3 style="text-decoration: underline;">Rating</h3><li>${restaurantLoop.restaurant.user_rating.aggregate_rating}</li><h3 style="text-decoration: underline;">Average Cost</h3><li>$${restaurantLoop.restaurant.average_cost_for_two} per two people</li><li><div><a href ="${restaurantLoop.restaurant.menu_url}" target = "blank" button id ="menuBtn">View Menu</button></div></li></ul></section>`
            })

        });
        
    })

