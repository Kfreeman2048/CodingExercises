function primeCheck(a,b) { 
    let x = b;
    while(x >= a) {
      let isPrime = true; 
      let div = 2;
      while(div < x/2 && isPrime !== false){
        if(x % (div) === 0){
          isPrime = false;
        }
        div++;
      }
      if(isPrime === true){
        console.log(x);
      }
      x--;
    }
  }