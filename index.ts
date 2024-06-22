#! /usr/bin/env node
import inquirer from "inquirer"
//games variables........
let enemies=["Skeleton","Zombie","Warrior","Assassin"]
let maximumEnemiesHealth=75
 let enemiesAttacktoDamage=25
 //player variables......
 let heroHealth=100
 let attackTodamageenemy=50
 let numHealthpotin=3
 let healthpotinHealamount=30
 let healpotionDropchance=50
 //while loop condition
 let gameRunning=true
 console.log("Welcome to Dadzone")
 Game:
 while(gameRunning){
    let enemyHealth=Math.floor(Math.random()*maximumEnemiesHealth+1)
    let enemyIndex=Math.floor(Math.random()*enemies.length)
    let enemy=enemies[enemyIndex]
    console.log(`#${enemy} has appeared #\n`)
    while(enemyHealth>0){
        console.log(`your Health :${heroHealth}`);
        console.log(`${enemy} Health:${enemyHealth}`)
        let option =await inquirer.prompt([{
            type:"list",
            name:"ans",
            message:"what would you like to do?",
            choices:["1.Attack","2.Take health potion","3.Run"]
           
        }])
        if(option.ans==="1.Attack"){
                let damagetoEnemy=Math.floor(Math.random()*attackTodamageenemy+1)
                let damagetoHero=Math.floor(Math.random()*enemiesAttacktoDamage+1)
                enemyHealth-=damagetoEnemy
                heroHealth-=damagetoHero
                console.log(`you strick the ${enemy} for ${damagetoEnemy}`)
                console.log(`${enemy} strick you for ${damagetoHero} damage.`)
        if(heroHealth<1){
            console.log("you have taken to much damage. you are too weak to continue")
            break;
        }
        }
        else if(option.ans==="2.Take health potion"){
            if(numHealthpotin>0){
            heroHealth+=healthpotinHealamount
            healthpotinHealamount--
            console.log(`your health potion for ${healthpotinHealamount}`)
            console.log(`you now have${heroHealth} health`)
            console.log(`you have health option${numHealthpotin}left`)
            }else{
                console.log(`you have no health option left.deaft enemy get health option`)
            }
        }
else if(option.ans==="3.Run"){
    console.log(`you run away from ${enemy}`);
    continue Game;
}
    }
if(heroHealth<1){
    console.log(`you are out from battle. you are too weak.`)
    break
}
console.log(`${enemy} was defeated`)
console.log(`you have ${heroHealth} health`)
let randomnumber=Math.floor(Math.random()*100+1)
if(randomnumber<healpotionDropchance){
    numHealthpotin++
    console.groupCollapsed(`enemy give you health potion`)
    console.log(`your health is ${heroHealth}`)
    console.log(`your health potion ${numHealthpotin}`)

}
let useroption= await inquirer.prompt([{
    type:"list",
    name:"ans",
    message:"what would you like to do now",
    choices:["1.continue","2.Exit"]

}])
if(useroption.ans==="1.continue"){
    console.log("you are continue your adventure")
}else {
    console.log("you successfuly Exit from Deadzone")
    break;
}
console.log("Thank you for playing \n")
 }