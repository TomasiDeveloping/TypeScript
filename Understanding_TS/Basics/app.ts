let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Patrick';

// Unknow better then any 
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput; // ERROR


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('An error occurred!', 500);