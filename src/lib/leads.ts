import { siteConfig } from './ffc-config';

export interface LeadPayload {
  name: string;
  phone: string;
  occasion: string;
  date: string;
  timeSlot: string;
  packageSlug?: string;
  packageName?: string;
  message?: string;
  source: string; // page URL or page title
  site: string;
}

export interface LeadResult {
  success: boolean;
  message: string;
  whatsappUrl?: string;
}

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL || 'https://crm-for-cafe.vercel.app';
const SITE_NAME = siteConfig.name;
const WHATSAPP_NUMBER = siteConfig.whatsapp || '917487888730';

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  // 1. Post to CRM
  try {
    const crmBody = {
      ...payload,
      site: SITE_NAME,
      submittedAt: new Date().toISOString(),
    };

    await fetch(`${CRM_URL}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crmBody),
    });
  } catch (_err) {
    // CRM failures are non-fatal — we still redirect to WhatsApp
    console.error('[leads] CRM post failed:', _err);
  }

  // 2. Build WhatsApp pre-filled message
  const lines = [
    `*New Booking Enquiry — ${SITE_NAME}*`,
    ``,
    `👤 Name: ${payload.name}`,
    `📞 Phone: ${payload.phone}`,
    `🎉 Occasion: ${payload.occasion}`,
    `📅 Date: ${payload.date}`,
    `⏰ Time Slot: ${payload.timeSlot}`,
    payload.packageName ? `📦 Package: ${payload.packageName}` : null,
    payload.message ? `💬 Message: ${payload.message}` : null,
    ``,
    `📍 Source: ${payload.source}`,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

  return {
    success: true,
    message: 'Lead submitted successfully',
    whatsappUrl,
  };
}
