function primos (num){

    var primo = true
    var i=2

    while(i<num){
        if(num % i ==0){
        return false;
        }
        i++;
    }
    return primo;
}