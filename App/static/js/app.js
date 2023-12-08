let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let messageElement = document.getElementById("message");

let serialNumber = 1;
let modelLoaded = false;

// Load the TensorFlow.js model
const modelPath = 'https://vaman040697.github.io/Image/generator14.h5';


tf.ready().then(() => {
    return tf.loadLayersModel(`file://${modelPath}`);
}).then((loadedModel) => {
    model = loadedModel;
    modelLoaded = true;
    console.log('Model loaded successfully');
}).catch((error) => {
    console.error('Error loading the model:', error);
});

function generateImage() {
    if (!modelLoaded) {
        console.error('Model not loaded');
        return;
    }

    const noise = tf.randomNormal([1, 100]);

    model.executeAsync(noise).then((result) => {
        // Rest of the function...
    }).catch((error) => {
        console.error('Error during inference:', error);
    });
}

function saveImage() {
    // Rest of the function...
}

function displayMessage(message, color) {
    // Rest of the function...
}

function getRandomColor() {
    // Rest of the function...
}
