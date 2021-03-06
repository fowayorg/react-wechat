/**
 * 
 *
 * 
 * @Author : Richard <xiaowei.hsueh@gmail.com> (https://www.gistop.com)
 * @Link   : https://www.gistop.com
 * @Date   : 2018-6-10 17:03:15
 */

import React from 'react';
import { connect } from 'dva';
import { Badge, List, WhiteSpace } from 'antd-mobile';
import { SetGroup } from '../Group/index';
import CustomIcon from '../CustomIcon';
import ImageWallet from '../../images/wallet.png';
import ImageFavorite from '../../images/abk.png';
import ImageSettings from '../../images/setting.png';
import ImageAlbum from '../../images/album.png';
import ImageExpression from '../../images/expression.png';
import ImageCard from '../../images/aoh.png';

import './index.less';

const {Item } = List;
const { Brief } = Item;

const Component = ({ userName, nick, thumb, history }) => {
  return (<div>
    <WhiteSpace size="lg" />
    <List
    >
      <Item
        thumb={<img alt="" src={thumb} style={{ width: '50px', height: '50px'}} />}
        extra={<CustomIcon size="lg" type="qrcode" />}
        styleName="item"
      >
        {nick}
        <Brief>微信号:{userName}</Brief>
      </Item>
    </List>
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageWallet} alt="Wallet" />,
          text: '钱包',
          pathname: '/settings/wallet'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageFavorite} alt="Favorite" />,
          text: '收藏',
          pathname: '/settings/favorite'
        },
        {
          thumb: <img src={ImageAlbum} alt="Album" />,
          text: '相册',
          pathname: '/settings/album'
        },
        {
          thumb: <img src={ImageCard} alt="Card" />,
          text: '卡包',
          pathname: '/settings/cards'
        },
        {
          thumb: <img src={ImageExpression} alt="Expression" />,
          text: '表情',
          pathname: '/settings/expression'
        }
      ]}
    />
    <WhiteSpace size="lg" />
    <SetGroup
      history={history}
      settings={[
        {
          thumb: <img src={ImageSettings} alt="Setting" />,
          text: <div>设置<Badge text="New" className="ml-m" /></div>,
          pathname: '/my/settings'
        }
      ]}
    />
  </div>);
};

export default connect((state) => state.wechat.info)(Component);
