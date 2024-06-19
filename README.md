# Dropbox-test is React Web Application of basic file explorer with Dropbox Integration

Dropbox-test is a simple file explorer application built with React, Vite, Redux Toolkit, Dropbox SDK and MUI. 

## Features

-   Browse folders and sub-folders
-   View files
-   Upload new files to the current directory
-   Create new folders
-   Delete files and folders
-   Integration with Dropbox SDK

## Get started Dropbox

- Create account on dropbox
- Go to https://www.dropbox.com/developers and open **App Console** tab
- Press **Create app** button
  1. Choose an API - **Scoped access**
  2. Choose the type of access you need - **App folder**
  3. Name your App
  4. Press **Create app** button
- Once you created your app go to **Permissions** tab
- Check these permissions:
  - files.content.write
  - files.content.read
  - sharing.write
  - sharing.read
  - files.metadata.read
- Submit changes
- Go to **Settings** tab and generate **Access token**

## Installation

To get started with Dropbox-test, follow these steps:

1. Clone the repository.
2. Install `node_modules`.
3. Create `.env` like in `.env.example`
4. Update `VITE_DROPBOX_ACCESS_TOKEN` in `.env` file with access toke you generated before.
5. Run the project:
   `npm run dev`
   The application will be accessible at http://localhost:5173/
