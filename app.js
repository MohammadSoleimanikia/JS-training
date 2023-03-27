//add a class with constructor and add method
class animal{
    constructor(name){
        this.name=name;
    }

    canwalk()
    {console.log('can walk');}
}

//use inheritance and use super for inherit from parent.
class bird extends animal{
    constructor(name,type){
        super(name);
        this.type=type;
    }
 
    canWalk()
    {
        super.canwalk();
        console.log('Also can fly');
    }
}
var dog = new animal("dog");
var seagul=new bird("seagul");
seagul.canWalk();
console.log(seagul.name);