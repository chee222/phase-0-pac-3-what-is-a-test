const name = "Joe";
const height = 74;
const console.log(message); = `${name} is ${height} inches tall`;

const {name, height,message} = require("../index.js");

/*
describe('what-is-a-test', () => {
    describe('Name', () => {
        it('returns "Susan", () => {
            expect (name).toEqual('Susan')
        })
    })

    describe('Height', () => {
        it('is less than 40', () => {
            expect (hight).toBeLessThan(40)
         })
    })

    describe('Massage', () => {
        it('gives the name and hight', () =>{
            expect(message).toInclude(name)
            expect(message).toInclude(hight)
            })
        })
    })
    