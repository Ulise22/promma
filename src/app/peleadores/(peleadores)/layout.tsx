import ArticlesFooter from '@/app/components/recomendedArticles/ArticlesFooter'


export default function PeleadoresLayout({
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
