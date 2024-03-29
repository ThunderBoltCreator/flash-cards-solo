import type { Ref, SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12.7 13.3H3.3a.7.7 0 0 0 0 1.4h9.4a.7.7 0 1 0 0-1.4ZM3.3 12l2.9-.3c.3 0 .6-.1.8-.3l6-6a1.3 1.3 0 0 0 0-1.8l-2-1.9a1.3 1.3 0 0 0-1.8 0l-6 6c-.2.2-.3.5-.3.8l-.3 2.8a.7.7 0 0 0 .2.5.7.7 0 0 0 .4.2Zm6.9-9.3L12 4.5l-1.3 1.3L8.9 4l1.3-1.3Zm-6 6L8 4.8l1.8 1.8-3.7 3.7-2 .2.1-2Z'
      }
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export default Memo
