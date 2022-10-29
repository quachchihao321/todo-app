import * as React from 'react'
import styles from '../styles/modules/chart.module.scss'
import Timeline from './Timeline'

const Chart = () => (
  <div className={styles.container}>
    <h1 className={styles.heading}>Todo Timeline</h1>
    <Timeline />
  </div>
)

export default Chart
