'use strict';
var user1 = {
    id: 1,
    name: {
        first: "Jon",
        last: "Bond"
    },
    dateOfBirth: 1118028392,
    location: {
        street: "5525 mill road",
        city: "city of london",
        state: "county armagh",
        zip: "C3I 5FH"
    },
    programmingLanguages: ["PHP", "Java", "HTML", "CSS"]
};

var user2 = {
    id: 2,
    name: {
        first: "Tom",
        last: "Murray"
    },
    dateOfBirth: 504825206,
    location: {
        street: "3157 mill lane",
        city: "peterborough",
        state: "county londonderry",
        zip: "EC5Q 5AE"
    },
    programmingLanguages: ["Java", "HTML", "CSS"]
};

var user3 = {
    id: 3,
    name: {
        first: "Noah",
        last: "Garrett"
    },
    dateOfBirth: 824124366,
    location: {
        street: "1805 london road",
        city: "salisbury",
        state: "cambridgeshire",
        zip: "CS8 6LX"
    },
    programmingLanguages: ["HTML", "CSS", "Python", "Ruby"]
};

function isAddressValid(user){
    var streetPattern = /[0-9]{4}\s[a-z]+\s[a-z]+/;
    var zipPattern = /[0-9A-Z]+\s[0-9A-Z]{3}/;

    return streetPattern.test(user.location.street) && user.location.zip.match(zipPattern) != null;
}

var bidderList = {
    add: function(user){
        if(!(user.id in bidderList) && isAddressValid(user)){
            bidderList[user.id] = user;
        }
    }
};

bidderList.add(user1);
bidderList.add(user2);
bidderList.add(user3);

console.log(bidderList);

