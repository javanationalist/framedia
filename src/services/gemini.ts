import { ChatMessage } from '../types';

export interface ChatResponse {
  reply: string;
  suggestedQuestions?: string[];
  modelUsed?: string;
  status: 'success' | 'fallback' | 'error';
}

export const geminiService = {
  async sendMessage(message: string, history: ChatMessage[] = [], language: 'id' | 'en' = 'id'): Promise<ChatResponse> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          language,
          history: history.slice(-6).map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      return {
        reply: data.reply,
        suggestedQuestions: data.suggestedQuestions || [],
        modelUsed: data.modelUsed,
        status: data.status || 'success',
      };
    } catch (error) {
      console.warn('Chat API fetch error, activating inFra offline engine:', error);
      // Fallback response with studio context
      const isId = language === 'id';
      return {
        reply: isId
          ? `Terima kasih telah bertanya seputar Framedia Creative. Saya beroperasi dengan pengetahuan studio terintegrasi: kami adalah agensi media kreatif yang berfokus pada produksi kreatif, media digital, komunikasi, desain, AI ethics, dan praktik kreatif yang inklusif.\n\nApakah Anda ingin menjelajahi inisiatif unggulan kami Frametive Project, mempelajari 10 prinsip Being Creative, atau mendiskusikan bagaimana kami menjaga martabat manusia dalam media generatif?`
          : `Thank you for asking about Framedia Creative. I'm operating with my integrated studio knowledge: we are a creative media agency focused on creative production, digital media, communication, design, AI ethics, and inclusive creative practices.\n\nWould you like to explore our flagship Frametive Project, examine our 10 Being Creative principles, or discuss how we uphold human dignity in generative media?`,
        suggestedQuestions: isId
          ? [
              'Apa itu Frametive Project?',
              'Bagaimana Framedia menerapkan AI Ethics?',
              'Apa saja 10 prinsip Being Creative?',
              'Layanan apa saja yang disediakan Framedia?'
            ]
          : [
              'What is the Frametive Project?',
              'How does Framedia handle AI Ethics?',
              'What are the 10 Being Creative principles?',
              'What services does Framedia offer?'
            ],
        status: 'fallback',
      };
    }
  },

  async checkConfig(): Promise<{ geminiConfigured: boolean; model: string; supabaseConfigured: boolean }> {
    try {
      const res = await fetch('/api/config-status');
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // ignore
    }
    return {
      geminiConfigured: false,
      model: 'gemini-3.6-flash',
      supabaseConfigured: false,
    };
  },
};
