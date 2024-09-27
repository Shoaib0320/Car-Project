// Sample car data
// Array of Objects
var carsData = [
    { 
      name: 'Suzuki Cultus',
      model: '2024', 
      price: '25 lac', 
      image: 'https://imgcdn.zigwheels.pk/medium/gallery/exterior/13/124/suzuki-cultus-front-side-view-380519.jpg' 
    },
    { 
      name: 'Land Cruiser',
      model: '2024', 
      price: '1 crore 20 lac', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg'
    },
    { 
      name: 'Toyota corolla Grande', 
      model: '2024', 
      price: '77 Lac', 
      image: 'https://propakistani.pk/wp-content/uploads/2022/08/Toyota-Corolla-X-e1661853591352.jpg' 
    },
    { 
     name: 'Honda Civic', 
     model: '2024', 
     price: '80 Lac', 
     image: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg' 
    },
    { 
        name: 'Honda City', 
        model: '2024', 
        price: '60 Lac', 
        image: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/10/26152557/featured-1.jpeg' 
    },
    { 
        name: 'Honda City', 
        model: '2024', 
        price: '60 Lac', 
        image: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/10/26152557/featured-1.jpeg' 
    },
    { 
        name: 'Honda City', 
        model: '2024', 
        price: '60 Lac', 
        image: 'https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/10/26152557/featured-1.jpeg' 
    },
];

// Function to show cars
function showCars() {
    var carContainer = document.getElementById('carContainer');
    carContainer.innerHTML = '';

    carsData.forEach(car => {
        var carCard = document.createElement('div');
        carCard.classList.add('car-card');

        var carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = car.name;

        var details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = `
            <h3>${car.name}</h3>
            <p>Model: ${car.model}</p>
            <p>Price: ${car.price}</p>
            <button id="addtocart"> Add To Cart </button>
        `;

        carCard.appendChild(carImage);
        carCard.appendChild(details);
        carContainer.appendChild(carCard);
    });
}

// Show cars when button is clicked
document.getElementById('showCarsBtn').addEventListener('click', showCars);
