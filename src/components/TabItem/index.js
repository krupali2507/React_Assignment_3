import './index.css'

const TabItem = props => {
  const {tabDetail, isActive, onChangeTab} = props
  const {tabId, displayText} = tabDetail

  const tabClassName = isActive ? 'active-tab-item' : ''

  const onClickTab = () => {
    onChangeTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-btn ${tabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
