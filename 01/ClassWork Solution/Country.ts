class Country {
  private _countryName: string;
  private _capital: string;
  private _population: number;
  private _area: number;
  private _mainReligion: string;

  public get countryName(): string {
    return this._countryName;
  }

  public set countryName(value: string) {
    this._countryName = value;
  }

  public get capital(): string {
    return this._capital;
  }

  public set capital(value: string) {
    this._capital = value;
  }

  public get population(): number {
    return this._population;
  }

  public set population(value: number) {
    this._population = value;
  }

  public set area(value: number) {
    this._area = value;
  }

  public get mainReligion(): string {
    return this._mainReligion;
  }

  public set mainReligion(value: string) {
    this._mainReligion = value;
  }

  toString(): string {
    return `Country: ${this.countryName}, capital: ${this.capital}, ...`;
  }

  peoplePerArea(): number {
    return Number(this.population / this._area);
  }

  ourHoliday(): string | null {
    return this.mainReligion == "Judaism"
      ? "Rosh Ha Shana"
      : this.mainReligion == "Christian"
      ? "Christmas"
      : this.mainReligion == "Muslim"
      ? "Eid Al-Fitr"
      : null;
  }

  public constructor(
    countryName?: string,
    capital?: string,
    population?: number,
    area?: number,
    mainReligion?: string
  ) {
    this.countryName = String(countryName);
    this.capital = String(capital);
    this.population = Number(population);
    this.area = Number(area);
    this.mainReligion = String(mainReligion);
  }
}

let country_array: Country[] = [
  new Country(
    "United States of America",
    "Washington D.C",
    333287557,
    3796742,
    "Christian"
  ),
  new Country("Republic of Cuba", "Havana", 11008112, 109884, "Christian"),
];

country_array.forEach((country) => {
  console.log(country.toString());
  console.log(`People per km^2 = ${country.peoplePerArea()}`);
  console.log(`Holiday: ${country.ourHoliday()}`);
});
