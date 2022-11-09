// M1
const Rps = (p1 : string, p2 : string) : string => {
    if(p1 == "scissors" && p2 == "paper" ||
      p1 == "rock" && p2 == "scissors" || p1 == "paper" && p2 == "rock")
      return "Player 1 won!"
    
      else if(p1 == "scissors" && p2 == "rock" || p1 == "rock" && p2 == "paper" ||
             p1 == "paper" && p2 == "scissors" )
      return "Player 2 won!"
    else return "Draw!"
  };


  //M2
  const Rps1 = (p1 : string,p2 : string) : string => {
    return p1 == "scissors" && p2 == "paper" || 
    p1 == "rock" && p2 == "scissors" || 
    p1 == "paper" && p2 == "rock" ? "Player 1 won!" : p1 == "scissors" && p2 == "rock" || 
    p1 == "rock" && p2 == "paper" ||
     p1 == "paper" && p2 == "scissors" ? "Player 2 won!" : "Draw!"
  }