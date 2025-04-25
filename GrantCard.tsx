export default function GrantCard({ grant }: { grant: any }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{grant.recipient}</h2>
      <p><strong>Amount:</strong> ${grant.amount?.toLocaleString()}</p>
      <p><strong>Year:</strong> {grant.year}</p>
      <p><strong>Description:</strong> {grant.description}</p>
    </div>
  )
}