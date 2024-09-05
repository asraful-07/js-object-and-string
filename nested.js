const college ={
    name: 'vnc',
    class: [ '11', '12'],
    events: ['science fair', '16 th wine', '21 feb' ],
    unique: {
        color: 'blue',
        result: {
            gpa:5,
            merit: 'top'
        }
    }
}


console.log(college['name']);
college.unique.result.gpa = 4;
console.log(college.unique.result.gpa);
college.events[1] = '16 dec';
console.log(college.events [1]);
college.class[0] = '23';
console.log(college.class[0]);
delete college.class;
console.log(college);