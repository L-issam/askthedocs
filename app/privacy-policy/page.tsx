import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { companyInfo } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | AskTheDocs',
  description: 'Politique de confidentialité d\'AskTheDocs. Découvrez comment nous protégeons vos données personnelles et votre vie privée.',
  keywords: 'confidentialité, vie privée, données personnelles, RGPD, AskTheDocs',
  openGraph: {
    title: 'Politique de Confidentialité | AskTheDocs',
    description: 'Comment AskTheDocs protège votre vie privée et vos données.',
    url: 'https://askthedocs.app/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Engagement pour votre vie privée
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    AskTheDocs s'engage à protéger votre vie privée. Contrairement aux solutions cloud,
                    toutes vos données restent sur votre téléphone. Nous n'avons aucun serveur backend.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Collecte de données</h2>
              <p className="mb-4">
                AskTheDocs ne collecte aucune donnée personnelle identifiable. L'application fonctionne
                entièrement hors ligne et traite toutes les données localement sur votre appareil.
              </p>

              <h3 className="text-xl font-medium mb-3">Données stockées localement :</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Documents uploadés :</strong> PDF, fichiers Word, images scannées</li>
                <li><strong>Conversations :</strong> Questions et réponses générées par l'IA</li>
                <li><strong>Modèles IA :</strong> Téléchargés automatiquement pour le traitement local</li>
                <li><strong>Préférences utilisateur :</strong> Paramètres de l'application</li>
              </ul>

              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>✅ Garantie :</strong> Aucune de ces données n'est jamais transmise à nos serveurs
                  ou à des tiers. Tout reste exclusivement sur votre appareil.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des données</h2>
              <p className="mb-4">
                Vos données ne servent qu'à fournir les fonctionnalités de l'application :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyser vos documents avec l'IA pour répondre à vos questions</li>
                <li>Sauvegarder vos conversations pour maintenir le contexte</li>
                <li>Améliorer l'expérience utilisateur (préférences locales)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Partage de données</h2>
              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  🚫 AskTheDocs ne partage JAMAIS vos données avec qui que ce soit.
                </p>
              </div>
              <p>
                Puisque l'application fonctionne entièrement hors ligne et sans serveur backend,
                il n'y a techniquement aucune possibilité de partager vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Achats intégrés (IAP)</h2>
              <p className="mb-4">
                Pour la version Premium, les achats sont gérés par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>App Store (iOS) :</strong> Apple gère les paiements et abonnements</li>
                <li><strong>Google Play (Android) :</strong> Google gère les paiements et abonnements</li>
              </ul>
              <p className="mt-4">
                Ces plateformes peuvent collecter des données selon leurs propres politiques de confidentialité.
                Nous ne recevons que la confirmation d'achat pour activer les fonctionnalités Premium.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sécurité des données</h2>
              <p className="mb-4">
                Vos données sont protégées par :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chiffrement local :</strong> Toutes les données sont chiffrées sur votre appareil</li>
                <li><strong>Pas de cloud :</strong> Aucune transmission réseau des données sensibles</li>
                <li><strong>Contrôle total :</strong> Vous gardez le contrôle total de vos données</li>
                <li><strong>Open source :</strong> Le code est auditable publiquement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Conformité RGPD</h2>
              <p className="mb-4">
                AskTheDocs est entièrement conforme au RGPD :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pas de collecte :</strong> Aucune donnée personnelle n'est collectée</li>
                <li><strong>Pas de traitement :</strong> Aucun traitement de données sur nos serveurs</li>
                <li><strong>Droit à l'effacement :</strong> Supprimez simplement l'application</li>
                <li><strong>Transparence :</strong> Code source ouvert et auditable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Suppression de données</h2>
              <p className="mb-4">
                Pour supprimer définitivement toutes vos données :
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Ouvrez les paramètres de votre téléphone</li>
                <li>Allez dans "Applications" ou "Apps"</li>
                <li>Recherchez "AskTheDocs"</li>
                <li>Sélectionnez "Désinstaller" ou "Supprimer"</li>
              </ol>
              <p className="mt-4">
                Cette action supprime immédiatement et définitivement toutes vos données,
                documents et conversations stockés localement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Mises à jour</h2>
              <p className="mb-4">
                Cette politique peut être mise à jour pour refléter les changements dans nos pratiques.
                Les modifications significatives vous seront notifiées via l'application ou notre site web.
              </p>
              <p>
                <strong>Dernière mise à jour :</strong> Décembre {currentYear}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant cette politique ou vos données :
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <p className="font-medium">AskTheDocs Team</p>
                <p>Email : <a href={`mailto:${companyInfo.contact.email}`} className="text-primary hover:underline">{companyInfo.contact.email}</a></p>
                <p>Site web : <Link href="/" className="text-primary hover:underline">askthedocs.app</Link></p>
              </div>
            </section>

            <div className="border-t pt-8 mt-12">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div className="text-sm text-muted-foreground">
                  <p>AskTheDocs © {currentYear} - Tous droits réservés</p>
                  <p>Fait avec ❤️ pour protéger votre vie privée</p>
                </div>
                <div className="flex space-x-4">
                  <Link href="/data-deletion" className="text-sm text-primary hover:underline">
                    Suppression de données
                  </Link>
                  <Link href="/" className="text-sm text-primary hover:underline">
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}