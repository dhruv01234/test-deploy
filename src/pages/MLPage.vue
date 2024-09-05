<template>
  <q-page class="column items-center justify-evenly q-pa-md">
    <div class="text-center q-mb-lg">
      <h1 class="responsive-title">Machine Learning</h1>
      <q-img src="~assets/ml.jpeg" alt="Machine Learning" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
      <p class="responsive-text">Utilize machine learning algorithms to analyze data and predict trends, helping you stay ahead of the competition.</p>
    </div>
    <div class="text-center q-mb-lg">
      <h2 class="responsive-subtitle">ML Applications</h2>
      <p class="responsive-text">Explore the various applications of Machine Learning in different industries, from healthcare to finance.</p>
    </div>
    <div class="row items-center justify-between responsive-section">
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/ml_healthcare.jpeg" alt="AI in Healthcare" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>ML in Healthcare:</strong>
            <span style="margin-top: 10px; display: block;">Revolutionizing patient care and diagnostics with ML-driven solutions.</span>
          </div>
        </div>
      </q-card>
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/ml_finance.jpg" alt="ML in Finance" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>ML in Finance:</strong>
            <span style="margin-top: 10px; display: block;">Enhancing financial analysis and decision-making with ML technologies.</span>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.responsive-title {
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  color: #00796b;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 3em;
  }
}

.responsive-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  color: #004d40;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 2em;
  }
}

.responsive-text {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #333;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.responsive-section {
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
}

.responsive-card {
  width: 100%;
  @media (min-width: 768px) {
    width: 45%;
  }
}
</style>
