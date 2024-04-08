const normalizeSignup = signupValue => {
    return {
    name: {
        first: signupValue.first,
        middle: signupValue.middle,
        last: signupValue.last,
    },
    PhoneNumber: signupValue.PhoneNumber,
    email: signupValue.email,
    password: signupValue.password,
     address: {
        country: signupValue.country,
        zip: +signupValue.zip,
        city: signupValue.city,
        street: signupValue.street,
        houseNumber: signupValue.houseNumber
    },
    isBusiness: signupValue.isBusiness || false,
}
};

export default  normalizeSignup;