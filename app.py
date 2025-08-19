from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS # comment this on deployment
from api.api_handler import PostsApi, PostApi, TagsApi, TagApi

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) # comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route("/projects/<path:path>")
def serve_project(path):
    return send_from_directory('projects', path)

api.add_resource(PostsApi, '/flask/posts')
api.add_resource(PostApi, '/flask/posts/<post_id>')
api.add_resource(TagsApi, '/flask/tags')
api.add_resource(TagApi, '/flask/posts/tag/<tag_name>')

if __name__ == '__main__':
    app.run(debug=True)
