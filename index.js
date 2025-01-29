function receivesAFunction(callbackfunction){
    callbackfunction()
}
function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return function (){console.log('I returned an anonumous function.')}
}