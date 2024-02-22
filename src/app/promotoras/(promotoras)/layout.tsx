import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function PromotorasLayout({
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
