Members:
Bao Tran, DIN21SP 
Thong Dang, DIN21SP
Jere Muikku, DIN20SP
Kiet Le, DIN21SP

What is this project about?
The project is to create a platform that has a UI interface for people to login this website and implement the climate change and take the data from mongo DB
Visualizing Climate Data is a data visualization app that displays charts of climate change data such as temperature and Co2. 
Users can explore global historical surface temperature anomalies from 1850 onwards, northern hemisphere 2,000-year temperature reconstruction, atmospheric Co2 concentrations from Mauna Loa measurements starting in 1958, ice core Co2 measurements, the evolution of global temperature over the past two million years and Co2 emissions by country and by sectors. Additionally, users can display major human evolution and cultural events, which are relevant to climate change. What is this project about?

What has the project been like?
The project went, mostly, smoothly from the start to the end. 
Maybe we had a few difficulties at the beginning on how to work as a group, but after we started working and got everything set, all went smoothly till the end.

What we used for the project
For the project, we used, for the frontend, with no other choice, React.js. The project was set that we would use React for it, but we chose for the backend to use Node/express.js. And for the database we used MongoDB. For deployment, we wanted to use Heroku, but the free plan was annulled from it, so after much consideration, we chose to use Render. 
Who did what?
For the actual work, pretty much everyone did a little of everything, with Thong Dang doing the most out of all of us. So, in a list term everyone did this: 

Bao Tran: Frontend and Server side. Did the UI for the login and register screen and co did the functionality of it along with Thong. He did most of the datasets to CSV to push to the DB. Did mainly the bug testing and test cases, did the most out of all of us in that case (test cases)

Jere Muikku: Full stack dev stuff, same as Thong. Mainly did the Charts to the frontend from the server and the DB. Worked with Thong on the Database (Dataset data to DB). Did dataset data alongside Bao and test cases, with bug reporting

Thong Dang: Full stack dev stuff (DB, Frontend, API, server, etc.). He did most of the server-side code along with Bao who worked with him on the Login and Register. Worked with DB alongside Jere Muikku. (Did most of the functionalities, deleting charts, adding charts, etc.) 

Kiet Le: Worked with the English document and helped Jere with the v10 part of the project.
Alongside these individual cases, everyone did something on the testing and its documentation (Has its own folder on this GitHub)



Database structure and the UI plan
The database structure of this project is simple, for the User it's just the unique ID of the user, its username, password, and lastly the email. This table is connected to the create chart table by the user ID. 
The chart structure it's a simple structure of it having its own ID and its own data depending on the dataset used. So, in simple terms, it has many possible points of getting data but only two data points are needed to make a chart, the first data which would be on the x-axis (Year, or any other data) and the secondary data on the y-axis (co2 data, for example). This is connected to the same table as the User, the create chart table. It gives its data to the created chart by its id.  
The UI plan was to make a simple and clear website with the ability to make your own collections of charts. We made a sidebar that is used to navigate between every possible view on the website, with some of them only accessible when the user is logged in. The user can add charts to their own collection and show them to other people without them needing to be logged in or registered at all. So, in short, the plan was to make everything simple and understandable for the everyday user. 


 
How to install and use the application?
If you want to install this and use this application yourself, you need to have your own MongoDB database and connect it to the project. The UI will work fine without it but the other functionalities, like logging in, and registering and the functionalities that come with logging in are lost.
 
You need to look at the models of the project and put your datasets according to them or change the models of the project yourself. 
When you’ve done this or if you just want to see or just use the UI you can just run it with the following commands: 

Go to the Website folder and do NPM Install after which you can run it with the command NPM run dev. 

!!!Remember to add your own .env files to the project for it to connect to your own MongoDB database!!! 

The project was done with 2 .env files. One in the frontend folder and another in the Website folder. For the Website put the: 

PORT=8000 
NODE_ENV="development" 
MONGO_URI = your own MongoDB link 
 
And for the frontend: 

NODE_ENV="development" 
REACT_APP_SERVER_URL = "http://localhost:8000" 
 
Link to the server:  
https://react-chart-node-mongodb-frontend.onrender.com/ 
