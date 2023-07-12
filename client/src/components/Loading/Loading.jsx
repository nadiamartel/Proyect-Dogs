import s from "./Loading.module.css";

const Loading = () => {
    return (
        <div className={s.container}>
            <div className={s.loading}>
                <span className={s.l}>L</span>
                <span className={s.o}>o</span>
                <span className={s.a}>a</span>
                <span className={s.d}>d</span>
                <span className={s.i}>i</span>
                <span className={s.n}>n</span>
                <span className={s.g}>g</span>
                <span className={s.d1}>.</span>
                <span className={s.d2}>.</span>
                <div className={s.load}>
                    <div className={s.progress}></div>
                    <div className={s.progress}></div>
                    <div className={s.progress}></div>
                    <div className={s.progress}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;