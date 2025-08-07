import os
import mistune
import yaml
from flask_restful import Resource
from datetime import datetime

POSTS_DIR = 'posts'
_posts_cache = None

def get_posts(bust_cache=False):
    global _posts_cache
    if _posts_cache is not None and not bust_cache:
        return _posts_cache

    posts = []
    for filename in os.listdir(POSTS_DIR):
        if filename.endswith('.md'):
            filepath = os.path.join(POSTS_DIR, filename)
            with open(filepath, 'r') as f:
                content = f.read()
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    frontmatter = yaml.safe_load(parts[1])
                    markdown_content = parts[2]

                    post_id = os.path.splitext(filename)[0]

                    post = {
                        'id': post_id,
                        'title': frontmatter.get('title', 'No Title'),
                        'summary': frontmatter.get('summary', ''),
                        'date': frontmatter.get('date', datetime.now()).isoformat(),
                        'tags': frontmatter.get('tags', []),
                        'content': mistune.html(markdown_content)
                    }
                    posts.append(post)

    posts.sort(key=lambda x: x['date'], reverse=True)
    _posts_cache = posts
    return posts

def get_summary_posts(posts):
    return [{k: v for k, v in post.items() if k != 'content'} for post in posts]

class PostsApi(Resource):
    def get(self):
        posts = get_posts()
        return {"posts": get_summary_posts(posts)}

class PostApi(Resource):
    def get(self, post_id):
        posts = get_posts()
        post = next((p for p in posts if p['id'] == post_id), None)
        if post:
            return post
        return {"message": "Post not found"}, 404

class TagsApi(Resource):
    def get(self):
        posts = get_posts()
        tags = set()
        for post in posts:
            for tag in post['tags']:
                tags.add(tag)
        return {"tags": sorted(list(tags))}

class TagApi(Resource):
    def get(self, tag_name):
        posts = get_posts()
        tagged_posts = [post for post in posts if tag_name in post['tags']]
        return {"posts": get_summary_posts(tagged_posts)}
