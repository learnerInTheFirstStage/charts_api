Chars Project

This project consists of two main parts:

1. Next.js Frontend (my-dashboard) - Displays various charts (Candlestick, Line, Bar, Pie).
2. Django API Backend (show_chars) - Provides chart data through API endpoints.

The goal is to create a basic dashboard page in the Next.js application that fetches data from the Django backend and dynamically displays it in various charts using Chart.js.

Features

Frontend:
    Next.js-based dashboard.
    Charts rendered using Chart.js via react-chartjs-2.
    Dynamic data fetching from the Django backend using Axios.
Backend:
    Django API with hardcoded chart data.
    Endpoints for different types of charts (Candlestick, Line, Bar, Pie).

API Endpoints

Each chart fetches data from the corresponding Django API endpoint:
1. Candlestick Chart: /api/candlestick-data/
2. Line Chart: /api/line-chart-data/
3. Bar Chart: /api/bar-chart-data/
4. Pie Chart: /api/pie-chart-data/
The data is hardcoded in JSON format but follows a structure that Chart.js expects.
