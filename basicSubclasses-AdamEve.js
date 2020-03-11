/**
 * According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.  
 * You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam * and Eve). 
 * The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman.
 * Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman 
 * classes.
 */

class God {

  /**
   * @memberOf God
   * @returns Human[]
   * 
   */
  static create() {
    let creation = [];
    return [...creation, new Man('Adam', 'man'), new Woman('Eve', 'woman')];
  }
}

class Human {

  /**
   * @memberOf Human
   * @param {string} gender
   * @returns void
   * 
   */
  constructor(gender) {
    this._gender = gender;

  }

  /**
   * Set gender attribute
   * 
   * @param {string} gender
   * @returns void
   */
  set gender(gender) {
    this._gender = gender;
  }

  /**
   * Gets gender attribute
   * 
   * @returns gender
   */
  get gender() {
    return this._gender;
  }

}

class Man extends Human {

  /**
   * @memberOf Man
   * @param {string} name 
   * @param {string} gender 
   */
  constructor(name, gender) {
    super(gender);
    this._name = name;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  
  /**
   * @returns {object} name and gender of man
   */
  getMan() {
    return { name: this._name, gender: super.gender };
  }
}

class Woman extends Human {

  /**
   * @memberOf Woman
   * @param {string} name 
   * @param {string} gender 
   */
  constructor(name, gender) {
    super(gender);
    this._name = name;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
 
  /**
   * @returns {object} name and gender of woman
   */
  getWoman() {
    return { name: this._name, gender: super.gender };
  }
}

God.create();
