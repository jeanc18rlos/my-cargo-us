import React from 'react'

interface ContactForm {
  name: string
  email: string
  message: string
  subject: ContactSubject
  submit: string
}
interface Sub {
  subject: string
}
interface ContactSubject {
  label: string
  subjects: Array<Sub>
}
interface ContactSchedule {
  days: string
  hours: string
}
interface ContactSchedules {
  title: string
  schedules: Array<ContactSchedule>
}
interface ContactDetails {
  title: string
  location: string
  contact_number: string
  number: string
  whatsapp: string
  email: string
}
export interface ContactData {
  id: string
  title: string
  form: ContactForm
  schedule: ContactSchedules
  details: ContactDetails
}

interface ContactProps {
  data: ContactData
}

const Contact = ({
  data: { id, title, form, schedule, details }
}: ContactProps) => {
  return (
    <>
      <section className="contact-info">
        <div className="container">
          <div className="row">
            <h1>{title}</h1>
          </div>
          <br /> <br /> <br />
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="contact-details">
                    <h6>{details.title}</h6>
                    <ul className="list-unstyled info">
                      <li>
                        <span className="fas fa-map-marker-alt" />
                        <a onClick={e => e.preventDefault()}>
                          {details.location}
                        </a>
                      </li>
                      <li>
                        <span className="fas fa-envelope" />
                        <a href={`mailto::${details.email}`}>{details.email}</a>
                      </li>
                      <li>
                        <span className="fas fa-phone-alt" />
                        <a href="tel:01061245741">{details.contact_number}</a>
                      </li>
                      <li>
                        <span className="fab fa-whatsapp" />
                        <a href="tel:01061245741">{details.whatsapp}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="opening-hours">
                    <h6>{schedule.title}</h6>
                    <ul className="list-unstyled">
                      {schedule.schedules.map((schedule, index) => (
                        <li key={`${id}-schedule-${index}`}>
                          <span>{schedule.days}</span>
                          <span>{schedule.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <form className="contactForm" onSubmit={e => e.preventDefault()}>
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <input
                      className="form-control"
                      type="text"
                      name="contact-name"
                      placeholder={form.name}
                      required
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <input
                      className="form-control"
                      type="text"
                      name="contact-email"
                      placeholder={form.email}
                      required
                    />
                  </div>
                  <div className="col-12 col-lg-4">
                    <select
                      className="form-control"
                      name="sub"
                      placeholder={form.subject.label}
                      required
                    >
                      {form.subject.subjects.map((subject, subIndex) => (
                        <option
                          key={`${id}-subjects-${subIndex}`}
                          value={subject.subject}
                        >
                          {subject.subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="contact-message"
                      cols={30}
                      rows={2}
                      placeholder={form.message}
                      required
                      defaultValue={''}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      className="btn btn--primary"
                      type="submit"
                      defaultValue={form.submit}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      <section className="map map-2">
        <iframe
          className="map-gray"
          src="https://maps.google.com/maps?q=Pioneer%20Works&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
          width="600"
          height="450"
          style={{
            border: 0
          }}
        ></iframe>
      </section>
    </>
  )
}
export default Contact
