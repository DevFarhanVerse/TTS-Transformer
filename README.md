# TTS-Transformer

This project is a web-based application that converts text input into speech using **TTS-Transformer**. Users can input text, listen to the generated speech, and download the audio file.

## Features
- **Text Input**: Users can enter text in a provided field.
- **Speech Generation**: Generates audio using TTS-Transformer.
- **Playback & Download**: Users can play the synthesized audio directly or download it as a `.wav` file.

## Project Structure
- **index.html**: The main HTML file with a text input area, controls, and an audio player.
- **script.js**: JavaScript file handling the text-to-speech functionality and API interactions.
- **styles.css**: CSS file for basic styling.

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, etc.)
- An active endpoint for TTS-Transformer (update the `apiUrl` in `script.js`).

### Running the Project
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/speech-synthesis-app.git
    cd speech-synthesis-app
    ```

2. **Update API Endpoint**:
   - In `script.js`, replace `https://example.com/synthesize` with the actual TTS-Transformer API endpoint.

3. **Open the Application**:
   - Open `index.html` in a web browser to start the application.

## Usage
1. Enter the text you want to convert into speech in the text area.
2. Click the "Generate Speech" button to synthesize the audio.
3. Play the generated speech or download it by clicking the "Download Audio" button.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend API**: TTS-Transformer (for speech synthesis)


