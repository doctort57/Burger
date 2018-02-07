EAT DA BURGER 

Overview

A Node, Express, Handlebars, and MySQL burger app that lets users input the names of burgers they'd like to eat... and then devour them! 

Please check out the deployed version in Heroku [here](https://burgersmmm.herokuapp.com/index)!


Functionality

Using an home-grown ORM, the app has 3 basic CRUD functions...

READ all entries from the MySQL database and display them to the DOM using Handlebars.

UPDATE a selected burger by clicking "Devour It", which...
hits an /burger/eat/:id route in Express to change its "devoured" status in the MySQL database
re-routes the webpage back to the index, where the burger is now in the devoured column (via Handlebars)

CREATE a new burger using the "Place Order" form, which...
hits a /burger/create route in Express to insert a new burger into the MySQL database
re-routes the webpage back to the index, where the burger is now ready to be eaten column (via Handlebars)

![image](https://user-images.githubusercontent.com/26799439/35938669-d0102966-0c17-11e8-922c-e209dd962672.png)

