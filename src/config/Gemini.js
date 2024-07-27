import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const key ="AIzaSyDTgpSn8k7IHsaSQkhsBdiQ86zDqb9ZTDI"
const genAI = new GoogleGenerativeAI(key);



const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response =  result.response;
  const text = response.text();
  console.log(text);
  return text;
}

// async function run(prompt) {
//   const chatSession = model.startChat({
//     generationConfig,
//   });

//   chatSession.sendMessage(prompt)
//     .then(result => console.log(result));
// }


export default run;