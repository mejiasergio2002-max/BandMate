export const BM = {
  bg: '#07070A',
  panel: 'rgba(255,255,255,0.06)',
  panel2: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.10)',
  border2: 'rgba(255,255,255,0.14)',
  text: '#FFFFFF',
  subtext: 'rgba(255,255,255,0.72)',
  muted: 'rgba(255,255,255,0.55)',
  neon: '#7C5CFF',
  neon2: '#00E5FF',
  danger: '#FF2D2D',
  good: '#00D084',
  shadow: '0 18px 60px rgba(0,0,0,0.55)',
}

export const glassCard = {
  background: BM.panel,
  border: `1px solid ${BM.border}`,
  borderRadius: 18,
  boxShadow: BM.shadow,
}

export const pageWrap = {
  minHeight: '100vh',
  background: BM.bg,
  color: BM.text,
  fontFamily: 'system-ui, -apple-system',
  position: 'relative' as const,
}

export const glowBg = {
  position: 'fixed' as const,
  inset: 0,
  pointerEvents: 'none' as const,
  background:
    'radial-gradient(900px 500px at 20% 10%, rgba(124,92,255,0.28), transparent 60%), radial-gradient(900px 500px at 85% 15%, rgba(0,229,255,0.22), transparent 60%), radial-gradient(900px 500px at 50% 95%, rgba(255,45,45,0.10), transparent 60%)',
  zIndex: 0,
}

export const btnPrimary = {
  padding: '12px 14px',
  borderRadius: 12,
  border: `1px solid ${BM.border2}`,
  background:
    'linear-gradient(135deg, rgba(124,92,255,0.95), rgba(0,229,255,0.65))',
  color: '#0A0A0F',
  fontWeight: 900,
  cursor: 'pointer',
}

export const btnDark = {
  padding: '12px 14px',
  borderRadius: 12,
  border: `1px solid ${BM.border2}`,
  background: 'rgba(255,255,255,0.06)',
  color: BM.text,
  fontWeight: 800,
  cursor: 'pointer',
}

export const btnGhost = {
  padding: '10px 12px',
  borderRadius: 999,
  border: `1px solid ${BM.border}`,
  background: 'rgba(255,255,255,0.04)',
  color: BM.text,
  fontWeight: 700,
  cursor: 'pointer',
}