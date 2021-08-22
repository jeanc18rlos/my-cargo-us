import { navigate } from 'gatsby'
import React from 'react'

interface Shortcut {
  icon: string
  title: string
  link: string
  label: string
}

export interface ShortcutData {
  shortcuts: Array<Shortcut>
  id: string
}

interface ShortcutProps {
  data: ShortcutData
}

const Shortcuts = (props: ShortcutProps) => {
  const {
    data: { id, shortcuts }
  } = props
  return (
    <section className="services-bar" id="servicesBar">
      <div className="container">
        <div className="row no-gutters">
          {shortcuts.map((shortcut, shortcutIndex) => {
            const { icon, link, label, title } = shortcut
            return (
              <div
                key={`${id}-${shortcutIndex}`}
                className="col-12 col-md-6 col-lg-3 services-bar-card"
              >
                <i className={`thumb-icon ${icon}`} />
                <div className="thumb-body">
                  <p>{label}</p>
                  <h3>
                    <a onClick={() => navigate(link)}>{title}</a>
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Shortcuts
