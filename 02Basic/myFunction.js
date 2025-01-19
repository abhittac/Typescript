function addTwo(num) {
    return num + 2;
}
addTwo(2);
// optional passing 
function checkUser(name, age, isUser) {
    if (isUser === void 0) { isUser = false; }
    return name + 'age of ' + age;
}
checkUser('shubha', 2);
