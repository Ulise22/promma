import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function LeyendasLayout({
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
