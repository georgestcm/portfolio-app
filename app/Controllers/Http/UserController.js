'use strict'

class UserController {

  async store ({ request }) {
    const data = request.only(['name', 'email', 'message'])
    const user = await User.create(data)

    await Mail.send('emails.welcome', user.toJSON(), (message) => {
     message
       .to(user.email)
       .from('<from-email>')
       .subject('Welcome to yardstick')
   })
   return 'Registered successfully'
  }
}

module.exports = UserController
