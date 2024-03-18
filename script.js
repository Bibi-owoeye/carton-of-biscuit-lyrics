for (carton= 99; carton>=1; carton--){
    document.write(`<p class= text-center >${carton} cartons of biscuit,${carton} cartons of biscuit <br> Take one down and pass it around,<br>${carton-1} cartons of biscuit on th wall <br></p>`);
    console.log(carton);
    if (carton-1 == 0){
        document.write(" <p class= text-center> There is no more carton of biscuit </p>")
    }
}