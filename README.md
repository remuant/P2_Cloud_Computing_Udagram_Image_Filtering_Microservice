# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/remuant/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/remuant/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/remuant/P2_Cloud_Computing_Udagram_Image_Filtering_Microservice). A Node-Express application which runs a simple script to process images. [Project 2]

## Tasks

### Setup Node Environment (for local development)

Create a new node server:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The task to be completed is the implementation of an endpoint in `./src/server.ts` which uses a query parameter to download an image from a public URL, filter the image, and return the result.

Helper functions have been included to handle some of these concepts and are imported at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deployment

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy the image-filter service.

If it is necessary to push changes use `eb deploy`.

### EB ENDPOINT:

udagram-bex-p2-prod-final.us-east-1.elasticbeanstalk.com
