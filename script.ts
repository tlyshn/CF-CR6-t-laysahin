var all: any[] = [];
// Named the class "Place" instead of "Location", because "Location" is already used in
// one of the libraries that I use
class Place {
  city: string;
  name: string;
  zip: number;
  address: string;
  img: string;
  created: Date;

  constructor(
    city: string,
    name: string,
    zip: number,
    address: string,
    img: string,
    created: Date
  ) {
    this.city = city;
    this.name = name;
    this.zip = zip;
    this.address = address;
    this.img = img;
    this.created = created;
    all.push(this);
  }
  render() {
    return `
    <div class="card" >
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${this.name}</h5>
        <p class="card-text"><i class="fas fa-city"></i> ${this.city}</p>
        <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.zip}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><i class="fas fa-calendar-alt"></i> ${this.created}</small>
      <div>
    </div>
        `;
  }
}

class Restaurant extends Place {
  type: string;
  telephone: string;
  web: string;

  constructor(
    city: string,
    name: string,
    zip: number,
    address: string,
    img: string,
    created: Date,
    type: string,
    telephone: string,
    web: string
  ) {
    super(city, name, zip, address, img, created);
    this.type = type;
    this.telephone = telephone;
    this.web = web;
  }
  render() {
    return `
    <div class="card">
      <img src="${this.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${this.name}</h5>
        <p class="card-text"><i class="fas fa-city"></i> ${this.city}</p>
        <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.zip}</p>
        <p>
             <a class="btn btn-light" data-toggle="collapse" href="#collapseExampled" role="button" aria-expanded="false" aria-controls="collapseExampled">
               info <i class="fas fa-arrow-down"></i>
             </a>
            </p>
            <div class="collapse" id="collapseExampled">
              <div class="card card-body">
              <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
            </svg> ${this.telephone}</p>
              <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
              <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            </svg> <a href="${this.web}">${this.web}</a></p>
              </div>
            </div>
       
      </div>
      <div class="card-footer">
        <small class="text-muted"><i class="fas fa-calendar-alt"></i> ${this.created}</small>
      <div>
    </div>
        `;
  }
}

class Events extends Place {
  date: string;
  time: string;
  price: number;
  web: string;

  constructor(
    city: string,
    name: string,
    zip: number,
    address: string,
    img: string,
    created: Date,
    date: string,
    time: string,
    price: number,
    web: string
  ) {
    super(city, name, zip, address, img, created);
    this.date = date;
    this.time = time;
    this.price = price;
    this.web = web;
  }

  render() {
    return `
    <div class="card">
        <img class="card-img-top" src="${this.img}">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text"><i class="fas fa-calendar-alt"></i> ${this.date}, ${this.time}</p>
            
            <p class="card-text"><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.city}, ${this.zip}</p>
            <p>
             <a class="btn btn-light" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
               Price & info <i class="fas fa-arrow-down"></i>
             </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                <p><i class="far fa-money-bill-alt"></i> € ${this.price}</p>
                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
              </svg> <a href="${this.web}">${this.web}</a></p>
              </div>
            </div>
        </div>
        <div class="card-footer">
          <small class="text-muted"><i class="fas fa-calendar-alt"></i> ${this.created}</small>
         <div>
    </div>
        `;
  }
}

new Place(
  "Vienna",
  "St. Charles Church",
  1010,
  "Karlsplatz 1",
  "img/img1.jpeg",
  new Date(2001, 12, 28, 09, 01)
);
new Place(
  "Vienna",
  "Zoo Vienna",
  1130,
  "Maxingstraße 13b",
  "img/img2.jpeg",
  new Date(1999, 2, 8, 15, 32)
);
new Restaurant(
  "Vienna",
  "Zitronenblatt Thai Restaurant",
  1050,
  "Kettenbrückengasse 19",
  "img/img3.jpeg",
  new Date(2005, 1, 23, 8, 0),
  "Thai",
  "+43(1)5812308",
  "www.lemonleaf.at"
);
new Restaurant(
  "Vienna",
  "SIXTA",
  1050,
  "Schönbrunner Straße 21",
  "img/img4.jpeg",
  new Date(2009, 5, 21, 12, 40),
  "WhoKnows",
  "+4315852856l, +4315852856",
  "www.sixta-restaurant.at"
);
new Events(
  "Vienna",
  "Kris Kristofferson",
  1150,
  "Wiener Stadthalle, Halle F, Roland Rainer Platz 1",
  "img/img5.jpeg",
  new Date(2020, 12, 29, 14, 13),
  "Fr, 15.11.2021",
  "20:00",
  58.5,
  "www.kriskristofferson.com"
);
new Events(
  "Vienna",
  "Lenny Kravitz",
  1150,
  "Wiener Stadthalle - Halle D, Roland Rainer Platz 1",
  "img/img6.jpeg",
  new Date(2022, 12, 30, 00, 1),
  "Sa, 09.12.2029",
  "19:30",
  48.8,
  "www.lennykravitz.com"
);

for (let x in all) {
  $("#locations").append(all[x].render());
  console.log(x);
}
