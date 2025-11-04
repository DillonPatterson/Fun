interface SubScoresProps {
  scores: Record<string, number>
  maxScore?: number
}

export default function SubScoreBars({ scores, maxScore = 5 }: SubScoresProps) {
  return (
    <div className="space-y-4">
      {Object.entries(scores).map(([category, score]) => {
        const percentage = (score / maxScore) * 100
        const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1)

        return (
          <div key={category} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-sans font-medium text-foreground">
                {categoryLabel}
              </span>
              <span className="text-sm font-sans font-semibold text-foreground">
                {score.toFixed(1)}
              </span>
            </div>
            <div className="h-2 bg-rule rounded-full overflow-hidden">
              <div
                className="h-full bg-fitness rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
