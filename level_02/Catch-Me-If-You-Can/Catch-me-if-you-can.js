
// function sum(x, y){
// //check data types first and throw error
// try{
//     if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error('Not a number!!')
//     }
//     } catch(err){
//         console.log(err)
//     }
//     return x + y;
//     }
//     console.log(sum(5, 6))
//     console.log(sum('r', 2))

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
    if (username !== user.username || password !== user.password) {
        throw new Error('username and password do not match');
    }
}

try {
    login("sam", "123abc");
    console.log('login succesful');
} catch (err) {
    console.log(err.message)
}

try {
    login("john", "wrong_password");
    console.log("login succesful");
  } catch (err) {
    console.log(err.message);
  }
