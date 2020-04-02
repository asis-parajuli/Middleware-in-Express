# Middleware-in-Express
Basic to advanced concept in Middleware

Middleware function is basically a function that takes a request object and either returns a response to the client or passes control to another middleware function.

In Express, Every Route Handler we have is technically a Middleware Function.

A basic example is express.json():
The method returns a function (middleware funtion). The job of this middleware funtion is to read the request, and if there is a json object in the body of the request it will parse the body of the request into a json object and then it will set request.body property

For Third-Party Middleware:
http://expressjs.com/en/resources/middleware.html
