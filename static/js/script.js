document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("dashboard.html")) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn !== "true") {
      alert("You must login first!");
      window.location.href = "login.html";
    }
  }
});

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "dashboard.html";
});

document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Account created successfully!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
});

function googleLogin() {
  alert("Google login clicked!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "dashboard.html";
}

function otpLogin() {
  alert("OTP sent to your mobile!");
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}

//NAVBAR
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    document.getElementById("nav-links").classList.remove("show");
  }
});

// HERO SECTION 
function fet(){
  window.location.href = "features.html";
}
function scrollToFeatures() {
  const featuresSection = document.getElementById("features");
  if (featuresSection) {
    featuresSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Hero p|| effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroBackground = document.querySelector(".hero-background");

  if (heroBackground && scrolled < window.innerHeight) {
    const rate = scrolled * -0.5;
    heroBackground.style.transform = `translateY(${rate}px)`;
  }
});

// FEATURES CARDS 
function showFeatureDetail(feature) {
  switch (feature) {
    case "soil":
      alert("🔬 Soil Health Advisory:\nGet insights about soil quality & fertilizer recommendations.");
      break;
    case "pest":
      alert("🐛 Pest & Disease Detection:\nUpload crop images for AI-powered diagnosis.");
      break;
    case "crop":
      alert("🌱 Crop Recommendation:\nDiscover the best crops based on soil & weather.");
      break;
    case "market":
      alert("💰 Market Prices:\nCheck real-time mandi rates & price trends.");
      break;
    case "weather":
      alert("🌦 Weather Forecasts:\nStay updated with accurate forecasts & alerts.");
      break;
    case "voice":
      alert("🎤 Voice Support:\nAsk questions in your language using voice input.");
      break;
    case "chatbot":
      alert("🤖 AI Advisory Chatbot:\nGet instant answers to your farming queries.");
      break;
    case "tips":
      alert("💡 Quick Tips:\nDaily farming advice to boost productivity.");
      break;
    case "community":
      alert("👥 Farmer Community:\nConnect, share & learn with other farmers.");
      break;
    default:
      alert("Feature coming soon!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const featureCards = document.querySelectorAll(".feature-card");

  featureCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Bounce 
      card.style.transform = "translateY(-15px) scale(0.98)";
      setTimeout(() => {
        card.style.transform = "";
      }, 150);

      // Find feature type by heading text
      const title = card.querySelector("h3").innerText.toLowerCase();
      if (title.includes("soil")) showFeatureDetail("soil");
      else if (title.includes("pest")) showFeatureDetail("pest");
      else if (title.includes("crop")) showFeatureDetail("crop");
      else if (title.includes("market")) showFeatureDetail("market");
      else if (title.includes("weather")) showFeatureDetail("weather");
      else if (title.includes("voice")) showFeatureDetail("voice");
      else if (title.includes("chatbot")) showFeatureDetail("chatbot");
      else if (title.includes("tips")) showFeatureDetail("tips");
      else if (title.includes("community")) showFeatureDetail("community");
    });
  });
});

// SMOOTH ANCHOR LINKS 
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// FADE-IN ON SCROLL 
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));

  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});

//  STATS COUNT
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target")) || 0; 
  let current = 0;
  const increment = target / 60;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }

    const displayValue = Math.floor(current);

    if (target >= 1000) {
      element.textContent = displayValue.toLocaleString(); 
    } else {
      element.textContent = displayValue ;
    }
  }, 16);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");

        statNumbers.forEach((stat, index) => {
          const targets = [22222, 500, 98];
          if (!stat.classList.contains("animated")) {
            stat.classList.add("animated");
            setTimeout(() => {
              animateCounter(stat, targets[index]);
            }, index * 200);
          }
        });
      }
    });
  },
  { threshold: 0.5 }
);

document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.querySelector(".stats-highlight");
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});



// chat part
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
  const msg = input.value.trim();

  if (msg) {

    const userMsg = document.createElement('div');
    userMsg.className = "chat-message user";
    userMsg.innerText = msg;
    chatBody.appendChild(userMsg);


    const botMsg = document.createElement('div');
    botMsg.className = "chat-message bot";

    if (msg.toLowerCase().includes("hello")) {
      botMsg.innerText = "Hi! 🌱 Do you want crop, weather, or soil info?";
    }
    else if (msg.toLowerCase().includes("hey")) {
      botMsg.innerText = "Hello how can i assist you. 😊";
    }
    else if (msg.toLowerCase().includes("crop")) {
      botMsg.innerText = "🌾 Suggested crop: Wheat or Rice based on your season.";
    } else if (msg.toLowerCase().includes("weather")) {
      botMsg.innerText = "☀️ Weather looks sunny today, good for field work!";
    } else if (msg.toLowerCase().includes("soil")) {
      botMsg.innerText = "🧪 Soil health tip: Add compost for better fertility.";
    } else {
      botMsg.innerText = "🤖 Sorry, I only know about crops, soil & weather now.";
    }

    chatBody.appendChild(botMsg);


    chatBody.scrollTop = chatBody.scrollHeight;


    input.value = "";
  }
}

let rec; 
let isListening = false;

function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser doesn't support speech recognition.");
    return;
  }

  // Stop 
  if (isListening) {
    rec.stop();
    isListening = false;
    console.log("Voice input stopped.");
    return;
  }
// to create if not 
  if (!rec) {
    rec = new webkitSpeechRecognition();
    rec.lang = "en-IN";
    rec.continuous = false;
    rec.interimResults = false;

    rec.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById("queryInput").value = transcript;
      sendMessage();
    };

    rec.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
      isListening = false;
    };

    rec.onend = function () {
      console.log("Speech recognition ended.");
      isListening = false;
    };
  }

  
  rec.start();
  isListening = true;
  console.log("Voice input started...");
}




function detectPest() {

  document.getElementById("pestImageInput").click();


  document.getElementById("pestImageInput").onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
      alert("Crop Check Done!\n\n• Problem: Small bugs eating leaves\n• Issue: Dark spots on leaves\n• Solution: Use pest spray + plant nutrients\n\nSee step-by-step help below.");
    }
  }
}

function cropRecommendation() {

  const crops = ["Wheat 🌾", "Rice 🌿", "Maize 🌽", "Sugarcane 🍬", "Cotton 🌱"];
  const randomCrop = crops[Math.floor(Math.random() * crops.length)];
  alert("🌱 Recommended Crop for this season: " + randomCrop);
}

function marketPrice() {

  const prices = "📊 Market Prices Today:\n" +
    "- Wheat: ₹2,185/quintal\n" +
    "- Rice: ₹1,874/quintal\n" +
    "- Maize: ₹1,632/quintal";
  alert(prices);
}


// translate part
const translations = {
  en: {

    hero_title: "Welcome to Fasal Mitra",
    hero_subtitle: "Your trusted companion for modern farming. Get expert advice, weather updates, market prices, and crop recommendations all in one place.",
    hero_cta: "Start Your Farming Journey",

    features_header: "Comprehensive Farming Solutions",
    features_subheader: "Empowering farmers with cutting-edge technology and personalized agricultural guidance",
    feature_soil_title: "Soil Health Advisory",
    feature_soil_desc: "Get personalized soil analysis and fertilizer recommendations based on your farm's specific needs.",
    feature_pest_title: "Pest & Disease Detection",
    feature_pest_desc: "Upload crop images for AI-powered disease diagnosis and treatment recommendations.",
    feature_crop_title: "Crop Recommendation",
    feature_crop_desc: "Discover the best crops for your location, soil type, and current weather conditions.",
    feature_market_title: "Market Prices",
    feature_market_desc: "Stay updated with real-time mandi rates and price trends for better selling decisions.",
    feature_weather_title: "Weather Forecasts",
    feature_weather_desc: "Get accurate weather predictions and agricultural alerts for your region.",
    feature_voice_title: "Voice Support",
    feature_voice_desc: "Ask questions using your voice in your preferred language for easy access to information.",
    feature_chatbot_title: "AI Advisory Chatbot",
    feature_chatbot_desc: "Get instant answers to your farming queries through our multilingual AI assistant.",
    feature_tips_title: "Quick Tips",
    feature_tips_desc: "Daily farming tips and best practices to improve your crop yield and farm management.",
    feature_community_title: "Farmer Community",
    feature_community_desc: "Connect with fellow farmers, share experiences, and learn from each other.",


    stats_title: "Empowering Farmers Across India",
    stats_farmers: "Active Farmers",
    stats_districts: "Districts Covered",
    stats_queries: "Queries Resolved",
    stats_satisfaction: "Farmer Satisfaction"
  },

  hi: {

    hero_title: "फसल मित्र में आपका स्वागत है",
    hero_subtitle: "आधुनिक खेती के लिए आपका भरोसेमंद साथी। विशेषज्ञ सलाह, मौसम की जानकारी, मंडी भाव और फसल सुझाव सब एक जगह।",
    hero_cta: "अपनी खेती की यात्रा शुरू करें",

    features_header: "व्यापक खेती समाधान",
    features_subheader: "किसानों को अत्याधुनिक तकनीक और व्यक्तिगत कृषि मार्गदर्शन के साथ सशक्त बनाना",
    feature_soil_title: "मिट्टी स्वास्थ्य सलाह",
    feature_soil_desc: "आपके खेत की ज़रूरत के अनुसार मिट्टी विश्लेषण और उर्वरक सुझाव प्राप्त करें।",
    feature_pest_title: "कीट और रोग पहचान",
    feature_pest_desc: "एआई आधारित रोग पहचान और उपचार सिफारिशों के लिए फसल की छवियां अपलोड करें।",
    feature_crop_title: "फसल सिफारिश",
    feature_crop_desc: "अपने स्थान, मिट्टी के प्रकार और मौजूदा मौसम के अनुसार सबसे अच्छी फसल खोजें।",
    feature_market_title: "मंडी भाव",
    feature_market_desc: "बेहतर बिक्री निर्णयों के लिए रियल-टाइम मंडी दरों और मूल्य रुझानों के साथ अपडेट रहें।",
    feature_weather_title: "मौसम पूर्वानुमान",
    feature_weather_desc: "अपने क्षेत्र के लिए सटीक मौसम पूर्वानुमान और कृषि अलर्ट प्राप्त करें।",
    feature_voice_title: "वॉइस समर्थन",
    feature_voice_desc: "आसानी से जानकारी प्राप्त करने के लिए अपनी पसंदीदा भाषा में अपनी आवाज़ का उपयोग करें।",
    feature_chatbot_title: "एआई सलाहकार चैटबॉट",
    feature_chatbot_desc: "हमारे बहुभाषी एआई सहायक के माध्यम से अपनी कृषि प्रश्नों के त्वरित उत्तर प्राप्त करें।",
    feature_tips_title: "त्वरित सुझाव",
    feature_tips_desc: "अपनी फसल की उपज और खेत प्रबंधन में सुधार के लिए दैनिक खेती के सुझाव और सर्वोत्तम प्रथाएं।",
    feature_community_title: "किसान समुदाय",
    feature_community_desc: "अन्य किसानों से जुड़ें, अनुभव साझा करें और एक-दूसरे से सीखें।",


    stats_title: "भारत भर के किसानों को सशक्त बना रहे हैं",
    stats_farmers: "सक्रिय किसान",
    stats_districts: "कवर किए गए जिले",
    stats_queries: "सुलझाए गए प्रश्न",
    stats_satisfaction: "किसान संतुष्टि"
  },

  pa: {

    hero_title: "ਫਸਲ ਮਿੱਤਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
    hero_subtitle: "ਆਧੁਨਿਕ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਭਰੋਸੇਮੰਦ ਸਾਥੀ। ਮਾਹਰ ਸਲਾਹ, ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ, ਮੰਡੀ ਭਾਅ ਅਤੇ ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ ਸਭ ਇੱਕ ਹੀ ਥਾਂ ਤੇ।",
    hero_cta: "ਆਪਣੀ ਖੇਤੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ",

    features_header: "ਵਿਆਪਕ ਖੇਤੀ ਸੌਲਿਊਸ਼ਨ",
    features_subheader: "ਕਿਸਾਨਾਂ ਨੂੰ ਅਧੁਨਿਕ ਤਕਨਾਲੋਜੀ ਅਤੇ ਨਿੱਜੀ ਕਿਸਾਨੀ ਮਾਰਗਦਰਸ਼ਨ ਨਾਲ ਮਜ਼ਬੂਤ ਬਣਾਉਣਾ",

    feature_soil_title: "ਮਿੱਟੀ ਸਿਹਤ ਸਲਾਹ",
    feature_soil_desc: "ਤੁਹਾਡੇ ਖੇਤ ਦੀਆਂ ਜ਼ਰੂਰਤਾਂ ਅਨੁਸਾਰ ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਖਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ।",
    feature_pest_title: "ਕੀੜੇ ਅਤੇ ਬਿਮਾਰੀ ਪਛਾਣ",
    feature_pest_desc: "ਏਆਈ ਆਧਾਰਿਤ ਬਿਮਾਰੀ ਪਛਾਣ ਅਤੇ ਇਲਾਜ ਸਿਫਾਰਸ਼ਾਂ ਲਈ ਫਸਲ ਦੀਆਂ ਤਸਵੀਰਾਂ ਅਪਲੋਡ ਕਰੋ।",
    feature_crop_title: "ਫਸਲ ਸਿਫਾਰਸ਼",
    feature_crop_desc: "ਆਪਣੀ ਜਗ੍ਹਾ, ਮਿੱਟੀ ਦੇ ਪ੍ਰਕਾਰ ਅਤੇ ਮੌਜੂਦਾ ਮੌਸਮ ਅਨੁਸਾਰ ਸਭ ਤੋਂ ਵਧੀਆ ਫਸਲ ਖੋਜੋ।",
    feature_market_title: "ਮੰਡੀ ਭਾਅ",
    feature_market_desc: "ਵਧੀਆ ਵਿਕਰੀ ਫੈਸਲੇ ਲਈ ਰੀਅਲ-ਟਾਈਮ ਮੰਡੀ ਦਰਾਂ ਅਤੇ ਕੀਮਤ ਰੁਝਾਨਾਂ ਨਾਲ ਅਪਡੇਟ ਰਹੋ।",
    feature_weather_title: "ਮੌਸਮ ਭਵਿੱਖਵਾਣੀ",
    feature_weather_desc: "ਆਪਣੇ ਖੇਤਰ ਲਈ ਸਹੀ ਮੌਸਮ ਪੇਸ਼ਗੋਈ ਅਤੇ ਕਿਸਾਨ ਅਲਰਟ ਪ੍ਰਾਪਤ ਕਰੋ।",
    feature_voice_title: "ਵੌਇਸ ਸਹਾਇਤਾ",
    feature_voice_desc: "ਸੂਚਨਾ ਤੱਕ ਆਸਾਨੀ ਨਾਲ ਪਹੁੰਚ ਲਈ ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾਸ਼ਾ ਵਿੱਚ ਆਪਣੀ ਆਵਾਜ਼ ਵਰਤੋਂ।",
    feature_chatbot_title: "ਏਆਈ ਸਲਾਹਕਾਰ ਚੈਟਬੌਟ",
    feature_chatbot_desc: "ਸਾਡੇ ਬਹੁਭਾਸ਼ੀ ਏਆਈ ਸਹਾਇਕ ਰਾਹੀਂ ਆਪਣੀਆਂ ਖੇਤੀ ਸੰਬੰਧੀ ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਤੁਰੰਤ ਜਵਾਬ ਪ੍ਰਾਪਤ ਕਰੋ।",
    feature_tips_title: "ਤੇਜ਼ ਸੁਝਾਅ",
    feature_tips_desc: "ਦੈਨਿਕ ਖੇਤੀ ਦੇ ਸੁਝਾਅ ਅਤੇ ਸਰਵੋਤਮ ਅਭਿਆਸ ਆਪਣੀ ਫਸਲ ਉਤਪਾਦਨ ਅਤੇ ਖੇਤ ਪ੍ਰਬੰਧਨ ਵਿੱਚ ਸੁਧਾਰ ਲਈ।",
    feature_community_title: "ਕਿਸਾਨ ਭਾਈਚਾਰਾ",
    feature_community_desc: "ਹੋਰ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ, ਅਨੁਭਵ ਸਾਂਝੇ ਕਰੋ ਅਤੇ ਇਕ ਦੂਜੇ ਤੋਂ ਸਿੱਖੋ।",


    stats_title: "ਭਾਰਤ ਭਰ ਦੇ ਕਿਸਾਨਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਬਣਾ ਰਹੇ ਹਾਂ",
    stats_farmers: "ਸਕ੍ਰਿਯ ਕਿਸਾਨ",
    stats_districts: "ਕਵਰ ਕੀਤੇ ਜ਼ਿਲ੍ਹੇ",
    stats_queries: "ਹੱਲ ਕੀਤੇ ਗਏ ਪ੍ਰਸ਼ਨ",
    stats_satisfaction: "ਕਿਸਾਨ ਸੰਤੁਸ਼ਟੀ"
  }
};


function changeLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    let key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

 document.addEventListener("DOMContentLoaded", () => {
      const langSelector = document.getElementById("languageSelector");
      if(langSelector){
        langSelector.addEventListener("change", (e) => {
          changeLanguage(e.target.value);
        });
      }
      changeLanguage("en"); 
    });
