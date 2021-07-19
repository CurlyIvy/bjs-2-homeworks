const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3); 

const sendSignalFirst = () => console.log('Сигнал послан'); 
const upgradedSendSignalFirst = debounceDecoratorNew(sendSignalFirst,2000);
setTimeout(upgradedSendSignalFirst); 
setTimeout(upgradedSendSignalFirst,300); 
setTimeout(upgradedSendSignalFirst,900); 
setTimeout(upgradedSendSignalFirst,1200);
setTimeout(upgradedSendSignalFirst,2300);
setTimeout(upgradedSendSignalFirst,4400);
setTimeout(upgradedSendSignalFirst,4500);

const sendSignalSecond = () => console.log('Сигнал послан'); 
const upgradedSendSignalSecond = debounceDecorator2(sendSignalSecond,2000);
setTimeout(upgradedSendSignalSecond); 
setTimeout(upgradedSendSignalSecond,300); 
setTimeout(upgradedSendSignalSecond,900); 
setTimeout(upgradedSendSignalSecond,1200);
setTimeout(upgradedSendSignalSecond,2300);
setTimeout(upgradedSendSignalSecond,4400);
setTimeout(upgradedSendSignalSecond,4500);

