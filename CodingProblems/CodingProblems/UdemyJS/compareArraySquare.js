//check 2nd array has squares of numbers in 1st array
// make sure frequency of squares is equal to numbers frequency in 1st array

// function compareArraySqueare(arr1,arr2){
//     arr1.sort();
//     arr2.sort();
//     //for (var a of arr1){
//       //  if(arr2.includes(a*a))
//         //    continue;
//         //else
//           //  return false;  
//     //}

//     for(var i=0;i<arr1.length;i++){
//         if(arr2[i]==arr1[i]*arr1[i])
//             continue
//         else
//             return false
//     }
//     return true;
// }


// function compareArraySqueare(arr1,arr2){
//     if(arr1.length!=arr2.length)
//         return false;
//     for(var i=0;i<arr1.length;i++){

//         var index = arr2.indexOf(arr1[i]*arr1[i]);
//         if(index ===-1)
//             return false;
//         else
//             arr2.splice(index,1);
        
//     }

//     return true;
// }


function compareArraySqueare(arr1, arr2){
    var freq1={};
    var freq2={};

    for(var a of arr1){
        if(freq1[a]>0)
            freq1[a]++;
        else
            freq1[a]=1;

    }
    console.log(freq1)
    for(var a of arr2){
        if(freq2[a]>0)
            freq2[a]++;
        else
            freq2[a]=1;

    }
    console.log(freq2)
    for(var a of arr1){
        if(freq1[a]!==freq2[a*a])
            return false;
    }

    return true;
}


console.log(compareArraySqueare([1,2,1],[1,4,1]));