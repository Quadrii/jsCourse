let dolphinsTeam = 96 + 108 + 89;
let kaolasTeam = 88 + 91 + 110;

let dolphinsTeamAvgScore = dolphinsTeam / 3
let kaolasTeamAvgScore = kaolasTeam / 3

if ((dolphinsTeamAvgScore > kaolasTeamAvgScore) && (dolphinsTeamAvgScore >= 100) ) {
    console.log(`dolphin's team is the winner with ${dolphinsTeamAvgScore} points`)
} 
else if((kaolasTeamAvgScore > dolphinsTeamAvgScore) && (kaolasTeamAvgScore >= 100)){
    console.log(`Kaolas team is the winner with ${kaolasTeamAvgScore} points`)
}else{
    console.log("No Winner")
}


