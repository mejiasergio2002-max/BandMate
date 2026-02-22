'use client'

import { useRouter } from 'next/navigation'
import LeftSidebar from '../components/sidebar/LeftSidebar'
import { BM, glassCard, pageWrap, glowBg, btnPrimary, btnDark, btnGhost } from '../components/ui/theme'

export default function WalletPage() {
  const router = useRouter()

  const balance = 128.45

  return (
    <div style={{ ...pageWrap, display: 'flex' }}>
      <div style={glowBg} />

      <LeftSidebar />

      <main style={{ flex: 1, padding: 28, position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <button onClick={() => router.push('/feed')} style={btnGhost}>
            ← Home
          </button>

          <div style={{ height: 14 }} />

          <div style={{ ...glassCard, padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 950 }}>My Wallet</div>
                <div style={{ fontSize: 13, color: BM.subtext, marginTop: 6 }}>
                  Top up to tip more, withdraw earnings anytime.
                </div>
              </div>

              <div style={{ fontSize: 12, color: BM.muted }}>BandMate</div>
            </div>

            <div style={{ marginTop: 18, padding: 18, borderRadius: 16, background: BM.panel2, border: `1px solid ${BM.border}` }}>
              <div style={{ fontSize: 12, color: BM.muted, fontWeight: 800 }}>BALANCE</div>
              <div style={{ fontSize: 40, fontWeight: 1000, marginTop: 6 }}>
                ${balance.toFixed(2)}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button
                onClick={() => router.push('/wallet/topup')}
                style={{ ...btnPrimary, flex: 1 }}
              >
                Top Up
              </button>

              <button
                onClick={() => router.push('/wallet/withdraw')}
                style={{ ...btnDark, flex: 1 }}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}