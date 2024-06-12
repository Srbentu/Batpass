export default  function generatePass(){
    let password:string = ''
    const passwordLength : number = 16
    const characters :string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+'
    const charactersLength :number = characters.length
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return password
}