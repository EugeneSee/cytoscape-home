import { useEffect, useState } from 'react'
import { Marker } from "react-mark.js"

import { LoadingMessage } from '@/components/base/Loading'

const BASE_TUTORIALS_URL = 'https://cytoscape.org/cytoscape-tutorials/protocols/enrichmentmap-pipeline/#'

export const TutorialsCard = ({ terms, searchEngine }) => {
  const [results, setResults] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const res = searchEngine.searchTutorials(terms.join(' '))
    setResults(res)
    setLoading(false)
  }, [terms, searchEngine])

  const createUrl = (section, parent) => {
    const path1 = parent != null && !isNaN(section) ? parent : section
    const path2 = path1 === parent ? section : null
    if (path1 != null && path2 == null) {
      return `${BASE_TUTORIALS_URL}/${path1}`
    }
    if (path1 != null && path2 != null) {
      return `${BASE_TUTORIALS_URL}/${path1}/${path2}`
    }
    return BASE_TUTORIALS_URL
  }

  return (
    <div className="w-full h-full relative p-4 lg:pl-48 md:pl-16 min-h-28 sm:min-h-40 text-left">
    {loading && (
      <LoadingMessage className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    )}
    {!loading && results && results.length > 0 && (
      <ul className="space-y-2">
      {results.map(({ section, parent, title, text, terms }, idx) => (
        <li key={idx} className="p-2 max-w-screen-md">
          <span className="font-medium">
            <a
              href={createUrl(section, parent)}
              target='_blank'
              rel='noreferrer'
              className="hover:underline hover:underline-offset-2 text-complement-500"
            >
              {title}
            </a>
          </span>
          <div className="text-sm text-gray-600">
            <Marker mark={terms} options={{ className: 'bg-inherit font-bold' }}>
              {text}
            </Marker>
          </div>
        </li>
      ))}
      </ul>
    )}
    </div>
  )
}
