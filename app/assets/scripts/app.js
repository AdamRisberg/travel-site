var $ = require("jquery");
import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " is paying taxes");
  }
}

var john = new Person("John Doe", "red");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();