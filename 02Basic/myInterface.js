var shubham = {
    id: 'sdsdsd',
    name: 'hs',
    getSalary: function () {
        return 10;
    },
    getPosition: function (username, income) {
        if (username === void 0) { username = 'shubham'; }
        if (income === void 0) { income = 2000; }
        return "".concat(username, " earn ").concat(income);
    },
};
console.log(shubham.getPosition('shubhdddddam',200000));
