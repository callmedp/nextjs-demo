import { consoleLog } from 'utils/utilities';
import styles from 'components/experiment/experiment.module.css'

const Experiment = (props) => {
    consoleLog("Entered Experiment")

    consoleLog("props", props)

    return (
        <div className={ styles.container }>
            <p>This is the next app</p>
        </div>
    )
}

// export async function getStaticProps(context) {
//     consoleLog("static props context", context)
//     return {
//         props: {
//             content: 'SSG'
//         }
//     }
// }

export async function getServerSideProps(context) {
    return {
        props: {
            content: 'SSR'
        }
    }
}

export default Experiment;