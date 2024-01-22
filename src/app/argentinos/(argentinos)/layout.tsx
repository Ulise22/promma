import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function ArgentinosLayout({
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
