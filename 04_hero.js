/**
 * It's time to create a hero to dispatch these pesky monsters.
 *
 * Copy your code from the previous exercise.
 *
 * Add a SETTER method to your LivingThing class named "setHealth" that lets you update the value
 * of the "health" property.
 *
 * Now, create a NEW object called "Hero" that EXTENDS the LivingThing class.
 *
 * NOTE: Check out the following to figure out how to extend an object
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
 *
 * Add a method to the Hero class named "attack" that takes as a parameter a LivingThing object.
 * The method should do three things:
 * 1. Reduce the LivingThing object's health by a random value between 0 and 10.
 * 2. Reduce the hero's health by a random value between 0 and 10.
 * 3. Print out how much damage the monster and hero did to each other.
 *
 * NOTE: To point you in the right direction: check out
 * the getRandomInt function on this page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 *
 * Give the Hero object another method named "fight" that takes as a parameter an array of LivingThing objects
 * and does the following:
 *  - For each LivingThing object in the array, call the "attack" method so the hero can attack the monster.
 *     - But, don't attack if the LivingThing is already dead!
 *  - Repeat the process until all the monsters or the hero is dead.
 *
 * Finally, you will need to instantiate your hero object with the name into a variable named "hero". Give them 100 health and a
 * name of your choice.
 */


(function() {
  //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
  'use strict';

  //this function is used to get a random number and reduce the health value
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //this is to define the skeleton and properties for LivingThing
  function LivingThing(thingname, thinghealth) {
    let Name = thingname;
    let Health = thinghealth;

    this.getName = function() {
      return Name;
    }
    this.getHealth = function() {
      return Health;
    };
    this.setHealth = function(InHealth) {
      Health = InHealth;
    }
    this.isAlive = function() {
      if (Health > 0) {
        return true;
      } else {
        return false;
      }
    }
  }

  //instantiated 3 new livng things
  let LivingThing1 = new LivingThing("Rat", 50);
  let LivingThing2 = new LivingThing("Goblin", 30);
  let LivingThing3 = new LivingThing("Ogre", 8);

  //this is checking and printing all the livingthings are alive or dead
  console.log("Are the monsters alive?");
  let monsters = [LivingThing1, LivingThing2, LivingThing3];
  for (let monster of monsters) {
    console.log(monster.getName() + " is " + (monster.isAlive() ? "alive" : "dead"));
  }


  //creating the hero skeleton with extending the properties of livingthing
  function Hero(thingname, thinghealth) {
    LivingThing.call(this, thingname, thinghealth);

    //Attack method
    this.attack = function(monster) {
      this.setHealth(this.getHealth() - getRandomIntInclusive(0, 10));
      monster.setHealth(monster.getHealth() - getRandomIntInclusive(0, 10));

      console.log("After Attack " + this.getName() + " health is " + this.getHealth());
      console.log("After Attack " + monster.getName() + " health is " + monster.getHealth());
    }

    //fight Method
    this.fight = function(monsters) {
      let keepcontinue = true;
      while (keepcontinue) {
        let monsteralive = false;
        for (let i = 0; i < monsters.length; i++) {
          if (monsters[i].isAlive()) {
            this.attack(monsters[i]);
            //console.log(monsters[i].getHealth());
            if (!this.isAlive()) {
              keepcontinue = false;
              break;
            }
            if (monsters[i].isAlive()) {
              monsteralive = true;
            }
          }

        }
        if (!monsteralive) {
          keepcontinue = false;
        }
      }

    }
  }


  //instantiating the new hero
  let hero = new Hero("Giant", 100);



  //The code below should work when you are done
  console.log("A hero emerges!");

  console.log("The noble " + hero.getName() + " has vowed to defeat the monsters and save the realm");
  console.log("Will they be victorious?");

  hero.fight(monsters);

  if (hero.isAlive()) {
    console.log("The hero, " + hero.getName() + ", prevailed!");
  } else {
    console.log(hero.getName() + " was bested by the monsters. We are doomed");
  }

})();
