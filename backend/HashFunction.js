function HashFunction(str){
    str = str.toLowerCase()
    var o = 0, sum = 0;
    for (var i = str.length - 1; i>=0; i--){
        var char = str.charCodeAt(i)
        sum += char *(10**o)
        o++;
    }
    return sum
}

export default HashFunction