import { ChartNoAxesCombined, Circle, CircleCheckBig, Clock, Inbox, MessagesSquare, Zap } from 'lucide-react'

// Explicit map keeps the bundle small (no wildcard import of the icon set).
const ICONS = { ChartNoAxesCombined, CircleCheckBig, Clock, Inbox, MessagesSquare, Zap }

/** Resolves an icon by name so data files stay plain objects. */
export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] ?? Circle
  return <Cmp {...props} />
}
