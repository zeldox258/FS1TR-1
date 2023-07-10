const loop = () => {
    console.log("HELLO");
    setTimeout(loop,0);
}; 
//loop();

/*
function guessNextYearRank(id){
    let lastFourYear = ranks[id];


}
*/
let ranks = {
    1: [10035, 12450, 13480, 15670],
    2: [9750, 10230, 10980, 11560],
    3: [20350, 21780, 18900, 20540]
  };
  

function guessNextYearRank(id,rankOfUser) {
    let lastFourYears = ranks[id]; // id'ye göre son dört yılın sıralamalarını al
    
    // calculate diffs
    let rankDifferences = [];
    for (let i = 1; i < lastFourYears.length; i++) {
      let difference = lastFourYears[i] - lastFourYears[i - 1];
      rankDifferences.push(difference);
    }
    //find average
    let averageDifference = rankDifferences.reduce((a, b) => a + b, 0) / rankDifferences.length;
  
    //Guess next year
    let nextYearRank = lastFourYears[lastFourYears.length - 1] + averageDifference;
    
    let result = {
      estimatedRank : Math.floor(nextYearRank),
      differenceBetweenUserRank : Math.abs(Math.floor(nextYearRank) - rankOfUser),
      canPlace: rankOfUser <= Math.floor(nextYearRank)
    }

    return result;
  }
  
  
  


  
  let universityId = 2;
  let nextYearRank = guessNextYearRank(universityId,10000);
  console.log(`Üniversite ${universityId}'nin bir sonraki yıl tahmini sıralaması: ${nextYearRank.estimatedRank}`);
  if(nextYearRank.canPlace){
    console.log(`Oranlara gore yerlesebilirsin ve ${nextYearRank.differenceBetweenUserRank} kisi kadar onde gozukyorsun `)
  }
  else{
    console.log(`Oranlara gore yerlesemeyebilirsin ve ${nextYearRank.differenceBetweenUserRank} kisi kadar geride gozukuyorsun `)

  }

  console.log(nextYearRank);