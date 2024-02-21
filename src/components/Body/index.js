// Write your code here
import ConfigurationContext from '../../ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="three-boxes">
          {showRightNavbar ? (
            <div className="left-box">
              <h1 className="left-bar-heading">Left Navbar Menu</h1>
              <h2>Item 1</h2>
              <h3>Item 2</h3>
              <h4>Item 3</h4>
              <h5>Item 4</h5>
              <h6>Item 5</h6>
            </div>
          ) : (
            'none'
          )}

          {showContent ? (
            <div className="content-box">
              <h1 className="content-heading">Content</h1>
              <p>
                Loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            'none'
          )}

          {showLeftNavbar ? (
            <div className="right-box">
              <h1 className="right-bar-heading">Right Navbar</h1>
              <div className="ad-box">Ad 1</div>
              <div className="ad-box">Ad 2</div>
            </div>
          ) : (
            'none'
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
