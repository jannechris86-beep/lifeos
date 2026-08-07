import axios from 'axios';

const LLM_API_KEY = process.env.NEXT_PUBLIC_LLM_API_KEY;
const LLM_MODEL = process.env.NEXT_PUBLIC_LLM_MODEL || 'gpt-4-turbo';

interface ParsedTask {
  title: string;
  deadline?: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  steps: string[];
  description: string;
}

export async function parseUserRequest(userMessage: string): Promise<ParsedTask> {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: LLM_MODEL,
        messages: [
          {
            role: 'system',
            content: `You are a task parsing AI assistant. When a user gives you a request, extract and structure it into a task.

Always respond with valid JSON in this format:
{
  "title": "Clear task title",
  "deadline": "ISO date string or 'none'",
  "priority": "high|medium|low",
  "category": "work|personal|health|learning|finance|other",
  "steps": ["step 1", "step 2", ...],
  "description": "Brief description of the task"
}

Be smart about inferring deadlines and priorities based on context.`,
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${LLM_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices[0]?.message?.content;
    if (!content) throw new Error('No response from LLM');

    const parsed = JSON.parse(content);
    return parsed as ParsedTask;
  } catch (error) {
    console.error('Error parsing user request:', error);
    throw error;
  }
}

export async function generateDailySummary(tasks: ParsedTask[]): Promise<string> {
  try {
    const taskList = tasks.map((t) => `- ${t.title} (${t.priority})`).join('\n');

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: LLM_MODEL,
        messages: [
          {
            role: 'system',
            content: `You are a personal AI assistant creating a morning briefing. 
Create an engaging, motivating daily summary based on the user's tasks.
Be concise, friendly, and actionable.`,
          },
          {
            role: 'user',
            content: `Here are my tasks for today:\n${taskList}\n\nCreate a brief morning briefing.`,
          },
        ],
        temperature: 0.8,
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${LLM_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating daily summary:', error);
    throw error;
  }
}
