const add = (a, b) => a + b
const generateGreeting = (name) => `Hello, ${name}.`

test('Should add two numbers', () => {
    const result = add(3, 4)

    // if (result !== 7) {
    //     throw new Error(`Added 4 and 3, expected result 7, actual result ${result}`)
    // }

    expect(result).toBe(7)
})

test('Should greet passed name', () => {
    const name = 'Bradley'
    const expected = 'Hello, Bradley.'
    expect(generateGreeting(name)).toMatch(expected)
})