/*****************************************************
 * Task 1: Create an object representing a superhero *
 *****************************************************/


const superhero = {
    name: "Superman",
    secretIdentity: "Clark Kent",
    powers: ['X-ray vision', 'flight', 'superhuman-strength', 'super-speed', 'heat vision', 'enhanced hearing'],
    weakness: 'Krytonite'
}

console.log(superhero)



/*****************************************************
 **** Task 2: Add methods to the superhero object ****
 *****************************************************/


 superhero.usePower = function(powerName) {
    //To handle if input power does not match powers
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} does not have the power: ${powerName}`);
    }
};

superhero.revealIdentity = function(){
    console.log(this.secretIdentity)
}


superhero.usePower('darts')
superhero.usePower('super-speed')
superhero.revealIdentity()


/*****************************************************
 **** Task 3: Create a Superhero constructor      ****
      function to streamline the creation of
 **** multiple superheroes.                       ****
 *****************************************************/

 // Constructor function for creating superhero objects
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}


Superhero.prototype.usePower = function(powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} does not have the power: ${powerName}`);
    }
};

Superhero.prototype.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};


let batman = new Superhero("Batman", "Bruce Wayne", ["martial arts", "detective skills"], "none");

batman.usePower('heat vision')
batman.usePower("martial arts");
batman.revealIdentity();




/*****************************************************
 **** Extend the functionality of your superheroes
      using prototypal inheritance                ****
 *****************************************************/

// Creating a subclass for a SuperVillain
function SuperVillain(name, secretIdentity, powers, weakness) {
    Superhero.call(this, name, secretIdentity, powers, weakness);
}

// Inheriting from Superhero
SuperVillain.prototype = Object.create(Superhero.prototype);
SuperVillain.prototype.constructor = SuperVillain;




let darkseid = new SuperVillain("Darkseid", "None", ["Telepathy", "Telekenesis", 'heat vision'], "Radion");
darkseid.usePower('heat vision')
darkseid.usePower("Telekenesis");
darkseid.revealIdentity();
