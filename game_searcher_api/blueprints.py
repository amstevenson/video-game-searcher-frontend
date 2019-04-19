from game_searcher_api.routes import health, game


def register_blueprints(app):
    app.register_blueprint(health.health)
    app.register_blueprint(game.game)
