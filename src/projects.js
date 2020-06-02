import React from "react";
import WebIcon from '@material-ui/icons/Web';
import secretImg from "./images2/topSecretStamp.jpg";



const projects = [
    {
        id: 1,
        avatarIcon: <WebIcon/>,
        name: "Secrets",
        subtitle: "Web Application",
        image: {secretImg},
        imageAlt: "Top Secret Image",
        link: "https://beth-a.github.io/connect/",
        description: "Secrets allows users to anonymously share secrets. This app was developed as a way to practice Authentication & Security practices.",

        role: "My role was setting up the Laravel framework, polishing frontend, and setting up the databases & the routes.",
        icons: [
            // image= url("./public/images/icons/icon-laravel.png"),
            // image= url("./public/images/icons/icon-php.png"),
            // image= url("./public/images/icons/icons8-vue-js-50.png"),
            // image= url("./public/images/icons/icon-mySQL.png")
        ]
    },
    {
      id: 2,
      avatarIcon: <WebIcon/>,
      name: "Student Connect",
      subtitle: "Web Application",
      // image: url(".public/assets/images/students1.jpg"),
      imageAlt: "Student Connect Image",
      // link: url("https://beth-a.github.io/connect/"),
      description: "Web app created with a classmate to assist Students to connect with fellow classmates and utilizes a realtime chat feature.",
      role: "My role was setting up the Laravel framework, polishing frontend, and setting up the databases & the routes.",
      icons: [
          // image= url("./public/images/icons/icon-laravel.png"),
          // image= url("./public/images/icons/icon-php.png"),
          // image= url("./public/images/icons/icons8-vue-js-50.png"),
          // image= url("./public/images/icons/icon-mySQL.png")
      ]
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