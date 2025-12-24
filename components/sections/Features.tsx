'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Brain,
  Shield,
  FileText,
  MessageCircle,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { features } from '@/lib/constants'

const iconMap = {
  Search,
  Brain,
  Shield,
  FileText,
  MessageCircle,
  Zap
}

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Fonctionnalités puissantes,
            <span className="block text-primary">simples d'utilisation</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez comment l'IA transforme votre façon d'interagir avec vos documents.
            Chaque fonctionnalité est conçue pour maximiser votre productivité.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Search
            return (
              <motion.div key={feature.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {feature.details && (
                      <ul className="space-y-2">
                        {feature.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Comment ça marche ?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus simple en 4 étapes pour obtenir des réponses intelligentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Ajoutez vos documents",
                description: "Importez vos PDF, Word, ou images scannées",
                icon: "📤"
              },
              {
                step: 2,
                title: "Analyse IA",
                description: "L'IA extrait et comprend le contenu automatiquement",
                icon: "🧠"
              },
              {
                step: 3,
                title: "Posez vos questions",
                description: "Demandez naturellement, pas besoin de mots-clés",
                icon: "💬"
              },
              {
                step: 4,
                title: "Obtenez des réponses",
                description: "Réponses précises avec sources et citations",
                icon: "✨"
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.icon}
                </div>
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto mt-4 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt à essayer AskTheDocs ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Commencez gratuitement avec 5 documents et testez toutes les fonctionnalités.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
              <a href="https://apps.apple.com/app/askthedocs/id1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                Télécharger sur l'App Store
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="https://play.google.com/store/apps/details?id=com.askthedocs.app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                Google Play
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}