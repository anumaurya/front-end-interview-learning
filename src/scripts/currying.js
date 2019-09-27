

function animalFetcher(input, ...functionParams){
    //let firstParam = functionParams[0];

    console.log('animalFetcher', functionParams);
    let params = input;
    let output = [];
    for (let i=0; i<functionParams.length; i++){
        const func = functionParams[i];
        params = func.call(this, params);
        output.push(params);
    }
    return output;
}

function one(input){
    return 'one ' + input;
}

function two(input){
    return 'two ' + input;
}

function three(input){
    return 'three ' + input;
}

console.log(animalFetcher('hello', one, two, three));