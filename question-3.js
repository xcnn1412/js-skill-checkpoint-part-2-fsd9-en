// เริ่มเขียนโค้ดตรงนี้


async function getAndProcessUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch (url);
        const users = await response.json();

        console.log(users);
        // const logNames = users
        // .filter(user => user.name.length > 17)
        // .map( user => user.name);

        // console.log(logNames);
    }

    catch(error){
        console.error(`Error : ` , error);
    }
}


getAndProcessUsers();