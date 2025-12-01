import { useEffect, useRef } from 'react'
import { useQuery } from "@tanstack/react-query"
import Cytoscape from 'cytoscape'

import { LoadingMessage } from '@/components/base/Loading'
import { createGeneManiaQueryOptions } from '@/app/shared/queryOptions'
import { GeneManiaLogo } from '@/components/Logos'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

import { Card } from './Card'

const createCytoscape = (id) => {
  const container = document.getElementById(id)
  const cy = new Cytoscape({
    container: container,
    styleEnabled: true,
    userZoomingEnabled: false,
    userPanningEnabled: false,
    boxSelectionEnabled: false,
    selectionType: 'single',
  })
  cy.data({ id })

  return cy
}

export const GeneManiaCard = ({ genes, organism }) => {
  const isMounted = useRef(false)
  const cyRef = useRef()

  const { data, error, isFetching } = useQuery(createGeneManiaQueryOptions(
    genes,
    organism.id,
    isMounted && genes?.length > 0 && organism?.id > 0
  ))

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
      if (cyRef.current) {
        // Make sure Cytoscape is destroyed when the component is unmounted
        cyRef.current.destroy()
        cyRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const edgeColors = [
      { code: 'coexp', color: '#d0b7d5' },
      { code: 'coloc', color: '#a0b3dc' },
      { code: 'gi', color: '#90e190' },
      { code: 'path', color: '#9bd8de' },
      { code: 'pi', color: '#eaa2a2' },
      { code: 'predict', color: '#f6c384' },
      { code: 'spd', color: '#dad4a2' },
      { code: 'spd_attr', color: '#D0D0D0' },
      { code: 'reg', color: '#D0D0D0' },
      { code: 'reg_attr', color: '#D0D0D0' },
      { code: 'user', color: '#f0ec86' },
      { code: 'other', color: '#bbbbbb' }
    ]
    if (data) {
      if (!isMounted.current) {
        // Do not attempt to create Cytoscape if the component is unmounted!
        return
      }
      // -- Create the Cytoscape instance --
      const cy = createCytoscape('genemania-cy')
      cyRef.current = cy
      // style
      cy.style().selector('node').style({
        'width': 'mapData(score, 0, 1, 20, 60)',
        'height': 'mapData(score, 0, 1, 20, 60)',
        'content': 'data(symbol)',
        'font-size': 12,
        'text-valign': 'center',
        'text-halign': 'center',
        'background-color': '#666',
        'text-outline-color': '#666',
        'text-outline-width': 1.75,
        'color': '#fff',
        'overlay-padding': 6,
      })
      cy.style().selector('node[?query]').style({
        'background-color': '#333',
        'text-outline-color': '#333',
      })
      cy.style().selector('edge').style({
        'curve-style': 'haystack',
        'haystack-radius': 0.5,
        'opacity': 0.4,
        'line-color': '#bbb',
        'width': 'mapData(weight, 0, 1, 1.5, 16)',
        'overlay-padding': 3,
      })
      edgeColors.forEach(ec => {
        cy.style().selector('edge[group="'+ ec.code +'"]').style({
          'line-color': ec.color,
        })
      })
      // nodes
      data.resultGenes.forEach(el => {
        const node = { data: {
          id: el.gene.id,
          symbol: el.gene.symbol,
          score: el.score,
          query: el.queryGene
        }}
        cy.add(node)
      })
      // edges
      let id = 0
      data.resultNetworkGroups.forEach(ng => {
        const netGroup = ng.networkGroup
        ng.resultNetworks?.forEach(rn => {
          rn.resultInteractions?.forEach(ri => {
            const source = ri.fromGene?.gene
            const target = ri.toGene?.gene
            const weight = ri.interaction?.weight
            if (source && target) {
              const edge = {
                group: 'edges',
                data: {
                  id: `e${++id}`,
                  source: source.id,
                  target: target.id,
                  weight: weight,
                  group: netGroup.code,
                },
              }
              cy.add(edge)
            }
          })
        })
      })
      // layout
      cy.layout({
        name: 'fcose',
        animate: false,
        idealEdgeLength: 40,
        nodeOverlap: 30,
        nodeRepulsion: 100000,
        padding: 10,
      }).run()
    }
  }, [genes, organism, data])

  const href = `https://genemania.org/search/${organism.name.toLowerCase().replace(' ', '-')}/${genes.join('/')}`

  return (
    <Card
      logo={<GeneManiaLogo className="h-8 w-8" />}
      title="GeneMANIA"
      url={href}
      caption={data?.resultGenes?.length === 0 ? 'No results' : `${data?.resultGenes?.length} result genes`}
      isLoading={isFetching}
      error={error}
    >
      <div className="relative w-full mt-2 ring-4 ring-black ring-opacity-5 rounded-lg">
        <div id="genemania-cy" className={`w-full h-96 ${isFetching ? 'invisible' : ''}`} />
        {isFetching && (
          <LoadingMessage className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        )}
        {error && (
          <span className="w-full flex items-start justify-center text-red-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ExclamationTriangleIcon className="w-5 h-5 mt-0.5" />
            <span className="ml-2 font-light">
              {error.message ? error.message : 'Unable to fetch network'}
            </span>
          </span>
        )}
      </div>
    </Card>
  )
}
