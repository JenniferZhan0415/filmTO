# Project Title:

## 🎥 filmTO 🎞️

## Overview

> Q: What is your app? Brief description in a couple of sentences.

> filmTO is an interactive online guide for film enthusiasts. This app highlights Toronto's historic independent art cinemas, recommends multicultural film festivals, and suggests popular movies and related YouTube channels based on users' viewing habits.

### Problem

> Q: Why is your app needed? Background information around any pain points or other reasons.

> Toronto welcomes many newcomers, including students and immigrants, each year. As one of them, I understand how eager these individuals are to participate in local activities, explore different cultures, and make new friends.

> As a film enthusiast, I noticed Toronto has many film-related events, but they are often hard to find. People miss out on free summer park movie festivals, TIFF under 25 free memberships, and other events because information is poorly presented online. Google searches for film festivals or art cinemas in Toronto often yield disappointing results.

> The pandemic has further impacted independent cinemas, with many struggling to stay open. For example, Revue Cinema nearly closed last month.

> filmTO aims to bridge this gap by connecting film enthusiasts with exciting events. It will aggregate information about film-related activities and venues, helping film festivals find their audiences and ensuring viewers never miss events they're interested in.

### User Profile

> Q: Who will use your app? How will they use it? Any special considerations that your app must take into account.

- Film Enthusiasts in Toronto:
  - Individuals who seek more than just commercial films at Cineplex.
  - Passionate about attending multicultural film festivals.
  - Actively support art and independent cinemas.
  - Eager to connect with fellow film lovers and share their viewing experiences.

### Features

> Q: List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- As a user, I want to be able to find the closest art house cinema near my current or any given location.

- As a user, I want to know which film festivals are currently happening.

- As a user, I want to know which film festivals are happening each month.

- As a user, I want to add interesting film festival events to my calendar.

- As a user, I want to see the latest news about the cinemas and film festivals.

- As a user, I want to be able to create an account and log in to manage my liked film festivals, cinemas and articles.

- As a logged-in user, I want to be able to like(save) or unlike a visited cinemas, film festivals or articles.

- As a logged-in user, I want to be able to comment on a visited cinemas, film festivals or articles.

- As a logged-in user, I want to be able to update or delete my comment on a visited cinemas, film festivals or articles.

- As a logged-in user, I want to search for popular films.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- TypeScript
- MySQL
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt for password hashing

### APIs

List any external sources of data that will be used in your app.

- Google Maps API for the cinema map
- Google Calendar API for add film events to user's calendar
- OMDb API for display movies
- OpenAI API for search the popular films

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page
  - Cinema map
    - View + comment a Cinema + like(save)
  - Film festival calendar
    - View + comment a Festival + like(save) + add to calendar
  - Film recommendations
    - search with favorite movies
  - Film articles
- Authentication
  - Register page
  - Login page
- User
  - Account dashboard page

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

#### Home Page

#### Cinema Map

#### Film Festival Calendar

#### Film Recommendations

### Film Event Articles

#### Register Page

#### Login Page

#### Account Dashboard Page

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

- cinema

  - id (int)
  - name (varchar)
  - address (varchar)
  - website (varchar)
  - longitude (decimal)
  - latitude (decimal)
  - image
  - likes (int)

- festival

  - id (int)
  - name (varchar)
  - date (varchar)
  - location (varchar)
  - website (varchar)
  - image
  - likes (int)

- comment

  - id(int)
  - commentableId (int -- foreign key)
  - commentableType (varchar)
  - user_id (int -- foreign key)
  - likes (int)
  - comment(varchar)

- user

  - user_id (int)
  - user_name (varchar)
  - user_email (varchar)
  - user_password (varchar/int)
  - liked(saved) cinemaId (int -- foreign key)
  - liked(saved) articleId (int -- foreign key)
  - liked(saved) festivalId (int -- foreign key)

- article
  - id(int)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET / cinemas**

- Get cinemas

Parameters:

- longitude: User-provided location as a number
- latitude: User-provided location as a number

Response:

```json
[
    {
        "id": uuid(),
        "name": "TIFF Lightbox",
        "address": "350 King St W, Toronto, ON M5V 3X5",
        "website": "tiff.net",
        "longitude":""
        "latitude":"",
        "image":"url",
        "likes":2,
        "comment":{[...]}
    },
    ...
]
```

**GET / festivals**

- Get festivals

Response:

```json
[
  {
    "id": uuid(),
    "name": "Toronto International Film Festival",
    "date": "Sep 5 - 15, 2024",
    "location":"TIFF Lightbox",
    "website": "tiff.net",
    "image":"url",
    "likes":2,
    "comment":{[...]}
  },
  ...
]
```

**GET /comments**
**GET /comments/:commentableId**

- Get comments by commentableId

Parameters:

- commentableId: by type of cinema/article/festival

Response:

```json
[
    {
        "id": uuid(),
        "commentableId":uuid(),
        "commentableType":"cinema/article/festival",
        "user_id":uuid(),
        "likes":2,
        "comments":[{...}]
    },
    ...
]
```

**GET /users**
**GET /users/:userId**

- Logged in user can make like(save) cinemas/festivals/articles

Parameters:

- userId: users userId

Response:

```json
[
    {
        "user_id": uuid(),
        "user_name": "Jennifer",
        "user_email":"Jennifer.zhan.2015@gmail.com",
        "user_password":"BrainSation0603*",
        "cinemaId": uuid(),
        "festivalId": uuid(),
        "articleId": uuid(),

    },
    ...
]
```

**GET /articles**

- Get articles

Response:

```json
[
    {
        "id": uuid(),
        "url":"url"
    },
    ...
]
```

**POST /comment/:userId/:commentableId**

- post comment

Parameters:

- userId
- commentableId

Response:

```json
[
    {
        "id": uuid(),
        "commentableId":uuid(),
        "commentableType":"cinema/article/festival",
        "user_id":uuid(),
        "likes":2,
        "comments":[{...}]
    }
]
```

**PUT /like/:commentableId**

- put like

Parameters:

- commentableId

Response:

```json
{
    "commentableId": uuid(),
    "commentableType": "Toronto International Film Festival",
    “likes”: 5,
    "comments":[{...}]
}
```

**DELETE comment/:commentableId/:userId**

- delete comment

Parameters:

- commentableId
- userId (user can only delete their own comment)

Response:

```json
[
    {
        "id": uuid(),
        "user_id":uuid(),
        "commentableId":uuid(),
        "commentableType":"cinema/article/festival",
        "likes":2,
        "comments":[{...}]
    }
]
```

**POST /users/register**

- Add a user account

Parameters:

- email: User's email
- password: User's provided password

Response:

```json
{
  "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

**Post /users/login**

- Login a user

Parameters:

- email: User's email
- password: User's provided password

Response:

```json
{
  "token": "seyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6I..."
}
```

### Auth ??

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out time frames for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

(Aug 4 Mon - Aug 6 Sun 3-DAYS) - sprint 1

- Create client

  - react project with routes and boilerplate pages

- Create server - Create client

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 10 cinema and 30 festivals in Toronto

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

- Front-end: Home page

- Front-end: Cinema map / Film Festival Calendar / Film Recommendations / Film Event Articles

- Front-end: Register Page / Login Page / Account Dashboard Page

(Aug 6 Mon - Aug 11 Sun 6 DAYS) - sprint 2

- Feature: List cinemas from a given location

  - Implement list cinemas page including location form
  - Store given location in sessionStorage
  - Create GET /cinemas endpoint

- Feature: View festivals

  - Implement view festivals page
  - Create GET /festivals endpoint

- Feature: View articles

  - Implement view festivals page
  - Create GET /festivals endpoint

- Feature: put likes

  - Add & update likes to festival/cinema/article page
  - Create PUT /likes

- Feature: search film recommendations
  - get film recommendations from OpenAI

(Aug 12 Mon - Aug 15 Thu 4 DAYS) - sprint 3

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Feature: post comments

  - Add form input to view festival/cinema/article page
  - Create POST /comments

- Feature: delete comments

  - delete comment festival/cinema/article page
  - Create DELETE /comments

(Aug 16 Fri) - DEMO DAY

(Aug 16 Sat - Aug 19 Mon 4 DAYS) - sprint 4

- Optional features
- Bug fixes
- Testing

(Aug 19 Fri 11:59 Mon PM ) - Final submission DAY

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Does your project include any login or user profile functionality?
If so, describe how authentication/authorization will be implemented.

- Show article views
- Show more theatres, DVD-store, music and books stores in cinema map
- Recommend Film related contents from Youtube channels by using Youtube API
- Forgot password functionality
- Unit and Integration Tests
