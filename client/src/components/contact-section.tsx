import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Download } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { z } from "zod";
import { useLanguage } from "@/hooks/useLanguage";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SOCIAL_LINKS } from "@/lib/constants";

type ContactFormData = {
  email: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormSchema = z.object({
    email: z.string().email(t('validation.emailInvalid')),
    subject: z.string().min(1, t('validation.subjectRequired')),
    message: z.string().min(10, t('validation.messageMinLength')),
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: t('contact.messageSentTitle'),
        description: t('contact.messageSentDesc'),
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: t('contact.messageFailedTitle'),
        description: t('contact.messageFailedDesc'),
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('contact.getInTouch')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <p className="text-xl text-muted-foreground mb-8">
              {t('contact.reachOut')}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-4" />
                <span className="text-muted-foreground">{SOCIAL_LINKS.email}</span>
              </div>
              <div className="flex items-center">
                <SiLinkedin className="w-6 h-6 text-primary mr-4" />
                <span className="text-muted-foreground">Ily Coulibaly</span>
              </div>
              <div className="flex items-center">
                <SiGithub className="w-6 h-6 text-primary mr-4" />
                <span className="text-muted-foreground">@icoulibaly</span>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="mb-8">
              <a 
                href="Resume_Ily_Coulibaly_Data_Analyst.pdf" 
                download 
                data-testid="contact-download-cv"
                className="inline-flex items-center px-6 py-3 bg-card text-card-foreground rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                {t('contact.downloadCV')}
              </a>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.yourEmail')}
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="input-email"
                  className="w-full bg-input border-border"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t('contact.subject')}
                </Label>
                <Input
                  id="subject"
                  type="text"
                  data-testid="input-subject"
                  className="w-full bg-input border-border"
                  {...form.register("subject")}
                />
                {form.formState.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  data-testid="input-message"
                  className="w-full bg-input border-border resize-none"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                data-testid="button-submit-contact"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? t('contact.sending') : t('contact.letsConnect')}
              </Button>
            </form>
          </div>
          
          {/* Profile Picture Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Ily Coulibaly Professional Photo" 
                className="w-full h-full object-cover"
                data-testid="contact-profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
