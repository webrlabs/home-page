# Webr Labs

This is the personal website of Justin Weber, a Mechanical Engineer at the US Department of Energy's National Energy Technology Laboratory. This site was built with the help of Google's Jules, an AI software engineer.

The website is a simple blog-style platform that allows Justin to share his projects. It is built with a Python/Flask backend and a React frontend.

## Features

- **Modern Glassmorphic Design:** A sleek, modern design with a red color scheme.
- **Markdown-based Posts:** Blog posts are written in Markdown with YAML frontmatter, making it easy to add new content.
- **Tags:** Posts can be tagged for easy sorting and filtering.
- **Project Hosting:** The site can host static web-based projects.

## Getting Started

To run the project locally, follow these steps:

### Backend

1.  **Navigate to the root directory.**
2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the Flask server:**
    ```bash
    export FLASK_APP=app.py
    flask run
    ```
    The backend server will be running at `http://localhost:5000`.

### Frontend

1.  **Navigate to the `frontend` directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the React development server:**
    ```bash
    npm start
    ```
    The frontend will be running at `http://localhost:3000`.

## Adding New Posts

To add a new blog post, simply create a new Markdown file in the `posts` directory. The filename should be in the format `YYYY-MM-DD-your-post-title.md`.

The file should have YAML frontmatter at the top, like this:

```yaml
---
title: "Your Post Title"
summary: "A brief summary of your post."
date: YYYY-MM-DD
tags:
  - tag1
  - tag2
---
```

The rest of the file can be written in standard Markdown.
