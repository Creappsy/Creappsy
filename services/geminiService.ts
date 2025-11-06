
import { GoogleGenAI } from "@google/genai";

// FIX: Per @google/genai guidelines, initialize with process.env.API_KEY directly.
// Initialize ai only if API_KEY is available.
const ai = process.env.API_KEY ? new GoogleGenAI({ apiKey: process.env.API_KEY }) : null;

if (!ai) {
    console.error("API_KEY is not set in environment variables. AI features will be disabled.");
}

export const generateMarketingCopy = async (
  productName: string,
  description: string,
  tone: string
): Promise<string> => {
  if (!ai) {
    return "Error: La API Key de Gemini no está configurada.";
  }

  const prompt = `
    Eres un experto en marketing digital. Genera 3 copys de marketing cortos y creativos en español para un producto o servicio.
    Formatea la salida como una lista con viñetas.

    Producto/Servicio: "${productName}"
    Descripción: "${description}"
    Tono: ${tone}

    Ejemplo de Salida:
    - Slogan 1: Atractivo y directo.
    - Slogan 2: Creativo y memorable.
    - Slogan 3: Enfocado en el beneficio.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    if (error instanceof Error) {
        return `Error al generar contenido: ${error.message}`;
    }
    return "Ocurrió un error inesperado al contactar a la IA.";
  }
};
