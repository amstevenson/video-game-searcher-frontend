from flask_script import Manager, Server
from game_searcher_api.main import app

manager = Manager(app)
manager.add_command("runserver", Server())


@manager.command
def runserver(port=5000):
    """Run the app using flask server"""
    app.run(debug=True, port=int(port))


if __name__ == "__main__":
    manager.run()