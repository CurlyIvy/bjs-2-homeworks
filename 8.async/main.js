let alarmClock = new AlarmClock();      
let forrmat = DateForrmatHelper.toString(); 
let func = multyAction;
alarmClock.addClock(forrmat, func, getRandomInt(1000));
alarmClock.addClock(forrmat, test, getRandomInt(1000));
//alarmClock.addClock(forrmat, () => (console.log(this)), getRandomInt(1000));
alarmClock.start();


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function singleAction() {
    console.log(singleAction.name);
    console.log('all alarms befor:');
    this.printAlarms();
    this.clearAlarms();
    console.log('all alarms after:');
    this.printAlarms();
}

function multyAction() {
    console.log(multyAction.name);
    console.log('all alarms:');
    this.printAlarms();   
}

function test() {
    console.log(test.name);  
}