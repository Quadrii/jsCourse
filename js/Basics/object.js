let userInfo = {
    firstName: 'tolu',
    lastName:'ayeni',
    yearOfBirth: 1988,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDiversLicence: false,
    calcAge: function (){
        this.age = 2037 - this.yearOfBirth;
        return this.age;
    },
    summary: function (){
        this.bio = `${this.firstName} is a ${this.age} years old ${this.job} and he has ${this.hasDiversLicence ? 'a' : 'no'} drivers license`
        return this.bio
    }
}
userInfo.calcAge()
userInfo.summary()

let toluInfo = `${userInfo.firstName} has ${userInfo.friends.length} friends, and his best friend is called ${userInfo.friends[0]}`

console.log(toluInfo)

let toluAge = userInfo.age
let toluBio = userInfo.bio
console.log(toluBio, toluAge)


