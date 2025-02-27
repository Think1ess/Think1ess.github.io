import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const deepseekResponse = await fetch('https://api.deepseek.com/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(request.body),
    });

    const data = await deepseekResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    return response.status(500).json({ error: 'Failed to fetch from DeepSeek API' });
  }
} 