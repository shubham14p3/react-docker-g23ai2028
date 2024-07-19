# Technology Article App on Ruby on Rails

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

## Assignment Details

The project was assigned from the course **VIRTUALIZATION AND CLOUD COMPUTING**, Assignment No 1.


React Docker Web Application built with React, deployed using Docker containers. This reademe will walks you through the process of setting up, building, and running the application.

## Features

- Simple web server using Node.js and Express.
- Dockerized application with custom Dockerfile.
- Easy deployment and scaling with Docker.

## Tasks

- Step 1: Deploy a sample web application using docker containers by creating docker images from scratch. Existing docker container images are not allowed

- Step 2: Create a readme file with full explanation of the process followed, describe the app functionality, include details of author 

### Landing Page Hosted on Docker

![screenshot1](src/assets/images/screenshot01.PNG)


## Built With

- Docker v27.0.3
- React v18.3.1
- Vite v5.3.4
- Github

## Getting Started

To get started with the app, cd to the directory where you would like the repo to live by typing on your terminal:

```
$ cd <directory>
```

Clone the repo typing:

```
$ git clone https://github.com/shubham14p3/ror-techno-articles.git
```

Install the needed gems:

```
$ bundle install
```

and then

```
$ rake db:setup

```

Next, migrate the database:

```
$ rails db:migrate
```

Finally, start server:

```
$ rails server
```

Open `http://localhost:3000/` in your browser.

### Prerequisites (Minimum)

Ruby: 2.6.6
Rails: 5.2.3
Postgres: >=9.5

### Run tests

```
    rpsec --format documentation { path }
```


### Deployment

#### Heroku

  Create a Heroku App

  ```
      $ heroku create
  ```
  Push the changes to the Heroku App

  ```
      $ git push heroku master
  ```

  Make a migration to the Heroku App

  ```
      $ heroku run rails db:migrate
  ```
## Note

- Try to use images in dark solid background it will improve the styling.
- If there is any Ruby version mismatch, you can replace the version between (2.6.6 to 2.7.0)

## Authors

👤 **Shubham Raj**

- Github: [@ShubhamRaj](https://github.com/shubham14p3)
- Linkedin: [Shubham14p3](https://www.linkedin.com/in/shubham14p3/)
- Roll No - G23AI2028


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/shubham14p3/ror-techno-articles/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Project requested by [IITJ](https://www.iitj.ac.in/).

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/shubham14p3/members-only.svg?style=flat-square
[contributors-url]: https://github.com/shubham14p3/ror-techno-articles/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shubham14p3/members-only.svg?style=flat-square
[forks-url]: https://github.com/shubham14p3/ror-techno-articles/network/members
[stars-shield]: https://img.shields.io/github/stars/shubham14p3/members-only.svg?style=flat-square
[stars-url]: https://github.com/shubham14p3/ror-techno-articles/stargazers
[issues-shield]: https://img.shields.io/github/issues/shubham14p3/members-only.svg?style=flat-square
[issues-url]: https://github.com/shubham14p3/ror-techno-articles/issues
