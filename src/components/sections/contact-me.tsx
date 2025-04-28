'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Simple email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);


  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!message.trim()) {
      newErrors.message = 'Message cannot be empty.';
      isValid = false;
    } else if (message.trim().length < 10) {
         newErrors.message = 'Message should be at least 10 characters long.';
         isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setErrors({}); // Clear errors on successful validation

    // Simulate sending email (replace with actual API call or server action later)
    // In a real app, you'd send this data to a backend endpoint or use a service like EmailJS/Formspree
    console.log('Form Data:', { name, email, message });

    // Construct mailto link (simple client-side approach)
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:iamrohitkandpal@gmail.com?subject=${subject}&body=${body}`;


    try {
       // Open the user's default email client
       window.location.href = mailtoLink;

       // Simulate success after a short delay (since mailto doesn't give feedback)
       await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus('success');
      toast({
        title: "Email Client Opened!",
        description: "Please send the pre-filled email using your mail application.",
        variant: "default",
      });
      // Reset form after a delay
      setTimeout(() => {
          setName('');
          setEmail('');
          setMessage('');
          setStatus('idle');
      }, 3000);


    } catch (error) {
      console.error('Mailto link error:', error);
      setStatus('error');
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Could not open the email client. Please try copying the email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
        <Mail className="text-primary" /> Contact Me
      </h2>
      <p className="text-foreground/70 font-body text-sm mb-6">
        Have a question, a project idea, or just want to connect? Feel free to reach out!
      </p>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 flex-grow flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name Input */}
          <div className="space-y-1">
            <Label htmlFor="name" className="font-body">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === 'loading'}
              className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
             {errors.name && <p id="name-error" className="text-xs text-destructive font-caption">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="space-y-1">
            <Label htmlFor="email" className="font-body">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            {errors.email && <p id="email-error" className="text-xs text-destructive font-caption">{errors.email}</p>}
          </div>
        </div>

        {/* Message Textarea */}
        <div className="space-y-1 flex-grow flex flex-col">
          <Label htmlFor="message" className="font-body">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === 'loading'}
            className={cn("min-h-[120px] flex-grow resize-none", errors.message && "border-destructive focus-visible:ring-destructive")}
            aria-invalid={!!errors.message}
            aria-describedby="message-error"
          />
          {errors.message && <p id="message-error" className="text-xs text-destructive font-caption">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-2">
          <Button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="min-w-[120px]"
          >
            {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === 'success' && 'Sent!'}
            {status === 'idle' && <>Send Message <Send className="ml-2 h-4 w-4" /></>}
             {status === 'error' && 'Retry'}
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default ContactMe;
