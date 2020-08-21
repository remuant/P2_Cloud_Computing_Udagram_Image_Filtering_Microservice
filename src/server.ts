import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */
  app.get( "/filteredimage", async ( req, res ) => {
      // Extract the url
      let { image_url } = req.query;

      // Check that a url was supplied
      if (!image_url) {
        return res.status(422).send({ message: 'Image URL is required!' });
      }

      // Check that the url exists
      // The info at the following link helped guide this part of the implemetation:
      // https://stackoverflow.com/questions/26007187/node-js-check-if-a-remote-url-exists
      const urlExist = require('url-exist');
      const exists = await urlExist(image_url);
      // If the url is valid...
      if (exists){
        // Msg to console
        console.log('Valid URL');
        // Filter and return the image
        let filteredPath = await filterImageFromURL(image_url);
        res.status(200).sendFile(filteredPath, () => { deleteLocalFiles([filteredPath]); });
      }
      else{
        // Msg to console
        console.log('ERROR: URL does not exist!!!!!!!!!!!!!');
        // Handle 404 error
        return res.status(404).send({ message: 'URL does not exist!!!!!!!!!!!!!' });
      }
    } );

  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );


  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();
