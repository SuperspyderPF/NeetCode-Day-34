var timeRequiredToBuy = function(tickets, k) {
    let ans=0
    while(true){
           for(let i=0;i<tickets.length;i++){
               
            if(tickets[k]===0){
                       break
            }
               
        if(tickets[i]>0){
            ans+=1
            tickets[i]-=1
        }
    }
        if(tickets[k]===0){
            break
        }
    }
    return ans
 
};