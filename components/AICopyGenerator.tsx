
import React, { useState, useCallback } from 'react';
import { generateMarketingCopy } from '../services/geminiService';

const AICopyGenerator: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [tone, setTone] = useState('Creativo');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult('');

    try {
      const copy = await generateMarketingCopy(productName, description, tone);
      setResult(copy);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setIsLoading(false);
    }
  }, [productName, description, tone]);

  const handleProductNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value), []);
  const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value), []);
  const handleToneChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setTone(e.target.value), []);

  return (
    <div className="mt-16 bg-slate-800/50 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center">Prueba nuestro Generador de Contenido con IA</h3>
            <p className="mt-2 text-center text-slate-400">¿Sin inspiración? Describe tu producto y deja que Gemini cree un copy de marketing por ti.</p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                    <label htmlFor="productName" className="block text-sm font-medium text-slate-300">Nombre del Producto/Servicio</label>
                    <input
                        type="text"
                        id="productName"
                        value={productName}
                        onChange={handleProductNameChange}
                        className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="Ej: Zapatillas 'Vortex'"
                        required
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-slate-300">Breve Descripción</label>
                    <textarea
                        id="description"
                        rows={3}
                        value={description}
                        onChange={handleDescriptionChange}
                        className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="Ej: Calzado deportivo ultraligero para corredores urbanos."
                        required
                    />
                </div>

                <div>
                    <label htmlFor="tone" className="block text-sm font-medium text-slate-300">Tono Deseado</label>
                    <select
                        id="tone"
                        value={tone}
                        onChange={handleToneChange}
                        className="mt-1 block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                    >
                        <option>Creativo</option>
                        <option>Profesional</option>
                        <option>Divertido</option>
                        <option>Persuasivo</option>
                    </select>
                </div>
                
                <div className="flex items-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Generando...' : 'Generar Contenido'}
                    </button>
                </div>
            </form>

            {error && <div className="mt-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-md">{error}</div>}

            {result && (
                <div className="mt-8">
                    <h4 className="font-semibold text-lg">Resultados generados por IA:</h4>
                    <div className="mt-2 p-4 bg-slate-900 rounded-md whitespace-pre-wrap font-mono text-slate-300">
                        {result.split('\n').map((line, index) => <p key={index}>{line}</p>)}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default AICopyGenerator;