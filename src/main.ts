import './styles/main.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
