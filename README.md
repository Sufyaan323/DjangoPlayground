<div align="center">
    <h1>Django Playground</h1>
</div>

## About

This is a sandbox used to experiment with Django and familiarise with the potential it presents to software development.

## Installation and Setup

1. Clone the repo

   ```sh
   git clone https://github.com/Sufyaan323/DjangoPlayground.git
   ```

2. Install the requirements

   ```sh
   pip install -r requirements.txt
   ```

3. Perform migration to generate database tables

   ```sh
   python manage.py migrate
   ```

4. Start the server

   ```sh
   python manage.py runserver
   ```

## Configuration

The database settings may need to be configured for MYSQL database.
You can find them in:

```sh
./playground/settings,py
```

Between line 80-89:

```sh
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'playground',
        'USER': 'django_playground',
        'PASSWORD': 'django_pass',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

## Notes

A superuser should be created using the following command:

```sh
python manage.py createsuperuser
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
