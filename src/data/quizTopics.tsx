import { ReactNode } from 'react'
import { ReactComponent as Animals } from '../assets/icons/rabbit-animals.svg'
import { ReactComponent as Cities } from '../assets/icons/city.svg'
import { ReactComponent as Rofl } from '../assets/icons/rofl.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Animaux',
    icon: <Animals />,
  },
  {
    title: 'Capitales',
    icon: <Cities />,
  },
  {
    title: 'Debiles',
    icon: <Rofl />,
  },
]
