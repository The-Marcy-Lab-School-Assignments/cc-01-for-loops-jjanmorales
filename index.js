//1
function countToFifty(){
  for(let i = 1; i < 51; i++ ){
      console.log(i)
  }
  
}

//2
function countFromOne(num){
    
  for(let i = 1; i < num; i++ ){
      console.log(i)
  }
}

//3
function threeAndFiveInFifty(){

    for(let i =1; i < 51; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i)
        }
    }
}

//4
function threeAndFive(num){
   for(let i =1; i < num; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i)}
}
}

countToFifty();
countFromOne(9);
threeAndFiveInFifty();
threeAndFive(19);
