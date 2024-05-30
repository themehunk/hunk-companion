import { createRoot, render, createElement,useState,useEffect } from '@wordpress/element';
import { Flex, FlexBlock, FlexItem,Button } from '@wordpress/components';
import { Icon, arrowRight,chevronLeftSmall, color } from '@wordpress/icons';
import { Logo, Upgrade } from '../aisb';
import { __ } from '@wordpress/i18n';
import Header from './header';
import BuilderIcon from './buildericon';
import AiBuilder from './aibuilder';

export default function dashboard(props){

  const [activeTab, setActiveTab] = useState('si');

  const [ builder, setBuilder ] = useState(null);

  const builderHide = (builder_rs) => {
    setBuilder(builder_rs);
  }
  const handleClick = (active,url='')=>{
    setActiveTab(active);
    window.location.href = AISB.baseurl+'wp-admin/themes.php?page=th_shop_mania_thunk_started'+url;
  }

  const btnStyle= { color:"#fff", 
  background:"var(--aisb-bg-color)" 
}

return(<div className='aisb-dashboard'> 
<div className='aisb-header-wrap'>
<Flex className="aisb-dashboard-header" direction={[
    'column',
    'row'
  ]}>
<FlexBlock className='aisb-logo'>
<Logo/>
<h2><a href='https://themehunk.com'>{__('ThemeHunk', 'hunk-companion')} </a></h2>
</FlexBlock>

<FlexBlock className='th-menu-wrap'>
<div className={`th-menu-item ${activeTab==='w' && 'active'}`} onClick={()=>handleClick('w','')}>{__('Welcome', 'hunk-companion')}</div>
<div className={`th-menu-item ${activeTab==='si' && 'active'}`}>{__('Import Sites', 'hunk-companion')}</div>
</FlexBlock>

<FlexItem>
<div className="header-text">
                <Upgrade styles = { btnStyle } version={false} />
            </div>
</FlexItem>
</Flex>
</div>

<div class="th-content">
  <div class="th-conatiner">


  <div className='aisb-left-content'>
  <h3>    Build Your Website</h3>

  <a href={window.location.href+'&template=step'}>
  <h2 className='create-website'>
  <img src={AISB.pluginpath+'admin/assets/svg/create-site.svg'} />
    Create My Website
  </h2></a>
  </div>

  <div className='aisb-left-content'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/buuvC61uD9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>
</div>


</div>);
}