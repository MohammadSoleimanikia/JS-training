// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(dairy)
{
    for (item of dairy)
        {console.log(item)}
}
logDairy(dairy);
// Task 2
const animal = {

canJump: true

};
const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
function birdCan(bird)
{
    for (key of Object.keys(bird))
    {
        console.log(key + ":" + bird[key]);
    }
}
birdCan(bird);
// Task 3
function animalCan(bird)
{
    for(key in bird)
    {
        console.log(key+":"+bird[key]);
    }
}
animalCan(bird);