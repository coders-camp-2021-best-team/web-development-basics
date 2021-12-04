# CodersCamp2021 Movie App

This project was made due to the **[CodersCamp2021](https://www.coderscamp.edu.pl/)**

You can read full documentation under this **[link](https://gracious-neumann-544c01.netlify.app/First%20project/participants)**

Application demo is available **[here](https://quizzical-feynman-5a4016.netlify.app/)**

# Project Setup

1. Go to https://rapidapi.com/apidojo/api/imdb8/, create an account and subscribe to the API to get your Application Key.
2. Copy `.env.example` to `.env` and setup enviromental variables:
    1. paste Application Key that you generated into `API_SECRET_KEY` variable
    2. set `USE_API` flag:
        1. if equal `true` - application will call the API if the data was not found in the cache
        2. if equal `false` or any other value - application won't ever call the API even if the data was not found in the cache, **it will throw an error**
