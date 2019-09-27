// let message = [
//     ['I', 'B', 'C', 'A', 'K', 'E', 'A', 'A', 'B', 'C'],
//     ['D', 'R', 'F', 'C', 'A', 'E', 'A', 'A', 'B', 'C'],
//     ['G', 'H', 'O', 'E', 'L', 'A', 'D', 'A', 'B', 'C'],
//     ['D', 'R', 'F', 'C', 'A', 'E', 'A', 'A', 'B', 'C'],
//   ];

  let message = [
    ['I', 'B', 'C', 'A', 'K', 'E', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
  ];

let decoder = (function(){
    function goDown(array, decodedArray){
        if (!decodedArray){
            decodedArray = [];
            index = 0;
        } else {
            index = 1;
        }
        let decodeIndex = decodedArray.length;
        for (let i=index; i<array.length; i++){
            decodedArray.push(array[i][decodeIndex]);
            decodeIndex++;
        }
        if (decodedArray.length !== array[0].length){
            return goUp(array, decodedArray);
        } else {
            return decodedArray;
        }

    }

    function goUp(array, decodedArray){
        
        //let index = array.length-2;
        let decodeIndex = decodedArray.length;
        for (let i = array.length-2; i>= 0; i--){
            decodedArray.push(array[i][decodeIndex])
            decodeIndex++;
        }

        if (decodedArray.length !== array[0].length){
            return goDown(array, decodedArray);
        } else {
            return decodedArray;
        }
    }


    function decode(array){
        return goDown(array);
    }

    function decode2(array){
        let messageLength = array[0].length;
        let decodeIndex = 0;
        let decodeArray = [];
        let goingDown = true;
        let arrayIndex = 0;

        let iteration = Math.floor((array[0].length-1) / (array.length-1));
        // even iteration = going down
        // odd iteration = going up


        for (let i = 0; i<iteration ; i++){

            let isEven = (i % 2 === 0);
            if (isEven){
                // going down
                for(let j=0; j<array.length && decodeIndex<messageLength; j++){
                    decodeArray.push(array[j][decodeIndex]);
                    decodeIndex++;
                }
            } else {
                // going up
                for(let j=array.length-2; j>0 && decodeIndex<messageLength; j--){
                    decodeArray.push(array[j][decodeIndex]);
                    decodeIndex++;
                }
            }
           

        }

        // for (let i=0; i<messageLength; i++){
            
        //     decodeArray.push(array[arrayIndex][decodeIndex]);

        //     // if (i >= array.length-1 && arrayIndex>0){
        //     //     arrayIndex--;
        //     //     goingDown = false;
        //     // } else if (i <= array.length-1 || !goingDown){
        //     //     arrayIndex++;
        //     //     goingDown = true;
        //     // }

            
        //     let remainder = i % (array.length-1);
        //     if (arrayIndex === 0){
        //         goingDown = !goingDown;
        //     }
            
        //     if (arrayIndex === 0 && !goingDown){
        //         arrayIndex = array.length-1;
        //     }


        //     // if (i< array.length){
        //     //     arrayIndex = i;
        //     // } else {
        //     //     arrayIndex = i % (array.length-1);
        //     //     if (arrayIndex === 0){
        //     //         goingDown = !goingDown;
        //     //     }
                
        //     //     if (arrayIndex === 0 && !goingDown){
        //     //         arrayIndex = array.length-1;
        //     //     }
        //     // }
             
            
        //     decodeIndex++
        // }
        return decodeArray;

    }

    return {
        decode : decode,
        decode2: decode2
    }
})();

//console.log('decode', decoder.decode(message));
console.log('decode2', decoder.decode2(message));