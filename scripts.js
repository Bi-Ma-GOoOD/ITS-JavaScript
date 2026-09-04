class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (username.length < 3) {
        throw new ValidationError("Username too short");
    }
    console.log("User registered: " + username);
}

try {
    registerUser("ab");
} catch (err) {
    if (err instanceof ValidationError) {
        console.error("Validation failed: " + err.message);
    } else {
        console.error("Unknown error: " + err.message);
    }
}