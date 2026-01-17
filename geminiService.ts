
import { GoogleGenAI } from "@google/genai";
import { POLICY_TEXT_FOR_AI } from "./constants";

export const askPolicyQuestion = async (question: string) => {
  // Initialize GoogleGenAI directly with process.env.API_KEY as per the strict guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are a helpful legal assistant for the RECOVA mobile app. 
        Your primary task is to answer user questions about the RECOVA Privacy Policy based ONLY on the provided policy text.
        If the information is not in the policy, state that clearly and suggest they contact the team at recova.app0@gmail.com.
        Keep answers concise, professional, and friendly.
        
        Policy Context:
        ${POLICY_TEXT_FOR_AI}`,
        temperature: 0.2,
      },
    });
    // Access the .text property directly instead of calling it as a method
    return response.text || "I'm sorry, I couldn't process that. Please contact support.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently unavailable. Please refer to the written policy text above.";
  }
};
