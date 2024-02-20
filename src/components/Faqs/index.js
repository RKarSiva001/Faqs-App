// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div>
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem faqDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
