var Country = /** @class */ (function () {
    function Country(countryName, capital, population, area, mainReligion) {
        this.countryName = String(countryName);
        this.capital = String(capital);
        this.population = Number(population);
        this.area = Number(area);
        this.mainReligion = String(mainReligion);
    }
    Object.defineProperty(Country.prototype, "countryName", {
        get: function () {
            return this._countryName;
        },
        set: function (value) {
            this._countryName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "capital", {
        get: function () {
            return this._capital;
        },
        set: function (value) {
            this._capital = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "population", {
        get: function () {
            return this._population;
        },
        set: function (value) {
            this._population = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "area", {
        set: function (value) {
            this._area = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Country.prototype, "mainReligion", {
        get: function () {
            return this._mainReligion;
        },
        set: function (value) {
            this._mainReligion = value;
        },
        enumerable: false,
        configurable: true
    });
    Country.prototype.toString = function () {
        return "Country: ".concat(this.countryName, ", capital: ").concat(this.capital, ", ...");
    };
    Country.prototype.peoplePerArea = function () {
        return Number(this.population / this._area);
    };
    Country.prototype.ourHoliday = function () {
        return this.mainReligion == "Judaism"
            ? "Rosh Ha Shana"
            : this.mainReligion == "Christian"
                ? "Christmas"
                : this.mainReligion == "Muslim"
                    ? "Eid Al-Fitr"
                    : null;
    };
    return Country;
}());
var country_array = [
    new Country("United States of America", "Washington D.C", 333287557, 3796742, "Christian"),
    new Country("Republic of Cuba", "Havana", 11008112, 109884, "Christian"),
];
country_array.forEach(function (country) {
    console.log(country.toString());
    console.log("People per km^2 = ".concat(country.peoplePerArea()));
    console.log("Holiday: ".concat(country.ourHoliday()));
});
