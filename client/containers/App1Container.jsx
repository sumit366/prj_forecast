import React from "react"

import Headline from "../components/Headline"

export default class App1Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Sample App! Aniket! Something Fancy! newww</Headline>
          </div>
        </div>
      </div>
    )
  }
}