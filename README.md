
# A History Quiz Game - Javascript
Developer: Philip Jambrisak

Image

[View Live Website Here](https://jambrisak.github.io/My-JavaScript-Project/)

This is A History Game created as Portfolio project #2 (JavaScript Essentials) for Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/).
It is an interactive front-end quiz app where user can test their knowledge about History. The application is easy to use for the user,
it is responsive across a range of devices and incorporates best practices regarding design and accesibility.

The project purpose is a presentation of interactive data. The site should respond to the users actions allowing users to actively
engage with data, alter the way the site displays the information to achieve their preferred goals.

## Table of content
1. [Project](#project)
	- [Strategy/Scope](#strategy-scope)
	- [Site Owner Goals](#site-owner-goals)
    - [Site User Goals](#site-user-goals)
2. [User Experince(UX/UI)](#user-experience)
	- [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
	- [Structure](#structure)
3. [Technology](#technology)
    - [Languages used](#languages-used)
    - [Frameworks, libraries & software used](#frameworks-libraries-software-used)
4. [Testing](#testing)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Validation](#validation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
    - [Browser compatibility](#browser-compatibility)
    - [Platforms/devices](#platforms-devices)
    - [Bugs](#bugs)
    - [Responsiveness](#responsiveness)
    - [Peer Review](#peer-review)
5. [Deployment](#deployment)
6. [Credits](#credits)
    - [Learning resources](#learning-resources)
    - [Acknowledgements](#acknowledgements)

## Project
### Strategy/Scope
A History Game Quiz Game is an entertainment app inteded for users who wanna test their History knowledge. 
The quiz contains questions with various difficulty level, that encourages user to replay the game if he/she dosen't achieve maximum
score in the first run.

The content is presented on a single page that interactively changes content depending on the users actions. The **primary goal**
is to entertain the user during the game. The **secondary objective** is to improve the users knowledge about History. With this in mind,
does the application provide the users a feedback after each game.

To achieve the strategy goals I implemented following features:
- Simple website layout with the content located in the center of the viewport.
- Easy to click buttons both on computres and mobile touch interfaces.
- Intuitive game interface that presents important information and controls in a clear way.
- Visual feedback to users actions.
- Eye-pleasing graphics to make the experience entertaining.

### Site owner goals
- Provide entertaining and an interactive experience for the users.
- Provide a game app with questions with various difficulty level.
- Provide a link to linkedin and the project's GitHub repository, to interest users in the project and to obation new followers.
- To provde a website that looks well across a range of devices and screen sizes.

### User goals
As a user I want to:
- Navigate easy throughout the page.
- See clean interface and be able to track progress/score.
- Know how many questions I have left to answer.
- Receive feedback for given answers.
- Learn somthing new about History.
- Enjoy the game.
- See my score after I answer the last question.
- Be able to re-play the game without using "back" button in the browser.
- Follow the developer in social media.


## User Experience (UX/UI)
### Colour Scheme
Colour palette was selected using [Happy Hues](https://www.happyhues.co/) and has applied to the recomended UI elements.

For best readability and clean look was #004643 used for the background of the quiz. The buttons was given the colour of #f9bc60
and the text colour for the buttons was given #001e1d. For the headline the colour of ##fffffe was chosen because against the background,
that colour was best because it stood out against that background.

When the user gets the right answer in the quiz the colour of #28a745 and when the answer is incorrect they are shown the colour #dc3545.
### Typography
- The [Roboto](https://fonts.google.com/specimen/Roboto/tester) is the font used throughout the whole website with Sans-serif as the
fallback. The Roboto font is clean, modern looking and it is easy to the eyes. It is sourced from [Google Fonts](https://fonts.google.com/)
and it is imported in the CSS document via @import.

### Structure
**Wireframes** - [View all wireframes - PDF file]().

The page is designed in a very simple way. All pages shares the same colour palette and the content is located in the center of the screen.
The content is changed dynamicaly by JavaScript.

### Start screen
text
images

### Heads Up Display
text
images

### Questions
text
images

### Visual feedback for correct and incorrect answer.
text
images

### Score page
text 
images


## Technology
### Languages Used
- [HTML5]()
- [CSS3]()
- [JavaScript ES6]()
- [Markdown - language used to write this document.]()

### Frameworks, libraries & software used
- [Balsamiq]() - Balsamiq was used to create [wireframes]() during the design process.
- [Coolers.co]() - Was used to find a colour palette.
- [Google Fonts]() - Google Fonts were used to import the 'Roboto' font into the app.css file which is used on all pages throughout the project.
- [Font Awsome]() - Font Awsome was used on all pages throughout to add icons for the footer.
- [Git]() - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub]() - GitHub is used to store the projects code after being pushed from Git.
- [VS Code]() - IDE used to code the project.
- [Prettier]() - Used for formatting html/css and javascript documents for optimal readability.
- [Am i Responsive]() - Online tool used to create mockup to present responsive design of this project.
- [Lightshot]() - Google Chrome extension used to capture screenshots for this README document.
- [Lighthouse]() - Google WebDev tool used for performance/accesibility testing.
- [Wave Web Accessibility Evaluation Tool]() - Used to test accessibility of the webpage.
- [Icons8]() - Tool used to create favicon / Logo.
- [Audioeye.com]() - Used to analyse text/background contrast.
- [Opentdb.com]() - Where i got my API DB for my questions.


## Testing
### Accessibility
Foreground and background colour contrast check was done using [Audioeye]() online tool.
image

[Wave Web Accessibility Evaluation Tool]() - was used to check accessibility. 
image

### Performance
[Lighthouse]() - Google webdev tool used for performance testing showing near-maximum score.
image

### Validation
#### HTML5
- [W3c Markup Validator]() - Validation service used.
#### index.html
text
image
#### game.html
text
image
#### end.html
text
image

#### CSS3
- [W3C CSS Validator]() - Validation service used.
#### app.css
text
image
#### game.css
text
image

#### JavaScript ES6
- [JS Hint]()
#### end.js
text
image
#### game.js
text
image
#### highscores.js
text
image
#### modal.js
text
image

### Browser compatibility
Website was tested manually on following browsers:
- Google Chrome.
- Edge.
- Firefox.
- Safari.
- Opera/Opera GX.
The results were satisfactory on all browsers.

### Platfroms/devices
Website was tested manually on:
- Apple Iphone X
- Apple Ipad.
- Apple MacBook Air.
- Samsung Galaxy Tab S7+
- Ultrawide display 3440x1440.
- Classic 16:9 2560x1440 display.
The results were satisfactory and proved good responsiveness on all screen sizes.

### Bugs
I only encountered one bug when the site was around 70% built and it was the linkes between pages, after multiple tries I could
sort it out and found out that the page, has a problem when the user is using an adblocker. 
After trying out a different adblockers I found out that the only adblocker that made the site not work was this.
[AdBlock](https://chrome.google.com/webstore/detail/adblock-%E2%80%94-best-ad-blocker/gighmmpiobklfepjocnamgkkbiglidom)
I could not find a way around this and therefore I recommend users to disable this adblocker or choose a different one.


### Responsiveness
I confirmed that this website is responsive and all the functions are displayed correctly.
#### 350px
#### 568px
#### 768px
#### 1024px

### Per review
I aksed my friends and fellow CI students to test the application and I recived a lot of positive feedback, one issue was noticed
and it was that the text for questions and answers displayed some bugs.
Thanks to the feedback I implemented a new DB that shows no bugs in the text for either the questions or answers.


## Deployment
The project was deployed to GitHub Pages using the following steps:
- Log in to GitHub and locate the [quiz-game]() repository.
- Locate the "Settings" button on the menu.
- Scroll down the settings page until you locate "Pages" in "code and automation" section.
- Under "Source", click the dropdown called "Select branch:" and select "Main", clickt he dropdown called "Select folder" and select "/root".
- The page will automatically refresh and you receive message "Your site is published at ["https://jambrisak.github.io/My-JavaScript-Project/"]().
Result is below.

### Fork
If you want to fork this project with the intent to propose changes to the developer. It's good practive to regularly sync your fork with the original repository.
To do this, you'll need to use Git on the command line. 
- On GitHub.com, navigate to the [https://github.com/Jambrisak/My-JavaScript-Project](https://github.com/Jambrisak/My-JavaScript-Project) repository.
- In the top-right corner of the page, click **Fork**.
image
- Select an owner for the forked repository.
image
- By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.
image
- Optionally, add a description of your fork.
image
- Choose wheter to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open source projects, you only need to copy the default branch. By default only the default branch is copied.
image
- Click **Create fork**
image

#### Cloning your forked repository
Right now, you have a fork of the My-JavaScript-Project repository, but you do not have the files in that repository locally on your computer.
- On Github.Com, navigate to your fork of the My-JavaScript-Project repository.
- Above the list of files, click **Code**.
image
- Copy the URL for the repository.
    - To clone the repository using HTTPS, under "HTTPS".
    - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH.
    - To clone a repository using GitHub CLI, click GitHub CLi.
- Open Git Bash.
- Change the current working directory to the location where you want the cloned directory.
- Type git `git clone`, and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of `YOUR-USERNAME`: 
```$ git clone https://github.com/YOUR-USERNAME/My_JavaScript_Project```
- Press **Enter**. Your local clone will be created.
```$ git clone https://github.com/YOUR-USERNAME/Spoon-Knife
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remote: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```


## Credits
### Learning resources
- [Code Institute]() - The JavaScript section and walthrough project helped me alot in getting the knowledge needed.
- [W3C School]() - When Code Institute could not give me the answer.
- [JavaScript and JQuery: Interactive Front-End Web Development by Jon Duckett] - When I needed to repeat or just see whatelse I could try when I was stuck.

### Acknowledgements
- My mentor Maranatha Ilesanmi for helpful feedback and guidance at all stages of the project.
- Niclas Tanskanen for being an amazing bouncing idea partner and an amazing tester.
- My girlfriend Maja Jönsson, for putting up with me working alot with my project and supplying me with coffee and snacks.

### Disclaimer
- A History Quiz was created for educational purposes only.