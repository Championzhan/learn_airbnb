import IconSearchBar from '@/assets/svg/icon-search-bar';
import React, { memo, useState } from 'react';
import SearchTabs from './c-cpns/search-tabs';
import { CenterWrapper } from './style';

import SearchTitles from '@/assets/data/search_titles';
import SearchSections from './c-cpns/search-sections';

import { CSSTransition } from 'react-transition-group';

const HeaderCenter = memo((props) => {
  const { isSearch, seachBarClick } = props;

  const titles = SearchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  const searchBarClickHandle = () => {
    if (seachBarClick) seachBarClick();
  };

  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} classNames="bar" timeout={250} unmountOnExit={true}>
        <div className="search-bar" onClick={(e) => searchBarClickHandle()}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} classNames="detail" timeout={250} unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
