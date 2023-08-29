import { ReactNode } from 'react'

export interface ButtonProps {
  wrapperClassName: string
  children?: ReactNode
  label?: string
}

export interface HeaderProps {
  wrapperClassName: string,
  turn: boolean
}

export interface ScoreSectionProps {
  wrapperClassName: string
  playerLabel: string
  scoreLabel: string
}