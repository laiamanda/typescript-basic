// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Amanda',
//     age: 22
// };
// const person = {
//     name: 'Amanda',
//     age: 22,
//     hobbies: ['Golf', 'Baking'],
//     role: [2, 'author'] // This is a tuple
// };
// person.role.push('admin');
// // person.role[1] = 10;
// // person.role = [0, 'admin', 'user'];
// let favoriteActivities: string[]; //any[] or string[] or number[]
// favoriteActivities = ['Swimming'];
// console.log(person);
// console.log(person.name);
// for ( const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
// }
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Amanda',
    age: 22,
    hobbies: ['Golf', 'Baking'],
    role: Role.ADMIN
};
var favoriteActivities; //any[] or string[] or number[]
favoriteActivities = ['Swimming'];
console.log(person);
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is an author');
}
