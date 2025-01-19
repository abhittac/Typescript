return num + 2;
addTwo(2);
// optional passing 
function checkUser(name, age, isUser) {
    if (isUser === void 0) { isUser = false; }
    return name + 'age of ' + age;
}
checkUser('shubha', 2);
var hero = ['hero1', 'hero2'];
hero.map(function (hero) {
    return hero;
});
var returnVoid = function (value) {
    console.log('>', value);
};
var handleException = function (value) {
    console.log('>', value);
    throw value;
};
