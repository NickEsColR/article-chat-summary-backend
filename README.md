
# Article Chat Summary

Welcome to the article chat and summary, a web application that allows you to load a web article using the url, get a summary and ask questions about it with a chat.

This is the **backend** repository of the project.


## Demo

A demo video of the web can be found [here](https://youtu.be/AeZqhDCP-g0)
## Documentation

[Documentation can be found here](https://drive.google.com/file/d/1kDSgaawiY48qmv0otbeN48t1EjxbsxVO/view?usp=sharing) 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`OPENAI_API_KEY`

`DB_CNN`

An environment template is provided, you just need to rename it from ".env.template" to ".env" and paste your values

## Features

- Submit the article URL
- View the summary of an article
- Ask questions about an article
- Keep the chat history
- See all articles submited
- Delete an article


## Run Locally

**Remember to run this first**

Clone the project

```bash
  git clone git@github.com:NickEsColR/article-chat-summary-backend.git
```

Go to the project directory

```bash
  cd article-chat-summary-backend
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  npm start
```


## Tech Stack

**Client:** React, Redux, Bootstrap, Axios, Fontawesome, Sweetalert2

**Server:** Node, Express, MongoDB, Axios, OpenAI

