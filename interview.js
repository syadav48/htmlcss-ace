function maxDiff(arr){
    const sorted =  arr.sort((a, b) => a - b)
    const a = Math.min(...sorted)
    const b = Math.max(...sorted)
    return b - a
}
console.log(maxDiff([1, 2, 10, 19, 50, 110]))


function flatten(arr){
    return arr.flat(Infinity)
}
console.log(flatten([1,2,[3,3,3],4,4,[5,5,5,5,5,[6,7]]]));

function debounce(fn, delay){
    let context = this
    clearTimeout()
    setTimeout(() => {
        fn.apply(context)
    },     
    delay)
}
4


const optimizeDebounce = useDebounce(flatten, 1000)
console.log(optimizeDebounce);

