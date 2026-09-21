interface FooterProps {
  t: (key: string) => string
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer>
      <p>{t('footer.text')}</p>
    </footer>
  )
}