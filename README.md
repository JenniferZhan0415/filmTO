# Project Title:

🎥 filmTO 🎞️

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

- As a user, I want to be able to find the closest art house cinema near my current location.

- As a user, I want to be able to find the closest art house cinema near any given location.

- As a user, I want to know which film festivals are currently happening.

- As a user, I want to know which film festivals are happening each month.

- As a user, I want to add interesting film festival events to my calendar.

- As a user, I want to be able to create an account to save and manage my favorite film festivals and cinemas.

- As a user, I want to be able to log in to my account to save and manage my favorite film festivals and cinemas.

- As a logged-in user, I want to be able to rate a visited cinema or film festival out of 5 stars.

- As a logged-in user, I want to be able to update my rating of a visited cinema or film festival out of 5 stars.

- As a logged-in user, I want to be able to comment on a visited cinema or film festival.

- As a logged-in user, I want to be able to update my comment on a visited cinema or film festival.

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

Google API
OMDb API
Youtube API

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Home page
- Cinema Map
  - View + comment a Festival
- Film Festival Calendar
  - View + comment a Festival
- Film Recommendations
- Register
- Login
- Account

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

#### Home Page

#### Cinema Map

#### Film Festival Calendar

#### Film Festival Reports and comments

#### Film Recommendations

#### Register Page

#### Login Page

#### Account Page

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

- cinema

  - id (int)
  - name (varchar)
  - address (varchar)
  - website (varchar)
  - longitude (decimal)
  - latitude (decimal)

- festival

  - id (int)
  - name (varchar)
  - date (varchar)
  - address (varchar)
  - website (varchar)
  - comments
    - user_id (int)
    - comment(varchar)
    - likes (int)
    - date（date）
  - articles
    - user_id (int)
    - content (varchar)
    - images (varchar)
    - date（date）

- user
  - id (int)
  - name (varchar)

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
        "image":"url"
    },
    ...
]
```

**GET /cinemas/:id**

- Get cinemas by id

Parameters:

- id: cinemas id as number

Response:

```json
[
    {
        "id": uuid(),
        "name": "TIFF Lightbox",
        "address": "350 King St W, Toronto, ON M5V 3X5",
        "website": 'tiff.net',
        "image":"url"
    },
    ...
]
```

**GET /festivals**

- Get festivals

Response:

```json
{
    "id": uuid
    "name": "Toronto International Film Festival",
    "date": "Sep 5 - 15, 2024",
    "website": "tiff.net",
    "comments":[{...}],
    "articles":[{...}]
}
```

**GET /festivals/:id**

- Get festivals by id

Parameters:

- id: festivals id as number

Response:

```json
[
    {
    "id": uuid
    "name": "Toronto International Film Festival",
    "date": "Sep 5 - 15, 2024",
    "website": "tiff.net",
    "comments": [{...}]
    "articles":[{...}]
    }
    ...
]
```

**POST festivals/:festivalId/comments**

- Logged in user can make comment on festivals

Parameters:

- id: festival id

Response:

```json
{
    "id": uuid
    "name": "Toronto International Film Festival",
    "comment": "I volunteer at TIFF every year and get to watch many movies for free. Highly recommend it!”
    “likes”: 5
    "date": timestamp
}
```

**PUT festivals/:festivalId/comments/:commentsId/like**

Parameters:

- id: festival id
- id: comment id

Response:

```json
{
    "id": uuid
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
