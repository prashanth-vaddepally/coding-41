// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const aboutContent = event => {
        onToggleShowContent(event.target)
      }
      const aboutLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target)
      }
      const aboutRightNavbar = event => {
        onToggleShowRightNavbar(event.target)
      }

      return (
        <div className="configuration-box">
          <h1>Layout</h1>
          <div className="down-box">
            <div>
              <input type="checkbox" id="first-box" onClick={aboutContent} />
              <label htmlFor="first-box">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="second-box"
                onClick={aboutLeftNavbar}
              />
              <label htmlFor="second-box">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="third-box"
                onClick={aboutRightNavbar}
              />
              <label htmlFor="third-box">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
