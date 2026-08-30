'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Phone, User, Gift, MessageCircle, X, Send, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { DomainConfig } from '@/lib/domains-config';

// Form validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Enter valid 10-digit phone number').max(10, 'Enter valid 10-digit phone number').regex(/^[6-9]\d{9}$/, 'Enter valid Indian mobile number'),
  occasionDate: z.string().min(1, 'Please select a date'),
  occasion: z.string().min(1, 'Please select an occasion'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

// Occasion options based on service type
const occasionOptions = [
  { value: 'birthday-boyfriend', label: 'Birthday Surprise for Boyfriend' },
  { value: 'birthday-girlfriend', label: 'Birthday Surprise for Girlfriend' },
  { value: 'birthday-husband', label: 'Birthday Surprise for Husband' },
  { value: 'birthday-wife', label: 'Birthday Surprise for Wife' },
  { value: 'anniversary', label: 'Anniversary Celebration' },
  { value: 'first-anniversary', label: 'First Anniversary' },
  { value: 'proposal', label: 'Proposal / Ring Ceremony' },
  { value: 'candlelight-dinner', label: 'Candlelight Dinner' },
  { value: 'romantic-date', label: 'Romantic Date Night' },
  { value: 'surprise-date', label: 'Surprise Date' },
  { value: 'valentines-day', label: "Valentine's Day Special" },
  { value: 'honeymoon', label: 'Honeymoon Celebration' },
  { value: 'rooftop-dinner', label: 'Rooftop Dinner' },
  { value: 'midnight-celebration', label: 'Midnight Celebration' },
  { value: 'other', label: 'Other Special Occasion' },
];

interface BookingFormProps {
  domain: DomainConfig;
  pageTitle?: string;
  variant?: 'default' | 'hero' | 'sidebar' | 'modal';
  onClose?: () => void;
}

export function BookingForm({ domain, pageTitle, variant = 'default', onClose }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const gradientClass = `bg-gradient-to-r ${domain.colors.gradient}`;
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const occasionValue = watch('occasion');

  // Generate WhatsApp message
  const generateWhatsAppMessage = (data: BookingFormData): string => {
    const occasionLabel = occasionOptions.find(o => o.value === data.occasion)?.label || data.occasion;
    
    let message = `🎉 *New Booking Inquiry*\n\n`;
    message += `👤 *Name:* ${data.name}\n`;
    message += `📱 *Phone:* ${data.phone}\n`;
    message += `📅 *Date:* ${data.occasionDate}\n`;
    message += `🎊 *Occasion:* ${occasionLabel}\n`;
    
    if (pageTitle) {
      message += `\n📍 *Interested In:* ${pageTitle}\n`;
    }
    
    message += `\n💝 *Domain:* ${domain.name}`;
    
    return encodeURIComponent(message);
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Generate WhatsApp URL and redirect
    const whatsappMessage = generateWhatsAppMessage(data);
    const whatsappUrl = `https://wa.me/${domain.whatsapp}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset after success
    setTimeout(() => {
      setIsSuccess(false);
      reset();
      if (onClose) onClose();
    }, 3000);
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <Card className={`${variant === 'modal' ? '' : 'shadow-lg'}`}>
        <CardContent className="py-12 text-center">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: `${domain.colors.primary}20` }}>
            <CheckCircle className="h-8 w-8" style={{ color: domain.colors.primary }} />
          </div>
          <h3 className="text-xl font-semibold mb-2">Booking Request Sent!</h3>
          <p className="text-muted-foreground">
            We've opened WhatsApp for you. Complete your booking there!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${variant === 'modal' ? 'border-0 shadow-none' : 'shadow-lg'} overflow-hidden`}>
      {variant !== 'modal' && (
        <div className={`${gradientClass} p-4 text-white`}>
          <CardTitle className="text-xl flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Book Your Experience
          </CardTitle>
          <CardDescription className="text-white/80 mt-1">
            Fill in your details & we'll contact you on WhatsApp
          </CardDescription>
        </div>
      )}
      
      {variant === 'modal' && onClose && (
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <CardTitle className="text-xl" style={{ color: domain.colors.primary }}>Book Now</CardTitle>
            <CardDescription>Get instant confirmation on WhatsApp</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}
      
      <CardContent className={`${variant === 'modal' ? 'p-6' : 'p-6'}`}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" style={{ color: domain.colors.primary }} />
              Your Name *
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" style={{ color: domain.colors.primary }} />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              maxLength={10}
              {...register('phone')}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Date Field */}
          <div className="space-y-2">
            <Label htmlFor="occasionDate" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" style={{ color: domain.colors.primary }} />
              Occasion Date *
            </Label>
            <Input
              id="occasionDate"
              type="date"
              min={today}
              {...register('occasionDate')}
              className={errors.occasionDate ? 'border-red-500' : ''}
            />
            {errors.occasionDate && (
              <p className="text-red-500 text-sm">{errors.occasionDate.message}</p>
            )}
          </div>

          {/* Occasion Selection */}
          <div className="space-y-2">
            <Label htmlFor="occasion" className="flex items-center gap-2">
              <Gift className="h-4 w-4" style={{ color: domain.colors.primary }} />
              Select Occasion *
            </Label>
            <Select onValueChange={(value) => setValue('occasion', value)} value={occasionValue}>
              <SelectTrigger className={errors.occasion ? 'border-red-500' : ''}>
                <SelectValue placeholder="Choose your occasion" />
              </SelectTrigger>
              <SelectContent>
                {occasionOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.occasion && (
              <p className="text-red-500 text-sm">{errors.occasion.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${gradientClass} text-white py-6 text-lg`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <MessageCircle className="h-5 w-5 mr-2" />
                Book via WhatsApp
              </>
            )}
          </Button>

          {/* Call Option */}
          <div className="text-center pt-2">
            <p className="text-sm text-muted-foreground mb-2">Or call us directly</p>
            <a
              href={`tel:${domain.phone}`}
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: domain.colors.primary }}
            >
              <Phone className="h-4 w-4" />
              {domain.phone}
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

// Floating WhatsApp Button with Form Modal
export function WhatsAppFloatWithForm({ domain, pageTitle }: { domain: DomainConfig; pageTitle?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse"
        aria-label="Book Now"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md bg-background rounded-xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <BookingForm
              domain={domain}
              pageTitle={pageTitle}
              variant="modal"
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

// Inline Form for Hero Sections
export function HeroBookingForm({ domain, pageTitle }: { domain: DomainConfig; pageTitle?: string }) {
  return (
    <div className="w-full max-w-md">
      <BookingForm domain={domain} pageTitle={pageTitle} variant="hero" />
    </div>
  );
}

// Sidebar Form
export function SidebarBookingForm({ domain, pageTitle }: { domain: DomainConfig; pageTitle?: string }) {
  return (
    <div className="sticky top-24">
      <BookingForm domain={domain} pageTitle={pageTitle} variant="sidebar" />
    </div>
  );
}

export default BookingForm;
