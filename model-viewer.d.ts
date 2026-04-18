// Type declarations for @google/model-viewer web component
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string
        alt?: string
        'auto-rotate'?: boolean | string
        'auto-rotate-delay'?: string | number
        'rotation-per-second'?: string
        'camera-controls'?: boolean | string
        'disable-zoom'?: boolean | string
        'shadow-intensity'?: string | number
        exposure?: string | number
        poster?: string
        style?: React.CSSProperties
        id?: string
      },
      HTMLElement
    >
  }
}
