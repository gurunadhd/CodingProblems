// Count Unique Values in sorted array

// function CountUniqueValues(arr){
//     var arr1={};
//     for(let a of arr){
//         if(arr1[a]>0)
//             continue
//         else{
//             arr1[a]=1
//         }
            
//     }
//     return Object.keys(arr1).length;
// }

// function CountUniqueValues(arr){
//     let i=0;
//     let j=1;
//     let unique = 0;
//     while(j<=arr.length-1){
//         if(arr[i]!=arr[j])
//             unique++;

//         i++;
//         j++;
//     }

//     return unique+1;
// }

function CountUniqueValues(arr){
    let i=0,j=1;
    while(j<=arr.length){
        if(arr[i]===arr[j])
            j++;
        else{
            i++
            arr[i]=arr[j]
            j++
        }
    }

    return i
}

console.log(CountUniqueValues([-1,-1,3,4,6,6,6,6,6,8,8,9]))