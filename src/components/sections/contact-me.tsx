
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; // Use Card for form container

// Simple email validation (keep as is)
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
    setErrors({});

    // Construct mailto link (client-side approach)
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:iamrohitkandpal@gmail.com?subject=${subject}&body=${body}`;

    try {
       window.location.href = mailtoLink;
       await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus('success');
      toast({
        title: "Email Client Opened!",
        description: "Please send the pre-filled email.",
        variant: "default",
      });
      // Reset form
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
        description: "Could not open email client. Please copy the address manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-12"> {/* Add spacing */}
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 flex items-center justify-center gap-3 text-primary">
        <Mail className="w-8 h-8" /> Get In Touch
      </h2>

      {/* Form Container */}
      <Card className={cn(
          "max-w-2xl mx-auto bg-card/50 border-border/30 shadow-lg transition-all duration-300 hover:shadow-elegant-lg hover:border-primary/30" // Use elegant shadow on hover
          )}>
         <CardHeader className="text-center">
            <CardTitle className="text-2xl font-body font-semibold">Contact Form</CardTitle>
            <CardDescription className="text-foreground/70 pt-1">
              Have a question or want to work together? Send me a message!
            </CardDescription>
         </CardHeader>
         <CardContent>
           <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6" // Increased spacing
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
               {/* Grid for Name/Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-body text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'loading'}
                    className={cn("bg-input border-border/50 focus:border-primary", errors.name && "border-destructive focus-visible:ring-destructive")}
                    aria-invalid={!!errors.name}
                    aria-describedby="name-error"
                  />
                   {errors.name && <p id="name-error" className="text-xs text-destructive font-caption pt-1">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="font-body text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className={cn("bg-input border-border/50 focus:border-primary", errors.email && "border-destructive focus-visible:ring-destructive")}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="text-xs text-destructive font-caption pt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="font-body text-sm font-medium">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === 'loading'}
                  rows={5} // Set initial rows
                  className={cn("min-h-[120px] resize-none bg-input border-border/50 focus:border-primary", errors.message && "border-destructive focus-visible:ring-destructive")}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                />
                {errors.message && <p id="message-error" className="text-xs text-destructive font-caption pt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-2"> {/* Centered button */}
                <Button
                  type="submit"
                  size="lg" // Larger button
                  disabled={status === 'loading' || status === 'success'}
                  className={cn(
                      "min-w-[150px] bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 shadow-lg",
                      "hover:shadow-elegant-sm transition-all duration-300 transform hover:-translate-y-1" // Use elegant shadow
                      )}
                >
                  {status === 'loading' && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {status === 'success' && 'Sent!'}
                  {status === 'idle' && <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                   {status === 'error' && 'Retry'}
                </Button>
              </div>
            </motion.form>
         </CardContent>
      </Card>
    </div>
  );
};

export default ContactMe;
