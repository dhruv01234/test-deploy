<template>
    <q-page class="column items-center justify-evenly q-pa-md">
      <div id="home" class="text-center q-mb-lg">
        <h1 class="responsive-title">Innovative IT Engineering Solutions in Noida</h1>
        <h2 class="responsive-subtitle">Harness the Power of AI, Machine Learning, and Cybersecurity to Transform Your Business.</h2>
      </div>
      <div id="about" class="introduction q-mb-lg responsive-section">
        <p class="responsive-text">
          Welcome to <strong class="highlight">Opusify</strong>, where we provide <em>cutting-edge IT engineering services</em> tailored to meet the unique needs of your organization. Our team of experts is dedicated to delivering innovative solutions that drive efficiency and security.
        </p>
      </div>
      <div id="expertise" class="expertise row justify-center q-mb-lg">
        <h3 class="responsive-title">Our Expertise</h3>
        <div class="row items-center justify-between items-stretch responsive-cards">
          <q-card class="q-mb-md q-pa-md responsive-card">
            <div class="column items-center justify-between">
              <q-img src="~assets/ai.jpg" alt="Artificial Intelligence" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
              <div class="text-center" style="margin-top: 20px;">
                <strong>Artificial Intelligence:</strong>
                <span style="margin-top: 10px; display: block;">Leverage advanced AI technologies to automate processes and enhance decision-making.</span>
              </div>
            </div>
          </q-card>
          <q-card class="q-mb-md q-pa-md responsive-card">
            <div class="column items-center justify-between">
              <q-img src="~assets/ml.jpeg" alt="Machine Learning" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
              <div class="text-center" style="margin-top: 20px;">
                <strong>Machine Learning:</strong>
                <span style="margin-top: 10px; display: block;">Utilize machine learning algorithms to analyze data and predict trends, helping you stay ahead of the competition.</span>
              </div>
            </div>
          </q-card>
          <q-card class="q-mb-md q-pa-md responsive-card">
            <div class="column items-center justify-between">
              <q-img src="~assets/cybersecurity.avif" alt="Cybersecurity" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
              <div class="text-center" style="margin-top: 20px;">
                <strong>Cybersecurity:</strong>
                <span style="margin-top: 10px; display: block;">Protect your digital assets with our comprehensive cybersecurity solutions designed to safeguard your business from threats.</span>
              </div>
            </div>
          </q-card>
        </div>
      </div>
      <div class="row q-mb-lg responsive-section" style="background: #e0f7fa; padding: 30px;">
        <div id="services" class="services col-12 col-md-6" style="padding: 30px;">
          <h3 class="responsive-title">Services Offered</h3>
          <ul class="responsive-list">
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Consulting Services:</strong> Tailored advice to help you implement the latest technologies effectively.
            </li>
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Custom Software Development:</strong> Building bespoke software solutions that align with your business goals.
            </li>
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Data Analysis and Visualization:</strong> Transforming raw data into actionable insights through advanced analytics.
            </li>
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Training and Support:</strong> Ensuring your team is equipped with the knowledge to utilize new technologies effectively.
            </li>
          </ul>
        </div>
        <div id="projects" class="projects col-12 col-md-6" style="padding: 30px;">
          <h3 class="responsive-title">Latest Projects</h3>
          <ul class="responsive-list">
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">AI-Driven Chatbot for Customer Support:</strong> Developed a chatbot that improved response time by 50%.
            </li>
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Machine Learning Model for Predictive Analytics:</strong> Implemented a model that increased sales forecasting accuracy by 30%.
            </li>
            <li class="responsive-list-item">
              <strong style="color: #007BFF;">Cybersecurity Framework for Local Businesses:</strong> Established robust security protocols for over 100 local companies.
            </li>
          </ul>
        </div>
      </div>
      <div id="cta" class="cta q-mb-lg responsive-section" style="background: linear-gradient(135deg, #E0F7FA, #80deea); padding: 40px; border-radius: 15px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <q-img src="~assets/consultation.jpg" alt="Consultation Image" fit="cover" style="width: 100%;height:40vh;max-height:300px; border-radius: 15px;"/>
        <h3 class="responsive-title">Schedule a Free Consultation Today!</h3>
        <p class="responsive-text">Ready to take your IT capabilities to the next level? Contact us to discuss how our services can benefit your organization.</p>
        <q-btn color="primary" label="Book Your Consultation Now" rounded @click="scrollToSection('contact')" class="responsive-btn" />
      </div>
      <div id="visual-elements" class="visual-elements q-mb-lg">
        <q-img src="src/assets/img.jpg" alt="Team Image" class="responsive-img" fit="contain"/>
        <!-- <video controls class="responsive-video">
          <source src="~assets/intro.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video> -->
      </div>
      <div id="trust-elements" class="trust-elements q-mb-lg row responsive-section" style="border-radius: 15px; text-align: center;">
        <div class="col-12 col-md-6" style="background: #b2ebf2; padding: 20px;">
          <h3 class="responsive-title">Testimonials</h3>
          <blockquote class="responsive-blockquote">Opusify transformed our business with their innovative AI solutions. Highly recommend!" - Satisfied Client</blockquote>
        </div>
        <div class="col-12 col-md-6" style="background: #80deea; padding: 20px;">
          <h3 class="responsive-title">Certifications</h3>
          <p class="responsive-text">We are certified by leading industry standards and have partnerships with top technology providers.</p>
        </div>
      </div>
    </q-page>
</template>
<style lang="scss" scoped>
.header {
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-options {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.animated {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}

.text-center {
  text-align: center;
}

.q-mb-lg {
  margin-bottom: 2rem;
}

.q-mt-lg {
  margin-top: 2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

blockquote {
  font-style: italic;
  color: #555;
}

.footer {
  background-color: #f8f8f8;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ddd;
  width: 100%;
}

.footer p {
  margin: 0.5rem 0;
}

/* Responsive Styles */
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
  font-size: 1.2em;
  color: #004d40;
  margin-top: 10px;
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
}

.responsive-section {
  padding: 20px;
  @media (min-width: 768px) {
    padding: 30px;
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

.responsive-cards {
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.responsive-card {
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 30%;
    margin-bottom: 0;
  }
}

.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.responsive-list {
  list-style-type: none;
  padding: 0;
}

.responsive-list-item {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #004d40;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
}
.text-color{
  color: #004d40;
}

.responsive-btn {
  font-size: 1em;
  padding: 10px 20px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
}

.responsive-blockquote {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #004d40;
  margin-bottom: 20px;
  padding: 20px;
  background: #ffffff;
  border-left: 5px solid #007BFF;
  border-radius: 10px;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
}

.responsive-footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: #737576; /* Lighter background color for footer */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
}

.footer-left, .footer-right {
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
}

/* About Section Styles */
.introduction {
  background: linear-gradient(135deg, #f0f0f0, #c7d0f3);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.highlight {
  font-weight: bold;
  color: #007BFF;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
