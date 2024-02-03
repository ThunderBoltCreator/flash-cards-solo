import type { Ref, SVGProps } from 'react'
import { forwardRef, memo } from 'react'

const ProfileIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M8 7.334a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Zm0-4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667Zm0 5.334a4.667 4.667 0 0 0-4.667 4.666.667.667 0 0 0 1.334 0 3.334 3.334 0 0 1 6.666 0 .667.667 0 0 0 1.334 0A4.667 4.667 0 0 0 8 8.668Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 .001h16v16H0z'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(ProfileIcon)
const Memo = memo(ForwardRef)

export default Memo
