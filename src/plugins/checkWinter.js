const checkWinter = function (){
    let date = new Date();
    let currentMonth = date.getMonth()
    let isWinter = false
    
    if(currentMonth == 11 || currentMonth == 0 || currentMonth==1){
      isWinter = true
    }

    return isWinter
}

export default checkWinter