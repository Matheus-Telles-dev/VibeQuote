import { GoogleGenerativeAI } from "@google/generative-ai";
import { QuoteData } from "../types/Quote";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export const generateQuoteFromMood = async (
  userMood: string
): Promise<QuoteData | null> => {
  try {
    const prompt = `
    You are an AI assistant.
    The user is feeling: "${userMood}".

    Generate a short, impactful quote that connects with this feeling. This quote must actually exist and have a real author. English only.
    Return strictly a JSON object with this schema: { "quote": "string", "author": "string" }
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    const data = JSON.parse(responseText) as QuoteData;

    return data;
  } catch (error) {
    console.error("Error generating quote:", error);
    return null;
  }
};
