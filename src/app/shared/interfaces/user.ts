export interface User {
    givenName: string
    surName: string
    email: string
    password: string
}
//To σχημα των δεδομενων που θα στειλω στο backend


export interface Credentials {
    email: string
    password: string
}

export interface LoggedInUser {
    fullname: string
    email: string
}
