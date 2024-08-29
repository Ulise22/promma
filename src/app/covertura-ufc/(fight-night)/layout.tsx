import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function ArticlesLayout({
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
