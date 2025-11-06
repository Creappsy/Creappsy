
import { GoogleGenAI, Chat } from "@google/genai";

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


export const startChatSession = () => {
    if (!ai) {
        return {
            sendMessage: async (message: string): Promise<string> => {
                return Promise.resolve("Error: La API Key de Gemini no está configurada.");
            }
        };
    }

    const chat: Chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `Eres CreappsyBot, un asistente virtual amigable y servicial de Creappsy, una agencia de diseño web y marketing digital.
            Tu objetivo es ayudar a los usuarios respondiendo sus preguntas sobre la empresa, sus servicios, precios y cómo contactarlos.
            Servicios ofrecidos: Desarrollo Web a Medida, Marketing Digital, Diseño UI/UX, y Analítica y Estrategia.
            Precios: Hay 3 planes principales: 'Despegue Rápido' ($2,500 MXN), 'Negocio con Autoridad' ($4,900 MXN), y 'E-commerce de Alto Valor' ($9,900 MXN). Los detalles están en la página de precios.
            Sé conciso, amigable y profesional.
            Si no sabes una respuesta, dirige al usuario al formulario de contacto en la página de /contacto o al número de WhatsApp de la empresa.
            No inventes información. Responde en español.`,
        },
    });

    return {
        sendMessage: async (message: string): Promise<string> => {
            try {
                const response = await chat.sendMessage({ message });
                return response.text;
            } catch (error) {
                console.error("Error sending message to Gemini:", error);
                if (error instanceof Error) {
                    return `Error en la comunicación con la IA: ${error.message}`;
                }
                return "Hubo un problema al procesar tu solicitud.";
            }
        }
    };
};
