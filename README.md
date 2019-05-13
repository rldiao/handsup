<!-- Prettier Ignored -->
# Info30005
Team name: DaWebBois  
Web Info Tech  

## Submission 4
Functionalities:

1. Users (Doners and Donees)
    * Common functionalities for both users
        * Signup and login
            * backend\controllers\donee.controller.js
            * backend\controllers\user.controller.js
            * backend\models\user.model.js
            * backend\routes\donee.routes.js
            * backend\routes\user.routes.jss
        * Updating account password and payment/bank details
    * Doner-specific functionalities
        * Removing and saving donee profiles to 'follow' certain donees
        * Searching for a specific registered donee
        * Viewing all registered donees in the 'Discover' page
        * Viewing a specific donee's profile
        * Making a donation to a donee (currently unimplemented)
    * Donee-specific functionalities
        * Edting location, their story/bio, and their goals
        * Making posts (refer to functionality 1 above)

2. Posts (Donees)
    * Donation recipients (Donees) can make posts updating others on their current situation or give more background
    on their struggles.
    * Connected files:
        * donee.controller.js
        * donee.routes.js
        * posts.routes.js
        * client\src\components\doneeProfile\NewPost.js
        * client\src\components\doneeProfile\DoneePost.js
        * client\src\page\HomePage.js

<!-- 2. Updating profile (Doners and Donees)
    * Users can update relevant details on their profile. Doners can change their account password and payment details. Donees can also change password, update bank account details, and in addition: change their location, their bio, and their life goals.
    * Connected files:
        * donee.controller.js
        * donee.routes.js
        * userUpdate.controller.js
        * client\src\components\doneeProfile\DoneeNavTab.js
        * client\src\components\doneeProfile\EditDoneeProfile.js
        * client\src\components\doneeProfile\DoneeAbout.js
        * client\src\pages\userProfile\UserProfilePage.js -->

<!-- 2. Save & Remove Donee profiles (Doners)
    * Doners can save and remove Donees from the discover tab and profile page so that they can follow the lives of Donees they find compelling, 
    and they can make donations to them more easily in the future. 
    * Connected files:
        * user.routes.js
        * userUpdate.controller.js
        * user.controller.js
        * components/userProfile/DoneeCard.js
        * components/userProfile/SavedDonee.js
        * pages/discover/DiscoverPage.js -->

3. User Authentication (Doners and Donees)
    * Allow users to create accounts to login to our service. Password is stored securely with bcrypt (Encryption library) within our database. Passport and jwt is used to handle the sessions associated with logged in users.
    * Connected files:
        * component/auth/LoginForm.js
        * component/doner/DonerSignupForm.js
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

https://hptechblogs.com/using-json-web-token-react/
