# Software Educativo
 ![alt text][logo-angular] ![alt text][logo-firebase] ![alt text][logo-chartjs] ![alt text][logo-bootstrap]

[logo-firebase]: https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png "Firebase"

[logo-angular]: https://dynamicimageses-v2b.netdna-ssl.com/product_class_external_product/angular_128.png "Angular"

[logo-chartjs]: https://avatars.githubusercontent.com/chartjs?s=128 "ChartJS"

[logo-bootstrap]: http://coreyharville.com/img/128/BootstrapBadge-128.png "Bootstrap"


***

# Descripción

Sistema evaluativo en tiempo real que permite a profesionales docentes obtener métricas para tomar decisiones acerca de sus clases. Además es una herramienta que permite ser efectivos en el tiempo de realizar actividades y evaluaciones, acelerando estos procesos.

## ¿Por qué Firebase?

Además de su servicio de Realtime Database, el cual es evidente el motivo de su elección, es el tiempo ganado debido al no tener que desarrollar un Backend para el sistema. El tiempo de diseño, desarrollo e implementación de los controladores, las rutas, la base de datos y de los recursos de servidor que me hubiese llevado realizar estas actividades no eran propias de un proyecto desarrollado por 1 persona en un lapso de 4 meses.

## ¿Por qué Angular?

Como primer motivo, necesitaba trabajar en algún lenguaje o framework que me permitiera o al menos fuese común utilizar una arquitectura MVVM en él y así poder ejecutarse en tiempo real. Además tenía previamente nociones de la forma en la que se desarrollaban proyectos en este framework.

# Modelo

Este proyecto usa Firebase Realtime Database, por lo tanto la documentación de su modelo estará en un formato JSON

## Tests

<pre><code>
{
    "tests": {
        "test1": {
            "title": "This is the question title",
            "description": "This is a description",
            "teacher_id": "12345"
        },
        ...
    },
    ...
}
</code></pre>

## Students

<pre><code>
{
    "students": {
        "student1": {
            "name": "Johann Valenzuela",
            "mail": "johann.aevt@gmail.com",
            "country": "CL",
            "city": "Valparaíso"
        },
        ...

    }
    ...
}
</code></pre>

## Courses

<pre><code>
{
    "courses": {
        "course1": {
            "title": "Formación Ciudadana",
            "mail": "johann.aevt@gmail.com",
            "country": "CL",
            "city": "Valparaíso"
        },
        ...

    }
    ...
}
</code></pre>

## Teachers

<pre><code>
{
    "teachers": {
        "teachers1": {
            "name": "Johann Valenzuela",
            "mail": "johann.aevt@gmail.com",
            "country": "CL",
            "city": "Valparaíso",
            "courses": {
                {
                    "course_id": "12345",
                    "suscription_date": "09/05/2017"
                },
                ...
            }
        },
        ...

    }
    ...
}
</code></pre>

## Answers

<pre><code>
{
    "answwers": {
        "answer1": {
            "student": "asdf1234",
            "test": "fdas4321",
            "response":{
              
            }
        },
        ...

    }
    ...
}
</code></pre>

## Questions

<pre><code>
{
    "questions": {
        "question1": {
            "question": "Do this is a question?",
            "alternatives": {
                {
                    "text": "Maybe",
                    "img": "url"
                },
                {
                    "text": "Yes",
                    "img": "url"
                },
                {
                    "text": "No",
                    "img": "url"
                },
                {
                    "text": "Error 404 brain not found",
                    "img": "url"
                },
                ...
            },
            "correct": "3"
        },
        ...

    }
    ...
}
</code></pre>
