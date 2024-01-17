# Backend

Following tests have been done manually and passed.

### Post

- Postlist of searched profile (seeing searched persons post)
- Test if logged in user can create post
- User cam't be logged out to create a post
- Logged in user can edit own post
- Logged in user can delete own post
- Logged in user can edit others post
- Logged in user can't delete others post
- User being logged out can't edit or delete others post
- User can't fetch/find a post using wrong id/title
- User can see the amount of posts that the user has posted
- User can search posts by title or author/username


### Comments

- Logged in user can create a comment
- Logged out users can’t create comments
- Logged in user can edit own comment
- Logged in user can delete own comment
- Logged in user can't edit others comment
- Logged in user can't delete others comment
- Logged out users can't edit or delete others comments
- User can see the amount of comments that the post has


### Likes

- Logged-in user can see the amount of likes on a post
- Logged in user can like a post
- Logged in user can unlike a post they have liked
- Logged in user can't like & unlike a post in some others name
- Logged-out user can see the amount of likes on a post
- Logged-out user can't like or unlike a post
- Logged-in users can see which posts & from whom they like
- User can see the amount of likes that the post has

### Followers

- Logged in users can see which profiles they follow
- User can see the amount of followers that the profile has
- User can see the amount of following that the user has

### Register

- Register a name in order to create a profile
- User can't register same name as someone else in order to create a profile


### Login/logout

- Logged in user can log out of their account when pressing log-out button
- Logged-out user can log in to their own account by writing correct username & password
- Logged-out user can't log in to their own account by writing incorrect username & password

<br>



# Frontend

Following tests have been done manually and passed.

### Navbar

- Press the login button leads user to login page
- Press the signup button leads user to signup page
- Press the logout button logs the user out
- Press the home button leads user to home page
- When logged in, the user will only see the logout button & not the sign up or sign button
- When logged in, the user will see additional buttons that logged-out users will not
- When pressing the "Feed" button, the user will be redirected to their "Feed" page
- When pressing the "Liked" button, the user will be redirected to their "Liked" page
- When pressing the "AddPost" button, the user will be redirected to their "AddPost" page
- When pressing the "Category" dropdown button, the user will be able to choose between 4 different options & be redirected to chosen option


### Sign up page

- Register a name in order to create a profile
- User can't register same name as someone else in order to create a profile
- Don’t write anything & press “Sign up” button gives warning alert
- Don’t write the passwords correctly & press “Sign up” button gives warning alert
- Click “If you already have an account: Sign in here” & get redirected to sign in page


### Login page

- Write your username or password correctly & press the “Sign in” button to log in
- Don’t write anything & press the “Sign in” button gives warning alert
- Don’t write the password correctly & press the “Sign in” button gives warning alert
- Write your username or password incorrectly & press the “Sign in” button gives warning alert
- Click “Don’t have an account? Sign up here” & get redirected to sign up page
- The user won’t get logged out after a few minutes after logging in when idle

### Create post page

- Logged in users can create their own posts
- Logged out users can't create posts
- Logged in users will get warning if not adding to title field or image

### Edit post page

- User/author can edit their post
- User/author will have all text & image that they have chosen from before & can decide how much they want to add, remove or change
- User can cancel their edit if they regret the decision & be directed to the main page


### Post detail page

- Logged in author of their post can delete/edit the post when clicking the delete/edit button
- Non logged in/out author of a post can't edit/delete others posts
- Other non author (logged in or not) won't see the edit or delete button of others posts

### Comments

- Logged in users can comment on posts
- Logged in users can edit &/or delete their own comments
- Logged out author of a comment can't edit/delete their own comments
- Logged out users can't comment on posts
- Logged in/out users can't edit &/or delete others comments


### Searchbar & Likes

- Users can search post titles, categories & profiles that made a post
- Logged in users that liked a post can search for that post or the author for the post in the Feed page
- Logged in users can’t search for posts in the like page if they haven’t liked any post

- Logged-out users can't like posts or comments & will get a hovering text alert when the user tries to like a post/comment
- Same profile post user will get a hovering text alert when the user tries to like their own post/comment
- Logged-in users will be able to like a post/comment
- Logged-in users will be able to unlike a post/comment that they have liked
- Logged-in users will only be able to like the same post/comment once


### Profile page

- Logged in owner of profile can edit their profile & add profile image & bio information
- Logged in owner of profile can edit their profile name
- Logged in owner of profile can't edit their profile name to be the same as another user
- Logged in owner of profile can edit their profile password
- Logged out owner of profile can't edit anything until they log in again
- Logged in user can't edit other users profile whatsoever

### Categories

- When clicking the category button on the navbar, the user will be able to choose which category posts they’d like to read


