# Stream 1 Project - Band Project App
a repository for my stream1 project
this is my new read me file for this project

## Overview

This App is a prtotype for a band website

- The band requires a web site to showcase their music and publicise their availability for gigs.

- They would like to target the corporate and wedding market as their primary target audience. 
- They also want the website to be a site their fans can visit to see and hear clips from their back catalogue and any new material as it becomes available.
The band will provide the UX/UI team with the following assets:

- Photos and biographies of the band members

- The band are recording an audio clip that they would like to showcase on the new website
- They have a number of audio clips that they can make available and would like to showcase on their web site.
- Users should be able to search for the band’s commercial tracks and purchase them from third party sites such as itunes. They would like to explore the possibility of creating a mail list of ‘fans’ that they could communicate with to inform them of upcoming gigs and any new material that they have made available via the web.  Users should be able to subscribe to a newsletter of the band’s latest information.

- They would also like to publicise upcoming gigs in the future. They would also like users to be able to contact them with potential work related leads. The site should contain the ability to check on the band’s availability for future bookings and costs associated with various types of booking. They are in the process of creating a social media presence and would like links to Facebook, Twitter and YouTube pages. They intend to set up a channel in YouTube of videos they have recorded.

## Tech Used

### Some tech used includes:

- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle routing and build custom directives (calls to API may also be needed not sure yet).
- [Bootstrap](http://getbootstrap.com/)
    + We use **Bootstrap** to give our project a simple responsive layout.
- [npm](https://wwwnpmjs.com/)
    + We use **npm** to help manage dependencies in our application.
- [bower](https://bower.io/)
    + **Bower** is used to manage the installation of libraries and frameworks

## Features

### Existing Features
- Subscribe to newsletter
- Log in
- log Out
- Gig Request
- See upcoming gigs
- preview tracks and videos
- download free tracks
- links to amazon and itunes for purchasing
- social links to Facebook, Vimeo, YouTube and Twitter
- menu collapse as a directive
- bootstrap tab
- alert boxes in bootsrap style

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull req