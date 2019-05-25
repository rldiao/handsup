<!-- Prettier Ignored -->
# Info30005
Team name: DaWebBois
Web Info Tech  

## Submission 4
Kindly use these credentials to test as Donee and Donor.
* Donor account:
  * Username: donor1@test.com
  * Password: 123456
* Donee account:
  * Username: donee2@test.com
  * Password: 123456


Functionalities:

1. Users (Donors and Donees)
    * Files associated with all sub-functionalities below
      * backend\controllers\donee.controller.js
      * backend\controllers\user.controller.js
      * backend\models\user.model.js
      * backend\routes\donee.routes.js
      * backend\routes\user.routes.js
    * Common functionalities for both users (Donors and Donees)
        * Signup and login (**Refer to functionality 3 below for password authentication functionality)
          * URL
            * /login
            * /signup
          * Associated files
            * client\src\pages\login
            * client\src\pages\signup
        * Updating user account password and payment/bank details
          * Associated files
            * client\src\pages\userProfile
            * client\src\pages\userProfileSettings
    * Donor-specific functionalities
        * Removing and saving donee profiles to allow donors to 'follow' certain donees and make future donations easier
          * URL
            * /discover
            * /userProfile
          * Associated files
            * client\src\pages\discover
            * client\src\pages\userProfile
        * Searching for a specific registered donee in the 'Discover' page
          * URL
            * /discover
          * Associated files
            * client\src\pages\discover
        * Viewing all registered donees in the 'Discover' page
          * URL
            * /discover
          * Associated files
            * client\src\pags\discover
        * Viewing a specific donee's profile page
          * URL
            * /user/"doneename"
          * Associated files
            * client\src\pages\doneeProfile
        * Making a donation to a donee (currently unimplemented)
    * Donee-specific functionalities
        * Edting their location, their story/bio, and their goals
          * URL
            * /userProfile
          * Associated files
            * backend\controllers\donee.controller.js
            * backend\routes\donee.routes.js
            * backend\models\user.model.js
            * client\src\pages\userProfile
            * client\src\pages\userProfileSettings
        * Making posts (refer to functionality 2 below)

2. Making and editing posts (Donees)
    * Donation recipients (Donees) can make and edit posts, updating others on their current situation or give more background on their struggles. Removing posts is not working yet for deliverable 4.
    * URL
      * /
    * Associated files:
      * backend\controllers\donee.controller.js
      * backend\routes\donee.routes.js
      * backend\routes\posts.routes.js
      * client\src\components\doneeProfile\NewPost.js
      * client\src\components\doneeProfile\DoneePost.js
      * client\src\pages\home\HomePage.js

3. User Authentication (Donors and Donees)
    * Allow users to create accounts to login to our service. Password is stored securely with bcrypt (Encryption library) within our database. Passport and jwt is used to handle the sessions associated with logged in users.
    * Connected files:
        * component/auth/LoginForm.js
        * component/donor/DonorSignupForm.js
        * component/donee/DoneeSignupForm.js
        * user.controller.js
        * user.routes.js
        * userUpdate.controller.js
        * pages/login/LoginPage.js
        * pages/signup/SignUpPage.js


### Set up
For each package.lock in info30005 & backend & client  
`npm install`

### Run App Locally
In info30005 folder  
`npm run dev`

### File Structure 

    src
    ├── assets
    ├── components
    |   └── <component-subfolder>
    ├── page

### Resources used

* https://hptechblogs.com/using-json-web-token-react/
* https://www.robinwieruch.de/react-express-stripe-payment/?fbclid=IwAR3OsERVGgf2YJC8NKXhZuqD_TQbl2-mR2a6TAscYQYcfcvoN7fJH3Eiz9k