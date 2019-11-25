
Array.prototype.toKey = function (keyname) {
    var newArray = [];
    this.forEach(element => {
        newArray.push(element[keyname]);
    });
    return newArray;
}

Array.prototype.sortByKey = function (keyname) {
    return this.sort((a, b) => {
        if (a[keyname] === b[keyname]) return 0;
        else if (a[keyname] < b[keyname]) return -1;
        else return 1;
    });
}

// ["a", "b", "c", "d"]
Array.prototype.sortSubkeyTree = function (keynames) {
    return this.sort((a, b) => {
        var suba = a;
        var subb = b;
        for (var i = 0; i < keynames.length; i++) {
            suba = suba[keynames[i]];
            subb = subb[keynames[i]];
        }
        if (suba === subb) return 0;
        else if (suba < subb) return -1; 
        else return 1;
    });
}

var myarray = [];
for (let index = 0; index < 12; index++) {
    myarray.push({
        id: index,
        foom: "lemondrops*dewberries".substring(index),
        a: {b: {c: 12 - index}}
    });
}

console.log(JSON.stringify(myarray.sortSubkeyTree(["a", "b", "c"]), null, 2));

// console.log(JSON.stringify(myarray, null, 2));
// console.log("\n\n nice, now what? \n\n");
// console.log(JSON.stringify(myarray.toKey("foom"), null, 2));

// console.log("-----------------------------");

// console.log(JSON.stringify(myarray, null, 2));
// console.log("\n\n sorted \n\n");
// console.log(JSON.stringify(myarray.sortByKey("foom"), null, 2));

// console.log("-----------------------------");

// console.log(JSON.stringify(myarray, null, 2));
// console.log("\n\n both \n\n");
// console.log(JSON.stringify(myarray.sortByKey("foom").toKey("foom"), null, 2));
