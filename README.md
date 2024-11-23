CareTweet: Suicidal Tweet Detection

Project Overview

This project aims to build a machine learning-based system to detect suicidal ideation and related distress in tweets posted on X (formerly known as Twitter). With the rise in mental health concerns and the increasing use of social media as a platform for emotional expression, this tool can help identify at-risk individuals and enable timely intervention. The system incorporates both suicidal tweet detection and sentiment analysis for a comprehensive understanding of emotional states.

Problem Statement

Social media platforms have become an outlet for people to share their emotions and struggles. Unfortunately, identifying individuals at risk of suicide through their posts remains challenging due to the high volume of data and the nuanced nature of language. Manual moderation is impractical, and traditional keyword-based methods lack the sophistication needed to understand context, making automated detection crucial.

Objective

 - Develop a machine-learning model to classify tweets as “Suicidal” or “Non-Suicidal.”
 - Perform sentiment analysis on tweets to classify them as positive, negative, or neutral, providing deeper insights into users’ emotional states.
 - Create a Flask-based API to provide real-time predictions.

Preparation

  1.	Data Collection:
	- Tweets were collected using Twitter’s API, focusing on datasets containing mental health and suicide-related keywords.
	- Open-source datasets such as the CLPsych 2015 dataset were also utilized.
	
  2.	Data Preprocessing
	- Removal of noise: URLs, hashtags, mentions, emojis, and special characters.
	- Normalization: Lowercasing and stemming/lemmatization of text.
	- Handling missing or imbalanced data using synthetic methods like SMOTE if needed.

Development

  1.	Feature Extraction
	- Implemented TF-IDF and word embeddings (e.g., GloVe) to represent tweet text as numeric vectors.
	
 2.	Model Training
	- Built machine learning models using algorithms:
	- Logistic Regression (Accuracy: 0.87)
	- Decision Tree (Accuracy: 0.85)
	- Random Forest (Accuracy: 0.89)
	- Naive Bayes (Accuracy: 0.86)
	
 3.	Sentiment Analysis
	- Performed sentiment classification (positive, negative, neutral) using a separate sentiment analysis pipeline.
	
 4.	Flask API Development
	- Designed API endpoints to accept user-submitted tweets and return predictions in real time.

Evaluation

  Models were evaluated using metrics like:

- Accuracy
- Precision
- Recall
- F1-Score
- Random Forest achieved the best performance with 0.89 accuracy, demonstrating high reliability in suicidal tweet detection.

 Results and Deployment

  Results:
	
 - Successfully classified tweets into “Suicidal” or “Non-Suicidal” with high accuracy.
 - Sentiment analysis provided additional context by categorizing emotional tones as positive, negative, or neutral.
	
   Deployment:
   
- The Flask API was deployed locally, enabling real-time predictions based on user input.
- Integration-ready for social media monitoring tools or mental health applications.


 Impact of the Project

This project provides an essential tool for:
	
 - Mental health organizations to monitor social media and identify individuals at risk of suicide.
 - Researchers will analyze emotional patterns in public discourse.
 - Policy-makers to make data-driven decisions for better mental health support.

This project leverages machine learning and NLP to make social media a safer and more supportive space for users.


Why I'm doing this project :

- Gain new knowledge (text mining techniques, sentiment analysis pipeline, textblob, wordcloud, etc..)
- To hone my data science skills (EDA, data preprocessing, machine learning,etc..)
- Enhance my full-stack development skills (next.js,flask)
- For my uni projects as well









