(function(message){
    const superHero = "Batman";
    console.log(message, superHero);
})("Hello");

(function(message){
    const superHero = "Superman";
    console.log(message, superHero);
})("Hey");

// Vishwas wants you to know that these IIFE allow each function to have its 
// own private scope--and under the hood, node uses the same pattern.