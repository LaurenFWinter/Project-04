import os

secret = os.getenv('SECRET', 'shhhh it is a secret')

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/cruise')
