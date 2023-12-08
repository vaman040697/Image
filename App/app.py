from flask import Flask, render_template
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Load the Keras model
model_path = 'https://vaman040697.github.io/Image/generator14.h5'  # Update with the actual path to your .h5 model file
model = load_model(model_path)
print('Keras Model loaded successfully')

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
