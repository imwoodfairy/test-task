const transformKeysToUpper = (object) => {

    if (object instanceof Array) {
        return object.map(transformKeysToUpper)
    } else if (object instanceof Object) {
        return Object.fromEntries(Object.entries(object).map(item => [item[0].toUpperCase(), transformKeysToUpper(item[1])]));
    } else {
        return object;
    }
}

const testUser = {
    name: 'Иван',
    married: true,
    age: 22,
    friends: ['Николай', 'Светлана'],
    children: [
        { name: 'Мила', age: 1 },
        { name: 'Пётр', age: 10 },
    ],
    company: {
        name: 'Рога и копыта'
    },
};

console.log(transformKeysToUpper(testUser));