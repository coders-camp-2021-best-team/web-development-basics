# CodersCamp2021 Movie App

This project was made due to the **[CodersCamp2021](https://www.coderscamp.edu.pl/)**

You can read full documentation under this **[link](https://gracious-neumann-544c01.netlify.app/First%20project/participants)**

Application demo is available **[here](https://quizzical-feynman-5a4016.netlify.app/)**

# Project Setup

1. Go to [IMDb API Website](https://imdb-api.com/), create an account and get your API Key.
2. Copy `.env.example` to `.env` and setup enviromental variables:
    1. paste your API Key into `API_SECRET_KEY` env variable
    2. set `USE_API` env variable:
        1. if equal `true` - application will call the API if the data was not found in the cache, it will download requests for you to add into cache
        2. if equal `false` or any other value - application won't ever call the API even if the data was not found in the cache, **it will throw an error**
