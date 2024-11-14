document.getElementById('generateButton').addEventListener('click', generateSpeech);

function generateSpeech() {
    const textInput = document.getElementById('textInput').value;
    if (!textInput.trim()) {
        alert("Please enter some text.");
        return;
    }

    // Placeholder URL for speech synthesis API call
    const apiUrl = 'https://example.com/synthesize';  // Replace with your actual API endpoint

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
    })
    .then(response => response.json())
    .then(data => {
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.src = data.audioUrl;  // The API should return the URL of the generated audio file
        audioPlayer.hidden = false;
        audioPlayer.play();

        // Enable download button and link to the audio file
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.disabled = false;
        downloadButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = data.audioUrl;
            link.download = 'synthesized_speech.wav';  // You can set the file name
            link.click();
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while generating speech.");
    });
}
