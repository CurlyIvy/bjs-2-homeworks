let firstGradebook = new Gradebook(); 
firstGradebook.addSubject("foo");
firstGradebook.addSubject("bar");
firstGradebook.addSubject("bar");
firstGradebook.removeSubject("test");
firstGradebook.removeSubject("foo");
firstGradebook.removeSubject("foobar");
firstGradebook.addMarkToSubject("bar", 4);
firstGradebook.addMarksToSubject("bar", 5, 4, 3, 101, "foobar", true);
firstGradebook.addMarkToSubject("test", 4);

let secondGradebook = new Gradebook(); 
secondGradebook.addSubject("algebra");
secondGradebook.addMarkToSubject("algebra", 5);
secondGradebook.addMarkToSubject("algebra", 5);
secondGradebook.addSubject("geometry");
secondGradebook.addMarkToSubject("geometry", 5);
secondGradebook.addMarkToSubject("geometry", 4);
secondGradebook.addMarkToSubject("geometry", 6);
secondGradebook.getAverageBySubject("geometry"); 
secondGradebook.getAverageBySubject("biology"); 
secondGradebook.getAverage(); 

let subject = new Subject("test");
subject.addMark(-1);
subject.addMark(3);
subject.addMark(1);
subject.addMark("test");
subject.addMark(4);
subject.addMark(new Mark(2));
subject.addMark(new Mark(100));
subject.addMarks(2, 10, "test", new Mark(4), new Mark("test"), false, new Subject("test"));
subject.removeMark(-100);
subject.removeMark(5);
subject.removeMark(3);
subject.removeMarks((item, marks) => !marks.includes(item), 2);
subject.removeMarks(function(item, marks) {
    let position = 0;
    let isExist = false;
    while(position < marks.length) {
        if(marks[position] === item) {
            isExist = true;
            break;
        }
        position += 1;
    }
    if(isExist) {
        marks.splice(position, 1);
    }
    return !isExist;
}, 4, 1);