<template>
  <q-page class="column items-center justify-evenly q-pa-md">
    <!-- adcdac -->
    <div class="text-center q-mb-lg">
      <h1 class="responsive-title">Artificial Intelligence</h1>
      <q-img src="~assets/ai.jpg" alt="Artificial Intelligence" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
      <p class="responsive-text">Leverage advanced AI technologies to automate processes and enhance decision-making.</p>
    </div>
    <div class="text-center q-mb-lg">
      <h2 class="responsive-subtitle">AI Applications</h2>
      <p class="responsive-text">Explore the various applications of AI in different industries, from healthcare to finance.</p>
    </div>
    <div class="row items-center justify-between responsive-section">
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/ai_healthcare.png" alt="AI in Healthcare" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>AI in Healthcare:</strong>
            <span style="margin-top: 10px; display: block;">Revolutionizing patient care and diagnostics with AI-driven solutions.</span>
          </div>
        </div>
      </q-card>
      <q-card class="q-mb-md q-pa-md responsive-card">
        <div class="column items-center justify-between">
          <q-img src="~assets/ai_finance.png" alt="AI in Finance" class="responsive-img" fit="cover" style="width: 100%; height: 200px;"/>
          <div class="text-center" style="margin-top: 20px;">
            <strong>AI in Finance:</strong>
            <span style="margin-top: 10px; display: block;">Enhancing financial analysis and decision-making with AI technologies.</span>
          </div>
        </div>
      </q-card>
    </div>
    <div class="text-center q-mb-lg">
      <q-btn @click="generateVideo" label="Generate AI Video" color="primary" />
    </div>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue';
import axios from 'axios';

const generateVideo = async () => {
  const url = 'http://localhost:3000/api/generate-video';
  const payload = {
    prompt: 'Create a video about the benefits of AI in healthcare.',
    voice: 'male',
  };
  try {
    const response = await axios.post(url, payload);
    console.log('Video generation started:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

// const generateVideo = async () => {
//   const url = 'https://www.veed.io/text-to-video-api/generate/async';

//   // const url = 'https://www.veed.io/text-to-video-ap/api/generate/async';
//   const payload = {
//     prompt: 'Create a video about the benefits of AI in healthcare.',
//     voice: 'male'
//   };
//   try {
//     const response = await axios.post(url, payload, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     if (response.status === 200) {
//   console.log('Response Data:', response.data);
//   const videoId = response.data.project?.link; // Use optional chaining to avoid crashes if project is undefined
//   if (videoId) {
//     await pollVideoStatus(videoId);
//   } else {
//     console.error('Error: Video ID not found in response.');
//   }
// }
//     // if (response.status === 200) {
//     //   console.log('Video generation started successfully.');
//     //   console.log('Response:', response.data);
//     //   // Polling the status of the video generation
//     //   const videoId = response.data.project.link;
//     //   // console.log('Video ID:', response);
//     //   await pollVideoStatus(videoId);
//     // } else {
//     //   console.error('Failed to start video generation.');
//     //   console.error('Status Code:', response.status);
//     //   console.error('Response:', response.data);
//     // }
//   } catch (error) {
//     console.error('Error during API call:', error);
//   }
// };

const pollVideoStatus = async (videoId) => {
  const statusUrl = `https://www.veed.io/text-to-video-api/status/${videoId}`; // Construct the correct URL
  try {
    const statusResponse = await axios.get(statusUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Status Response:', statusResponse.data);
    if (statusResponse.status === 200) {
      const videoStatus = statusResponse.data.status;
      if (videoStatus === 'completed') {
        console.log('Video generation completed successfully.');
        console.log('Video URL:', statusResponse.data.video_url);
      } else if (videoStatus === 'processing') {
        console.log('Video is still processing. Checking again in 10 seconds...');
        setTimeout(() => pollVideoStatus(videoId), 10000);
      } else {
        console.error('Video generation failed.');
        console.error('Status:', videoStatus);
      }
    } else {
      console.error('Failed to get video status.');
      console.error('Status Code:', statusResponse.status);
    }
  } catch (error) {
    console.error('Error during status API call:', error);
  }
};

</script>

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
