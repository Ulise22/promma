import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function CampeonesLayout({
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
