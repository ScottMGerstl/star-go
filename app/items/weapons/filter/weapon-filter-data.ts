export class WeaponFilterData {
    public skills: Array<string>;
    public ranges: Array<string>;
    public encumbrances: Array<number>;
    public hardPoints: Array<number>;
    public maxPrice: number;

    constructor() {
      this.skills = [];
      this.encumbrances = [];
      this.hardPoints = [];
      this.ranges = [];
    }
  }