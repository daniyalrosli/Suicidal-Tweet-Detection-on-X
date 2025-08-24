import requests
import json

def test_health():
    """Test the health endpoint."""
    response = requests.get('http://localhost:8082/api/health')
    print(f"Health Response: {response.status_code}")
    print(response.json())

def test_predict():
    """Test the prediction endpoint with different tweets."""
    
    test_tweets = [
        "I had a great day today, feeling happy!",
        "I'm feeling so sad and depressed, I don't want to live anymore",
        "The weather is nice today"
    ]
    
    for tweet in test_tweets:
        print(f"\nTesting with tweet: '{tweet}'")
        response = requests.post(
            'http://localhost:8082/api/predict',
            json={'tweet': tweet}
        )
        
        print(f"Status code: {response.status_code}")
        if response.status_code == 200:
            result = response.json()
            print(f"Prediction: {result['prediction']}")
            if 'probability' in result:
                print(f"Probability: {result['probability']:.4f}")
        else:
            print(f"Error: {response.text}")

if __name__ == "__main__":
    print("Testing CareTweet API...")
    try:
        test_health()
        test_predict()
        print("\nAPI tests completed successfully!")
    except Exception as e:
        print(f"\nError during testing: {str(e)}")
        print("Make sure the Flask app is running on port 8082")
