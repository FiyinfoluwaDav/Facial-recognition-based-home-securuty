# Facial Recognition Based Home Security System

This project is a web-based home security system that uses facial recognition to identify known and unknown individuals in real-time. It features a dashboard to monitor the camera feed, view detection logs, and receive alerts for potential intrusions.

## 🚀 Features

-   **Real-time Facial Recognition**: Identifies known individuals and flags unknown faces from a live webcam feed.
-   **Web-Based Dashboard**: A Streamlit-powered dashboard to monitor the system.
-   **Detection Logs**: All detections are logged with timestamps, labels, and alert statuses.
-   **Intrusion Alerts**: Triggers alerts for unknown individuals.
-   **WhatsApp Notifications**: Sends snapshots of detected individuals to a specified WhatsApp number using the CallMeBot API.
-   **Video Recording**: Allows for manual recording of the camera feed.
-   **Data Export**: Export detection data to a CSV file.
-   **Frontend Landing Page**: A React-based landing page providing information about the security system.

## 🏛️ Architecture

The project is composed of three main parts:

1.  **Streamlit Application (`streamlit_app1.py`)**: The core of the project. It's a Python application that handles the facial recognition logic, runs the web dashboard, and manages all the security features.

2.  **Node.js Backend (`backend/`)**: A simple Express.js server that acts as a launcher for the Streamlit application. It provides an endpoint to start the main security system.

3.  **React Frontend (`Frontend/`)**: A landing page built with React and TypeScript. It serves as the informational entry point to the system, explaining its features and how it works.

## 🏁 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Python 3.8+
-   Node.js and npm
-   CMake

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Facial-recognition-based-home-securuty.git
    cd Facial-recognition-based-home-securuty
    ```

2.  **Set up the Python environment and install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up the Node.js backend:**

    ```bash
    cd backend
    npm install
    cd ..
    ```

4.  **Set up the React frontend:**

    ```bash
    cd Frontend/fintech-template-784
    npm install
    cd ../..
    ```

5.  **Add known faces:**
    Place images of known individuals in the `known_faces` directory. The file name will be used as the person's name (e.g., `John_Doe.jpg`).

### Running the Application

1.  **Start the Node.js backend:**

    ```bash
    cd backend
    npm start
    ```

    This will start the server on `http://localhost:5000`.

2.  **Start the Streamlit application:**
    Open your web browser and navigate to `http://localhost:5000/start-streamlit`. This will launch the Streamlit dashboard.

3.  **View the Frontend Landing Page:**
    To view the React landing page, run the following command in a new terminal:

    ```bash
    cd Frontend/fintech-template-784
    npm run dev
    ```

    This will start the frontend development server, typically on `http://localhost:5173`.

## usage

1.  **Open the Streamlit Dashboard**: Once the Streamlit application is running, you can access the dashboard in your browser (usually at `http://localhost:8501`).

2.  **Start Monitoring**: In the sidebar, toggle "Start Monitoring" to begin the facial recognition process.

3.  **View Detections**: The dashboard will display the live camera feed with recognized faces labeled. The system summary will show statistics about detections.

4.  **Detection Logs**: Navigate to the "Detection Logs" page to view a history of all detections and a trend analysis.

5.  **Controls**: Use the controls in the sidebar and on the dashboard to capture snapshots, record video, and test notifications.

## ⚙️ Dependencies

### Python (`requirements.txt`)

-   streamlit
-   requests
-   pandas
-   altair
-   opencv-python
-   face-recognition
-   cmake
-   dlib
-   numpy

### Node.js Backend (`backend/package.json`)

-   express
-   child_process
-   cors

### React Frontend (`Frontend/fintech-template-784/package.json`)

-   react
-   react-dom
-   react-router-dom
-   @tanstack/react-query
-   tailwindcss
-   ...and various UI components from shadcn/ui.

## 📁 Folder Structure

```
.
├── backend/              # Node.js backend
├── Frontend/             # React frontend
├── known_faces/          # Images of known individuals
├── recordings/           # Saved video recordings
├── snapshots/            # Saved snapshots
├── app.py                # Main Streamlit application (older version)
├── streamlit_app1.py     # Main Streamlit application (current)
├── requirements.txt      # Python dependencies
└── README.md             # This file
```
