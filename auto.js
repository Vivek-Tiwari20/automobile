
var oldmodel = {
    name:"audiRS",
    wheels:4,
    seats:5,
    type:"Diesel",
    companyname:"audi",
}

var newmodel = Object.create(oldmodel)

function Create(name,wheels,seats,type,companyname){

    this.name = name,
    this.wheels = wheels,
    this.seats = seats,
    this.type = type,
    this.companyname = companyname
}

var newmodel = new Create("BMW","4","4","Petrol","BMW");

console.log(oldmodel)
