# Video Game API

TODO

## Required to Run

Need to have a file in the main directory called 'secret_key.py'. Within it, declare a variable like:

```
SECRET_KEY = 'secret_key_text'
```

## Running in Virtualenv

1) Virtualenv venv
2) source venv/Scripts/activate - for windows 
    or source venv/bin/activate - mac
    - type deactivate to close
3) install dependencies (can use requirements.txt for this)
    - if you get a pip error, try `curl https://bootstrap.pypa.io/get-pip.py | python`
    - you will need to install the database using flask db init 
        - If this does not work, deactivate and uninstall flask, source into venv and pip install sqlalchemy and migrate. Command should appear after that. 

4) set FLASK_APP variable with
    `set FLASK_APP=manage.py` (for windows)
    or `export FLASK_APP=manage.py` (for mac)
5) (optional) Set port with `set FLASK_RUN_PORT xxxx`
6) If any issues, can run `export FLASK_DEBUG=1` to debug
7) flask run

## Routes

TODO
