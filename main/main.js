module.exports=function main(){
   let first_words=firstWords();
   let seconde_words=secondeWords();
  let complete_words= completeWords(first_words,seconde_words);
  console.log(complete_words.trim());
}
function firstWords(){
   let first_words='';
   let i=99;
   for(i=99;i>=3;i--){
       let str=`    ${i} bottles of beer on the wall, ${i} bottles of beer.
    Take one down and pass it around, ${i-1} bottles of beer on the wall.`;
      first_words=first_words+str+"\n";
   }
   return first_words;
}

function secondeWords(){
    let seconde_words=`    2 bottles of beer on the wall, 2 bottles of beer.
    Take one down and pass it around, 1 bottle of beer on the wall.
    1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.
    No more bottles of beer on the wall, no more bottles of beer.
    Go to the store and buy some more, 99 bottles of beer on the wall.`;
    return seconde_words;
}

function completeWords(first_words,seconde_words){
    let complete_words;
    complete_words=first_words+seconde_words;
    return complete_words;
}
