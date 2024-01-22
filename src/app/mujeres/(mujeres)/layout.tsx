import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function MujeresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <ArticlesFooter />
    </>
  )
}
