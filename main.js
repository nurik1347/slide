let cars = [
    {
        id: 1,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 2,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 3,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 4,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 5,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 6,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 7,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 8,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    },
    {
        id: 9,
        imgUrl: 'https://avcdn.av.by/wisiwigimage/0002/7982/6369.jpeg',
        title: 'BMW',
        description: 'BMW M5 f90 Competition',
        status: 'b/u',
        cost: "40000$"

    }
]

let mySwipper = document.querySelector(".mySwiper")

const ReadCars = () => {
    cars.map((v) => {
        let card = document.createElement("swiper-slide")
        card.innerHTML = `
        <img class='card__img' src='${v.imgUrl}'>
        <div class ='card'>
        <h3>${v.title}</h3>
        <p>${v.description}</p>
        </div>
        <div class='card__button'>
        <p>${v.status}</p>
        <p>${v.cost}</p>
        </div>
        `
        mySwipper.appendChild(card)
    })
}

ReadCars()