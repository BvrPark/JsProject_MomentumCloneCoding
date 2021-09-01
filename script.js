const calculator = {
    add: function(a, b){
        return a+b;
    },
    min: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    },
    div: function(a, b){
        return a/b;
    }
};

const plusResult = calculator.add(2, 3);

console.log(plusResult);
