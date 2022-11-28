# Notes-App 🗉
A short and simple app to create/read/remove notes in JSON format
## Table of Contents
+ [Introduction](#Introduction)  
+ [Technologies](#Technologies)
+ [Setup](#Setup) 
+ [Status](#Status) 
## Introduction
 This is a training application that was aimed to solidify my understanding of NodeJS and JSON format.
 
 In this application we are able to create/read a single note/list all notes/delete a note.
 
 Application works purely in terminal, so no GUI this time.
## Technologies
 + NodeJS **18.12.1**
 + Chalk **2.4.1**
 + Validator **13.7.0**
 + Yargs **17.6.2**
 
## Setup
 #### To run the application locally:
 
 1. Use ```npm install``` to install all the **NPM** packages
 
 2. Example: ```node app.js list``` will list all the notes if there are any
 
 The application uses command line arguments and hereunder is the list of all of them:
 
 ```add --title "Note title" --body "Note body"```
 
 ```remove --title "Note title"```
 
 ```read --title "Note title"```
 
 ```list```
 
## Status

App is more or less finished, however, in the future I would like to add a decent GUI.
