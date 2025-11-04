interface SpecTableProps {
  specs: Record<string, string>
}

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="border border-rule rounded-lg overflow-hidden">
      <table className="w-full">
        <tbody className="divide-y divide-rule">
          {Object.entries(specs).map(([key, value], index) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1)
            return (
              <tr
                key={key}
                className={index % 2 === 0 ? 'bg-white' : 'bg-background'}
              >
                <td className="px-4 py-3 font-sans font-semibold text-foreground w-1/3">
                  {label}
                </td>
                <td className="px-4 py-3 text-foreground">{value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
