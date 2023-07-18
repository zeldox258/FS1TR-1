
// Storing a simple string value
localStorage.setItem('username', 'john_doe');

// Storing an object as a JSON string
const userObject = { name: 'John Doe', age: 30, email: 'john@example.com' };
localStorage.setItem('user', JSON.stringify(userObject));

console.log(localStorage.length);



async function getItem(){
    let value = await localStorage.getItem('username');
    console.log(value)

    let value1 = await localStorage.getItem('user');
    console.log(value1)

    console.log(JSON.parse(value1));



    // Removing a specific item from localStorage
    localStorage.removeItem('username');
    console.log(localStorage.length);

    // Clearing all items from localStorage
    localStorage.clear();

    console.log(localStorage.length);

}


getItem();



