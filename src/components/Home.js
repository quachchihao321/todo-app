import styles from '../styles/modules/home.module.scss'
function Home(){
  return(
    <>
      <div className={styles.container}>
        <div className={styles.character}></div>
        <div>
          <h1 className={styles.heading}>Thông tin sinh viên</h1>
          <div className={styles.info}>
            <h1 className={styles.name}>Quách Chí Hào</h1>
            <h2 className={styles.subheading}>44.01.104.080</h2>
            <h3 className={styles.gmail}>4401104080@student.hcmup.edu.vn</h3>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;