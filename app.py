from flask import Flask, render_template, request, jsonify
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

app = Flask(__name__)

# Load the trained model and vectorizer
with open('log_reg_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/tweet_detection')
def tweet_detection():
    return render_template('detect.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json.get('tweet', '')
    if data:
        # Transform the tweet using the same vectorizer used during model training
        tweet_transformed = vectorizer.transform([data])

        # Get the prediction probability using the loaded model
        prediction_proba = model.predict_proba(tweet_transformed)

        # Set a custom threshold for prediction
        threshold = 0.4
        
        # Check the probability for the positive class (index 1)
        if prediction_proba[0][1] > threshold:  # Check against the threshold
            result = "Potentially Suicidal"
        else:
            result = "Non-Suicidal"

        # Optionally return the probability for more insight
        return jsonify({'prediction': result, 'probability': prediction_proba[0][1]})
    else:
        return jsonify({'error': 'No tweet provided'}), 400

if __name__ == '__main__':
    app.run(debug=True)