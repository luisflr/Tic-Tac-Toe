import { ReactNode } from 'react'

export interface ButtonProps {
  wrapperClassName: string
  children?: ReactNode
  label?: string
}

export interface HeaderProps {
  wrapperClassName: string
}

export interface ScoreSectionProps {
  wrapperClassName: string
  playerLabel: string
  scoreLabel: string
}