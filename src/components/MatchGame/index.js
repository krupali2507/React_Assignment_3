import {Component} from 'react'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'
import './index.css'

class MatchGame extends Component {
  renderHeader = () => (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </div>
  )

  renderTabView = () => {
    const {tabsList, activeTabId, onChangeTab} = this.props

    return (
      <ul className="tabs-option-container">
        {tabsList.map(eachTab => (
          <TabItem
            tabDetail={eachTab}
            key={eachTab.tabId}
            isActive={activeTabId === eachTab.tabId}
            onChangeTab={onChangeTab}
          />
        ))}
      </ul>
    )
  }

  renderImagesView = () => {
    const {activeTabImageList} = this.props

    return (
      <ul className="images-container">
        {activeTabImageList.map(eachImage => (
          <ImageItem ImageDetail={eachImage} key={eachImage.id} />
        ))}
      </ul>
    )
  }

  renderRandomImage = () => {
    const {imagesList} = this.props
    const randomNumber = Math.ceil(Math.random() * imagesList.length)
    const randomImage = imagesList[randomNumber].imageUrl

    return (
      <div>
        <img src={randomImage} alt="match" />
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        {this.renderHeader()}
        <div className="main-container">
          {this.renderRandomImage()}
          {this.renderTabView()}
          {this.renderImagesView()}
        </div>
      </div>
    )
  }
}

export default MatchGame
