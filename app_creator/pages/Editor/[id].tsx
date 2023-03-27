import Page from '@/components/Page'
import { useRouter } from 'next/router'

export default function Edit()
{
  const router = useRouter()
  const { id } = router.query

  return (
    <Page>
      <h1>Editar</h1>
      <a href="/Editor">Voltar</a>
      {/* Editar */}
      <a href="/Editor/new">Novo</a>
    </Page>
  )
}