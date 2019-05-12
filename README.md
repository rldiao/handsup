<!-- Prettier Ignored -->
# Info30005
Team name: DaWebBois  
Web Info Tech  

<<<<<<< HEAD
### Submittable 4  
=======
## Submission 4
Functionalities:
1. Posts
    * Donation recipients (Donees) can make posts updating other on their situation or give more background
    to their struggles.
    * Connected files:
        * donee.controller.js
        * donee.routes.js
        * posts.routes.js
        * client\src\components\doneeProfile\NewPost.js
        * client\src\components\doneeProfile\DoneePost.js
        * client\src\page\HomePage.js

2. Save & Remove Donee profiles
    * Doners can save and remove Donees from the discover tab and profile page so that they can follow the lives of Donees they find compelling. 
    * Connected files:
        * user.routes.js
        * userUpdate.controller.js
        * user.controller.js
        * components/userProfile/DoneeCard.js
        * components/userProfile/SavedDonee.js
        * pages/discover/DiscoverPage.js

3. User Authentication
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
>>>>>>> 30ddae84fe5366716c116bca180978731a16a366


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
