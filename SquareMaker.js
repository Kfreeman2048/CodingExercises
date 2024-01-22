function squareMake(n) {
    let sqrt = Math.ceil(Math.sqrt(n));
    let x = 1; 
    let y = 0;
    let q = 0;
    let output = "";
    let zeroes = "";
    let stars = "";
    let digits = n.toString().length;
  
    while (q < digits) {
      stars = stars.concat("*");
      q++;
    }
    q = 0;
  
    while (y < sqrt) {
      while (x <= sqrt) {
        let z = x + (y*sqrt);
        if (z > n) {
          output = output.concat(stars + " ");
        } 
        else if (z.toString().length < digits){
          while (q < (digits - z.toString().length)) {
            zeroes = zeroes.concat(0);
            q++;
          }
          output = output.concat(zeroes+z.toString()+" ");
          q = 0;
          zeroes = "";
        }
        else{
          output = output.concat(z.toString()+" ");
        }
        x++;
      }
    console.log(output);
    output = "";
    x = 1;
    y++;
    }
  }