// Write your code here.
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    showAnswer: false,
  }

  onClickQuestion = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {showAnswer} = this.state
    const {questionText, answerText} = faqDetails

    const imgUrl = !showAnswer
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altText = !showAnswer ? 'plus' : 'minus'

    return (
      <li>
        <h1>{questionText}</h1>
        <button type="button" onClick={this.onClickQuestion}>
          <img src={imgUrl} alt={altText} />
        </button>
        <p>{showAnswer && answerText}</p>
      </li>
    )
  }
}

export default FaqItem
