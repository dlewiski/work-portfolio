# Personal Portfolio

#### Personal portfolio website that allows me to add projects and blog posts. 04/06/2018

#### By **Anna Marie Cooper**

## Description

This web application will be used to showcase projects I have take part in, and feature a blog that documents the projects (coding and otherwise) that are interesting to me.

#### Behavior
1. Allows user(me) to post projects to my portfolio page from the admin page.
2. Allows user(me) to create blog posts - allowing me to share more about my interests.
3. Displays a list of blog posts on the blog page.
4. Displays a list of projects on the project page.
5. Allows users to login and logout, their info is saved to firebase.

#### Future Behavior
6. Displays a list of blog posts that can be filtered by topic.
7. I would like to add admin authentication so only I can upload projects and blog posts.
8. I would like to add the ability to upload photos to show off in my blog post and projects.
9. I would like to allow the ability to leave comments on blog posts. 

## Setup/Installation Requirements

* Open terminal
* Move to desired folder
* Type  _`$ git clone https://github.com/rogueminx/work-portfolio.git`_
* Type _`$ cd work-portfolio`_ to move to directory.
* You will need to have your OWN firebase key to use this as your own. Go to 'https://console.firebase.google.com/u/0/' and create an account if necessary.
* Click on the big '+' to add a project, and give that project a name.
* Once project is created, click the large </> button to "add Firebase to a web app" A popup will come up with the following information:

    _apiKey: "xxxxxxxxx",
    authDomain: "xxxxxxxxx",
    databaseURL: "xxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxx",
    messagingSenderId: "xxxxxxxxx"_

* Type  _`$ touch src/app/api-keys.ts`_ for storing your own API Key
* Open the .api-key file and type  _`export var masterFirebaseConfig = {}`_ then type your own API key info from Firebase within the curly brackets at the end. Save and close.
* Move back to terminal, set up appropriate nodes by typing: _`$ npm install`_
* Type _`$ ng build`_
* To view the website, type : _`$ ng start`_ and navigate to `http://localhost:4200/`

## Known Bugs

None

## Support and contact details

Please contact me through github with questions.

## Technologies Used

* HTML
* CSS
* Javascript
* Webpack
* Angular
* Typescript
* Firebase

### License

Copyright (c) 2018  **Anna Marie Cooper**
