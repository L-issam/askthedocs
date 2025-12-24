import { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { companyInfo } from '@/lib/constants'
import { Trash2, Shield, Smartphone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Suppression de Données | AskTheDocs',
  description: 'Guide pour supprimer définitivement vos données AskTheDocs. Suppression complète et immédiate de toutes vos données personnelles.',
  keywords: 'suppression données, RGPD, vie privée, données personnelles, AskTheDocs',
  openGraph: {
    title: 'Suppression de Données | AskTheDocs',
    description: 'Comment supprimer définitivement vos données AskTheDocs.',
    url: 'https://askthedocs.app/data-deletion',
  },
}

export default function DataDeletion() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Suppression de Données</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supprimez définitivement toutes vos données AskTheDocs en quelques secondes.
              Simple, immédiat et complet.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Suppression garantie à 100%
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Puisque AskTheDocs stocke tout localement sur votre téléphone, la suppression
                  de l'application supprime automatiquement et définitivement toutes vos données.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Suppression iOS */}
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl">📱</div>
                <h3 className="text-xl font-semibold">iPhone / iPad</h3>
              </div>

              <ol className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                  <span>Appuyez longuement sur l'icône AskTheDocs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                  <span>Sélectionnez "Supprimer l'app" ou "Delete App"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                  <span>Confirmez la suppression</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Note :</strong> Cette action supprime également vos achats intégrés (IAP).
                  Vous pourrez les récupérer en réinstallant l'app plus tard.
                </p>
              </div>
            </div>

            {/* Suppression Android */}
            <div className="bg-white dark:bg-gray-900 border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-2xl">🤖</div>
                <h3 className="text-xl font-semibold">Android</h3>
              </div>

              <ol className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">1</span>
                  <span>Allez dans Paramètres → Applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">2</span>
                  <span>Recherchez et sélectionnez "AskTheDocs"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">3</span>
                  <span>Appuyez sur "Désinstaller" ou "Supprimer"</span>
                </li>
              </ol>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  <strong>Alternative :</strong> Appuyez longuement sur l'icône dans le menu principal
                  et glissez vers "Désinstaller".
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
              📋 Ce qui est supprimé
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Tous vos documents uploadés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Vos conversations et questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Les réponses générées par l'IA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Vos préférences utilisateur</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Historique des recherches</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Modèles IA téléchargés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Cache et données temporaires</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Statut Premium (récupérable)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
              ⚠️ Suppression irréversible
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
              Cette action est <strong>définitive et irréversible</strong>. Une fois l'application
              supprimée, il n'y a aucun moyen de récupérer vos données.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <p className="text-xs">
                <strong>Conseil :</strong> Si vous souhaitez seulement tester l'app ou changer d'appareil,
                exportez d'abord vos documents importants. L'app ne permet pas l'export actuellement,
                mais vous pouvez sauvegarder vos documents originaux séparément.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Besoin d'aide ?</h3>
            <p className="text-muted-foreground mb-6">
              Si vous rencontrez des problèmes ou avez des questions :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <span>Contactez-nous</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center space-x-2 border border-input bg-background px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                <span>Politique de confidentialité</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="border-t pt-8 mt-12">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                Cette page respecte les exigences RGPD pour la suppression de données.
              </p>
              <p>
                Dernière mise à jour : Décembre 2024
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}