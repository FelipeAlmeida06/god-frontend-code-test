import styles from "../../public/css/components/paginationMobile.module.css"

interface PaginationMobileProps {
    total: number,
    activeIndex: number,
    onClick: (i: number) => void;     // retorna void (vazio)
}

export default function PaginationMobile({total, onClick, activeIndex}: PaginationMobileProps) {
    return (
        <div className={styles.btnWrapper}>
            {Array.from({length: total}).map((element, i) => (
                <button 
                    className={`${styles.btn} ${i === activeIndex ? styles.active : ""}`}
                    key={i} 
                    onClick={() => onClick(i)}>
                </button>
            ))}
        </div>
    )
}