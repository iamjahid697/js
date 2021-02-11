function megaFriend(arr) {
    var longestWord = "";
    for(var i= 0; i< arr.length; i++){
        if(typeof arr[i] !== 'string'){
            return "Give only string values";
        }
    }
    for(var i= 0; i< arr.length; i++){
        if(longestWord.length < arr[i].length){
            longestWord = arr[i];
        }
    }
    return longestWord;
}
