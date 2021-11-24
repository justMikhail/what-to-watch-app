import {useEffect, useState} from 'react';
import {TabList, Tabs, Tab, TabPanel} from 'react-tabs';
import Overview from './overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {FilmType} from '../../types/film-type';

type FilmTabsProps = {
  film: FilmType,
}

function FilmTabs(props: FilmTabsProps): JSX.Element {
  const [tabIndex, setTabIndex] = useState(0);
  const { film } = props;

  useEffect(() => setTabIndex(0), [props.film]);

  const onTabSelect = (index: number) => {
    setTabIndex(index);
  };

  return (
    <div className="film-card__desc">
      <Tabs
        selectedTabClassName={'film-nav__item--active'}
        selectedIndex={tabIndex}
        onSelect={onTabSelect}
      >
        <nav className="film-card__nav">
          <TabList className="film-nav__list">
            <Tab className=" film-nav__item">
              <span className="film-nav__link">Overview</span>
            </Tab>
            <Tab className="film-nav__item">
              <span className="film-nav__link">Details</span>
            </Tab>
            <Tab className="film-nav__item">
              <span className="film-nav__link">Reviews</span>
            </Tab>
          </TabList>
        </nav>
        <TabPanel>
          <Overview film={film}/>
        </TabPanel>
        <TabPanel>
          <Details film={film}/>
        </TabPanel>
        <TabPanel>
          <Reviews filmId={film.id}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default FilmTabs;
