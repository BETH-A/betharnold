import React from "react";
import WebIcon from '@material-ui/icons/Web';
import secretImg from "./images2/topSecretStamp.jpg";
import SecretsIcons, { KeeperIcons } from "../src/components/images";
import connectImg from "./images2/students1.jpg";
import keeperImg from "./images2/postItNotes.jpeg";
import movieImg from "./images2/movie.jpg";


const projects = [
    {
        id: 1,
        avatarIcon: <WebIcon/>,
        name: "Secrets",
        subtitle: "Web Application",
        image: secretImg,
        imageAlt: "Top Secret Image",
        link: "https://github.com/BETH-A/Secrets",
        app: "https://secrets-beth.herokuapp.com/",
        description: "Secrets allows users to anonymously share secrets. This app was developed as a way to practice Authentication & Security practices.",
        role: "This app went through many revisions while enhancing security on each commit to GitHub. I started with encryping the password using Mongoose-Encryption then upgraded to Hashing. I then upgraded to Salting & Hashing passwords using bcrypt. Passport.js was used next to strenghten the security. I finally convert the app ths use OAuth, giving the user the ability to login via their Google or Facebook accounts.",
        deployed: "This web app has been deployed on Heroku.",
        packages: "EJS, MongoDB, Heroku, OAuth",
        icons: SecretsIcons
    },
    {
      id: 2,
      avatarIcon: <WebIcon/>,
      name: "Keeper",
      subtitle: "Web Application",
      image: keeperImg,
      imageAlt: "Keeper Image",
      link: "https://github.com/BETH-A/Keeper",
     app: "",
      description: "Note/Post-it type web application created with React.",
      role: "User has can create and delete notes. Currently only the Front End is available.  Linking to MongoDB Atlas and deploying to Heroku is in process.",
      deployed: "Under construction",
      packages: "EJS, MongoDB, Heroku, OAuth",
      icons: KeeperIcons
  },
  {
    id: 3,
    avatarIcon: <WebIcon/>,
    name: "Student Connect",
    subtitle: "Web Application",
    image: connectImg,
    imageAlt: "Student Connect Image",
    link: "https://beth-a.github.io/connect/",
   app: "",
    description: "Web app created with a classmate to assist Students to connect with fellow classmates and utilizes a realtime chat feature.",
    role: "My role was setting up the Laravel framework, polishing frontend, and setting up the databases & the routes.",
    deployed: "",
    packages: "EJS, MongoDB, Heroku, OAuth",
    icons: KeeperIcons
},
{
  id: 4,
  avatarIcon: <WebIcon/>,
  name: "Movie Night",
  subtitle: "Web Application",
  image: movieImg,
  imageAlt: "Movie Night Image",
  link: "https://beth-a.github.io/Project-1/",
  app: "",
  description: "Web App created to show current movies showing & data about each movie while providing local theater locations based on zip code.",
  role: "The app uses an API to pull movie info including movie poster.  Four person team, I was responsible for the Front End Development.",
  deployed: "The app was deployed on Google Firebase Console.",
  packages: "EJS, MongoDB, Heroku, OAuth",
  icons: <SecretsIcons />
}
]



                          
                          
                            
{/*                           

                        <div class="card projectCard">
                          <a class="img-link" href="https://beth-a.github.io/Project-1/" target="_blank">
                            <img class="card-img-top" alt="Movie Night" src="assets/images/movie.jpg">
                            <div class="card-body">
                              <h5 class="card-title">Movie Finder</h5>
                          </a>
                          <p class="card-text">Group project that uses an API to render current movies and some info about the selected movie.
                            The app was deployed on Google Firebase Console. My role: Front End Development. </p>
                              </div>
                          <div class="card-footer iconRow">
                            <img src="assets/images/icons/icons8-html-5-50.png" alt="HTML5">
                            <img src="assets/images/icons/icons8-css3-50.png" alt="CSS3">
                            <img src="assets/images/icons/icons8-javascript-50.png" alt="JavaScript">
                            <img src="assets/images/icons/icons8-firebase-50.png" alt="Firebase DB Console">
                          </div>
                        </div>

                        <div class="card projectCard">
                          <a class="img-link" href="https://beth-a.github.io/clickgame/" target="_blank">
                            <img class="card-img-top" alt="Click Game" src="assets/images/Tropical-Background-1.jpg">
                            <div class="card-body">
                              <h5 class="card-title">Memory Game</h5>
                          </a>
                          <p class="card-text">Test your memory with this Tropical web application. Created using React and deployed on Heroku.
                          App was created to demonstrate basic logic and state management.</p>
                          </div>
                        <div class="card-footer iconRow">
                          <img src="assets/images/icons/icons8-nodejs-50.png" alt="NodeJS">
                          <img src="assets/images/icons/icons8-react-native-50.png" alt="React">
                          <img src="assets/images/icons/icons8-heroku-50.png" alt="Heroku">
                          <!-- <img src="assets/images/icons/icons8-javascript-50.png" alt="JavaScript"> -->
                        </div>
                      </div>
                  </div>
              </div>

                    <!-- 2nd row of Project Carts -->
                    <div class="row row2">
                      <!-- <div class="card-deck"> -->
                      <div class="card-columns">


                        <div class="card projectCard">
                          <a class="img-link" href="https://beth-a.github.io/GifTastic/" target="_blank">
                            <img class="card-img-top" alt="GifTastic!" src="http://78.media.tumblr.com/e3e059dec30337f593abc3b554162eb9/tumblr_nb4z62cjaL1ry46hlo1_500.gif">
                            <div class="card-body">
                              <h5 class="card-title">GifTastic!</h5>
                          </a>
                          <p class="card-text">Render gifs from giphy.com for any topic you list.
                            Web App created early on using the basics of Bootstrap, HTML, CSS, JavaScript, and jQuery.</p>
                            </div>
                          <div class="card-footer iconRow">
                            <img src="assets/images/icons/icons8-html-5-50.png" alt="HTML5">
                            <img src="assets/images/icons/icons8-css3-50.png" alt="CSS3">
                            <img src="assets/images/icons/icons8-javascript-50.png" alt="JavaScript">
                            <img src="assets/images/icons/icons8-bootstrap-50.png" alt="Bootstrap">
                          </div>
                        </div>

                        <div class="card projectCard">
                          <a class="img-link" href="https://beth-a.github.io/TriviaGame/" target="_blank">
                            <img class="card-img-top" alt="Trivia Game" src="assets/images/HPbackground2.jpg">
                            <div class="card-body">
                              <h5 class="card-title">Harry Potter Trivia</h5>
                          </a>
                          <p class="card-text">Test your knowledge of the world of Harry Potter with a simple Trivia Game.
                          One of my first applications using HTML, CSS, JavaScript, and jQuery.</p>
                            </div>
                          <div class="card-footer iconRow">
                            <img src="assets/images/icons/icons8-html-5-50.png" alt="HTML5">
                            <img src="assets/images/icons/icons8-css3-50.png" alt="CSS3">
                            <img src="assets/images/icons/icons8-javascript-50.png" alt="JavaScript">
                            <img src="assets/images/icons/icons8-jquery-50.png" alt="jQuery">
                          </div>
                        </div>


                        <div class="card projectCard">
                          <a class="img-link" href="https://nytreact-ba.herokuapp.com/" target="_blank">
                            <img class="card-img-top" alt="NY Times React Scrapper" src="assets/images/nyt.jpg">
                            <div class="card-body">
                              <h5 class="card-title">NY Times React</h5>
                          </a>
                          <p class="card-text">Retrieve New York Times news stories via API.
                            This React Web App is deployed on Heroku and uses Express.js & MongoDB.</p>
                            </div>
                          <div class="card-footer iconRow">
                            <img src="assets/images/icons/icon-expressjs.png" alt="Express.js">
                            <img src="assets/images/icons/icons8-mongodb-50.png" alt="MongoDB">
                            <img src="assets/images/icons/icons8-react-native-50.png" alt="React">
                            <img src="assets/images/icons/icons8-heroku-50.png" alt="Heroku">
                          </div>
                        </div>
                      <!-- </div>
                    </div> -->

                        <!-- <div class="card bg-info text-white text-center">
                            <a class="img-link" href="https://beth-a.github.io/TrainScheduler/" target="_blank">
                                <img class="card-img-top" alt="Train Scheduler" src="assets/images/train.jpg">
                                <div class="card-body">
                                    <h5 class="card-title">Train Scheduler</h5>
                                </div>
                            </a>
                        </div> -->
              </div>
        </div>
      </div> */}

export default projects;