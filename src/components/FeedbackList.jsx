import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"

function FeedbackList ({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    } 
    console.log(feedback) 
  return (
    <div className="feedback-list ">
        {feedback.map((item) => ( 
            <FeedbackItem key = {item.id} item = {item} />
        ))}  
    </div> 
  )
}

FeedbackList.propTypes = {
    FeedbackList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,

        })
    )
}

export default FeedbackList
