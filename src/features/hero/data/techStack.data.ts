export interface TechItem {
  id: string
  icon: string
  label: string
  highlight?: boolean
}

export const techStackData: TechItem[] = [
  { id: 'js',      icon: 'javascript',    label: 'JS' },
  { id: 'react',   icon: 'deployed_code', label: 'React' },
  { id: 'mongo',   icon: 'database',      label: 'Mongo' },
  { id: 'node',    icon: 'terminal',      label: 'Node' },
  { id: 'ts',      icon: 'code',          label: 'TS', highlight: true },
  { id: 'express', icon: 'api',           label: 'Express' },
]
