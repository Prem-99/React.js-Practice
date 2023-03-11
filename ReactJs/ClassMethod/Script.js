//function //
class Person{
    constructor(name,age){
        //properties//
    this.name=name;
    this.age=age;
}
//Methods //
getName(){
    console.log(this.name)
}
}
const a = new Person("prem",12)
const b = new Person("kumar",21)
const person1 =new Person("bhargav")



console.log(a,b)
person1.getName()