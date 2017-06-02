/**
 * Let's protect our objects' properties so no one can change the name or health directly.
 *
 * Copy your code from the previous exercise, then change the properties to be private.
 *
 * Once the properties are private you will need to add GETTER methods so we can still
 * access the values. So, add two methods called "getName" and "getHealth" that return the
 * value of the name and health properties respectively.
 *
 * Finally, now that your name and health properties are private, fix the line that
 * prints out each monster's name and health.
 *
 * NOTE: Read the section "Private" for a push in the right direction.
 * http://javascript.crockford.com/private.html
 */

(function() {
  //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
  'use strict';

  //defining the living thing skeleton and protecting the variables
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

  //Instantiating the 3 new living things
  let LivingThing1 = new LivingThing("Rat", 50);
  let LivingThing2 = new LivingThing("Goblin", 0);
  let LivingThing3 = new LivingThing("Ogre", 8);

  //The code below should work when you are done
  console.log("Are the monsters alive?");

  //for...of loop supported in ES6
  //not compatable before IE edge
  //@see http://www.benmvp.com/learning-es6-for-of-loop/
  //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  console.log("ES6 for...in");
  let monsters = [LivingThing1, LivingThing2, LivingThing3];
  for (let monster of monsters) {
    console.log(monster.getName() + " is " + (monster.isAlive() ? "alive" : "dead"));
  }

  // //just a spacer
  console.log("===================");
  //
  // //for loop loop supported before ES6
  // //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  // console.log("for loop for support before ES6");
  for (let i = 0; i < monsters.length; i++) {
    console.log(monsters[i].getName() + " is " + (monsters[i].isAlive() ? "alive" : "dead"));
  }

})();
