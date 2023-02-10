function writeCards(name, event) {
    let messages = []
    for (let n = 0; n < name.length; n++) {
      messages.push("Thank you, " + name[n] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

  function countDown(){
    let countDown = 10
    while (countDown >= 0){
        console.log(countDown--);
    }
  }