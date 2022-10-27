import { useSelector } from 'react-redux';
import TimelineItem from './TimelineItem';
import styles from '../styles/modules/timeline.module.scss'

const Timeline = () =>{
  const todoList = useSelector((state) => state.todo.todoList);
  return(
    todoList.length > 0 && (
      <div className={styles.timelineContainer}>
          {todoList.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
              ))}
      </div>
    )
  )
}
export default Timeline  