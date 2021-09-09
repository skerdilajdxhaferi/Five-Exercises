
M = [[0, 1, 0, 0, 1],
	[0, 1, 1, 1, 0],
	[1, 1, 1, 1, 0],
	[1, 1, 1, 1, 0],
	[1, 1, 0, 1, 1],
	[0, 1, 0, 1, 0]]
    

function subMatrix(M) {


let row = M.length
let col = M[0].length


let i,j;

//Matrica S boshe
let S = new Array(row); 
for ( i = 0; i < row; i++) {
    S[i] = new Array(col); 
}

// Kolona 1
for(i = 0; i < row; i++){
   S[i][0] = M[i][0];

}

// Reshti 1
for(j = 0; j < col; j++){
   S[0][j] = M[0][j];
}


// elementet e tjer te matrices S
for(i = 1; i < row; i++){
   for(j = 1; j < col; j++){

     if (M[i][j] == 1){
        S[i][j] = 1 + Math.min(S[i][j-1], Math.min(S[i-1][j], S[i-1][j-1]));
     }  else {
        S[i][j] = 0;
     } 


    } 
} 

console.log(" \n");


console.log(" Matrica S eshte: \n ")
for(i = 0; i < row; i++){
    var array = [];
    for(j = 0; j < col; j++){
        array.push(S[i][j]);
    }
    console.log(`${array}`);
}


// Elementi me i madh dhe indekset e tij

let max_of_s = S[0][0], max_i = 0, max_j = 0;
for(i = 0; i < row; i++){
    for(j = 0; j < col; j++){
        
        if(max_of_s < S[i][j]){
            max_of_s = S[i][j];
            max_i = i; 
            max_j = j;
        }   
     }                 
}    

console.log(" \n");

console.log("Nenmatrica me dimensionet me te medha eshte: \n");

for(i = max_i; i > max_i - max_of_s; i--){
    var array = [];
    for(j = max_j; j > max_j - max_of_s; j--){
        
        array.push(M[i][j]);
       
    } 
    console.log(`${array}`);
} 

console.log(" \n");
console.log(" \n");

let sRange = array.length

console.log("Indexi fillestar i matrices katrore eshte: " );
var rreshti = max_i+1 - sRange;
var kolona = max_j+1 - sRange;

console.log ("(" + rreshti.toString() + "," + kolona.toString() + ")");
console.log(" \n");


}  

subMatrix(M)