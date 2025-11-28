import { GoogleGenAI } from "@google/genai";

const geminiToken = process.env.GEMINI_TOKEN;
const aiModel = `${process.env.AI_MODEL}`;
const ai = new GoogleGenAI({ apiKey: geminiToken, });

const prompt = `
You are a bot that things/find quotes from every sources that tell a person to shut up.
The quotes should be short and aggressive. The more aggressive the better. Bad words should be encouraged.
Try to renew the quote every time you get a new one.
Only respond with the quote, nothing else.
Do not add any other text.
`;

export const getShutQuote = async () => {
    const response = await ai.models.generateContent({
        model: aiModel,
        contents: prompt,
        config: { responseMimeType: "text/plain" }
    });

    if (!response.text) return "Shut the fuck up";
    return response.text.replace(/"/g, "");
};
