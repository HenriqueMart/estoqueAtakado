import style from './Index.module.css'

export default function Index({title}){

    return(
        <>
            <button className={style.button}>{title}</button>
        </>
    )
}