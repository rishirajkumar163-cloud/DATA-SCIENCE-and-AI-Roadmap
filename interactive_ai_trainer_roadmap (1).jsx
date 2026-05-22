<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Trainer Roadmap</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #eef2ff, #f8fafc);
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #1e3a8a;
      margin-bottom: 30px;
    }

    .phase {
      background: white;
      border-radius: 15px;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .phase-header {
      padding: 20px;
      cursor: pointer;
      background: #4f46e5;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      font-weight: bold;
    }

    .content {
      display: none;
      padding: 20px;
      background: #f8fafc;
    }

    .box {
      background: white;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 15px;
      border-left: 5px solid #4f46e5;
    }

    ul {
      padding-left: 20px;
    }

    .tag {
      display: inline-block;
      background: #dbeafe;
      color: #1e40af;
      padding: 5px 10px;
      border-radius: 20px;
      margin: 5px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <h1>🚀 Data Science + AI Engineer Training Roadmap</h1>

  <div class="phase">
    <div class="phase-header" onclick="toggleContent(this)">
      <span>📘 Phase 1: Foundation Building</span>
      <span>Week 1-2</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>Topics Covered</h3>
        <span class="tag">Python Basics</span>
        <span class="tag">Loops</span>
        <span class="tag">Functions</span>
        <span class="tag">GitHub</span>
        <span class="tag">Jupyter Notebook</span>
      </div>

      <div class="box">
        <h3>Practical Activities</h3>
        <ul>
          <li>Calculator Project</li>
          <li>Student Management System</li>
          <li>Daily Coding Practice</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-header" onclick="toggleContent(this)">
      <span>📊 Phase 2: Data Analysis</span>
      <span>Week 3-4</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>Topics Covered</h3>
        <span class="tag">NumPy</span>
        <span class="tag">Pandas</span>
        <span class="tag">EDA</span>
        <span class="tag">Data Cleaning</span>
      </div>

      <div class="box">
        <h3>Practical Activities</h3>
        <ul>
          <li>Sales Dashboard</li>
          <li>Student Data Analysis</li>
          <li>Visualization Charts</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-header" onclick="toggleContent(this)">
      <span>🤖 Phase 3: Machine Learning</span>
      <span>Week 5-7</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>Topics Covered</h3>
        <span class="tag">Regression</span>
        <span class="tag">Decision Trees</span>
        <span class="tag">Random Forest</span>
        <span class="tag">K-Means</span>
      </div>

      <div class="box">
        <h3>Practical Activities</h3>
        <ul>
          <li>House Price Prediction</li>
          <li>Student Performance Predictor</li>
          <li>Model Accuracy Testing</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-header" onclick="toggleContent(this)">
      <span>🧠 Phase 4: Generative AI & RAG</span>
      <span>Week 8-9</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>Topics Covered</h3>
        <span class="tag">OpenAI APIs</span>
        <span class="tag">Prompt Engineering</span>
        <span class="tag">Embeddings</span>
        <span class="tag">Vector Database</span>
      </div>

      <div class="box">
        <h3>Practical Activities</h3>
        <ul>
          <li>AI Chatbot</li>
          <li>PDF Assistant</li>
          <li>Prompt Optimization</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="phase">
    <div class="phase-header" onclick="toggleContent(this)">
      <span>🚀 Phase 5: Deployment & Final Projects</span>
      <span>Week 10</span>
    </div>
    <div class="content">
      <div class="box">
        <h3>Topics Covered</h3>
        <span class="tag">Streamlit</span>
        <span class="tag">FastAPI</span>
        <span class="tag">Deployment</span>
        <span class="tag">Documentation</span>
      </div>

      <div class="box">
        <h3>Practical Activities</h3>
        <ul>
          <li>Deploy ML Application</li>
          <li>Create Dashboard</li>
          <li>Capstone Project</li>
        </ul>
      </div>
    </div>
  </div>

  <script>
    function toggleContent(element) {
      const content = element.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  </script>

</body>
</html>
