## YouTube

This project aimed at replicating the core functionalities of the popular video-sharing platform YouTube. Developed using React and redux, this project encompasses various features including a home page, live chat, video comments, and a search function.

### Features:

1. **Home Page:** The home page replicates the layout of YouTube's main page, displaying recommended videos and trending content.

2. **Live Chat:** Utilizing **API polling** techniques without causing DOM bloating, the live chat feature enables users to engage in real-time conversations while watching videos. This feature is implemented with local data, simulating a chat environment without the need for real-time updates.

3. **Video Comments:** Users can engage in discussions by leaving comments on videos. This feature supports **nested comments**, allowing for discussions to unfold at multiple levels.

4. **Search:** The search function enables users to find videos based on keywords. Implemented with **caching** and **debouncing** techniques, search results are efficiently fetched and displayed, enhancing user experience.

### Local Deployment Instructions:

To deploy the project locally, follow these steps:

1. Clone the GitHub repository to your local machine:
   
   ```bash
   git clone https://github.com/heyvxshal/Youtube-frontend.git
   ```
2. Navigate to the project directory:

    ```bash
   cd youtube-clone
   ```
3. Create an .env file in the root directory of the project.
4. Inside the .env file, add the following line and replace YOUR_YOUTUBE_API_KEY with your YouTube API key:

    ```bash
   REACT_APP_GOOGLE_API_KEY= youtube-api-key
   ```
5. Install project dependencies using npm or yarn:

    ```bash
    npm install
    ```
6. Start the development server:

   ```bash
    npm start
    ```
   
7. Open your web browser and navigate to http://localhost:3000 to view the app.
   
