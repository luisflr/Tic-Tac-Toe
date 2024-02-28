import { ReactNode } from 'react'

export interface ButtonProps {
  wrapperClassName: string
  children?: ReactNode
  label?: string
  onClick: () => void
}

export interface HeaderProps {
  wrapperClassName: string,
  turn: string
}

export interface ScoreSectionProps {
  wrapperClassName: string
  playerLabel: string
  scoreLabel: string
}

export interface TicTacFieldProps {
  typeIcon: string
  markTable: () => void
}