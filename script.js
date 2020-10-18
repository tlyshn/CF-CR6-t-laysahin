var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var all = [];
// Named the class "Place" instead of "Location", because "Location" is already used in
// one of the libraries that I use
var Place = /** @class */ (function () {
    function Place(city, name, zip, address, img, created) {
        this.city = city;
        this.name = name;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.created = created;
        all.push(this);
    }
    Place.prototype.render = function () {
        return "\n    <div class=\"card\" >\n      <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"> " + this.name + "</h5>\n        <p class=\"card-text\"><i class=\"fas fa-city\"></i> " + this.city + "</p>\n        <p class=\"card-text\"><i class=\"fas fa-map-marker-alt\"></i> " + this.address + ", " + this.zip + "</p>\n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\"><i class=\"fas fa-calendar-alt\"></i> " + this.created + "</small>\n      <div>\n    </div>\n        ";
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, name, zip, address, img, created, type, telephone, web) {
        var _this = _super.call(this, city, name, zip, address, img, created) || this;
        _this.type = type;
        _this.telephone = telephone;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n    <div class=\"card\">\n      <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\"> " + this.name + "</h5>\n        <p class=\"card-text\"><i class=\"fas fa-city\"></i> " + this.city + "</p>\n        <p class=\"card-text\"><i class=\"fas fa-map-marker-alt\"></i> " + this.address + ", " + this.zip + "</p>\n        <p>\n             <a class=\"btn btn-light\" data-toggle=\"collapse\" href=\"#collapseExampled\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExampled\">\n               info <i class=\"fas fa-arrow-down\"></i>\n             </a>\n            </p>\n            <div class=\"collapse\" id=\"collapseExampled\">\n              <div class=\"card card-body\">\n              <p><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-telephone-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path fill-rule=\"evenodd\" d=\"M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z\"/>\n            </svg> " + this.telephone + "</p>\n              <p><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-house-door-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z\"/>\n              <path fill-rule=\"evenodd\" d=\"M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/>\n            </svg> <a href=\"" + this.web + "\">" + this.web + "</a></p>\n              </div>\n            </div>\n       \n      </div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\"><i class=\"fas fa-calendar-alt\"></i> " + this.created + "</small>\n      <div>\n    </div>\n        ";
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, name, zip, address, img, created, date, time, price, web) {
        var _this = _super.call(this, city, name, zip, address, img, created) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.web = web;
        return _this;
    }
    Events.prototype.render = function () {
        return "\n    <div class=\"card\">\n        <img class=\"card-img-top\" src=\"" + this.img + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">" + this.name + "</h5>\n            <p class=\"card-text\"><i class=\"fas fa-calendar-alt\"></i> " + this.date + ", " + this.time + "</p>\n            \n            <p class=\"card-text\"><i class=\"fas fa-map-marker-alt\"></i> " + this.address + ", " + this.city + ", " + this.zip + "</p>\n            <p>\n             <a class=\"btn btn-light\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n               Price & info <i class=\"fas fa-arrow-down\"></i>\n             </a>\n            </p>\n            <div class=\"collapse\" id=\"collapseExample\">\n              <div class=\"card card-body\">\n                <p><i class=\"far fa-money-bill-alt\"></i> \u20AC " + this.price + "</p>\n                <p><svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-house-door-fill\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z\"/>\n                <path fill-rule=\"evenodd\" d=\"M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/>\n              </svg> <a href=\"" + this.web + "\">" + this.web + "</a></p>\n              </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n          <small class=\"text-muted\"><i class=\"fas fa-calendar-alt\"></i> " + this.created + "</small>\n         <div>\n    </div>\n        ";
    };
    return Events;
}(Place));
new Place("Vienna", "St. Charles Church", 1010, "Karlsplatz 1", "img/img1.jpeg", new Date(2001, 12, 28, 09, 01));
new Place("Vienna", "Zoo Vienna", 1130, "Maxingstraße 13b", "img/img2.jpeg", new Date(1999, 2, 8, 15, 32));
new Restaurant("Vienna", "Zitronenblatt Thai Restaurant", 1050, "Kettenbrückengasse 19", "img/img3.jpeg", new Date(2005, 1, 23, 8, 0), "Thai", "+43(1)5812308", "www.lemonleaf.at");
new Restaurant("Vienna", "SIXTA", 1050, "Schönbrunner Straße 21", "img/img4.jpeg", new Date(2009, 5, 21, 12, 40), "WhoKnows", "+4315852856l, +4315852856", "www.sixta-restaurant.at");
new Events("Vienna", "Kris Kristofferson", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/img5.jpeg", new Date(2020, 12, 29, 14, 13), "Fr, 15.11.2021", "20:00", 58.5, "www.kriskristofferson.com");
new Events("Vienna", "Lenny Kravitz", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/img6.jpeg", new Date(2022, 12, 30, 00, 1), "Sa, 09.12.2029", "19:30", 48.8, "www.lennykravitz.com");
for (var x in all) {
    $("#locations").append(all[x].render());
    console.log(x);
}
