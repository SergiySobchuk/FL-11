class Fighter{
    constructor(arr){
        this.name = arr.name;
        this.damage = arr.damage;
        this.hp = arr.hp;
        this.agility = arr.agility;
        this.losses = 0;
        this.win = 0;
        this.dead = false;
    }
    getName(){
        return this.name;
    }
    getDamage(){
        return this.damage;
    }
    getAgility(){
        return this.agility;
    }
    getHealth(){
        return this.hp;
    }
    logCombatHistory(){
        return console.log('name: '+ this.name + '  Wins: '+ this.win + '  Losses: '+ this.losses);
    }
    heal(plus){
        if(plus < myFighter.hp + myFighter2.hp){
            this.hp += plus;
            this.dead = false;
            return this.name + ' now have helth: ' + this.hp;
        }else{
            this.hp = myFighter.hp + myFighter2.hp;
            this.dead = false;
            return this.name + ' now have helth: ' + this.hp;
        }
    }
    attack(obj){
        let sto = 100;
        let rand = Math.floor(Math.random(1)*sto);
        if (rand >= obj.agility){
            console.log(this.name + ' make ' + this.damage + ' damage to ' + obj.name);
            if(!obj.dealDamage(this.damage)){
                obj.addLoss();
                this.addWin();
                return 'stopGame';
            }
        }else{
            console.log(this.name + ' attack missed');
        }
    }
    dealDamage(minus){
        if(this.hp - minus > 0 ){
            this.hp -= minus;
            return true;
        }else{
            this.hp = 0;
            return false;
        }
    }
    addWin(){
        this.win++;
    }
    addLoss(){
        this.losses++;
    }
}
function battle(f1, f2){
    if(!f1.dead && !f2.dead){
        while(f1.hp > 0 && f2.hp > 0){
            if(myFighter.attack(myFighter2) === 'stopGame'){
                myFighter2.dead = true;
                break;
            }
            if(myFighter2.attack(myFighter) === 'stopGame'){
                myFighter.dead = true;
                break;
            }
        }
    }else{
        if(f1.dead){
            console.log('John is dead an can`t fight');
        } else {
            console.log('Jim is dead an can`t fight');
        }
    }
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25}); 
const myFighter2 = new Fighter({name: 'Jim', damage: 10, hp: 120, agility: 40}); 
battle(myFighter, myFighter2);