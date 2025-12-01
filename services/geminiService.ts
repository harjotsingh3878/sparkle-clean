import { GoogleGenAI, Type } from "@google/genai";
import { QuoteFormData, QuoteEstimate } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSmartQuote = async (data: QuoteFormData): Promise<QuoteEstimate> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Act as a professional estimator for a cleaning company called "SparkleClean Pro".
      Analyze the following customer request and provide a realistic price estimate and service recommendation.
      
      Customer Data:
      - Name: ${data.name}
      - Service Type: ${data.serviceType}
      - Square Footage: ${data.sqFt} sq ft
      - Frequency: ${data.frequency}
      - Specific Details/Issues: ${data.details}

      Market Context:
      - Average residential rate: $0.10 - $0.15 per sq ft for deep cleans, less for recurring.
      - Average commercial rate: $0.08 - $0.12 per sq ft.
      - Minimum charge: $120.
      
      Provide the output in strict JSON format.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPriceRange: { type: Type.STRING, description: "e.g., $150 - $200" },
            estimatedHours: { type: Type.STRING, description: "e.g., 3-4 hours" },
            recommendedServiceLevel: { type: Type.STRING, description: "e.g., Deep Clean + Disinfection" },
            explanation: { type: Type.STRING, description: "A friendly, professional explanation of why this estimate was given and what it includes." }
          },
          required: ["estimatedPriceRange", "estimatedHours", "recommendedServiceLevel", "explanation"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as QuoteEstimate;

  } catch (error) {
    console.error("Error generating quote:", error);
    // Fallback in case of API error
    return {
      estimatedPriceRange: "Contact for Pricing",
      estimatedHours: "TBD",
      recommendedServiceLevel: "Standard Assessment",
      explanation: "We couldn't generate an instant estimate at this moment. Please submit your request, and our team will call you within 24 hours."
    };
  }
};
