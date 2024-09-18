const data = [
    {
        name: "Shirley Kuphal",
        img: "https://loremflickr.com/640/480/animals",
        desc: "er",
        price: 52,
        id: "1"
    },
    {
        name: "Linda Rempel",
        img: "https://loremflickr.com/640/480/animals",
        desc: "quod",
        price: 95,
        id: "2"
    },
    {
        name: "Cary Pfeffer DVM",
        img: "https://loremflickr.com/640/480/animals",
        desc: "apropos",
        price: 25,
        id: "3"
    },
    {
        name: "Geoffrey O'Conner",
        img: "https://loremflickr.com/640/480/animals",
        desc: "phooey",
        price: 91,
        id: "4"
    },
    {
        "name": "Garry Haag",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "pomelo",
        "price": 56,
        "id": "5"
    },
    {
        "name": "Gail Fadel",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Configuration",
        "price": 20,
        "id": "6"
    },
    {
        "name": "Vivian Jacobs",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Gloves",
        "price": 62,
        "id": "7"
    },
    {
        "name": "Derrick Herman",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "visualize",
        "price": 11,
        "id": "8"
    },
    {
        "name": "Barbara Walker",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Loan",
        "price": 84,
        "id": "9"
    },
    {
        "name": "Marsha Rempel",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "pink",
        "price": 93,
        "id": "10"
    },
    {
        "name": "Darryl Metz",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "wrap",
        "price": 62,
        "id": "11"
    },
    {
        "name": "Peter Reichert",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "invoice",
        "price": 88,
        "id": "12"
    },
    {
        "name": "Teri Gottlieb",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Bicycle",
        "price": 64,
        "id": "13"
    },
    {
        "name": "Terry Koss",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "circuit",
        "price": 44,
        "id": "14"
    },
    {
        "name": "Darlene Stoltenberg",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "boat",
        "price": 90,
        "id": "15"
    },
    {
        "name": "Alfredo Kshlerin",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "payment",
        "price": 7,
        "id": "16"
    },
    {
        "name": "Kara Kihn V",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "overriding",
        "price": 71,
        "id": "17"
    },
    {
        "name": "Meghan Lemke DVM",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Mississippi",
        "price": 89,
        "id": "18"
    },
    {
        "name": "Marcia Okuneva",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "siemens",
        "price": 43,
        "id": "19"
    },
    {
        "name": "Harry Baumbach",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "SUV",
        "price": 5,
        "id": "20"
    },
    {
        "name": "Winston Connelly III",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "transitional",
        "price": 58,
        "id": "21"
    },
    {
        "name": "Rachael Kiehn DVM",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Lauderhill",
        "price": 89,
        "id": "22"
    },
    {
        "name": "Olga Feil",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Music",
        "price": 77,
        "id": "23"
    },
    {
        "name": "Matthew Mayert",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "McKenzie",
        "price": 63,
        "id": "24"
    },
    {
        "name": "Mr. Alex Thiel",
        "img": "https://loremflickr.com/640/480/animals",
        "desc": "Oriental",
        "price": 6,
        "id": "25"
    }
];
let beyenilenKartlar = [];
function kartlarYarat() {
    const kartKonteyner = document.getElementById('card-container');
    kartKonteyner.innerHTML = '';
    
    data.forEach(item => {
        kartKonteyner.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <p class="price">${item.price} AZN</p>
                <span class="heart" data-id="${item.id}">&#10084;</span>
            </div>
        `;
    });
    kartKonteyner.querySelectorAll('.heart').forEach(heart => {
        heart.onclick = () => Deyis(heart.dataset.id, heart);
    });
}
function Deyis(id, heartIcon) {
    const index = beyenilenKartlar.indexOf(id);
    
    if (index === -1) {
        beyenilenKartlar.push(id);
        heartIcon.classList.add('urek');
    } else {
        beyenilenKartlar.splice(index, 1);
        heartIcon.classList.remove('urek');
    }
}
    document.getElementById('beyenilenler-goster').onclick = () => {
    const modal = document.getElementById('modal');
    const beyenilenKonteyner = document.getElementById('beyenilen-kartlar');
    beyenilenKonteyner.innerHTML = '<h2>Bəyənilən Kartlar</h2>';
    
    const beyenilenItems = data.filter(item => beyenilenKartlar.includes(item.id));
    
    beyenilenItems.forEach(item => {
        beyenilenKonteyner.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.desc}</p>
                <p class="price">${item.price} AZN</p>
            </div>
        `;
    });

    modal.style.display = "block";
};
document.getElementById('modal-bagla').onclick = () => {
    document.getElementById('modal').style.display = "none";
};

kartlarYarat();