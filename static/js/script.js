
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "dashboard.html";
});


document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Account created successfully!");
  window.location.href = "index.html";
});


function googleLogin() {
  alert("Google login clicked!");
  window.location.href = "dashboard.html";
}


function otpLogin() {
  alert("OTP sent to your mobile!");
  window.location.href = "dashboard.html";
}
function Feature() {

  window.location.href = "dashboard.html";
}


function logout() {
  window.location.href = "index.html";
}



function showFeatureDetail(feature) {
  switch (feature) {
    case 'soil':
      alert("🔬 Soil Health Advisory:\nGet insights about soil quality & fertilizer recommendations.");
      break;

    case 'pest':
      alert("🐛 Pest & Disease Detection:\nUpload crop images for AI-powered diagnosis.");
      break;

    case 'crop':
      alert("🌱 Crop Recommendation:\nDiscover the best crops based on soil & weather.");
      break;

    case 'market':
      alert("💰 Market Prices:\nCheck real-time mandi rates & price trends.");
      break;

    case 'weather':
      alert("🌦 Weather Forecasts:\nStay updated with accurate forecasts & alerts.");
      break;

    case 'voice':
      alert("🎤 Voice Support:\nAsk questions in your language using voice input.");
      break;

    case 'chatbot':
      alert("🤖 AI Advisory Chatbot:\nGet instant answers to your farming queries.");
      break;

    case 'tips':
      alert("💡 Quick Tips:\nDaily farming advice to boost productivity.");
      break;

    case 'community':
      alert("👥 Farmer Community:\nConnect, share & learn with other farmers.");
      break;

    default:
      alert("Feature coming soon!");
  }
}



function toggleChat() {
  const chatWindow = document.getElementById('chatWindow');
  if (chatWindow.style.display === 'flex') {
    chatWindow.style.display = 'none';   
  } else {
    chatWindow.style.display = 'flex';   
  }
}

function sendMessage() {
  const input = document.getElementById('queryInput');
  const chatBody = document.getElementById('chatBody');
  const message = input.value.trim();

  if (message) {

    const userMsg = document.createElement('div');
    userMsg.className = "chat-message user";
    userMsg.innerText = message;
    chatBody.appendChild(userMsg);

   
    const botMsg = document.createElement('div');
    botMsg.className = "chat-message bot";

    if (message.toLowerCase().includes("hello")) {
      botMsg.innerText = "Hi! 🌱 Do you want crop, weather, or soil info?";
    } else if (message.toLowerCase().includes("crop")) {
      botMsg.innerText = "🌾 Suggested crop: Wheat or Rice based on your season.";
    } else if (message.toLowerCase().includes("weather")) {
      botMsg.innerText = "☀️ Weather looks sunny today, good for field work!";
    } else if (message.toLowerCase().includes("soil")) {
      botMsg.innerText = "🧪 Soil health tip: Add compost for better fertility.";
    } else {
      botMsg.innerText = "🤖 Sorry, I only know about crops, soil & weather now.";
    }

    chatBody.appendChild(botMsg);

  
    chatBody.scrollTop = chatBody.scrollHeight;


    input.value = "";
  }
}

function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser doesn't support speech recognition.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN"; 
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("queryInput").value = transcript;
    sendMessage();
  };

  recognition.onerror = function(event) {
    console.error("Speech recognition error:", event.error);
  };

  recognition.onend = function() {
    console.log("Speech recognition ended.");
  };
}


