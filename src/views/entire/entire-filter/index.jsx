import React, { memo, useState } from 'react';
import { FilterWrapper } from './style';
import filterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  const itemClickHandle = (item) => {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      // 删除元素
      newItems.splice(newItems.indexOf(item), 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  };

  return (
    <FilterWrapper>
      {filterData.map((item) => {
        return (
          <div
            className={classNames('item', { active: selectItems.includes(item) })}
            key={item}
            onClick={(e) => itemClickHandle(item)}
          >
            {item}
          </div>
        );
      })}
    </FilterWrapper>
  );
});

export default EntireFilter;
