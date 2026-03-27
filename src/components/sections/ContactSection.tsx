import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

// ── Google Apps Script URL ────────────────────────────────────────────────────
// To set up Google Sheets integration:
// 1. Ouvrez votre Google Sheet : https://docs.google.com/spreadsheets/d/1SsXEDbuPj2ik1Io_bxVlbsVEHxA-xbaCGg9BJv2iWto/edit
// 2. Allez dans le menu : Extensions > Apps Script
// 3. Collez ce code et enregistrez :
//
// function doPost(e) {
//   const sheet = SpreadsheetApp.openById("1SsXEDbuPj2ik1Io_bxVlbsVEHxA-xbaCGg9BJv2iWto").getActiveSheet();
//   const data = JSON.parse(e.postData.contents);
//   sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);
//   return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
//     .setMimeType(ContentService.MimeType.JSON);
// }
//
// 4. Cliquez sur le bouton bleu "Déployer" > "Nouvelle version"
// 5. Type: Application Web | Accès: "Tous ceux qui ont le lien"
// 6. Copiez l'URL générée et collez-la ci-dessous à la place de "YOUR_SCRIPT_ID" :
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkNL3UIxlgjYhXk2RcLfHBcTjRNlYxJPUwA2EjKHuNTL4d2H3yzQc8EgQ5HyLG1hHJ/exec";

type FormState = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // If URL is not configured, simulate success after 1.5s
      if (GOOGLE_SCRIPT_URL.includes("YOUR_SCRIPT_ID")) {
        await new Promise((r) => setTimeout(r, 1500));
        setFormState("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      // Paramétrage spécifique pour Google Apps Script afin d'éviter les erreurs CORS
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
      });

      // Le mode "no-cors" renvoie une réponse "opaque", on assume donc que l'envoi a réussi 
      // si aucune exception réseau bloquante n'a été levée
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormState("error");
    }

    setTimeout(() => setFormState("idle"), 4000);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: "andrianmanantena@gmail.com", href: "mailto:andrianmanantena@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+261 38 46 090 25", href: "tel:+261384609025" },
    { icon: MapPin, label: "Localisation", value: "Alasora, Antananarivo", href: null },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/joharymanantena1-ux", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/johary-andrianjafinoro-73b29b3a3", label: "LinkedIn" },
    { icon: Globe, href: "https://levitation.mg", label: "Levitation.mg" },
  ];

  const isDisabled = formState === "loading" || formState === "success";

  return (
    <section className="section-container">
      <div className="section-content max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Un projet en tête ? Contactez-moi pour toute collaboration ou mission freelance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Form — wider col */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 card-floating p-6 lg:p-8"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">Message envoyé !</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                        Nom
                      </label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        disabled={isDisabled}
                        className="bg-secondary/40 border-border/60 focus:border-primary text-sm h-11"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="vous@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        disabled={isDisabled}
                        className="bg-secondary/40 border-border/60 focus:border-primary text-sm h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      placeholder="Objet de votre message"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      disabled={isDisabled}
                      className="bg-secondary/40 border-border/60 focus:border-primary text-sm h-11"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isDisabled}
                      className="bg-secondary/40 border-border/60 focus:border-primary resize-none text-sm"
                    />
                  </div>

                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Erreur d'envoi. Vérifiez votre connexion ou contactez-moi par email.
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isDisabled}
                    className="w-full bg-primary hover:bg-primary/90 glow-primary text-sm font-semibold h-12 gap-2"
                  >
                    {formState === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact items */}
            <div className="card-floating p-5 space-y-3">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium hover:text-primary transition-colors truncate block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="card-floating p-5">
              <h3 className="text-sm font-display font-semibold mb-3">Réseaux & Liens</h3>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center gap-1 p-3 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border/50 group"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] font-medium text-muted-foreground group-hover:text-primary-foreground transition-colors truncate w-full text-center">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="card-floating p-5 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <h3 className="text-sm font-display font-semibold">Disponible</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ouvert aux missions freelance et projets de développement web full-stack.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;