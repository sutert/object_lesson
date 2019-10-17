//gives us the abiity to create new teams + the main info, 
//what shoould happen first
//this is the prototype
function Team(name) {
    this.name = name;
    this.score = 0;
    this.shots = 0;
}

//add method to the object through the prototype + you can add things to the prototype like the methods and helps 1 thing from affecting something else or missing  brackets, 
//i can change the shoot function and not scre up the main information by creating a bit size piece of an object
Team.prototype.shoot = function() {
    this.shots++
    if (Math.random() > .5) {
        this.score++
    }
}

Team.protptype.getScore = function(){
    return this.score;
    }

//creates new team fromm the constructor function
let team = new Team("panthers")

//displays the new team i created
console.log(team.shoot(), team.shots)

// another new team
let teamtwo = new Team("colts")

//display new team
console.log(teamtwo)

/*   the individual info  below, above this is the short cut to create the constructor function (aka template)


let team = {
    name:"Panters",
    score: 0,
    shots: 0,
    shoot:function(){
        this.shots++
        if(Math.random() >.5){
            this.score++
        }
    }
};

let teamtwo = {
    name:"Colts",
    score: 0,
    shots: 0,
    shoot:function(){
        this.shots++
        if(Math.random() >.5){
            this.score++
        }
    }
};

console.log(team, "before shooting")
team.shoot()
team.shoot()
console.log(team, "after shooting")

console.log(teamtwo, "before shooting")
teamtwo.shoot()
teamtwo.shoot()
console.log(teamtwo, "after shooting")

console.log(teamtwo.shots, "shots taken for t2")
*/