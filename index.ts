type Food = string

let favouriteFood: Food = "pizza";

type Address = {
  street: string
  city: string
  country: string
}

type Person = {
  name: string
  age: number
  isStudent: boolean
  address?: Address
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
}

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Los Angeles",
    country: "USA"
  }
}

let people: Array<Person> = [person1, person2]



function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person1);


let ages: number[] = [100, 101]

let myName = "Bob";
const myName2: "Bob" = "Bob";

type UserRole = "guest" | "member" | "admin"

type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>

const users: User[] = [
  { id: 1, username: "Bob", role: "member" },
  { id: 2, username: "John", role: "admin" },
  { id: 3, username: "Joe", role: "contributor" },
  { id: 4, username: "charlie", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

updateUser(1, { username: "new_john-does-not-exist"});
updateUser(4, { role: "admin"});

function fetchUserDetails(username: string): User {
  const user = users.find(user => user.username === username);
  if (!user) {
    throw new Error(`User with username "${username}" not found.`);
  }
  return user
}

let nextUserId = 1;

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  }
  users.push(user);
  return user;
}

addNewUser({ username: "joe", role: "member" });
let value: any = 1
value = "hi";
value.toUpperCase();
value.map();

const gameScores = [14, 21, 23, 42, 59];
const favouriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42}, { name: "Bob", age: 77}];

function getLastItems<T>(array: T[]): T | undefined{
  return array[array.length - 1];
}

console.log(getLastItems(gameScores));
console.log(getLastItems(favouriteThings));
console.log(getLastItems(voters));

console.log("Version12");