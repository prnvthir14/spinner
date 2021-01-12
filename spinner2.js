//need to refactor spinner 1

//create array of all characters 

//loop through array and display each char after 200ms delay



let spinnerCharecters = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|\   ','\r/\   ','\r-\   ','\r\\   ', '\r|\   '];

let i = 1;

for (let char of spinnerCharecters ){

  setTimeout (()=>{

    process.stdout.write(char)

  }, i*100);

  i += 2;


}