'use strict'

const User = use('App/Models/User')

class AuthController {
    async register({ request }) {
        try {        
            const data = request.only(['username', 'email', 'password'])
            const user = await User.create(data)
            return user
        } catch (error) {
            return error
        }
    }

    async authenticate({ request, auth }) {
        try {    
            const { email, password } = request.all()  
            const token = await auth.attempt(email, password) // Tentando fazer a autenticação
            return token
        } catch (error) {
            return error
        }
    }
}

module.exports = AuthController
