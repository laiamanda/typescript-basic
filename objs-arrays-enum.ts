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

enum Role {ADMIN = 5, READ_ONLY=100, AUTHOR};

const person = {
    name: 'Amanda',
    age: 22,
    hobbies: ['Golf', 'Baking'],
    role: Role.ADMIN
};

let favoriteActivities: string[]; //any[] or string[] or number[]
favoriteActivities = ['Swimming'];

console.log(person);
console.log(person.name);

for ( const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR){
    console.log('is an author');
}