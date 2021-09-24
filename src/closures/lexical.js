const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);//si es ++count sera 1+1
    };                      // si es count++ sera 1 porque primero se imprime y 
    return displayCount;    //no se imprime, hasta la segunda iteracion se suma 
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();