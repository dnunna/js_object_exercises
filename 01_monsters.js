/**
 * Let's create some objects!
 *
 * Define a an object below with the name "LivingThing".
 * Give the object a constructor that takes two properties called "name" and "health".
 *
 * Once you have your object defined, let's create some living things.
 * Create three LivingThing instances from your object, one for each of the creatures below.
 * Be sure to set each object's name and health!
 *
 * name: "Rat"
 * health: 5
 *
 * name: "Goblin"
 * health: 30
 *
 * name: "Ogre"
 * health: 80
 *
 * Finally, add each of your objects to an array called "monsters"
 *
 * Use the following function documentation if you need a refresher on how objects with constructors are defined:
 * @see https://css-tricks.com/understanding-javascript-constructors/#article-header-id-1
 *
 *
 */

(function(){

    //@see https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
    'use strict';


    function LivingThing(thingname, thinghealth){
        this.name = thingname;
        this.health = thinghealth;
    }

    let LivingThing1 = new LivingThing("Rat", 5);
    let LivingThing2 = new LivingThing("Goblin", 30);
    let LivingThing3 = new LivingThing("Ogre", 80);

    console.log(LivingThing1.name, LivingThing1.health);
    console.log(LivingThing2.name, LivingThing2.health);
    console.log(LivingThing3.name, LivingThing3.health);



    // //The code below should work when you are done
    console.log("Monsters!");
    //
    // //for...of loop supported in ES6
    // //not compatable before IE edge
    // //@see http://www.benmvp.com/learning-es6-for-of-loop/
    // //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    console.log("ES6 for...in");
    let monsters = [LivingThing1, LivingThing2, LivingThing3];
     for (let monster of monsters) {
      console.log(monster.name + " : " + monster.health);
    }
    //
    // //just a spacer
    // console.log("===================");
    //
    // //for loop loop supported before ES6
    // //@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    // console.log("for loop for support before ES6");
    // for (let i=0; i < monsters.length; i++) {
    //     console.log(monsters[i].name + ": " + monsters[i].health);
    // }

})();
