export default function Paginator(props: PaginatorProps) {
  const maxPages = Math.round(props.listAmount / 5)
  const currentPage = props.currentPage
  const { pageStartAt, currentInternal } = CalculatePage(currentPage)

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex space-x-px text-bold m-1 py-1 text-md">
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={0}
          value={'Previous'}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={1}
          value={pageStartAt}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={2}
          value={pageStartAt}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={3}
          value={pageStartAt}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={4}
          value={pageStartAt}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={5}
          value={pageStartAt}
        />
        <PaginatorButton
          currentPage={currentPage}
          currentInternal={currentInternal}
          internal={0}
          value={'Next'}
        />
      </ul>
    </nav>
  )
}

function PaginatorButton(props: PaginatorButtonProps) {
  const { value, internal, currentInternal, currentPage } = props
  let href: number | string = value
  let display: number | string = value
  if (typeof value == 'number' && typeof internal == 'number') {
    display = value + internal
    href = display
  }

  if (value === 'Next') {
    href = currentPage + 1
  }

  if (value === 'Previous') {
    href = currentPage - 1
  }
  return (
    <li>
      <a
        href={href.toString()}
        className={`
        ${currentInternal === internal ? 'bg-yellow-400 text-gray-700' : ''}
        rounded-md flex items-center justify-center px-4 h-10
        border
        hover:bg-neutral-800 
        hover:text-white-800 
        bg-neutral-900 border-neutral-900 
        text-gray-400 hover:bg-gray-700 
        dark:hover:text-white`}
      >
        {display}
      </a>
    </li>
  )
}

function CalculatePage(page: number) {
  let accumulator = 0
  let currentInternal = page

  while (currentInternal > 5) {
    currentInternal -= 5
    accumulator++
  }

  const pageStartAt = accumulator * 5

  return { currentInternal, pageStartAt }
}

type PaginatorButtonProps = {
  value: string | number
  internal: number
  currentInternal: number
  currentPage: number
}

type PaginatorProps = {
  currentPage: number
  listAmount: number
}
