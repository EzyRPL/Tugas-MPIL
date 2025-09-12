// object literal
var person = {
    firstName: "Ezy",
    lastName: "M Ikbal",
    showName: function() {
        console.log(`Nama: ${this.firstName} ${this.lastName}`);
    }
};

// akses properti
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);

// akses method
person.showName();
