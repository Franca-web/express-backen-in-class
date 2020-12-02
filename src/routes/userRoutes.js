const  {Router} = require('express')
const router = Router()

const { createUser,
     getUserDetails,
      updateUserDetails, 
      deleteUserDetail
    } = require('../controllers/userController')



    // the route for creating an account
    router.post('/api/user/new', createUser)

    // route for getting an account details
    router.get('/api/user/username', getUserDetails)

    // route for updating an account details
    router.put('/api/user/update', updateUserDetails)

    //route for deleting an account
    router.delete(' api/user/delete' , deleteUserDetail) 

    module.exports = router