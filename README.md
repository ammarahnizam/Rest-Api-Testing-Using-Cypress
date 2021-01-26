# restapitestingtask


About Project:
This is a small project in which a movie suggestion Rest api is automated using Cypress Framework

Pre-requisites:
=====================
1. Download and install node
2. Check the installation and version using "node --version.
3. Now install npm
4. Go to terminal and type npm init( You will get package.json file which contain meta data and dependencies)
5. Install Cypress
6. Install mocha

Note:
====================
In order to execute the tests make sure the following is true:
1) Create a PostgreSQL database from scratch
2) Insert movies related data
3) Now connect database
4) Make sure table is public and connected
5) Do git clone https://github.com/RazzM13/movie_suggestion.git
6) Navigate to the project from terminal
7) Run 'npm run dev'
8) Access http://localhost:3000 (make sure no other service is running on Post 3000)
9) Do not close the Visual Studio instance where server is running
10)Open new window in Visual Studio Code Editor
11)Go to Terminal
12)Run the command: npm run e2e( this will start your tests in headless mode) or npx cypress open( this will start your tests in browser)



Tools:
=================
IDE: Visual Studio Code 
Language Used: Javascript 
Automation Framework: Cypress
