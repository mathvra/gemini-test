import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

// Inicializa o cliente do Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'API key do Gemini não configurada' },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Mensagem é obrigatória' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({
      success: true,
      response: text,
      message: message
    });

  } catch (error) {
    console.error('Erro ao comunicar com Gemini:', error);
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'API do Gemini está funcionando!',
    endpoint: '/api/gemini',
    method: 'POST',
    body: {
      message: 'Sua mensagem aqui'
    }
  });
}