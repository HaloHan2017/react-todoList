import React from 'react'
import {Link} from 'react-router-dom'
import {
    CheckCircleTwoTone,
    createFromIconfontCN,
    HeartTwoTone,
    HomeOutlined,
    LoadingOutlined,
    SettingFilled,
    SmileOutlined,
    SmileTwoTone,
    SyncOutlined
} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
    ],
});

const Menu = () => (
    <div className="site-card-border-less-wrapper icons-list">
        <SmileTwoTone/>
        <HeartTwoTone twoToneColor="#eb2f96"/>
        <CheckCircleTwoTone twoToneColor="#52c41a"/>
        <br/>
        <HomeOutlined/>
        <SettingFilled/>
        <SmileOutlined/>
        <SyncOutlined spin/>
        <SmileOutlined rotate={180}/>
        <LoadingOutlined/>
        <br/>
        <IconFont type="icon-javascript" />
        <IconFont type="icon-java" />
        <IconFont type="icon-shoppingcart" />
        <IconFont type="icon-python" />
        <br/>
        <Link to='/'>TODO page</Link>
        {"  |  "}
        <Link to='/finish'>DONE page</Link>
    </div>
)

export default Menu

