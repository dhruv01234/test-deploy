<template>
  <q-page class="column items-center justify-evenly q-pa-md">
    <div class="text-center q-mb-lg">

      <!-- sidhbcuibdcb -->
      <h1 class="responsive-title">Cybersecurity</h1>
      <q-img src="~assets/cybersecurity.avif" alt="Cybersecurity" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
      <p class="responsive-text">Protect your digital assets with our comprehensive cybersecurity solutions designed to safeguard your business from threats.</p>
    </div>
    <div class="text-center q-mb-lg">
      <h2 class="responsive-subtitle">Cybersecurity Applications</h2>
      <p class="responsive-text">Explore the various applications of Cybersecurity in different industries, from healthcare to finance.</p>
    </div>
    <div class="row items-center justify-between responsive-section">
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/cyber_healthcare.png" alt="Cybersecurity in Healthcare" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>Cybersecurity in Healthcare:</strong>
            <span style="margin-top: 10px; display: block;">Ensuring patient data protection and compliance with industry standards.</span>
          </div>
        </div>
      </q-card>
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/cyber_finance.webp" alt="Cybersecurity in Finance" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>Cybersecurity in Finance:</strong>
            <span style="margin-top: 10px; display: block;">Protecting financial data and transactions with advanced security measures.</span>
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
