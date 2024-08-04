# Project Title:

## 🎥 filmTO 🎞️

## Overview

What is your app? Brief description in a couple of sentences.

filmTO is an interactive online guide for film enthusiasts. This app highlights Toronto's historic independent art cinemas, recommends multicultural film festivals, and suggests popular movies and related YouTube channels based on users' viewing habits.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

Toronto welcomes many newcomers, including students and immigrants, each year. As one of them, I understand how eager these individuals are to participate in local activities, explore different cultures, and make new friends.

As a film enthusiast, I noticed Toronto has many film-related events, but they are often hard to find. People miss out on free summer park movie festivals, TIFF under 25 free memberships, and other events because information is poorly presented online. Google searches for film festivals or art cinemas in Toronto often yield disappointing results.

The pandemic has further impacted independent cinemas, with many struggling to stay open. For example, Revue Cinema nearly closed last month.

filmTO aims to bridge this gap by connecting film enthusiasts with exciting events. It will aggregate information about film-related activities and venues, helping film festivals find their audiences and ensuring viewers never miss events they're interested in.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

- Film Enthusiasts in Toronto:
  - Individuals who seek more than just commercial films at Cineplex.
  - Passionate about attending multicultural film festivals.
  - Actively support art and independent cinemas.
  - Eager to connect with fellow film lovers and share their viewing experiences.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- As a user, I want to be able to find the closest art house cinema near my current or any given location.

- As a user, I want to know which film festivals are currently happening.

- As a user, I want to know which film festivals are happening each month.

- As a user, I want to add interesting film festival events to my calendar.

- As a user, I want to see the lated news about the cinemas and film festivals.

- As a user, I want to be able to create an account and log in to manage my liked film festivals, cinemas and articles.

- As a logged-in user, I want to be able to like(save) or unlike a visited cinemas, film festivals or articles.

- As a logged-in user, I want to be able to comment on a visited cinemas, film festivals or articles.

- As a logged-in user, I want to be able to update or delete my comment on a visited cinemas, film festivals or articles.

- As a logged-in user, I want to search for popular films and related video content from YouTube channels.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- TypeScript
- MySQL
- Express
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
- Youtube API for search movie related contents
- OpenAI API for search the popular films

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page
- Cinema map
  - View + comment a Cinema + rating + save
- Film festival calendar
  - View + comment a Festival + rating + save + add to calendar
- Film recommendations
  - search with key words( favorite books or movies)
- Film related content from Youtube channels
  - search with key words( favorite books or movies)
- Register page
- Login page
- Account dashboard

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

#### Home Page

#### Cinema Map

#### Film Festival Calendar

#### Film Search and Recommendations

#### Film Related Contents Search and Recommendations

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
  - comments
    - user_id (int)
    - user_name
    - comment(varchar)
    - likes (int)
    - date（date）

- festival

  - id (int)
  - name (varchar)
  - date (varchar)
  - location (varchar)
  - website (varchar)
  - image
  - likes (int)
  - comments
    - user_id (int)
    - user_name
    - comment(varchar)
    - likes (int)
    - date（date）
  - articles
    - user_id (int)
    - user_name
    - content (varchar)
    - images (varchar)
    - date（date）
    - image
    - likes (int)
    - comments
      - user_id (int)
      - user_name
      - date（date）
      - likes (int)

- user
  - user_id (int)
  - user_name (varchar)
  - user_email
  - user_password
  - user_avatar
  - commented and liked(saved) cinemas
  - commented and liked(saved) film festivals
  - commented and liked(saved) articles

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET /cinemas**

- Get cinemas,

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
        "website": 'tiff.net',
        "likes":2,
        "image":"url",
        "comments":[{...}]
    },
    ...
]
```

**GET /cinemas/:cinemaId**

- Get cinemas by id

Parameters:

- cinemaId: cinemas id as number

Response:

```json
[
    {
        "id": uuid(),
        "name": "TIFF Lightbox",
        "address": "350 King St W, Toronto, ON M5V 3X5",
        "website": 'tiff.net',
        "likes":2,
        "image":"url",
        "comments":[{...}]
    },
    ...
]
```

**GET /cinemas/:cinemaId/comments**

- Get comments by cinemasId

Parameters:

- cinemaId: cinemas id as number

Response:

```json
[
    {
        "user_id": uuid(),
        "user_name":"Jennifer",
        "likes":2,
        "date":,
        "comments":[{...}]
    },
    ...
]
```

**GET /cinemas/:cinemaId/comments/:commentId**

- Get comment by cinemasId and commentId

Parameters:

- cinemaId: cinemas id as number
- commentId: comment id as number

Response:

```json
[
    {
        "user_id": uuid(),
        "user_name": "Jennifer",
        "likes":2,
        "date":,
        "comments":[{...}]
    },
    ...
]
```

**GET /festivals**

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
    "comments":[{...}],
    "articles":[{...}]
  },
  ...
]
```

**GET /festivals/:festivalId**

- Get festivals by festivalId

Parameters:

- festivalId: festivals id as number

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
    "comments":[{...}],
    "articles":[{...}]
    }
]
```

**GET festivals/:festivalId/comments**

- Logged in user can make comment on festivals

Parameters:

- festivalId: festival festivalId

Response:

```json
[
    {
        "user_id": uuid(),
        "user_name": "Jennifer",
        "likes":2,
        "date":,
        "comments":[{...}]
    },
    ...
]
```

**PUT festivals/:festivalId/comments/:commentsId/like**

Parameters:

- id: festival id
- id: comment id

Response:

```json
{
    "user_id": uuid(),
    "name": "Toronto International Film Festival",
    "comment": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”
    “likes”: 5
    "date": timestamp
}
```

**DELETE festivals/:festivalId/comments/:commentsId/delete**

Parameters:

- id: festival id
- id: comment id

Response:

```json
{
    "id": uuid
    "name": "Toronto International Film Festival",
    "comment": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”,
    “likes”: 5,
    "date": timestamp,
}
```

**POST festivals/:festivalId/articles**
Parameters:

- id: festival id

Response:

```json
{
    "id": uuid
    "title": "Toronto International Film Festival"
    "content": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”
    "images": "url"
    "likes": 5
    "date": "timestamp"
}
```

**PUT festivals/:festivalId/:articlesId/like**
Parameters:

- id: festival id
- id: articles id

Response:

```json
{
    "id": uuid
    "title": "Toronto International Film Festival"
    "content": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”
    "images": "url"
    "likes": 5
    "date": "timestamp"
}
```

**DELETE festivals/:festivalId/:articlesId/articles**
Parameters:

- id: festival id
- id: articles id

Response:

```json
{
    "id": uuid
    "title": "Toronto International Film Festival"
    "content": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”
    "images": "url"
    "likes": 5
    "date": "timestamp"
}
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

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

- JWT auth
  - Before adding auth, all API requests will be using a fake user with id 1
  - Added after core features have first been implemented
  - Store JWT in localStorage, remove when a user logs out
  - Add states for logged in showing different UI in places listed in mockups

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out time frames for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

( July 29 Mon - Aug4 Sun 7-days ) - sprint 1

- Create client

  - react project with routes and boilerplate pages

- Create server - Create client

  - express project with routing, with placeholder 200 responses

- Create migrations

- Gather 10 cinema and 30 festivals in Toronto

- Create seeds with sample data

- Deploy client and server projects so all commits will be reflected in production

(Aug 5 Mon - Aug 11 Sun 7-days) - sprint 2

- Feature: List cinemas from a given location

  - Implement list cinemas page including location form
  - Store given location in sessionStorage
  - Create GET /cinemas endpoint

- Feature: View cinema

  - Implement view cinema page
  - Create GET /cinema/:id

- Feature: comment festival

  - Add form input to view festival page
  - Create POST /comments
  - States for add & update ratings

(Aug 12 Mon - Aug 16 Sun 5-days) - sprint 3

- Feature: Home page

- Feature: Create account

  - Implement register page + form
  - Create POST /users/register endpoint

- Feature: Login

  - Implement login page + form
  - Create POST /users/login endpoint

- Feature: Implement JWT tokens

  - Server: Update expected requests / responses on protected endpoints
  - Client: Store JWT in local storage, include JWT on axios calls

- Bug fixes

- DEMO DAY Aug 16 Fri

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Does your project include any login or user profile functionality?
If so, describe how authentication/authorization will be implemented.

- use Quill for article editor
- AI chat bot for recommend films
- Integrate Google Places / Maps
  - Show more theatres, DVD-store, music and books stores.
- Forgot password functionality
- add likes, delete for users comments
- add content reviews
- Unit and Integration Tests
  film articles and reviews
  make comment on cinema film festival and articles

aritcle views
