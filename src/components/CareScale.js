import Sun from '../../../oc-react-app/src/assets/sun.svg'
import Water from '../../../oc-react-app/src/assets/water.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon'/>
        ) : (
            <img src={Water} alt='water-icon'/>
        )

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale
