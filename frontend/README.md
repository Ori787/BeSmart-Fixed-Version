Hello and welcome to my app's Front-End.

This app's purpose is helping people find affordable travel fares based on a desired departure date, return date, origin, destination and number of passengers. Moreover, when clicking on the 'HOTELS' button in the homepage, you can get a list of hotels based on your desired city (it works with IATA code as well).

all of this happens thanks to interfacing with a third party's api named 'Amadeus for developers'.

First of all, let's start with all the commands you must run in your terminal:

- cd frontend

- npm i

- npm start

Now, a new window should get opened in your browser.

Before trying to use the app, don't forget to run the server. to make this happen, click on

this link: https://github.com/Ori787/Final-FullStack-Project-Backend

then download it and follow it's readme file's instructions.

A little note, to correctly use the app's features, in the origin and destination's inputs 
you have to use IATA code.

For example, the IATA CODE of Ben Gurion Airport is 'TLV' (Tel Aviv).

if you're not familiar with the IATA code field, you can use this example:

in the origin input, type: TLV

in the destination input, type: JFK (New York's John F Kennedy Airport).

Moreover, the 3rd party's api key has only 20 minutes expiration period. 

so if you get a 401 status code error, it's likely because the API Key has expired.

in order to keep using the app properly, go to Amadeus API folder --> accessToken.http -->

 send a POST request --> copy the access token and paste it in the accessToken const in 
 
 accessToken.js file. save the changes and try now.

 if you want to log in with admin authorization, log in with the following details:

email: seanrosher@gmail.com
password: seanrosher1

