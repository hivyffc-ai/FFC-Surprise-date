import type { APIRoute } from 'astro';
import { submitLead } from '@/lib/leads';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  try {
    let body: Record<string, string>;
    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else {
      const form = await request.formData();
      body = Object.fromEntries(
        Array.from(form.entries()).map(([k, v]) => [k, String(v)]),
      );
    }

    const { name, phone, occasion, date, timeSlot, packageSlug, packageName, message, source } = body;

    if (!name || !phone || !occasion || !date || !timeSlot) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields: name, phone, occasion, date, timeSlot' }),
        { status: 400, headers },
      );
    }

    // Basic phone validation (Indian mobile numbers)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid phone number' }),
        { status: 400, headers },
      );
    }

    const result = await submitLead({
      name: name.trim(),
      phone: cleanPhone,
      occasion,
      date,
      timeSlot,
      packageSlug,
      packageName,
      message,
      source: source || request.headers.get('referer') || 'Unknown',
      site: 'FFC Rooftop',
    });

    return new Response(JSON.stringify(result), { status: 200, headers });
  } catch (error) {
    console.error('[api/leads] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers },
    );
  }
};
