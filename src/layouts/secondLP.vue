<template>
  <q-layout view="lHh LpR lFf">
    <div class="header row justify-between items-center">
      <div class="header-left">
        <q-btn icon="menu" @click="drawer = !drawer" label="Opusify" flat class="cursor-pointer animated" />
        <q-drawer v-model="drawer" side="left">
          <div class="row bg-teal justify-start items-center q-pa-md">
            <q-btn icon="menu" @click="drawer = !drawer" flat class="cursor-pointer animated text-white row justify-start"/>
            <span class="text-white text-bold">Opusify</span>
          </div>
          <q-list class="text-color text-bold q-pa-md">
            <q-item clickable v-ripple @click="navigateTo('')">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="navigateTo_scroll('','about')">
              <q-item-section>About Us</q-item-section>
            </q-item>
            <q-expansion-item label="Products">
              <q-list>
                <q-item clickable v-ripple @click="navigateTo('ai')">
                  <q-item-section>Artificial Intelligence</q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="navigateTo('ml')">
                  <q-item-section>Machine Learning</q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="navigateTo('cyber')">
                  <q-item-section>Cybersecurity</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <!-- <q-item clickable v-ripple @click="navigateTo('help')">
              <q-item-section>Help</q-item-section>
            </q-item> -->
            <q-item clickable v-ripple @click="navigateTo_scroll('','cta')">
              <q-item-section>Contact</q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="scrollToSection('signin')">
              <q-item-section>
                <q-btn color="white text-teal" label="Sign In" rounded class="cursor-pointer animated" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="scrollToSection('signup')">
              <q-item-section>
                <q-btn color="teal" label="Sign Up" rounded class="cursor-pointer animated" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
      </div>
      <div class="header-options" v-if="$q.screen.gt.xs">
        <!-- <span class="cursor-pointer animated" @click="navigateTo_scroll('','home')">Home</span> -->
        <span class="cursor-pointer animated" @click="navigateTo_scroll('','about')">About Us</span>
        <span class="cursor-pointer animated" @click="navigateTo_scroll('','services')">Products</span>
        <span class="cursor-pointer animated" @click="navigateTo_scroll('','cta')">Contact</span>
      </div>
      <div></div>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
      <div id="footer" class="footer q-mt-lg responsive-footer full-width">
        <div class="footer-left">
          <p>Contact us: [Contact Information]</p>
          <p>Follow us: [Social Media Links]</p>
          <p>Disclaimer: [Brief Disclaimer or Privacy Policy]</p>
        </div>
        <div class="footer-right">
          <p>Address: 1234 Innovation Drive, Tech City, TX 75001</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@opusify.com</p>
        </div>
      </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const router = useRouter();

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const navigateTo = (path: string) => {
  router.push(`/${path}`);
};

const navigateTo_scroll = async (path: string, id: string) => {
  if (router.currentRoute.value.path === '/') {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    await router.push(`/${path}`);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500); // Adjust the delay time as needed
  }
};
</script>

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
