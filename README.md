# stonks
Simple stock price viewer using React. Submission for the Microsoft Student Accelerator 2020 Phase 1 front-end project. (yes I know the UI isn't the greatest, please don't flame me <3)

# Intro
This simple web app allows you to enter in a stock symbol and displays closing prices of the stock for the last 30 days along. A small company profile overview is also there which includes information such as the exchange the stock is traded on, the industry of the company, the website and a description. Relevant and recent news articles related to the stock symbol entered is also showcased.

# APIs utilized
This project utilizes two APIs: IEXCloud.com's financial data API for the historical pricing and company profile, and NewsAPI.org for retrieving newsfeed articles. You can find relevant documentation for both of the APIs here:

 - [https://iexcloud.io/docs/api/](https://iexcloud.io/docs/api/)
 - [https://newsapi.org/docs](https://newsapi.org/docs)

API keys for both services are located within the `.env.local` file in the project's root directory (API keys have not been committed in this repository).

## API key descriptions

 - **`REACT_APP_SANDBOX_KEY`**: Sandbox API key for IEXCloud financial data (provides some false data)
 - **`REACT_APP_REAL_API_KEY`**: Real API for IEXCloud financial data (has limits, provides real data)
 - **`REACT_APP_NEWS_API_KEY`**: API key for NewsAPI.org 

# Screenshots
(coming soon)
