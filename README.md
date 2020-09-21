# FiHR (Beginnings of a New EHR Software)

FiHR is a React application that is currently just the beginnings of a new EHR software. Its current target audience is single-provider doctor offices, and the plan is to scale up to multiple-provider practices, hospitals, and eventually integrated health systems.

## Important Links

- [Deployed Client](https://fionabeatricewong.github.io/fihr-client)
- [Client Repo](https://github.com/fionabeatricewong/fihr-client)
- [Deployed API](https://immense-ocean-38958.herokuapp.com/)
- [API Repo](https://github.com/fionabeatricewong/fihr-api)

## Set Up & Installation
1. Fork and clone this repository.
2. Run ```npm install```, ```npm install moment --save```, and ```npm install mdbreact```.
3. Checkout to a new branch.
4. Run the development server with ```npm start```.

## Planning Story

The idea for this application is the reason why I decided to make the move from healthcare to software engineering. During my undergraduate studies and experiences, I worked with several Electronic Medical Record (EMR) and Electronic Health Record (EHR) programs and heard the grievances of healthcare providers regarding these programs. These sentences often started with "I wish *insert suggestion for improvement*" and ended with "Oh well. Nothing I can do about it," so I decided to change careers, make this a passion project, and do something about it. Hence, the name of the application: FiHR (because Fi's EHR? My nickname is Fi? Get it?) except I thought this would be something I would start and pursue much later.
I knew creating a fully functional, user-friendly EHR program would take more than the alloted 4-day project time (and probably a whole team of developers), so I decided to take the capstone project as an opportunity to get CRUD actions done and get my gears turning on what healthcare providers need in an EHR. Originally, I had planned to use Django for the backend, but did not feel comfortable just yet and decided to solidify React material from the previous unit.
When building the backend, I had to include the most essential pieces of information for patient identification. I went with full name, date of birth, gender and contact information, but would like to add more, like insurance information, allergies, and primary care physician, in future iterations. For the frontend, I tried to keep user experience in mind including the number of clicks to get to a destination, convenience, and feature locations. When running into errors or bugs, I approached them methodically by trying to find the source rather than blindly changing and unchanging pieces of code.


### User Stories

- As a user, I want to sign up and maintain an account with an e-mail and password.
- As a user, I want to add new patients to the database.
- As a user, I want to see all patients in the database.
- As a user, I want to view an individual patient.
- As a user, I want to update and edit patient information.
- As a user, I want to remove (archive) a patient who is no longer under my care.

### Technologies Used

- React.js
- Javascript
- HTML/CSS
- Sass
- Bootstrap
- Material Design for Bootstrap (MDB React)
- Moment.js

### Unsolved Problems

In future iterations, I'd like to ...

- add another resource so the user can document visits for each patient.
- have other users who see the same patients be able to view and add shared documentation.
- add templates for various specialties and specific visit types.
- look into using Terra UI for the frontend.
- switch the backend framework from Express to Django or Opal.

## Images

#### Wireframe:
![FiHR Wireframe](https://i.imgur.com/ZiF6SHj.png)

#### App Screenshot:
![App Screenshot](https://i.imgur.com/MTlrzfv.png)
