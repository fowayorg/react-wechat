/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-6-29 11:45:20
 */

import React from 'react'
import { connect } from "dva"

import ChatVideo from '../../components/Chat/Video'

@connect()
export default class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <ChatVideo {...this.props} />
  }
}
