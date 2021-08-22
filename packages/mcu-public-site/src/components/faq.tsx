import { navigate } from 'gatsby'
import React, { useState } from 'react'

interface FaqLink {
  link: string
  label: string
}
interface FaqContact {
  title: string
  content: string
  link: string
  label: string
}

interface FaqLegal {
  title: string
  links: Array<FaqLink>
}
interface Question {
  question: string
  answer: string
}
interface FaqContent {
  group: string
  questions: Array<Question>
}
export interface FaqData {
  id: string
  label: string
  contact: FaqContact
  legal: FaqLegal
  faq: Array<FaqContent>
}

interface FaqProps {
  data: FaqData
}
interface StateProps {
  currentTab: number
  activeQuestion: null | number
}
const Faq = ({ data: { id, label, contact, legal, faq } }: FaqProps) => {
  const initialState: StateProps = {
    currentTab: 0,
    activeQuestion: null
  }
  const [state, setState] = useState(initialState)
  return (
    <section className="accordion accordion-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 order-2 order-lg-0">
            <div className="sidebar sidebar-case-study">
              <div className="widget widget-categories">
                <div className="widget-title">
                  <h5>{label}</h5>
                </div>
                <div className="widget-content">
                  <ul className="list-unstyled">
                    {faq.map((group, index) => (
                      <li key={`${group.group}-${index}`}>
                        <a
                          style={
                            index === state.currentTab
                              ? {
                                  color: '#ffffff',
                                  backgroundColor: '#e11d07'
                                }
                              : {}
                          }
                          onClick={() =>
                            setState({
                              activeQuestion: null,
                              currentTab: index
                            })
                          }
                        >
                          {group.group}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="widget widget-reservation">
                <div className="widget-content">
                  <h5>{contact.title}</h5>
                  <p>{contact.content}</p>
                  <a
                    className="btn btn--white btn--inverse btn--block"
                    onClick={() => navigate(contact.link)}
                  >
                    {contact.label}
                  </a>
                </div>
              </div>
              <div className="widget widget-download">
                <div className="widget-title">
                  <h5>{legal.title}</h5>
                </div>
                <div className="widget-content">
                  <ul className="list-unstyled">
                    {legal.links.map(legal => (
                      <li key={`${id}-${legal}`}>
                        <a href={legal.link}>
                          <span>{legal.label}</span>
                          <span className="icon">pdf</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End .col-lg-4 */}
          <div className="col-12 col-lg-8">
            <div id="accordion03">
              {faq[state.currentTab].questions.map((question, index) => (
                <div
                  onClick={() => setState({ ...state, activeQuestion: index })}
                  key={`${id}-${faq[state.currentTab].group}-${index}`}
                  className={`card ${
                    state.activeQuestion === index ? 'active-acc' : ''
                  }`}
                >
                  <div className="card-heading">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion03"
                      onClick={e => e.preventDefault()}
                    >
                      {question.question}
                    </a>
                  </div>
                  <div
                    className={`collapse ${
                      state.activeQuestion === index ? 'show' : ''
                    }`}
                    id="collapse01-1"
                    data-parent="#accordion03"
                  >
                    <div className="card-body">{question.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Faq
