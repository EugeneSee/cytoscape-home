import { Button } from '@/components/base/Button'
import { HoverPopover } from '@/components/base/HoverPopover'
import { MagnifyingGlassIcon, ShareIcon, PlayIcon, ArrowsRightLeftIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, CpuChipIcon, CubeTransparentIcon } from '@heroicons/react/20/solid'


const genesFeatures = [
  {
    name: 'Find gene function',
    description: 'Find out more information about gene function for one or more genes.',
    icon: MagnifyingGlassIcon,
    tool: 'GeneMANIA',
    toolLink: 'https://genemania.org',
    tutorialLink: 'https://wikipedia.org'
  },
  { 
    name: 'Run pathway enrichment analysis', 
    description: 'Run pathway enrichment analysis on genomics data or a gene list.',
    icon: PlayIcon,
    tool: 'EnrichmentMap',
    toolLink: 'https://enrichmentmap.org',
    tutorialLink: 'https://www.pathwaycommons.org/guide/workflows/rna_seq_to_enrichment_map/'
  },
  {
    name: 'Get a network',
    description: 'Search for published networks from researchers all over the world.',
    icon: ShareIcon,
    tool: 'NDEx',
    toolLink: 'https://ndexbio.org',
    tutorialLink: 'https://wikipedia.org'
  },
  {
    name: 'Predict gene regulatory networks',
    description: 'Predict gene regulatory networks controlling co-regulated genes.',
    icon: ArrowsRightLeftIcon,
    tool: 'iRegulon',
    toolLink: 'https://iregulon.org',
    tutorialLink: 'https://wikipedia.org'
  }
]

const networkFeatures = [
  {
    name: 'Visualize a network',
    description: 'Turn your network data into an editable visualization.  Drag and drop, zoom and pan, and style your network with ease.  Export to publication-quality PDFs.',
    icon: CursorArrowRaysIcon,
    tool: 'Cytoscape Web',
    toolLink: 'https://web.cytoscape.org/',
    tutorialLink: 'https://cytoscape-web.readthedocs.io/en/latest/Creating_Networks.html'
  },
  { 
    name: 'Cluster a network', 
    description: 'Run clustering analysis on your network to find modules.  Visualize the results with fitting layouts and styles.',
    icon: CubeTransparentIcon,
    tool: 'Cytoscape Web',
    toolLink: 'https://web.cytoscape.org/',
    tutorialLink: 'https://wikipedia.org'
  },
  {
    name: 'Run toplogy analysis',
    description: 'Run clustering analysis on your network to find sets of nodes with similar attributes.  Visualize the results with fitting layouts and styles.',
    icon: CpuChipIcon,
    tool: 'Cytoscape Web',
    toolLink: 'https://web.cytoscape.org/',
    tutorialLink: 'https://wikipedia.org'
  }
]

function Section({
  id,
  tagLine,
  title,
  description,
  features,
  className
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-medium text-primary-400">
              {tagLine}
            </h2>
            <p className="mt-2 text-3xl font-medium tracking-tight text-pretty text-white sm:text-4xl">
              {title}
            </p>
            <p className="mt-6 text-lg text-gray-300">
              {description}
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="text-lg font-medium text-white">
                  <feature.icon aria-hidden="true" className="absolute top-1 left-0 size-6 text-[#a3a3a3]" />
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm">{feature.description}</dd>
                <dd className="mt-2 flex items-center">
                  <a href={feature.tutorialLink} target="_blank" rel="noreferrer">
                    <Button
                      variant="solid"
                      color="gray"
                      className="!font-light !text-gray-300 hover:!text-white hover:!bg-white/20 active:!text-gray-400 active:!bg-white/10"
                    >
                      <span className="text-center">Learn more</span>
                    </Button>
                  </a>
                  {/* <HoverPopover
                    content={<span>This is where a screenshot would go.</span>}
                  >
                    <a href={feature.toolLink} target="_blank" rel="noreferrer">
                      <Button color="secondary" className="ml-1">
                        <span className="text-center font-normal underline">Or use {feature.tool}</span>
                      </Button>
                    </a>
                  </HoverPopover> */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function StartWith() {
  return (
    <div className="py-10 sm:py-16 bg-gray-900 text-gray-400">
      <Section
        id="genes"
        tagLine="Just paste your genes"
        title="Start with a gene list (1+)"
        description="With either your gene list or your genomics data, you're just a few clicks away from finding relevant information and analyses for your research."
        features={genesFeatures}
        className="border-b border-gray-600"
      />
      <Section
        id="networks"
        tagLine="Visualize and analyze with ease"
        title="Start with a network"
        description="Take your network to the next level by easily performing relevant analyses. Quickly edit and style your network to make it publication-ready."
        features={networkFeatures}
      />
    </div>
  )
}