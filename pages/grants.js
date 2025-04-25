
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Layout from '../components/Layout'
import GrantCard from '../components/GrantCard'

export default function Grants() {
  const [grants, setGrants] = useState([])

  useEffect(() => {
    const fetchGrants = async () => {
      const { data } = await supabase.from('grants').select('*').limit(20)
      setGrants(data || [])
    }
    fetchGrants()
  }, [])

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Latest Grants</h1>
        <div className="grid gap-4">
          {grants.map(grant => (
            <GrantCard key={grant.id} grant={grant} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
