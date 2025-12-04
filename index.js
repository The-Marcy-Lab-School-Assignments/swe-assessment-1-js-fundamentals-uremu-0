
const platano = "platano"; // reading lobal scope

if (platano) {
    //new scope, reading block scope
    const platano = "mangu"
    console.log(platano);
}


