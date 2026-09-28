import { Head } from '@inertiajs/react'
import { IconExternalLink } from '@tabler/icons-react'
import SettingsLayout from '~/layouts/SettingsLayout'

export default function SupportPage() {
  return (
    <SettingsLayout>
      <Head title="Support Vanguard Relay" />
      <div className="xl:pl-72 w-full">
        <main className="px-12 py-6 max-w-4xl">
          <h1 className="text-4xl font-semibold mb-4">Support the Project</h1>
          <p className="text-text-muted mb-10 text-lg">
            Vanguard Relay is 100% free and open source — no subscriptions, no paywalls, no catch.
            If you'd like to help keep the project going, here are a few ways to show your support.
          </p>

          {/* Ko-fi */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Buy Us a Coffee</h2>
            <p className="text-text-muted mb-4">
              Every contribution helps fund development, server costs, and new content packs for Vanguard Relay.
              Even a small donation goes a long way.
            </p>
            <a
              href="https://github.com/Cicada-Unit/vanguard-relay-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5E5B] hover:bg-[#e54e4b] text-white font-semibold rounded-lg transition-colors"
            >
              Support the Project
              <IconExternalLink size={18} />
            </a>
          </section>

          {/* Vanguard Relay */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-3">Vanguard Relay</h2>
            <a
              href="https://github.com/Cicada-Unit/vanguard-relay-2"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src="/vanguard-relay-banner.webp"
                alt="Vanguard Relay — Conquer Your Home Network"
                className="w-full"
              />
            </a>
            <p className="text-text-muted mb-4">
              Vanguard Relay is an open-source offline computing platform.
              Think of it as Uber for computer networking — expert help when you need it.
            </p>
            <a
              href="https://github.com/Cicada-Unit/vanguard-relay-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"
            >
              Visit Vanguard Relay on GitHub
              <IconExternalLink size={16} />
            </a>
          </section>

          {/* Other Ways to Help */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Other Ways to Help</h2>
            <ul className="space-y-2 text-text-muted">
              <li>
                <a
                  href="https://github.com/Cicada-Unit/vanguard-relay-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Star the project on GitHub
                </a>
                {' '}— it helps more people discover Vanguard Relay
              </li>
              <li>
                <a
                  href="https://github.com/Cicada-Unit/vanguard-relay-2/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Report bugs and suggest features
                </a>
                {' '}— every report makes Vanguard Relay better
              </li>
              <li>Share Vanguard Relay with someone who'd use it — word of mouth is the best marketing</li>
              <li>
                <a
                  href="https://github.com/Cicada-Unit/vanguard-relay-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Join the Discord community
                </a>
                {' '}— hang out, share your build, help other users
              </li>
            </ul>
          </section>

        </main>
      </div>
    </SettingsLayout>
  )
}
