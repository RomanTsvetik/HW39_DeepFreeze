'use strict'

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

// console.log(user)
// user.data2 ={}
// console.log(user)

Object.freeze(user)

// delete user.data2

function deepFreeze(obj) {
    
    // getting array of properties of object
    let propertyNames = Object.getOwnPropertyNames(obj);

    // freezing the properties of object
    propertyNames.forEach(name => {
        let property = obj[name];

        //checking if type of property is object and if yes - calling freezing func
        if (typeof property === 'object' && property !== null) deepFreeze(property);
    });
    
    return Object.freeze(obj);    
}

deepFreeze(user)

// user.data.a = '2'
// // Trying to change the value of internal property but got TypeError:
// //cannot add property a1, object is not extensible

// user.b = 'cat' // //same error while trying to add a new property

// console.log (delete user.data) // //Cannot delete property 'data' of #<Object>