import {Link} from 'react-router-dom'
const SectionTwo = ( onAdd, showAdd) => {
    return (
        <div >
            <ul className='section'>
                <li>Toggle Color</li>
                <li>Change Text on click</li>
                <li>route to another page</li>
            </ul>
            <Link to='/components/PageTwo'>
                <button color={showAdd ? 'red' : 'green'} className='btn btn-block' Color='green' onClick={onAdd}> Next </button>
            </Link>
        </div>
    )
}

export default SectionTwo
