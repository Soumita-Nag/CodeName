<script setup>
  import HomePage from './pages/HomePage.vue';
  import gridTeam from './pages/gridTeam.vue';
  import gridLeader from './pages/gridLeader.vue';
  import CreateRoom from './components/CreateRoom.vue';
  import JoinRoom from './components/JoinRoom.vue';
  import {ref,reactive,onMounted} from 'vue';
  const wordList = ["apple", "banana", "ball", "bat", "car", "dog", "cat", "house", "tree", "sun",
  "moon", "star", "book", "pen", "pencil", "table", "chair", "shirt", "shoe", "cup",
  "glass", "plate", "bottle", "phone", "computer", "mouse", "keyboard", "bag", "box", "fan",
  "light", "clock", "door", "window", "bus", "train", "road", "bridge", "river", "sea",
  "sky", "cloud", "rain", "snow", "fire", "ice", "sand", "stone", "mountain", "hill",
  "chai", "rickshaw", "biryani", "kurta", "diya", "rangoli", "namaste", "puja", "mandir", "temple",
  "pani", "dosa", "samosa", "gulab", "jalebi", "lakshmi", "ganesha", "holi", "diwali", "namak",
  "mirchi", "roti", "dal", "sabzi", "thali", "ladoo", "kachori", "pav", "bhaji", "chappal",
  "cycle", "lorry", "railway", "passport", "aadhar", "bazaar", "toffee", "station", "metro", "ticket",
  "note", "coin", "rupee", "bank", "school", "teacher", "student", "uniform", "exam", "result",
  "music", "movie", "actor", "dance", "cricket", "football", "player", "team", "match", "goal",
  "score", "coach", "batting", "bowling", "stadium", "audience", "fan", "medal", "game", "win",
  "loss", "draw", "umpire", "referee", "practice", "training", "kit", "trophy", "champion", "race",
  "finish", "start", "track", "event", "parade", "flag", "anthem", "drum", "beat", "rhythm",
  "curry", "mango", "festival", "idol", "temple", "god", "photo", "selfie", "video", "camera",
  "charger", "plug", "cable", "wifi", "router", "signal", "app", "mobile", "android", "iphone",
  "website", "link", "page", "username", "password", "login", "logout", "profile", "message", "call",
  "email", "inbox", "reply", "forward", "attachment", "file", "folder", "laptop", "monitor", "screen",
  "speaker", "mic", "desk", "office", "boss", "manager", "job", "work", "salary", "hike",
  "bonus", "leave", "holiday", "weekend", "movie", "serial", "episode", "channel", "remote", "TV",
  "news", "anchor", "debate", "politics", "minister", "leader", "speech", "vote", "election", "campaign",
  "rally", "crowd", "police", "traffic", "signal", "jam", "roadblock", "helmet", "license", "petrol",
  "diesel", "engine", "tyre", "horn", "garage", "mechanic", "schoolbag", "chalk", "board", "homework",
  "subject", "maths", "science", "history", "geography", "civics", "marks", "result", "parents", "guardian",
  "tuition", "coaching", "exam", "topper", "fail", "pass", "degree", "college", "hostel", "room",
  "canteen", "mess", "friends", "group", "party", "function", "marriage", "bride", "groom", "saree",
  "sherwani", "mehendi", "haldi", "baraat", "dance", "song", "DJ", "gift", "sweets", "chocolate",
  "laddu", "barfi", "rasgulla", "chaiwala", "sabjiwala", "doodhwala", "mechanic", "plumber", "carpenter", "driver",
  "guard", "peon", "teacher", "doctor", "nurse", "chemist", "hospital", "clinic", "ambulance", "injection",
  "tablet", "medicine", "bandage", "fever", "cough", "cold", "headache", "stomach", "pain", "injury",
  "wound", "blood", "report", "test", "scan", "x-ray", "operation", "surgery", "recovery", "fitness",
  "gym", "yoga", "exercise", "weight", "diet", "health", "body", "mind", "stress", "sleep",
  "dream", "nightmare", "bed", "pillow", "blanket", "fan", "AC", "cooler", "fridge", "oven",
  "stove", "plate", "spoon", "bowl", "knife", "pan", "kadai", "cooker", "tiffin", "bottle",
  "lunch", "dinner", "breakfast", "snack", "tea", "coffee", "milk", "water", "juice", "cold",
  "drink", "pepsi", "coke", "fanta", "limca", "soda", "samosa", "pakoda", "puri", "kachori",
  "sandwich", "burger", "pizza", "noodles", "pasta", "chowmein", "chutney", "ketchup", "sauce", "fork",
  "napkin", "tissue", "bin", "soap", "brush", "towel", "shampoo", "cream", "lotion", "powder",
  "mirror", "comb", "bindi", "bangles", "earrings", "necklace", "ring", "bracelet", "purse", "wallet",
  "belt", "jeans", "kurti", "t-shirt", "coat", "blazer", "socks", "shoes", "boots", "slipper",
  "bag", "handbag", "trolley", "suitcase", "passport", "ticket", "visa", "airport", "flight", "train",
  "station", "platform", "auto", "cab", "taxi", "hotel", "room", "key", "bell", "reception",
  "booking", "bill", "cash", "card", "ATM", "balance", "withdraw", "deposit", "transfer", "bank",
  "branch", "manager", "form", "signature", "queue", "token", "number", "electricity", "gas", "water",
  "bill", "meter", "reading", "shop", "mall", "market", "counter", "discount", "offer", "sale",
  "shopping", "dress", "trial", "mirror", "brand", "label", "MRP", "barcode", "security", "guard",
  "gate", "exit", "entry"
];

  var role=reactive({role:''});
  const assignRole=(r)=>{
    role.role=r;
  }
  var gameId=reactive({id:''});
  const generateGameId=(newValue)=>{
    gameId.id=newValue
  }

  var displayedWords=ref([]);
  var displayedWordsObject=ref([]);
  const resetWords=(resetWords)=> { 
    const shuffled = [...wordList].sort(() => 0.5 - Math.random())
    displayedWords.value = shuffled.slice(0, 25)
    displayedWordsObject.value=assignWords(displayedWords.value);
    uploadWords(displayedWordsObject);
    console.log(displayedWordsObject.value)
  }
  
  const assignWords=(arr)=> {
    if (arr.length !== 25) {
      throw new Error("Word array must contain exactly 25 words.");
    }

    const indices = Array.from({ length: 25 }, (_, i) => i);
    
    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Assign roles
    const redIndices = indices.slice(0, 9);
    const blueIndices = indices.slice(9, 17);
    const blackIndex = indices[17];
    
    const result = arr.map((word, idx) => {
      let colorCode = 0; 
      let revealed=0;

      if (redIndices.includes(idx)) {
        colorCode = 1;
      } else if (blueIndices.includes(idx)) {
        colorCode = 2;
      } else if (idx === blackIndex) {
        colorCode = 3;
      }

      return {
        word,
        colorCode,
        revealed,
      };
    });

    return result;
  }
  const revealCell = async (index) => {
  displayedWordsObject.value[index].revealed = 1;

  const gameRef = doc(db, "games", "room123");
  await setDoc(gameRef, {
    wordList: displayedWordsObject.value,
    timestamp: Date.now()
  });
};


  import { db } from './firebase';
  import { doc, setDoc, onSnapshot } from 'firebase/firestore';

  const uploadWords = async (arr) => {

  // overwrites old data
  await setDoc(doc(db, "games", gameId.id), {
    wordList: arr.value,
    timestamp: Date.now()  //tracks refresh time
  }); 
};
const joinRoom = async (newValue) => {
  gameId.id = newValue.value;
  const gameRef = doc(db, "games", gameId.id);

  onSnapshot(gameRef, (docSnap) => {
    if (docSnap.exists()) {
      displayedWordsObject.value = docSnap.data().wordList;
    } else {
      alert("Game ID not found. Please check and try again.");
    }
  });
};

// onMounted(() => {
//   const gameRef = doc(db, "games", gameId.id);
//   onSnapshot(gameRef, (docSnap) => {
//     if (docSnap.exists()) {
//       displayedWordsObject.value = docSnap.data().wordList;
//     }
//   });
// });

</script>
<!-- 19837f6db10 -->
<template>
  <HomePage @role="assignRole" v-if="role.role==''" />
  <gridTeam v-if="role.role=='member' && gameId.id.length!=0" :wordList="displayedWordsObject"/>
  <gridLeader v-if="role.role=='leader' && gameId.id.length!=0" @revealCell="revealCell" @resetWords="resetWords" :wordList="displayedWordsObject" :gameId="gameId.id"/>
  <CreateRoom v-if="role.role=='leader' && gameId.id.length==0" @gameId="generateGameId"/>
  <JoinRoom v-if="role.role=='member' && gameId.id.length==0" @gameId="joinRoom"/>
</template>
<style scoped>
  
</style>