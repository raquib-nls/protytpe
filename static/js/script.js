
// document.getElementById("loginForm")?.addEventListener("submit", function (e) {
//   e.preventDefault();
//   window.location.href = "dashboard.html";
// });


// document.getElementById("signupForm")?.addEventListener("submit", function (e) {
//   e.preventDefault();
//   alert("Account created successfully!");
//   window.location.href = "index.html";
// });


// function googleLogin() {
//   alert("Google login clicked!");
//   window.location.href = "dashboard.html";
// }


// function otpLogin() {
//   alert("OTP sent to your mobile!");
//   window.location.href = "dashboard.html";
// }
// function Feature() {

//   window.location.href = "features.html";
// }


// function logout() {
//   window.location.href = "index.html";
// }

// ✅ Run login check only on dashboard page
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("dashboard.html")) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
      alert("You must login first!");
      window.location.href = "login.html";
    }
  }
});

// ✅ Login form submit
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("isLoggedIn", "true"); // mark as logged in
  window.location.href = "dashboard.html";    // go to dashboard
});

// ✅ Signup form submit
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Account created successfully!");
  localStorage.setItem("isLoggedIn", "true"); // optional: auto-login after signup
  window.location.href = "index.html";        // go to home page
});

// ✅ Google login
function googleLogin() {
  alert("Google login clicked!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "dashboard.html"; // goes to dashboard
}

// ✅ OTP login
function otpLogin() {
  alert("OTP sent to your mobile!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html"; // redirect to home page
}

// ✅ Navigate to features
function Feature() {
  window.location.href = "features.html";
}

// ✅ Logout (clear login)
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}


// ✅ Logout
function logout() {
  // clear login session
  localStorage.removeItem("isLoggedIn");
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
    }
    else if  (message.toLowerCase().includes("hey")) {
      botMsg.innerText = "Hello how can i assist you. 😊";
    }
    else if (message.toLowerCase().includes("crop")) {
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



function detectPest() {
  // trigger hidden file input
  document.getElementById("pestImageInput").click();

  // when file is selected
  document.getElementById("pestImageInput").onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      alert("✅ Image selected: " + file.name + "\n(Here AI model would analyze pest/disease)");
    }
  }
}

function cropRecommendation() {
  // dummy recommendation
  const crops = ["Wheat 🌾", "Rice 🌿", "Maize 🌽", "Sugarcane 🍬", "Cotton 🌱"];
  const randomCrop = crops[Math.floor(Math.random() * crops.length)];
  alert("🌱 Recommended Crop for this season: " + randomCrop);
}

function marketPrice() {
  // dummy price data
  const prices = "📊 Market Prices Today:\n" +
                 "- Wheat: ₹2,185/quintal\n" +
                 "- Rice: ₹1,874/quintal\n" +
                 "- Maize: ₹1,632/quintal";
  alert(prices);
}
