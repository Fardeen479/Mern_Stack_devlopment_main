var fruitsname = prompt("Enter your fruits nane")
if (fruitname == "Apple"){
    console.log("Apple field")
    document.write("Apple field")
}
else if(fruitname == "orange"){
    alert("orange field")
    document.write("orange field")
}
else{
    console.log("wrong entry")
}


var abc = prompt("Enter fruit name")
switch (abc){
    case "apple":
        console.log("its apple filed")
        document.write("its apple filed")
        break;
    case "orange":
        console.log("its orange filed")
        document.write("its orange filed")
        break;
    default:
        console.log("wrong entry")
        document.write("wrong entry")
}