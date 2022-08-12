# README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)
# Phase-2-Game-Matching-Card
Webpage game Matching Card

After finishing the webpage for introduction of algorithm, I decided to do a website that allows more interactions between the user and the website. Game jumps into Tashi's and my sight. We looked up lots of different games and analyze their feasibility. 2048 and the Mahjong matching game made to the final round. Due to the limited time, we chose Mahjong matching game as this phase project. Another intentino is to help Chinese culture diffusion.
The website is still one page but has 3 client-side routes using React Router. Buttons are used to help user navigate betwwen homepage, game, and leader board. Beyond that, we use a json-server to create a RESTful API for our backend and make both a GET and a POST request to the json server. Also we use a form to enable post request.

[![webpage_gif_001](pictures/Phase%202%20project%20demo%20Mahjong%20Matching%20Game%20website%20220619.gif)]

# To start the website
npm run server
json-server --watch leader.json -p 3002
npm start
