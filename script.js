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

superhero.usePower('super-speed')
superhero.revealIdentity()
