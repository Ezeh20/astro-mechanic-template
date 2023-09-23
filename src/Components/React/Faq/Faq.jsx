import React from 'react'
import { data, constant } from './constants'
import styles from './Faq.module.scss'

const Faq = () => {
    const [current, setCurrent] = React.useState(null)

    const toggle = (idx) => {
        if (current === idx) {
            return setCurrent(null)
        }
        setCurrent(idx)
    }
    return (
        <section id='Faqs' className={`container ${styles.faq}`}>
            <div className={styles.top}>
                <p className={styles.header}>{constant.header}</p>
                <p className={styles.subtext}>{constant.subtext}</p>
            </div>
            <div className={styles.bottom}>
                {
                    data.map((itm, idx) => {
                        const { id, question, ans } = itm
                        return (
                            <div key={id} className={styles.single}
                                onClick={() => toggle(idx)}
                            >
                                <div className={styles.questionContainer}>
                                    <p className={styles.question}>{question}</p>
                                    <i className={`ri-arrow-down-s-line ${current === idx ? `${styles.icon} ${styles.iconAlt}`
                                        : `${styles.icon}`}`}></i>
                                </div>
                                <p className={current === idx
                                    ? `${styles.ans} ${styles.ansAlt}`
                                    : `${styles.ans}`}>{ans}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Faq