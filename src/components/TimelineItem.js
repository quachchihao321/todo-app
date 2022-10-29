import { format } from 'date-fns'
import styles from '../styles/modules/timelineItem.module.scss'
function TimelineItem({ data }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>
        <span className={styles.tag} style={{ background: data.status === 'complete' ? '#16a34a' : 'deeppink' }}>
          {data.status === 'complete' ? 'Đã hoàn tất' : 'Chưa hoàn tất'}
        </span>
        <time>{format(new Date(data.time), 'p, dd/MM/yyyy')}</time>
        <p>{data.title}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        <span className={styles.circle} />
      </div>
    </div>
  )
}
export default TimelineItem
