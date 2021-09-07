declare module "*.svg" {
  const value: any
  export default value as string
}
declare module "*.jpg" {
  const value: any
  export default value as string
}
declare module "*.png" {
  const value: any
  export default value as string
}
declare module "*.jpeg" {
  const value: any
  export default value as string
}
declare module "*.gif" {
  const value: any
  export default value as string
}
declare module "*.gql" {
  const value: any
  export default value as string
}

declare module "animated-number-react" {
  import React from "react"
  export default class AnimatedNumber extends React.Component<AnimatedNumberProps> {}
  interface AnimatedNumberProps {
    value: string | number
    duration?: number
    delay?: number
    className?: string
    easing?: string
    formatValue?: (value: number) => void
  }
}
